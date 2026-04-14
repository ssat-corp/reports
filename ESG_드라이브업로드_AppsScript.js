/**
 * ============================================================
 * 산업안전보건 통합 백엔드 - Google Apps Script
 * ============================================================
 *
 * 기능:
 *  1. 구글 드라이브 파일 업로드 (날짜 자동 리네임)
 *  2. 드라이브 폴더 파일 목록 조회 (서류관리 매칭용)
 *  3. 구글 스프레드시트 CRUD (패트롤/TBM/교육/ESG/아차사고 등)
 *
 * [재배포 방법]
 *  1. script.google.com 에서 기존 프로젝트 열기
 *  2. 이 코드 전체로 덮어쓰기 → Ctrl+S
 *  3. 우측 상단 [배포] → [배포 관리] → 연필 아이콘(편집)
 *  4. 버전 "새 버전" 선택 → [배포]
 *  5. URL은 그대로 유지됨
 *
 *  * 최초 배포 후 initSheets() 함수를 한 번 실행 → 시트 탭 자동 생성
 * ============================================================
 */

const FOLDER_ID = '10a7V0ao6Qf-_9XeiK4Bd2NRmfAX7rgB5';
const SPREADSHEET_ID = '1652es-ahyyRlcPEN1tawQXqfk6FxZ4OxsyVPkuYfUjI';

// 시트 탭별 컬럼 정의 (id는 공통 키, 나머지는 데이터)
const SCHEMAS = {
  '패트롤':     ['id','date','site','weather','inspector','items','issues','status','photos','note','updatedAt','updatedBy'],
  'TBM':        ['id','date','team','leader','theme','attendees','content','risks','photos','note','updatedAt','updatedBy'],
  '교육':       ['id','date','category','name','target','attendees','hours','agency','cost','note','updatedAt','updatedBy'],
  'ESG체크':    ['idx','cat','name','month','done','files','memo','updatedAt','updatedBy'],
  '아차사고':   ['id','date','site','type','desc','cause','action','status','reporter','photos','updatedAt','updatedBy'],
  '지적사항':   ['id','date','site','issue','priority','assignee','due','status','resolvedAt','note','updatedAt','updatedBy'],
  '위험성평가': ['id','date','process','hazard','risk','severity','control','residual','status','note','updatedAt','updatedBy'],
  '설비점검':   ['id','date','equipment','inspector','result','issues','action','note','updatedAt','updatedBy'],
  '비표':       ['id','name','category','content','layout','updatedAt','updatedBy'],
  '서류상태':   ['docId','status','expires','note','updatedAt','updatedBy']
};

// ============================================================
// 라우팅
// ============================================================
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const action = body.action || 'upload';

    if (action === 'upload')    return jsonOut(uploadFile(body));
    if (action === 'save')      return jsonOut(saveRow(body.table, body.row));
    if (action === 'saveMany')  return jsonOut(saveMany(body.table, body.rows));
    if (action === 'delete')    return jsonOut(deleteRow(body.table, body.id));
    if (action === 'clear')     return jsonOut(clearTable(body.table));

    return jsonOut({ success:false, message:'unknown action: '+action });
  } catch (err) {
    return jsonOut({ success:false, message:'doPost error: '+err.message });
  }
}

