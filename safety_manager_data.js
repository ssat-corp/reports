/* 안전보건관리자 페이지 데이터
 * - ORG: 조직도(트리) + 인물별 메타
 * - TASKS: 33개 안전보건 업무(주요업무정리표)
 * - DAILY_CHECKLIST: 관리감독자 일일 체크 25개 항목(5분류×5)
 */

// ──────────────────────────────────────────────────────────
// 1. 조직도 / 인물
// ──────────────────────────────────────────────────────────
const ORG_PEOPLE = {
  // 책임자
  '대표이사':            { type:'책임자',   role:'안전보건관리책임자',                 site:'전사' },
  // 협의체
  '협의체':              { type:'협의체',   role:'산업안전보건위원회 (사용자 3 + 근로자 3)', site:'전사' },
  // 외부 위탁
  '대한산업안전협회':    { type:'외부',     role:'안전관리자 (위탁)',                  site:'전사', external:true },
  '한성산업의학연구소':  { type:'외부',     role:'보건/보건의/산업위생 (위탁)',        site:'전사', external:true },
  '중앙병원':            { type:'외부',     role:'건강검진 (위탁)',                    site:'전사', external:true },
  '동방엘리베이터':      { type:'외부',     role:'리프트 정기검사 (위탁)',             site:'본사', external:true },
  '청담환경기술':        { type:'외부',     role:'환경기술인 대행',                    site:'화성공장', external:true },
  '한국소방안전원':      { type:'외부',     role:'소방관리자 대행',                    site:'전사', external:true },
  '한국전기엔지니어링':  { type:'외부',     role:'전기관리자 대행',                    site:'전사', external:true },
  // 안전보건관리담당자
  '박재걸 전무':         { type:'담당자',   role:'안전보건관리담당자',                 site:'전사' },
  '박제성 부장':         { type:'담당자',   role:'안전보건관리담당자 / 본사 소방·전기관리자', site:'본사' },
  // 관리감독자
  '김민수 부장':         { type:'관리감독자', role:'관리감독자 (사출)',                site:'본사' },
  '양춘향 과장':         { type:'관리감독자', role:'관리감독자 (도장)',                site:'화성공장' },
  '임문호 이사':         { type:'관리감독자', role:'관리감독자 (조립) / 화성공장 환경기술인·소방·전기관리자', site:'화성공장' },
  // 근로자
  '전 근로자':           { type:'근로자',   role:'전 근로자',                          site:'전사' }
};

// 트리 구조 (depth, parentKey)
const ORG_TREE = [
  { id:'대표이사', label:'대표이사', sub:'안전보건관리책임자', level:0 },
  { id:'협의체', label:'협의체 (산업안전보건위원회)', sub:'사용자 3 + 근로자 3', level:1, parent:'대표이사' },
  { id:'대한산업안전협회', label:'대한산업안전협회', sub:'안전관리자 (위탁)', level:1, parent:'대표이사', external:true },
  { id:'한성산업의학연구소', label:'한성산업의학연구소', sub:'보건/산업위생 (위탁)', level:1, parent:'대표이사', external:true },
  { id:'박재걸 전무', label:'박재걸 전무', sub:'안전보건관리담당자', level:1, parent:'대표이사' },
  { id:'박제성 부장', label:'박제성 부장', sub:'안전보건관리담당자 · 본사 소방/전기', level:1, parent:'대표이사' },
  { id:'김민수 부장', label:'김민수 부장', sub:'관리감독자 (사출)', level:2, parent:'박재걸 전무' },
  { id:'양춘향 과장', label:'양춘향 과장', sub:'관리감독자 (도장)', level:2, parent:'박재걸 전무' },
  { id:'임문호 이사', label:'임문호 이사', sub:'관리감독자 (조립) · 화성공장 환경/소방/전기', level:2, parent:'박재걸 전무' },
  { id:'전 근로자', label:'전 근로자', sub:'현장 근로자 전원', level:3, parent:'김민수 부장' }
];

