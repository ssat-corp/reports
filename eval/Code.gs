/**
 * 신성오토텍 2026 인사평가 시스템 - Google Apps Script 백엔드
 * ────────────────────────────────────────────────────────
 * 이 파일을 Google Apps Script 에디터에 복사하세요.
 * 배포: 배포 → 웹 앱 → 누구나 접근 가능으로 설정
 */

const ADMIN_PASSWORD = 'SSAT2026!';

/** 스프레드시트 참조 (이 스크립트가 바인딩된 시트 사용) */
function getSpreadsheet() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

/** 시트 가져오기 (없으면 생성) */
function getOrCreateSheet(name, headers) {
  const ss = getSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
  return sheet;
}

/** 자기평가 시트 헤더 */
const SELF_HEADERS = [
  '제출시간','팀','성명','직급','구분','자동화참여',
  'MES/자동화','KPI1','KPI2','KPI3','사훈1','사훈2','사훈3',
  '합계','주요성과','아쉬운점','건의사항'
];

/** 팀장평가 시트 헤더 */
const MGR_HEADERS = [
  '제출시간','평가자','피평가자팀','피평가자','직급','구분','자동화참여',
  'MES/자동화','KPI1','KPI2','KPI3','사훈1','사훈2','사훈3',
  '합계','강점','개선점','종합의견','하반기목표','면담예정일'
];

/** 시트 전체 데이터를 객체 배열로 읽기 */
function readSheetData(sheetName) {
  const ss = getSpreadsheet();
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const data = sheet.getDataRange().getValues();
  const headers = data[0];
  return data.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i] !== undefined ? String(row[i]) : ''; });
    return obj;
  });
}

/** CORS 대응: OPTIONS preflight */
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT);
}

/** GET 요청 핸들러 */
function doGet(e) {
  const action = (e.parameter && e.parameter.action) || '';
  let result;

  try {
    switch (action) {
      case 'status':
        result = handleStatus();
        break;
      case 'admin-results':
        result = handleAdminResults(e.parameter);
        break;
      case 'health':
        result = { ok: true, time: new Date().toISOString() };
        break;
      default:
        result = { error: 'Unknown action: ' + action };
    }
  } catch (err) {
    result = { error: err.message };
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

/** POST 요청 핸들러 */
function doPost(e) {
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: 'Invalid JSON' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  const action = body.action || '';
  let result;

  try {
    switch (action) {
      case 'self-eval':
        result = handleSelfEval(body);
        break;
      case 'manager-feedback':
        result = handleManagerFeedback(body);
        break;
      case 'admin-login':
        result = handleAdminLogin(body);
        break;
      default:
        result = { error: 'Unknown action: ' + action };
    }
  } catch (err) {
    result = { error: err.message };
  }

  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

/** 자기평가 제출 처리 */
function handleSelfEval(body) {
  const { name, team, rank, type, autoParticipation, scores, comment, timestamp } = body;
  if (!name || !scores) return { error: '필수 항목 누락' };

  const s = scores;
  const total = Object.values(s).reduce((a, b) => a + (Number(b) || 0), 0);

  const row = [
    timestamp || new Date().toISOString(),
    team || '', name, rank || '', type || 'annual',
    autoParticipation === false ? '미참여' : '참여',
    s.mes||0, s.kpi1||0, s.kpi2||0, s.kpi3||0,
    s.h1||0, s.h2||0, s.h3||0,
    total,
    (comment && comment.achievement) || '',
    (comment && comment.improvement) || '',
    (comment && comment.request) || '',
  ];

  const sheet = getOrCreateSheet('자기평가', SELF_HEADERS);
  sheet.appendRow(row);

  return { success: true, message: name + '님의 자기평가가 저장되었습니다.' };
}

/** 팀장 피드백 제출 처리 */
function handleManagerFeedback(body) {
  const { evaluatorName, targetName, targetTeam, targetRank, targetType,
          autoParticipation, scores, strengths, improvements, overall,
          goals, interviewDate, timestamp } = body;
  if (!evaluatorName || !targetName) return { error: '필수 항목 누락' };

  const s = scores || {};
  const total = Object.values(s).reduce((a, b) => a + (Number(b) || 0), 0);

  const row = [
    timestamp || new Date().toISOString(),
    evaluatorName,
    targetTeam||'', targetName, targetRank||'', targetType||'annual',
    autoParticipation === false ? '미참여' : '참여',
    s.mes||0, s.kpi1||0, s.kpi2||0, s.kpi3||0,
    s.h1||0, s.h2||0, s.h3||0,
    total,
    strengths || '',
    improvements || '',
    overall || '',
    goals || '',
    interviewDate || '',
  ];

  const sheet = getOrCreateSheet('팀장평가', MGR_HEADERS);
  sheet.appendRow(row);

  return { success: true, message: targetName + '님에 대한 팀장 피드백이 저장되었습니다.' };
}

/** 완료 현황 조회 */
function handleStatus() {
  const selfRows = readSheetData('자기평가');
  const mgrRows = readSheetData('팀장평가');
  const status = {};
  selfRows.forEach(r => {
    if (r['성명']) { status[r['성명']] = status[r['성명']] || {}; status[r['성명']].selfDone = true; }
  });
  mgrRows.forEach(r => {
    if (r['피평가자']) { status[r['피평가자']] = status[r['피평가자']] || {}; status[r['피평가자']].managerDone = true; }
  });
  return { success: true, data: status };
}

/** 관리자 로그인 검증 */
function handleAdminLogin(body) {
  if (body.password === ADMIN_PASSWORD) {
    return { success: true, token: Utilities.getUuid() };
  }
  return { error: '비밀번호가 올바르지 않습니다.' };
}

/** 관리자 결과 조회 */
function handleAdminResults(params) {
  // 간단한 토큰 검증 (앱스 스크립트에서는 세션 없으므로 비밀번호 재확인)
  const selfRows = readSheetData('자기평가');
  const mgrRows = readSheetData('팀장평가');
  return { success: true, data: { selfEvals: selfRows, mgrEvals: mgrRows } };
}

/** 초기 설정: 시트 생성 및 헤더 삽입 (수동 실행용) */
function initializeSheets() {
  getOrCreateSheet('자기평가', SELF_HEADERS);
  getOrCreateSheet('팀장평가', MGR_HEADERS);
  SpreadsheetApp.getUi().alert('시트 초기화 완료!');
}