function doGet(e) {
  try {
    const p = e.parameter || {};
    const action = p.action || 'load';
    let result;

    if (action === 'load')          result = loadTable(p.table);
    else if (action === 'loadAll')  result = loadAllTables();
    else if (action === 'listFiles')result = listDriveFiles(p.subfolder || '');
    else if (action === 'ping')     result = { success:true, ts:new Date().toISOString() };
    else result = { success:false, message:'unknown action: '+action };

    // JSONP 지원 (CORS 우회용)
    if (p.callback) {
      return ContentService
        .createTextOutput(p.callback + '(' + JSON.stringify(result) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return jsonOut(result);
  } catch (err) {
    return jsonOut({ success:false, message:'doGet error: '+err.message });
  }
}

function jsonOut(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// 시트 초기화 (최초 1회 수동 실행)
// ============================================================
function initSheets() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  Object.keys(SCHEMAS).forEach(function(name) {
    let sh = ss.getSheetByName(name);
    if (!sh) {
      sh = ss.insertSheet(name);
      Logger.log('탭 생성: ' + name);
    }
    // 헤더 기록 (이미 있으면 덮어쓰지 않음)
    const headers = SCHEMAS[name];
    const first = sh.getRange(1,1,1,headers.length).getValues()[0];
    const isEmpty = first.every(function(v){ return v === '' || v === null; });
    if (isEmpty) {
      sh.getRange(1,1,1,headers.length).setValues([headers]);
      sh.getRange(1,1,1,headers.length).setFontWeight('bold').setBackground('#1e5096').setFontColor('#ffffff');
      sh.setFrozenRows(1);
    }
  });
  // 기본 탭(Sheet1) 삭제 시도
  const def = ss.getSheetByName('Sheet1') || ss.getSheetByName('시트1');
  if (def && ss.getSheets().length > 1) ss.deleteSheet(def);
  Logger.log('✅ 초기화 완료. 생성된 탭: ' + Object.keys(SCHEMAS).join(', '));
}

// ============================================================
// 시트 CRUD
// ============================================================
function loadTable(tableName) {
  if (!SCHEMAS[tableName]) return { success:false, message:'unknown table: '+tableName };
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName(tableName);
  if (!sh) return { success:true, rows:[] };
  const last = sh.getLastRow();
  if (last < 2) return { success:true, rows:[] };
  const headers = sh.getRange(1,1,1,SCHEMAS[tableName].length).getValues()[0];
  const data = sh.getRange(2,1,last-1,headers.length).getValues();
  const rows = data.map(function(r){
    const o = {};
    headers.forEach(function(h,i){ o[h] = r[i]; });
    return o;
  }).filter(function(r){
    // 완전히 빈 행 제외
    return Object.keys(r).some(function(k){ return r[k] !== '' && r[k] !== null; });
  });
  return { success:true, rows:rows };
}

function loadAllTables() {
  const out = {};
  Object.keys(SCHEMAS).forEach(function(t){
    const r = loadTable(t);
    out[t] = r.success ? r.rows : [];
  });
  return { success:true, tables:out };
}

function saveRow(tableName, row) {
  if (!SCHEMAS[tableName]) return { success:false, message:'unknown table: '+tableName };
  if (!row) return { success:false, message:'row required' };
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sh = ss.getSheetByName(tableName);
  if (!sh) { initSheets(); sh = ss.getSheetByName(tableName); }

  const headers = SCHEMAS[tableName];
  const keyField = headers[0]; // id 또는 idx
  row.updatedAt = new Date().toISOString();

  // 키 존재 여부 확인
  const last = sh.getLastRow();
  const keyCol = 1;
  let targetRow = -1;
  if (last >= 2 && row[keyField] !== undefined && row[keyField] !== '') {
    const keys = sh.getRange(2, keyCol, last-1, 1).getValues();
    for (var i = 0; i < keys.length; i++) {
      if (String(keys[i][0]) === String(row[keyField])) {
        targetRow = i + 2;
        break;
      }
    }
  }

  // 없으면 ID 자동 생성
  if (targetRow === -1 && (row[keyField] === undefined || row[keyField] === '')) {
    row[keyField] = 'r_' + Date.now() + '_' + Math.floor(Math.random()*1000);
  }

  const values = headers.map(function(h){
    const v = row[h];
    if (v === undefined || v === null) return '';
    if (typeof v === 'object') return JSON.stringify(v);
    return v;
  });

  if (targetRow === -1) {
    sh.appendRow(values);
  } else {
    sh.getRange(targetRow, 1, 1, headers.length).setValues([values]);
  }
  return { success:true, id: row[keyField] };
}

function saveMany(tableName, rows) {
  if (!Array.isArray(rows)) return { success:false, message:'rows must be array' };
  const results = rows.map(function(r){ return saveRow(tableName, r); });
  return { success:true, count:results.length };
}

function deleteRow(tableName, id) {
  if (!SCHEMAS[tableName]) return { success:false, message:'unknown table' };
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName(tableName);
  if (!sh) return { success:false, message:'sheet missing' };
  const last = sh.getLastRow();
  if (last < 2) return { success:true, deleted:0 };
  const keys = sh.getRange(2,1,last-1,1).getValues();
  for (var i = keys.length-1; i >= 0; i--) {
    if (String(keys[i][0]) === String(id)) {
      sh.deleteRow(i+2);
      return { success:true, deleted:1 };
    }
  }
  return { success:true, deleted:0 };
}

function clearTable(tableName) {
  if (!SCHEMAS[tableName]) return { success:false, message:'unknown table' };
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sh = ss.getSheetByName(tableName);
  if (!sh) return { success:true };
  const last = sh.getLastRow();
  if (last >= 2) sh.getRange(2,1,last-1,sh.getLastColumn()).clearContent();
  return { success:true };
}

// ============================================================
// 드라이브 파일 업로드 (날짜 리네임 옵션)
// ============================================================
function uploadFile(data) {
  const fileName = data.fileName;
  const fileData = data.fileData;
  const mimeType = data.mimeType || 'application/octet-stream';
  const subfolder = data.subfolder || '';
  const renameBase = data.renameBase || ''; // "서류명" — 있으면 "서류명_YYYY-MM-DD.ext" 로 저장
  const overwrite = data.overwrite !== false; // 기본값 true

  let folder = DriveApp.getFolderById(FOLDER_ID);
  if (subfolder) {
    const subs = folder.getFoldersByName(subfolder);
    folder = subs.hasNext() ? subs.next() : folder.createFolder(subfolder);
  }

  // 최종 파일명 결정
  let finalName = fileName;
  if (renameBase) {
    const today = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd');
    const extMatch = fileName.match(/\.([^.]+)$/);
    const ext = extMatch ? '.' + extMatch[1] : '';
    const safeBase = renameBase.replace(/[\\/:*?"<>|]/g, '_');
    finalName = safeBase + '_' + today + ext;
  }

  const blob = Utilities.newBlob(Utilities.base64Decode(fileData), mimeType, finalName);

  // renameBase가 있으면 "같은 서류명_같은날짜" 만 덮어쓰기, 그 외에는 overwrite 옵션 따름
  if (overwrite) {
    const existing = folder.getFilesByName(finalName);
    while (existing.hasNext()) existing.next().setTrashed(true);
  }

  const file = folder.createFile(blob);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

  const fileId = file.getId();
  return {
    success: true,
    fileId: fileId,
    fileName: finalName,
    fileUrl: 'https://drive.google.com/file/d/' + fileId + '/view',
    downloadUrl: 'https://drive.google.com/uc?export=download&id=' + fileId,
    previewUrl: 'https://drive.google.com/file/d/' + fileId + '/preview'
  };
}

// ============================================================
// 드라이브 파일 목록 조회 (서류관리 매칭용)
// ============================================================
function listDriveFiles(subfolder) {
  let folder = DriveApp.getFolderById(FOLDER_ID);
  if (subfolder) {
    const subs = folder.getFoldersByName(subfolder);
    if (!subs.hasNext()) return { success:true, files:[] };
    folder = subs.next();
  }
  const it = folder.getFiles();
  const files = [];
  while (it.hasNext()) {
    const f = it.next();
    const id = f.getId();
    files.push({
      id: id,
      name: f.getName(),
      size: f.getSize(),
      mimeType: f.getMimeType(),
      lastUpdated: f.getLastUpdated().toISOString(),
      fileUrl: 'https://drive.google.com/file/d/' + id + '/view',
      downloadUrl: 'https://drive.google.com/uc?export=download&id=' + id,
      previewUrl: 'https://drive.google.com/file/d/' + id + '/preview'
    });
  }
  return { success:true, files:files };
}

// ============================================================
// 테스트/관리 함수
// ============================================================
function testFolderAccess() {
  const folder = DriveApp.getFolderById(FOLDER_ID);
  Logger.log('드라이브 폴더명: ' + folder.getName());
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  Logger.log('스프레드시트명: ' + ss.getName());
  Logger.log('✅ 접근 성공');
}

function testLoadTable() {
  Logger.log(JSON.stringify(loadTable('패트롤')));
}

function testSaveRow() {
  Logger.log(JSON.stringify(saveRow('패트롤', {
    date: '2026-04-14',
    site: '테스트구역',
    inspector: '테스터',
    issues: '이상없음',
    status: '완료'
  })));
}