// ──────────────────────────────────────────────────────────
// 2. 33개 안전보건 업무
//    period 코드: monthly / yearly / biannual(2회/년) / quarterly / semiannual(반기)
//                bimonthly(격월) / biennial(2년) / triennial(3년)
//                everyOtherDay(격일) / asNeeded(수시·해당시) / onIncident(발생시)
// ──────────────────────────────────────────────────────────
const SAFETY_TASKS = [
  // ===== 안전 =====
  { id:1,  group:'안전', name:'안전관리자 방문', vendor:'대한산업안전협회', period:'2회/월', periodCode:'biweekly',
    content:'1. 본사·화성공장 각 월 2회 방문 지도 (법규 변경, 정부 중점 점검 사항 확인)\n2. 각 공정 패트롤 후 문제 사항 사진 등이 접수되면 해당 부분 개선 조치 진행',
    document:'정기안전점검보고서', requirement:'대표이사 서명',
    assignedTo:['대한산업안전협회','박재걸 전무','박제성 부장'] },
  { id:2,  group:'안전', name:'안전보건예산', vendor:'자체시행', period:'1회/년', periodCode:'yearly', dueMonth:1,
    content:'년 초 안전보건예산표 작성 및 기안 상신',
    document:'안전보건예산표', requirement:'대표이사 서명',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:3,  group:'안전', name:'EHS계획', vendor:'자체시행', period:'1회/년', periodCode:'yearly', dueMonth:1,
    content:'년 초 EHS연간계획표 작성 → ESG 연간 계획 및 준수평가표 적용',
    document:'EHS연간계획표', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:4,  group:'안전', name:'안전검사', vendor:'자체시행', period:'해당시', periodCode:'asNeeded',
    content:'EHS계획표 작성 시 안전검사 일정표 작성 및 해당 일정 1개월 전 안점검사 신청',
    document:'안전검사결과표', requirement:'-',
    assignedTo:['박제성 부장','임문호 이사'] },
  { id:5,  group:'안전', name:'아차사고 개선', vendor:'자체시행', period:'수시', periodCode:'asNeeded',
    content:'1. 안전지킴이방을 통한 아차사고 접수\n2. 아차사고 개선자료 작성 → 위험성평가에 반영',
    document:'아차사고개선', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:6,  group:'안전', name:'아차사고 통계', vendor:'자체시행', period:'1회/년', periodCode:'yearly', dueMonth:12,
    content:'1년간 접수된 아차사고 개선자료에 대한 통계표 작성',
    document:'아차사고통계', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:7,  group:'안전', name:'위험성평가', vendor:'자체시행', period:'2회/년', periodCode:'biannual', dueMonths:[4,10],
    content:'매년 4월, 10월 위험성평가 진행',
    document:'위험성평가결과서', requirement:'대표이사 서명',
    assignedTo:['박재걸 전무','박제성 부장','김민수 부장','양춘향 과장','임문호 이사'] },
  { id:8,  group:'안전', name:'관리감독자교육', vendor:'위탁', period:'1회/년', periodCode:'yearly',
    content:'관리감독자 교육 년 1회 접수 진행',
    document:'교육수료증', requirement:'-',
    assignedTo:['김민수 부장','양춘향 과장','임문호 이사'] },
  { id:9,  group:'안전', name:'위험성평가교육', vendor:'위탁', period:'1회/년', periodCode:'yearly',
    content:'년 1회 위험성평가교육 수강',
    document:'교육수료증', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:10, group:'안전', name:'안전보건관리책임자교육', vendor:'위탁', period:'1회/2년', periodCode:'biennial',
    content:'안전보건관리책임자 보수교육 2년 1회 접수 진행',
    document:'교육수료증', requirement:'-',
    assignedTo:['대표이사'] },
  { id:11, group:'안전', name:'사업주교육', vendor:'위탁', period:'1회/년', periodCode:'yearly',
    content:'년 1회 이상 사업주 온라인 교육 수강',
    document:'교육수료증', requirement:'-',
    assignedTo:['대표이사'] },
  { id:12, group:'안전', name:'특별안전교육', vendor:'위탁/자체', period:'해당시', periodCode:'asNeeded',
    content:'특별안전교육 실시 (로봇, 컨베이어, 공기압축기, 크레인, 화학물질 등)',
    document:'교육일지', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장','김민수 부장','양춘향 과장','임문호 이사'] },
  { id:13, group:'안전', name:'근골격계질환예방', vendor:'자체시행', period:'1회/3년', periodCode:'triennial',
    content:'근골격계유해요인조사 후 결과서 작성 및 보관',
    document:'근골격계유해요인조사표, 통계표', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:14, group:'안전', name:'보호구 지급', vendor:'자체시행', period:'1회/격월', periodCode:'bimonthly',
    content:'격월 단위로 각 공정별 보호구 지급 및 대장 작성',
    document:'보호구지급대장', requirement:'-',
    assignedTo:['박제성 부장','김민수 부장','양춘향 과장','임문호 이사'] },
  { id:15, group:'안전', name:'산업안전보건위원회', vendor:'자체시행', period:'1회/월', periodCode:'monthly',
    content:'월 1회 산업안전보건위원회 실시, 안전관리자/보건관리자 위임장 확보',
    document:'산업안전위원회회의록', requirement:'대표이사 서명',
    assignedTo:['박재걸 전무','박제성 부장','협의체'] },
  { id:16, group:'안전', name:'산업재해', vendor:'자체시행', period:'발생시', periodCode:'onIncident',
    content:'3일 이상 휴업 발생 시 산업재해발생통보서 작성 및 고용노동청 신고',
    document:'산업재해조사표', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:17, group:'안전', name:'MSDS자료 정리', vendor:'자체시행', period:'1회/년', periodCode:'yearly',
    content:'MSDS자료 확인 및 갱신 여부에 따라 자료 취합, 해당 공정 배포',
    document:'화학물질통합리스트', requirement:'-',
    assignedTo:['박제성 부장','양춘향 과장'] },
  { id:18, group:'안전', name:'화학물질통계', vendor:'자체시행', period:'1회/2년', periodCode:'biennial',
    content:'화학물질통계조사표 작성 제출 (본사: 비대상, 화성공장: 대상)',
    document:'화학물질통계조사표', requirement:'-',
    assignedTo:['양춘향 과장','임문호 이사'] },
  { id:19, group:'안전', name:'법규개정사항 확인', vendor:'자체시행', period:'해당시', periodCode:'asNeeded',
    content:'법규 개정사항에 따른 해당 업무, 규정 등 재정비',
    document:'각 규정 등', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:20, group:'안전', name:'안전보건선포식', vendor:'자체시행', period:'1회/년', periodCode:'yearly', dueMonth:1,
    content:'년 초 안전보건 선포식 진행 (관리감독자 임명, 시상 등)',
    document:'각 임명서 등', requirement:'-',
    assignedTo:['대표이사','박재걸 전무'] },
  { id:21, group:'안전', name:'업무평가', vendor:'자체시행', period:'1회/년', periodCode:'yearly', dueMonth:12,
    content:'안전보건관리책임자, 관리감독자 업무 평가',
    document:'각 업무평가서', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:22, group:'안전', name:'리프트 정기검사', vendor:'동방엘리베이터', period:'1회/분기', periodCode:'quarterly',
    content:'본사 리프트(영업창고, 자재창고) 정기검사 진행',
    document:'-', requirement:'-',
    assignedTo:['박제성 부장','동방엘리베이터'] },

  // ===== 안전-도급 =====
  { id:23, group:'안전-도급', name:'협의체 작업장 순회', vendor:'자체시행', period:'격일', periodCode:'everyOtherDay',
    content:'격일로 본사·화성공장 협의체 작업장 순회점검표 작성',
    document:'작업장 순회점검표', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:24, group:'안전-도급', name:'안전보건교육 (도급)', vendor:'자체시행', period:'1회/월', periodCode:'monthly',
    content:'1. 매월 말일 차월 안전보건교육 내용 선정 후 이메일 배포\n2. 익월 초 안전보건일지 회수 후 도급사에 전달, 대표이사 서명된 복사본 수취 보관',
    document:'안전보건교육일지', requirement:'대표이사 서명 (도급사)',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:25, group:'안전-도급', name:'협의체 회의', vendor:'자체시행', period:'1회/월', periodCode:'monthly',
    content:'협의체 정기 회의록 작성',
    document:'협의체 정기 회의록', requirement:'대표이사 서명',
    assignedTo:['박재걸 전무','박제성 부장','협의체'] },
  { id:26, group:'안전-도급', name:'보호구 지급 (도급)', vendor:'자체시행', period:'1회/격월', periodCode:'bimonthly',
    content:'격월 단위로 각 공정별 보호구 지급 대장 복사본 수취 보관',
    document:'보호구지급대장', requirement:'대표이사 서명',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:27, group:'안전-도급', name:'합동 안전·보건 점검', vendor:'자체시행', period:'1회/분기', periodCode:'quarterly',
    content:'도급사업의 합동 안전, 보건 점검일지 작성',
    document:'도급사업의 합동 안전, 보건 점검일지', requirement:'대표이사 서명',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:28, group:'안전-도급', name:'적격수급업체 평가', vendor:'자체시행', period:'1회/반기', periodCode:'semiannual',
    content:'적격수급업체 평가 자료 작성 및 보관',
    document:'적격수급업체 평가표', requirement:'-',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:29, group:'안전-도급', name:'안전보건예산 (도급)', vendor:'자체시행', period:'1회/년', periodCode:'yearly', dueMonth:1,
    content:'도급사 안전보건예산표 수취 및 보관',
    document:'안전보건예산표', requirement:'대표이사 서명 (도급사)',
    assignedTo:['박재걸 전무','박제성 부장'] },
  { id:30, group:'안전-도급', name:'위험성평가 (도급)', vendor:'자체시행', period:'1회/년', periodCode:'yearly',
    content:'도급사 위험성평가서 수취 및 보관',
    document:'위험성평가결과서', requirement:'대표이사 서명 (도급사)',
    assignedTo:['박재걸 전무','박제성 부장'] },

  // ===== 보건 =====
  { id:31, group:'보건', name:'보건/보건의 방문', vendor:'한성산업의학연구소', period:'1회/월', periodCode:'monthly',
    content:'1. 본사·화성공장 격월 각 1회 방문 지도\n2. 건강 및 특수검진 결과상 유해인자 보유자 우선 상담 기록 확보',
    document:'보건관리상태보고서', requirement:'대표이사 서명',
    assignedTo:['한성산업의학연구소','박재걸 전무'] },
  { id:32, group:'보건', name:'산업위생 방문', vendor:'한성산업의학연구소', period:'1회/분기', periodCode:'quarterly',
    content:'1. 본사·화성공장 분기 각 1회 방문 지도\n2. 각 주요공정 조도, 소음(사내외 포함) 측정 자료 보관 → ESG 사항',
    document:'보건관리상태보고서', requirement:'대표이사 서명',
    assignedTo:['한성산업의학연구소','박재걸 전무'] },
  { id:33, group:'보건', name:'건강검진', vendor:'중앙병원', period:'1회/년', periodCode:'yearly', dueMonth:8,
    content:'1. 일반 및 특수검진 진행\n   1) 매년 8월 14일 이내 정기검사 진행, 검진 결과에 따라 2차 검진 진행\n   2) 야간조 검사 진행을 위해 월요일 이외 요일에 진행\n2. 특수검진 대상: 주/야간 근로자, 사출팀(금형실), 후가공팀(도장1, 도장2, 인쇄)\n3. 검진대상자 목록을 작성하여 중앙병원에 사전에 이메일 송부 (도급사 포함, 주민번호 기재)\n4. 특수검진비 견적서 확보 후 기안, 계산서는 각 도급사별 발급 요청\n5. 건강검진결과보고서에서 업무적합도 가·나 판정 이외 인원 여부 확인',
    document:'건강검진결과보고서, 사후조치결과보고서', requirement:'-',
    assignedTo:['중앙병원','박재걸 전무','박제성 부장'] }
];

// ──────────────────────────────────────────────────────────
// 3. 관리감독자 일일 체크리스트 (5분류 × 5 = 25항목)
// ──────────────────────────────────────────────────────────
const DAILY_CHECKLIST = [
  { group:'1. 작업 전 조치 및 TBM', items:[
    '당일 작업 구간의 유해·위험요인을 사전에 파악하고 대책을 수립했는가?',
    'TBM 시 작업자들에게 당일 위험 포인트와 안전 수칙을 구체적으로 전파했는가?',
    '신규 작업자 또는 특별관리대상 근로자에 대한 별도 교육 및 배치를 확인했는가?',
    '작업자들의 상태(음주, 피로도 등)를 대면으로 확인했는가?',
    '작업 시작 전 기계·기구의 방호장치(비상정지, 덮개 등) 기능 점검을 마쳤는가?'
  ]},
  { group:'2. 보호구 및 안전시설', items:[
    '작업별 특성에 맞는 보호구(안전화, 방진마스크 등)를 지급했는가?',
    '근로자가 보호구를 올바르게 착용하고 있으며, 기능 상실된 보호구는 없는가?',
    '추락 방지용 안전난간, 작업발판, 설비의 견고함을 확인했는가?',
    '위험 구역에 대한 안전보건 표지가 적정하게 부착되고 가독성이 확보되었는가?',
    '비상시 활용할 구급용구 및 소방설비(소화기 등)의 위치와 상태를 점검했는가?'
  ]},
  { group:'3. 작업 중 실시간 감독', items:[
    '근로자가 승인된 표준작업지침서(SOP) 및 안전 수칙을 준수하고 있는가?',
    '고위험 작업(화기, 밀폐, 고소 등) 시 작업허가서 내용이 준수되는가?',
    "정비·수리 시 에너지 차단장치(LOTO)와 '점검 중' 표지판이 설치되었는가?",
    '지게차, 크레인 등 양중/하역 기계와 근로자의 충돌 방지 조치가 되어있는가?',
    '작업 중 예상치 못한 위험 발견 시 즉시 작업 중지 및 대피를 유도할 준비가 됐는가?'
  ]},
  { group:'4. 위험성평가 및 참여', items:[
    '현장 근로자가 제안한 안전 개선 사항이나 아차사고 보고를 수렴했는가?',
    '수시/정기 위험성평가 결과로 도출된 감소 대책이 현장에 적용되었는가?',
    '유해화학물질 취급 시 MSDS(물질안전보건자료)가 현장에 비치 및 숙지되었는가?',
    '기계·설비의 노후화나 오작동 등 추가적인 위험 요인을 발굴했는가?',
    '안전보건 교육(정기, 특별 등) 이수 여부를 확인하고 미이수자 조치를 했는가?'
  ]},
  { group:'5. 현장 환경 및 정리 (환경 및 보건 관리)', items:[
    '통로와 계단에 적재물이 없어 근로자의 안전한 통행이 확보되었는가?',
    '바닥에 기름, 물기, 전선 등이 방치되어 전도(넘어짐) 위험은 없는가?',
    '작업장 내 조명 밝기가 충분하며 환기 설비가 정상 작동하는가?',
    '폐기물 및 위험물 보관소의 분리 배출과 보관 상태가 규정에 맞는가?',
    '비상구 및 탈출로에 장애물이 없으며 상시 개방 가능한 상태인가?'
  ]}
];

// ──────────────────────────────────────────────────────────
// 4. 다음 마감일 계산
//    period가 명시되지 않은 (수시/해당시/발생시)는 null 반환
// ──────────────────────────────────────────────────────────
function calcNextDue(task, lastDoneISO){
  const now = new Date();
  const last = lastDoneISO ? new Date(lastDoneISO) : null;
  const ymd = (d)=>d.toISOString().slice(0,10);
  const lastDayOf = (y,m)=>new Date(y, m, 0).getDate();
  const endOf = (y,m)=>{ // 해당월 말일
    return new Date(y, m-1, lastDayOf(y,m));
  };
  const Y = now.getFullYear();
  const M = now.getMonth()+1;

  switch(task.periodCode){
    case 'monthly': // 1회/월 → 이번달 말일
      return ymd(endOf(Y, M));
    case 'biweekly': // 2회/월 → 이번달 15일·말일 중 다음 도래일
      { const d15 = new Date(Y, M-1, 15);
        if(now <= d15) return ymd(d15);
        return ymd(endOf(Y, M)); }
    case 'bimonthly': // 1회/격월 → 짝수월 말일 (2,4,6,8,10,12)
      { let m = M; if(m % 2 !== 0) m += 1; if(m > 12){ return ymd(endOf(Y+1, 2)); }
        return ymd(endOf(Y, m)); }
    case 'quarterly': // 1회/분기 → 3,6,9,12월 말일
      { const qm = [3,6,9,12].find(m=>m>=M);
        if(qm) return ymd(endOf(Y, qm));
        return ymd(endOf(Y+1, 3)); }
    case 'semiannual': // 1회/반기 → 6,12월 말일
      { return ymd(endOf(Y, M<=6 ? 6 : 12)); }
    case 'biannual': // 2회/년 (위험성평가: 4,10월)
      { const ms = task.dueMonths || [4,10];
        const next = ms.find(m=>m>=M) || (ms[0]+12);
        const yy = next>12 ? Y+1 : Y;
        const mm = next>12 ? next-12 : next;
        return ymd(endOf(yy, mm)); }
    case 'yearly': // 1회/년 (특정월 있으면 그 달, 없으면 12월)
      { const dm = task.dueMonth || 12;
        if(M <= dm) return ymd(endOf(Y, dm));
        return ymd(endOf(Y+1, dm)); }
    case 'biennial': // 1회/2년
      { if(!last) return ymd(endOf(Y, 12));
        const d = new Date(last); d.setFullYear(d.getFullYear()+2);
        return ymd(d); }
    case 'triennial': // 1회/3년
      { if(!last) return ymd(endOf(Y, 12));
        const d = new Date(last); d.setFullYear(d.getFullYear()+3);
        return ymd(d); }
    case 'everyOtherDay': // 격일
      { if(!last) return ymd(now);
        const d = new Date(last); d.setDate(d.getDate()+2);
        return ymd(d); }
    default: // asNeeded / onIncident
      return null;
  }
}

// 상태 계산 (overdue / due-soon / ok / na)
function taskStatus(task, lastDoneISO){
  const due = calcNextDue(task, lastDoneISO);
  if(!due) return { state:'na', due:null, daysLeft:null };
  const now = new Date(); now.setHours(0,0,0,0);
  const d = new Date(due);
  const diff = Math.round((d - now)/86400000);
  if(diff < 0)  return { state:'overdue', due, daysLeft:diff };
  if(diff <= 7) return { state:'due-soon', due, daysLeft:diff };
  return { state:'ok', due, daysLeft:diff };
}

// 인물 → 담당 업무 ID 목록
function tasksByPerson(personId){
  return SAFETY_TASKS.filter(t => (t.assignedTo||[]).includes(personId));
}
