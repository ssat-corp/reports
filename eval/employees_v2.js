/**
 * 신성오토텍 2026 인사평가 — 직원 데이터 (연봉직)
 * ─────────────────────────────────────────────────────
 * [P0-1 리밸런싱] 수정일: 2026-04-19
 * 점수 구조 (신규):
 *   정량 45점 = KPI 3개 × 15점
 *   정성 45점 = 사훈 3개 × 15점 (각 0~5점 리커트 × 3문항)
 *   자동화·추가 10점 (직무별 추천 + 개인 선택)
 *   합계 = 100점
 * ─────────────────────────────────────────────────────
 * 평가자 가중치 (연봉직):
 *   본인 40% + 팀장 40% + 최상위자 20% (±10점 수동 조정 가능)
 * ─────────────────────────────────────────────────────
 * 조직개편 반영 (2026-04-19):
 *   이환돈: 조립팀장 → 영업팀장 (KPI·사훈 영업 맥락 재작성)
 *   양춘향: 조립팀 사원(hourly) 삭제 → 조립팀장대행(annual) 전환
 *   안성현: 영업구매실장 — 영업팀장+구매팀장 업무 총괄 (KPI 2개 영역)
 *   류항복: 퇴사 처리 (데이터 삭제)
 *   허향미: 퇴사 처리 (데이터 삭제)
 *   조경환: 개발팀 이사, evaluatorOnly:true 신규 등록
 * ─────────────────────────────────────────────────────
 * 공식 프레임:
 *   ① 더 높은 평가를 받은 직원에게 더 나은 처우를 제공하기 위한 절차
 *   ② 업무를 더 합리적으로 분배·재조정하기 위한 절차
 */

// ── 자동화·추가 항목 옵션 풀 ──────────────────────────────
const AUTO_OPTIONS = {
  A1: {name:'MES/RPA/AI 활용 신규 도입',    score:5, evidence:'스크린샷·코드·자동화 결과'},
  A2: {name:'안전/ESG 제안',                score:3, evidence:'제안서·적용 결과'},
  A3: {name:'원가절감 제안',                score:3, evidence:'절감액 추산표'},
  A4: {name:'교차학습(타 직무 OJT)',         score:2, evidence:'수료증·피드백'},
  A5: {name:'대외자격·직무교육',            score:2, evidence:'증빙 사본'},
  A6: {name:'커스텀 기여(상부 승인)',        score:3, evidence:'사전 승인서'}
};

// ── 3대 경영목표 상수 ────────────────────────────────────
const GOAL_COST = '원가';   // 원가절감
const GOAL_ORG  = '조직';   // 조직기능 향상
const GOAL_SUST = '지속';   // 지속가능 운영


const ANNUAL_EMPLOYEES = [

  /* ════════════════════════════════════════════
     경영지원팀
  ════════════════════════════════════════════ */
  {
    id:'박제성', name:'박제성', team:'경영지원팀',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'RPA·AI 기반 사무자동화 프로젝트 완료 건수',
        target:'연 6건(분기 1.5건)',
        weight:15, linkedGoal:GOAL_COST },
      { title:'경영지원 프로세스 SLA 준수율',
        target:'결재·보고 24h 내 95%',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'ESG·컴플라이언스 이슈 대응 완결률',
        target:'중대재해·환경·개인정보 100% 기한 내 종결',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'경영지원 이슈를 선제 정의하고 실행안 제시',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'코칭피드백',
        desc:'팀원 성장 피드백과 업무 위임',
        questions:[
          {q:'1:1 면담 주기·구체적 피드백 이행', max:5},
          {q:'업무 위임·권한부여 적절성', max:5},
          {q:'팀원 성장 가시적 변화', max:5},
        ],
        weight:15
      },
      h3:{
        label:'혁신지향',
        desc:'지속가능 운영을 위한 제도·프로세스 개선',
        questions:[
          {q:'신규 아이디어 제시 건수', max:5},
          {q:'파일럿·실행 여부', max:5},
          {q:'표준화·재사용 가능 산출물', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A1','A2','A3'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     경영지원팀
  ════════════════════════════════════════════ */
  {
    id:'임정인', name:'임정인', team:'경영지원팀',
    position:'차장', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'근태·급여 관리',
        target:'급여 오류 0건·근태 마감 적기율 100%·4대보험 신고 기한 준수',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'ISO·ESG 인증 관리',
        target:'ISO14001 심사 적합률·인증 갱신 적기 완료율·협력사 ESG 대응 완료율',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'인건비·보험비용 최적화',
        target:'4대보험 정산 오류 0건·환급 적기 처리율·ESG 내부화율',
        weight:15, linkedGoal:GOAL_COST },
    ],
    sahun:{
      h1:{
        label:'책임감',
        desc:'급여·신고 업무의 기한 준수와 정확성',
        questions:[
          {q:'업무 마감·체크리스트 이행률', max:5},
          {q:'이상 발생 시 즉시 보고 이행', max:5},
          {q:'결과물 완성도·정확성', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'인사·노무·ESG 법규 지식 및 실무 적용',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'정기 보고·체크리스트·마감 일관 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A5'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     회계팀
  ════════════════════════════════════════════ */
  {
    id:'황보령', name:'황보령', team:'회계팀',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'해외법인 서류·신고 이행률',
        target:'해외 법인 관련 서류 관리 및 신고 기한 준수·오류 0건',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'수불장·원가 분석 보고',
        target:'내부 수불장 기록 표준화 완성도·월별 제조원가 분석 보고서 적기 제출',
        weight:15, linkedGoal:GOAL_COST },
      { title:'금융비용 관리',
        target:'이자비용 전년 대비 감소율·금리 협상 실적·불용 유동성 수익 달성',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'원가의식',
        desc:'재무·원가 구조 전반의 비용 의식 주도',
        questions:[
          {q:'원가 구성 항목 파악·모니터링', max:5},
          {q:'낭비·로스 저감 활동 건수', max:5},
          {q:'원가절감 제안 및 실행 성과', max:5},
        ],
        weight:15
      },
      h2:{
        label:'의사결정능력',
        desc:'재무 이슈 발생 시 신속·근거 기반 판단',
        questions:[
          {q:'의사결정 적시성·기준 명확성', max:5},
          {q:'원가·리스크 데이터 기반 판단', max:5},
          {q:'결정 후 추적·결과 확인', max:5},
        ],
        weight:15
      },
      h3:{
        label:'책임감',
        desc:'회계 마감·신고 정확성과 이슈 즉시 보고',
        questions:[
          {q:'업무 마감·보고 체크리스트 이행', max:5},
          {q:'이슈 발생 시 즉시 보고 이행', max:5},
          {q:'결과물 완성도·정확성', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A5','A6'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     영업구매실
  ════════════════════════════════════════════ */
  {
    id:'안성현', name:'안성현', team:'영업구매실',
    position:'실장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'영업팀 매출목표 총괄',
        target:'영업팀 매출목표 달성률·VI 방어(고객요구 3%)·납입율(D-2) 달성',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'구매원가·공급망 관리',
        target:'구매 단가 절감(CI) 목표 달성·협력사 정시납품률·재고비용 절감률 연 10%',
        weight:15, linkedGoal:GOAL_COST },
      { title:'신규매출 확보 노력',
        target:'미개발 고객사 접촉 건수·RFQ 발굴 건수·Y+1 수주 파이프라인 달성률',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'영업·구매 전반의 이슈 선제 정의 및 조정',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'의사결정능력',
        desc:'매출·원가·납기 이슈 종합 판단',
        questions:[
          {q:'의사결정 적시성·기준 명확성', max:5},
          {q:'원가·리스크 데이터 기반 판단', max:5},
          {q:'결정 후 추적·결과 확인', max:5},
        ],
        weight:15
      },
      h3:{
        label:'혁신지향',
        desc:'영업·구매 프로세스 개선과 신사업 제안',
        questions:[
          {q:'신규 아이디어 제시 건수', max:5},
          {q:'파일럿·실행 여부', max:5},
          {q:'표준화·재사용 가능 산출물', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A1','A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     영업팀
  ════════════════════════════════════════════ */
  {
    id:'이환돈', name:'이환돈', team:'영업팀',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'신규·재수주 금액',
        target:'연 전년 대비 +8%',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'매출채권 회수율',
        target:'평균 회수기일 ≤ 60일',
        weight:15, linkedGoal:GOAL_COST },
      { title:'주요 고객 납기 준수율',
        target:'≥ 98%',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'고객 클레임·납기 이슈 선제 대응',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'의사결정능력',
        desc:'견적·할인·우선순위 의사결정',
        questions:[
          {q:'의사결정 적시성·기준 명확성', max:5},
          {q:'원가·리스크 데이터 기반 판단', max:5},
          {q:'결정 후 추적·결과 확인', max:5},
        ],
        weight:15
      },
      h3:{
        label:'품질지향',
        desc:'고객 품질 요구 대응·내부 전달',
        questions:[
          {q:'품질 기준 준수 주도 및 현장 교육', max:5},
          {q:'불량·클레임 재발 방지 체계화', max:5},
          {q:'고객 품질 요구 사내 전달 정확성', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A1','A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     영업팀
  ════════════════════════════════════════════ */
  {
    id:'김성진', name:'김성진', team:'영업팀',
    position:'부장', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'LG납입률·납품 품질',
        target:'LG전자 조달 계획 대비 납입률·납품 불량 반품 0건',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'매출마감·물류비 절감',
        target:'MES 매출 마감 적기 완료율·납품 오류 재운송 비용 0건',
        weight:15, linkedGoal:GOAL_COST },
      { title:'품질이슈 전파·재고 회전',
        target:'품질 이슈 사내 전파 속도·납품용 재고 회전율 달성',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'고객 요구사항 해석 및 사내 대응 우선순위 판단',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'LG 납입 기준·MES 운용·품질 이슈 처리 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'품질지향',
        desc:'납품 품질 기준 준수 및 이슈 전파',
        questions:[
          {q:'품질 기준 준수율·오류 건수', max:5},
          {q:'불량·오류 재발 방지 노력', max:5},
          {q:'품질 개선 아이디어 제안', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     영업팀
  ════════════════════════════════════════════ */
  {
    id:'배규호', name:'배규호', team:'영업팀',
    position:'과장', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'생산계획 배포 정확도',
        target:'거래처 서열 생산계획 배포 준수율·배포 오류 긴급 물류비 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'제품식별·재고 적정화',
        target:'영업창고 제품 식별표 관리율·과잉·부족 재고 최소화',
        weight:15, linkedGoal:GOAL_COST },
      { title:'물류비용 효율',
        target:'공박스 회수율 달성·이물 불량 0건·불필요 재배송 0건',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'생산계획·납품 지시 이해 및 적시 배포',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'협조성',
        desc:'생산팀·창고팀과의 납품 일정 사전 소통',
        questions:[
          {q:'유관부서 요청 응대율', max:5},
          {q:'팀 내 정보 공유 충실도', max:5},
          {q:'협업 과제 기여·완수도', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'일일 체크리스트·거래명세서 등록 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     영업팀
  ════════════════════════════════════════════ */
  {
    id:'신민호', name:'신민호', team:'영업팀',
    position:'대리', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'적기 납품률·오류 0건',
        target:'완제품 적기 납품률·납품 수량·품목 오류 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'납품준비 리드타임 단축',
        target:'거래처별 납품준비 적기율·리드타임 단축 실적',
        weight:15, linkedGoal:GOAL_COST },
      { title:'육안검사·반품 비용 차단',
        target:'완제품 최종 육안검사 이행률·초품 불량 사전 차단 반품비 0건',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'책임감',
        desc:'납품 체크리스트 이행 및 이상 즉시 보고',
        questions:[
          {q:'업무 마감·체크리스트 이행률', max:5},
          {q:'이상 발생 시 즉시 보고 이행', max:5},
          {q:'결과물 완성도·정확성', max:5},
        ],
        weight:15
      },
      h2:{
        label:'솔선수범',
        desc:'출하 사전 준비·동료 지원·선제 착수',
        questions:[
          {q:'자발적 업무 착수·선제 대응', max:5},
          {q:'동료 지원·교차 업무 이행', max:5},
          {q:'어려운 과제 자원 및 완수', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'근태 준수·일일 체크리스트·기한 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     영업팀
  ════════════════════════════════════════════ */
  {
    id:'김수천', name:'김수천', team:'영업팀',
    position:'대리', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'CKD 포장 품질·클레임 0건',
        target:'수출 파레트 포장 완성도·포장 불량 클레임 0건',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'창고 공간 효율',
        target:'영업창고 레이아웃 최적화·불필요 점유 공간 축소',
        weight:15, linkedGoal:GOAL_COST },
      { title:'지게차·물류 운영',
        target:'지게차 업무 효율·유지관리비 전년비 절감·작업 시간 단축',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'포장 기준·창고 운용 이해 및 적절한 처리',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'CKD 포장 기준·지게차 운용·창고 관리 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'일일 현품표 작업·체크리스트·충전 관리',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A2'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     영업팀
  ════════════════════════════════════════════ */
  {
    id:'김호수', name:'김호수', team:'영업팀',
    position:'주임', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'재고실사 정확도·과잉재고 최소화',
        target:'재고실사 오차율 최소화·과잉 재고 기준 이하 유지',
        weight:15, linkedGoal:GOAL_COST },
      { title:'출고서류 정합성·반품 0건',
        target:'출고 서류·송장 정합성·서류 오류 반품·재발송 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'창고 3정5S·공간 활용률',
        target:'3정 5S 점검 수준·창고 공간 활용률 개선',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'책임감',
        desc:'출고 체크리스트 이행 및 이상 즉시 보고',
        questions:[
          {q:'업무 마감·체크리스트 이행률', max:5},
          {q:'이상 발생 시 즉시 보고 이행', max:5},
          {q:'결과물 완성도·정확성', max:5},
        ],
        weight:15
      },
      h2:{
        label:'협조성',
        desc:'팀원 간 창고 교차 지원·재고 정보 공유',
        questions:[
          {q:'유관부서 요청 응대율', max:5},
          {q:'팀 내 정보 공유 충실도', max:5},
          {q:'협업 과제 기여·완수도', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'일일 보고·창고 정리 기한 내 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     구매팀
  ════════════════════════════════════════════ */
  {
    id:'김대수', name:'김대수', team:'구매팀',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'결품 0건·정시조달',
        target:'원부자재 결품 0건·정시 인도율(OTD) 달성',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'협력사 원가 개선',
        target:'협력사 평가 이행률·단가 절감(CI) 달성·불량 협력사 개선 건수',
        weight:15, linkedGoal:GOAL_COST },
      { title:'공급망 지속가능성',
        target:'구매 단가 절감(CD) 달성·불용재고 폐기 손실 전년비 감소',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'공급망 이슈 선제 정의·대응 방안 실행',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'의사결정능력',
        desc:'발주·협력사 선정·단가 협상 판단',
        questions:[
          {q:'의사결정 적시성·기준 명확성', max:5},
          {q:'원가·리스크 데이터 기반 판단', max:5},
          {q:'결정 후 추적·결과 확인', max:5},
        ],
        weight:15
      },
      h3:{
        label:'혁신지향',
        desc:'구매 프로세스 개선·구매 데이터 자동화 제안',
        questions:[
          {q:'신규 아이디어 제시 건수', max:5},
          {q:'파일럿·실행 여부', max:5},
          {q:'표준화·재사용 가능 산출물', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A1','A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     구매팀
  ════════════════════════════════════════════ */
  {
    id:'이성호', name:'이성호', team:'구매팀',
    position:'대리', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'정시 인도율(OTD)',
        target:'구매 자재 정시 인도율(OTD) 목표 달성',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'원재료 잔량 최소화·폐기비 절감',
        target:'원재료 잔량 전산 처리 적기율·폐기 비용 전년비 감소',
        weight:15, linkedGoal:GOAL_COST },
      { title:'구매 데이터 신뢰도·단가 모니터링',
        target:'구매 통계 DB 정확도·이상 단가 사전 보고 건수',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'발주·입고 기준 이해 및 자재 이슈 우선순위 판단',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'구매 발주·자재 관리·지게차 운용 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'일일 입출고 보고·점검 체크리스트 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     개발팀
  ════════════════════════════════════════════ */
  {
    id:'김형권', name:'김형권', team:'개발팀',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'금형 자산 실사·손상비 0건',
        target:'금형 자산 실사(QR) 이행률·손상 비용 청구 0건',
        weight:15, linkedGoal:GOAL_COST },
      { title:'도면 업로드 적기·재제작 0건',
        target:'도면 시스템 업로드 적기율·설계 오류 재제작 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'고객심사·사이클타임 원가 기여',
        target:'IATF16949 고객사 심사 대응·금형 개선 사이클타임 단축',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'금형·도면 이슈 선제 정의 및 조치',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'코칭피드백',
        desc:'개발팀원 역량 육성·업무 위임',
        questions:[
          {q:'1:1 면담 주기·구체적 피드백 이행', max:5},
          {q:'업무 위임·권한부여 적절성', max:5},
          {q:'팀원 성장 가시적 변화', max:5},
        ],
        weight:15
      },
      h3:{
        label:'혁신지향',
        desc:'금형·공정 개선 아이디어 제안 및 표준화',
        questions:[
          {q:'신규 아이디어 제시 건수', max:5},
          {q:'파일럿·실행 여부', max:5},
          {q:'표준화·재사용 가능 산출물', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A5','A6'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     개발팀  —  조경환
  ════════════════════════════════════════════ */
  {
    id:'조경환', name:'조경환', team:'개발팀',
    position:'이사', rank:'팀장',
    evaluatorOnly:true,
  },

  /* ════════════════════════════════════════════
     생산실
  ════════════════════════════════════════════ */
  {
    id:'강한철', name:'강한철', team:'생산실',
    position:'실장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'전공정 가동 효율·비가동 손실 감소',
        target:'사출·후가공·조립 전 공정 가동 효율 달성률·비가동 손실 전년비 감소',
        weight:15, linkedGoal:GOAL_COST },
      { title:'3정5S·낭비 제거',
        target:'전 공정 3정 5S 점검·개선 완료율(주 1회)·7대 낭비 개선 건수',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'원가혁신·TASK 활동 성과',
        target:'TASK 활동 원가절감 아이디어 건수·절감 금액·부서 간 이슈 중재',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'전 공정 이슈 즉시 대응 및 재발 방지',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'부하육성',
        desc:'팀장급 이하 현장 리더 역량 개발',
        questions:[
          {q:'OJT·개발 계획 수립 및 실행', max:5},
          {q:'정기 피드백 주기·구체성', max:5},
          {q:'역량 성장 가시적 성과', max:5},
        ],
        weight:15
      },
      h3:{
        label:'원가의식',
        desc:'전 공정 원가 구조 파악·낭비 제거 주도',
        questions:[
          {q:'원가 구성 항목 파악·모니터링', max:5},
          {q:'낭비·로스 저감 활동 건수', max:5},
          {q:'원가절감 제안 및 실행 성과', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A1','A2','A3'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     생산관리팀
  ════════════════════════════════════════════ */
  {
    id:'신용석', name:'신용석', team:'생산관리팀',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'생산계획 달성률·손실 감소',
        target:'생산 계획 대비 실적 달성률·비가동·재작업 손실 전년비 감소',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'과잉재고 억제·재고원가',
        target:'과잉 재고 억제율·재공품 회전율·불용재고 폐기 최소화',
        weight:15, linkedGoal:GOAL_COST },
      { title:'팀 운영·원가 보고 정확도',
        target:'월별 생산원가 보고 정확도·원가 개선 활동 건수',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'생산 계획 이탈 원인 분석 및 즉시 조치',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'코칭피드백',
        desc:'생산관리팀원 역량 개발·업무 위임',
        questions:[
          {q:'1:1 면담 주기·구체적 피드백 이행', max:5},
          {q:'업무 위임·권한부여 적절성', max:5},
          {q:'팀원 성장 가시적 변화', max:5},
        ],
        weight:15
      },
      h3:{
        label:'원가의식',
        desc:'재고·생산 원가 구조 모니터링 및 제안',
        questions:[
          {q:'원가 구성 항목 파악·모니터링', max:5},
          {q:'낭비·로스 저감 활동 건수', max:5},
          {q:'원가절감 제안 및 실행 성과', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A1','A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     생산관리팀
  ════════════════════════════════════════════ */
  {
    id:'박세진', name:'박세진', team:'생산관리팀',
    position:'과장', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'납기 준수율·긴급운송비 0건',
        target:'고객 납기 일정 준수율·납기 지연 긴급 운송비 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'물류 지시 정확도·재작업 0건',
        target:'물류 이동 지시 정확도·잘못된 지시 재작업 0건',
        weight:15, linkedGoal:GOAL_COST },
      { title:'D라인 계획 수립·생산 효율',
        target:'D라인 생산계획 수립 적기율·계획 대비 실적 오차율 최소화',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'납기·생산계획 정보 이해 및 우선순위 판단',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'생산 계획·물류 지시·MES 운용 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'납품 데이터 실시간 업데이트·일일 보고 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     생산관리팀
  ════════════════════════════════════════════ */
  {
    id:'고윤상', name:'고윤상', team:'생산관리팀',
    position:'대리', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'부품부족 예측·결품 0시간',
        target:'부품 부족 사전 예측 정확도·결품으로 인한 생산 중단 0시간',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'계획 배포 준수',
        target:'사출/조립 생산계획 배포 준수율·오류 재작업 비용 최소화',
        weight:15, linkedGoal:GOAL_COST },
      { title:'납품 내역·재공품 재고 최소화',
        target:'고객 납품 내역 정리 정확도·재공품 재고 최소화',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'자재 수급·계획 정보 이해 및 이상 감지',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'협조성',
        desc:'사출·조립팀과의 자재 이슈 공유·요청 응대',
        questions:[
          {q:'유관부서 요청 응대율', max:5},
          {q:'팀 내 정보 공유 충실도', max:5},
          {q:'협업 과제 기여·완수도', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'일일 수급 모니터링·보고 체크리스트 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     생산관리팀
  ════════════════════════════════════════════ */
  {
    id:'지태범', name:'지태범', team:'생산관리팀',
    position:'주임', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'이동 시간 준수·불필요 이동 최소화',
        target:'창고 간 제품 이동 시간 준수율·불필요 이동 최소화',
        weight:15, linkedGoal:GOAL_COST },
      { title:'물동량 매칭 정합성',
        target:'상하차 물동량 매칭 정합성·오류 재작업 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'공정 흐름 모니터링·대기 손실 0건',
        target:'사출-도장 공정 흐름 모니터링·이동 지연 대기 손실 0건',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'책임감',
        desc:'이동 지시 이행 및 지연 즉시 보고',
        questions:[
          {q:'업무 마감·체크리스트 이행률', max:5},
          {q:'이상 발생 시 즉시 보고 이행', max:5},
          {q:'결과물 완성도·정확성', max:5},
        ],
        weight:15
      },
      h2:{
        label:'솔선수범',
        desc:'자발적 물동량 파악·선제 이동 준비',
        questions:[
          {q:'자발적 업무 착수·선제 대응', max:5},
          {q:'동료 지원·교차 업무 이행', max:5},
          {q:'어려운 과제 자원 및 완수', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'일일 이동 현황 보고·체크리스트 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     생산관리팀
  ════════════════════════════════════════════ */
  {
    id:'도병구', name:'도병구', team:'생산관리팀',
    position:'대리', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'외주 조달 준수·생산 손실 0건',
        target:'외주 발주·조달 준수율·납기 지연 생산 중단 0시간',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'외주 단가 절감·매입 정확도',
        target:'외주 매입 마감 정확도·단가 절감 또는 경쟁 입찰 건수',
        weight:15, linkedGoal:GOAL_COST },
      { title:'외주 원가 분석·정보 공유',
        target:'외주 업체 정보 공유 실시간성·원가 분석 보고 월별 이행',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'외주 발주·조달 기준 이해 및 납기 이슈 판단',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'외주 구매·원가 분석·업체 관리 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'협조성',
        desc:'유관부서 외주 정보 공유 및 협조 응대',
        questions:[
          {q:'유관부서 요청 응대율', max:5},
          {q:'팀 내 정보 공유 충실도', max:5},
          {q:'협업 과제 기여·완수도', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     품질팀
  ════════════════════════════════════════════ */
  {
    id:'황재훈', name:'황재훈', team:'품질팀',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'NCR 관리·재작업 비용 감소',
        target:'품질 현황 지표(NCR) 관리·불량 재작업 손실 전년비 감소',
        weight:15, linkedGoal:GOAL_COST },
      { title:'IATF 심사 적합률',
        target:'SQ/IATF 인증 심사 적합률 달성',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'고객 대응·클레임 비용 감소',
        target:'고객 요청 자료 대응 적기율·클레임 처리 비용 전년비 감소',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'품질 이슈 원인 분석 및 시스템적 대응',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'품질지향',
        desc:'IATF 기준 준수 주도 및 현장 교육',
        questions:[
          {q:'품질 기준 준수 주도 및 현장 교육', max:5},
          {q:'불량·클레임 재발 방지 체계화', max:5},
          {q:'고객 품질 요구 사내 전달 정확성', max:5},
        ],
        weight:15
      },
      h3:{
        label:'혁신지향',
        desc:'품질 관리 프로세스·도구 개선 제안',
        questions:[
          {q:'신규 아이디어 제시 건수', max:5},
          {q:'파일럿·실행 여부', max:5},
          {q:'표준화·재사용 가능 산출물', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A5','A6'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     품질팀
  ════════════════════════════════════════════ */
  {
    id:'박기훈', name:'박기훈', team:'품질팀',
    position:'부장', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'부적합 대응·재발 방지 비용 절감',
        target:'고객 부적합 대응 완료율·재작업비 전년비 감소',
        weight:15, linkedGoal:GOAL_COST },
      { title:'불시점검·불량 원가 개선',
        target:'내부 불시 점검 개선 완료율·불량 원가 절감',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'신뢰성 시험 달성',
        target:'보증/신뢰성 시험 달성률·미이행 클레임 0건',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'부적합 기준 이해 및 대응 우선순위 판단',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'신뢰성 시험·부적합 관리 기준 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'품질지향',
        desc:'시험·점검 기준 준수 및 개선 제안',
        questions:[
          {q:'품질 기준 준수율·오류 건수', max:5},
          {q:'불량·오류 재발 방지 노력', max:5},
          {q:'품질 개선 아이디어 제안', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A5'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     품질팀
  ════════════════════════════════════════════ */
  {
    id:'박창선', name:'박창선', team:'품질팀',
    position:'부장', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'반출품 분석·폐기 손실 감소',
        target:'반출품 분석·개선 대책 수립·폐기 손실 전년비 감소',
        weight:15, linkedGoal:GOAL_COST },
      { title:'밀시트 취합·원재료 재작업 0건',
        target:'정기검사 밀시트 취합 이행률·원재료 미달 재작업 0건',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'한도 협의·클레임 비용 0건',
        target:'주요 품목 외관 한도 협의 완료율·클레임 비용 0건',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'반출·검사 기준 이해 및 이슈 우선순위 판단',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'밀시트·한도 협의·외관 검사 기준 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'품질지향',
        desc:'외관 기준 준수 및 개선 제안',
        questions:[
          {q:'품질 기준 준수율·오류 건수', max:5},
          {q:'불량·오류 재발 방지 노력', max:5},
          {q:'품질 개선 아이디어 제안', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A5'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     품질팀
  ════════════════════════════════════════════ */
  {
    id:'이우진', name:'이우진', team:'품질팀',
    position:'차장', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'측정 정확도·재측정 비용 최소화',
        target:'정밀 측정 처리 건수·오류 재측정 비용 최소화',
        weight:15, linkedGoal:GOAL_COST },
      { title:'출하 성적서 등록 적기율',
        target:'출하 성적서 전산 등록 적기율 달성',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'형합성 Test 적중률·재제작 0건',
        target:'상대물 형합성 Test 적중률·재제작 비용 0건',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'측정 기준·공차 이해 및 이상값 판단',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'정밀 측정·성적서 등록·형합성 평가 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'교정 이력 기록·일지 충실도·기한 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A5','A2'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     품질팀
  ════════════════════════════════════════════ */
  {
    id:'이다연', name:'이다연', team:'품질팀',
    position:'대리', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'게이지 R&R 이행률',
        target:'게이지 R&R 수행 이행률 달성',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'품질 문서 표준화·외주비 절감',
        target:'품질 문서 이력 표준화율·외주 의존 감소 비용 절감',
        weight:15, linkedGoal:GOAL_COST },
      { title:'개발 이슈 리드타임·재개발 0건',
        target:'개발 이슈 대응 리드타임 달성·재개발 비용 0건',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'업무개선능력',
        desc:'품질 문서·프로세스 개선 제안 및 실행',
        questions:[
          {q:'현행 프로세스 문제점 발굴 건수', max:5},
          {q:'개선 제안 구체성·실행 가능성', max:5},
          {q:'실행 후 성과 측정·공유', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'게이지 R&R·측정 데이터·문서 관리 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'문서 갱신 주기 준수·데이터 업데이트 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A5','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     품질팀
  ════════════════════════════════════════════ */
  {
    id:'최현숙', name:'최현숙', team:'품질팀',
    position:'주임', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'수입검사 적기율·불량 유입 0건',
        target:'외주 입고 수입검사 적기율·불량 원재료 유입 생산 손실 0건',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'XRF 측정 계획 달성',
        target:'원재료 XRF 측정 계획 달성률',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'품질 보고 취합·차단 비용 집계',
        target:'주간/월간 품질 보고 취합률·차단 불량 손실 비용 집계',
        weight:15, linkedGoal:GOAL_COST },
    ],
    sahun:{
      h1:{
        label:'책임감',
        desc:'검사 기준서 준수·불량 즉시 격리 보고',
        questions:[
          {q:'업무 마감·체크리스트 이행률', max:5},
          {q:'이상 발생 시 즉시 보고 이행', max:5},
          {q:'결과물 완성도·정확성', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'XRF 측정·수입검사 기준·보고 취합 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'XRF 일정 준수·검사 일지 기록 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A5','A2'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     사출팀
  ════════════════════════════════════════════ */
  {
    id:'김민수', name:'김민수', team:'사출팀',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'현장 가동률·비가동 손실 감소',
        target:'사출 현장 가동률 달성·비가동 손실 전년비 감소',
        weight:15, linkedGoal:GOAL_COST },
      { title:'예방보전 이행·돌발 수리비 절감',
        target:'예방보전 계획 이행률·돌발 수리비 전년비 감소',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'금형 자산 대응·손상비 0건',
        target:'고객사 금형 자산 실사 완료율·손상 비용 0건',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'설비·공정 이슈 즉시 대응 및 재발 방지',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'부하육성',
        desc:'사출팀원 역량 개발·교차공정 양성',
        questions:[
          {q:'OJT·개발 계획 수립 및 실행', max:5},
          {q:'정기 피드백 주기·구체성', max:5},
          {q:'역량 성장 가시적 성과', max:5},
        ],
        weight:15
      },
      h3:{
        label:'원가의식',
        desc:'설비 운용 비용·예방보전 원가 의식 주도',
        questions:[
          {q:'원가 구성 항목 파악·모니터링', max:5},
          {q:'낭비·로스 저감 활동 건수', max:5},
          {q:'원가절감 제안 및 실행 성과', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A1','A2','A3'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     사출팀
  ════════════════════════════════════════════ */
  {
    id:'권경환', name:'권경환', team:'사출팀',
    position:'차장', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'금형 보전·수명 연장',
        target:'금형 정기/예방 보전 이행률·교체 주기 연장 교체비 절감',
        weight:15, linkedGoal:GOAL_COST },
      { title:'금형 식별 정합성',
        target:'금형 위치/식별 정합성(MES)·잘못된 투입 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'금형 원가 절감·사이클타임 단축',
        target:'금형 개선 원가 절감·사이클타임 단축 가공비 절감',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'금형 보전 기준·이상 징후 판단',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'금형 보전·사이클타임 분석·MES 운용 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'품질지향',
        desc:'금형 이상 신호 사전 감지·불량 예방',
        questions:[
          {q:'품질 기준 준수율·오류 건수', max:5},
          {q:'불량·오류 재발 방지 노력', max:5},
          {q:'품질 개선 아이디어 제안', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     사출팀
  ════════════════════════════════════════════ */
  {
    id:'김택범', name:'김택범', team:'사출팀',
    position:'사원', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'표준서 관리·불량 방지',
        target:'표준서/조건표 시스템 관리율·표준 미준수 불량 0건',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'생산 데이터 시각화·원가 기여',
        target:'생산 데이터 시각화 활용도·원가 절감 아이디어 건수',
        weight:15, linkedGoal:GOAL_COST },
      { title:'사이클타임 취합·개선 제안',
        target:'사이클타임 자료 취합 정확도·분석 기반 개선 건수',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'업무개선능력',
        desc:'표준서·데이터 기반 공정 개선 제안',
        questions:[
          {q:'현행 프로세스 문제점 발굴 건수', max:5},
          {q:'개선 제안 구체성·실행 가능성', max:5},
          {q:'실행 후 성과 측정·공유', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'사출 공정·표준서 관리·데이터 분석 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'표준서 업데이트·체크리스트 기한 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A1','A3'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     조립팀
  ════════════════════════════════════════════ */
  {
    id:'양춘향', name:'양춘향', team:'조립팀',
    position:'팀장대행', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'조립라인 공정 불량률',
        target:'월평균 ≤ 0.8%',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'조립 원단위 로스율',
        target:'전년 대비 -5%p',
        weight:15, linkedGoal:GOAL_COST },
      { title:'조립팀 다기능공 양성',
        target:'팀원 1인당 교차공정 2개',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'라인 이슈 즉시 대응·재발방지 표준화',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'부하육성',
        desc:'조립팀원 역량 개발·다기능공 양성',
        questions:[
          {q:'OJT·개발 계획 수립 및 실행', max:5},
          {q:'정기 피드백 주기·구체성', max:5},
          {q:'역량 성장 가시적 성과', max:5},
        ],
        weight:15
      },
      h3:{
        label:'원가의식',
        desc:'로스·재료비·인건비 원가 의식 주도',
        questions:[
          {q:'원가 구성 항목 파악·모니터링', max:5},
          {q:'낭비·로스 저감 활동 건수', max:5},
          {q:'원가절감 제안 및 실행 성과', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     후가공팀-도장1
  ════════════════════════════════════════════ */
  {
    id:'장성수', name:'장성수', team:'후가공팀-도장1',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'도장 생산 달성률·도료 수율',
        target:'도장 생산 계획 달성률·도료 수율 목표 달성',
        weight:15, linkedGoal:GOAL_COST },
      { title:'생산성·재작업 비용 감소',
        target:'도장 공정 생산성 향상·불량 감소 재작업비 전년비 감소',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'원부자재 이상 조치·불량 비용 0건',
        target:'원부자재 이상 즉시 보고·불량 원자재 반품·불출 오류 0건',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'도장 불량·공정 이슈 선제 대응',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'코칭피드백',
        desc:'도장팀원 피드백·위임·성장 관리',
        questions:[
          {q:'1:1 면담 주기·구체적 피드백 이행', max:5},
          {q:'업무 위임·권한부여 적절성', max:5},
          {q:'팀원 성장 가시적 변화', max:5},
        ],
        weight:15
      },
      h3:{
        label:'원가의식',
        desc:'도료 수율·재작업 비용 원가 의식 주도',
        questions:[
          {q:'원가 구성 항목 파악·모니터링', max:5},
          {q:'낭비·로스 저감 활동 건수', max:5},
          {q:'원가절감 제안 및 실행 성과', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     후가공팀-도장1
  ════════════════════════════════════════════ */
  {
    id:'신영종', name:'신영종', team:'후가공팀-도장1',
    position:'주임', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'자재 조달 적기율·결품 0건',
        target:'자재 조달·지원 적기율·조달 지연 생산 중단 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'수원공장 지원·물류비 절감',
        target:'이동 자재 지원 실적·불필요 이중 이동 물류비 0건',
        weight:15, linkedGoal:GOAL_COST },
      { title:'자재 낭비 감소·폐기 비용 절감',
        target:'자재 낭비·폐기량 전년비 감소·잉여 재활용 처리',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'책임감',
        desc:'자재 소진 예상 시 사전 발주·기한 이행',
        questions:[
          {q:'업무 마감·체크리스트 이행률', max:5},
          {q:'이상 발생 시 즉시 보고 이행', max:5},
          {q:'결과물 완성도·정확성', max:5},
        ],
        weight:15
      },
      h2:{
        label:'협조성',
        desc:'공장 간 자재 지원 요청 응대·소통',
        questions:[
          {q:'유관부서 요청 응대율', max:5},
          {q:'팀 내 정보 공유 충실도', max:5},
          {q:'협업 과제 기여·완수도', max:5},
        ],
        weight:15
      },
      h3:{
        label:'성실성',
        desc:'입출고 보고·체크리스트 충실 이행',
        questions:[
          {q:'일일 체크리스트·보고 이행률', max:5},
          {q:'근태 준수·출결 관리', max:5},
          {q:'맡은 업무 기한 내 완료율', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     후가공팀-도장2
  ════════════════════════════════════════════ */
  {
    id:'박준성', name:'박준성', team:'후가공팀-도장2',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'자동차 도장 수율·도료비 절감',
        target:'도장 수율 달성률·수율 향상 도료비 절감',
        weight:15, linkedGoal:GOAL_COST },
      { title:'도장 불량률 감소·재작업비 절감',
        target:'도장 불량률(이물) 감소·재작업비 전년비 절감',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'도료 배합 정합성·원가 기여',
        target:'배합 데이터 정합성·오류 0건·원가 절감 아이디어',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'도장 불량·배합 이슈 선제 분석·대응',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'코칭피드백',
        desc:'도장팀원 역량 피드백·위임',
        questions:[
          {q:'1:1 면담 주기·구체적 피드백 이행', max:5},
          {q:'업무 위임·권한부여 적절성', max:5},
          {q:'팀원 성장 가시적 변화', max:5},
        ],
        weight:15
      },
      h3:{
        label:'원가의식',
        desc:'도료·재작업 원가 구조 파악·절감 주도',
        questions:[
          {q:'원가 구성 항목 파악·모니터링', max:5},
          {q:'낭비·로스 저감 활동 건수', max:5},
          {q:'원가절감 제안 및 실행 성과', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     후가공팀-인쇄
  ════════════════════════════════════════════ */
  {
    id:'김민식', name:'김민식', team:'후가공팀-인쇄',
    position:'부장', rank:'팀장',
    evaluatorOnly:false,
    kpi:[
      { title:'인쇄 수율·재료비 절감',
        target:'인쇄 생산성·품질 수율 달성·수율 향상 재료비 절감',
        weight:15, linkedGoal:GOAL_COST },
      { title:'지그·제판 정확도·재제작 0건',
        target:'인쇄 지그/제판 제작 정확도·재제작 비용 0건',
        weight:15, linkedGoal:GOAL_ORG },
      { title:'인쇄 불량 개선·폐기 비용 감소',
        target:'불량 원인 분석·개선 건수·폐기 손실 전년비 감소',
        weight:15, linkedGoal:GOAL_SUST },
    ],
    sahun:{
      h1:{
        label:'문제해결능력',
        desc:'인쇄 불량·제판 이슈 원인 분석·조치',
        questions:[
          {q:'이슈 원인 분석·데이터 기반 정의', max:5},
          {q:'해결안 도출 및 실행 완결도', max:5},
          {q:'재발 방지·표준화 이행', max:5},
        ],
        weight:15
      },
      h2:{
        label:'코칭피드백',
        desc:'인쇄팀원 기술 피드백·성장 지원',
        questions:[
          {q:'1:1 면담 주기·구체적 피드백 이행', max:5},
          {q:'업무 위임·권한부여 적절성', max:5},
          {q:'팀원 성장 가시적 변화', max:5},
        ],
        weight:15
      },
      h3:{
        label:'혁신지향',
        desc:'인쇄 수율·지그 개선 아이디어 제안·표준화',
        questions:[
          {q:'신규 아이디어 제시 건수', max:5},
          {q:'파일럿·실행 여부', max:5},
          {q:'표준화·재사용 가능 산출물', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A3','A4'], selected:[], maxScore:10 },
  },

  /* ════════════════════════════════════════════
     후가공팀-품질
  ════════════════════════════════════════════ */
  {
    id:'박정금', name:'박정금', team:'후가공팀-품질',
    position:'주임', rank:'팀원',
    evaluatorOnly:false,
    kpi:[
      { title:'수입검사 적기율·불량 유입 차단',
        target:'수입 부품 검사 적기율·불량 유입 생산 손실 0건',
        weight:15, linkedGoal:GOAL_SUST },
      { title:'협력사 피드백·단가 개선 기여',
        target:'협력사 품질 피드백 실적·불량 감소 원가 절감 기여',
        weight:15, linkedGoal:GOAL_COST },
      { title:'불량 데이터 분석·재발 0건',
        target:'불량 데이터 분석 정확도·동일 불량 재발 0건',
        weight:15, linkedGoal:GOAL_ORG },
    ],
    sahun:{
      h1:{
        label:'이해판단력',
        desc:'검사 기준 이해·불량 판정 우선순위',
        questions:[
          {q:'업무 지시·기준 이해 정확성', max:5},
          {q:'우선순위 판단·자율 처리 역량', max:5},
          {q:'상황 변화 시 유연한 대응', max:5},
        ],
        weight:15
      },
      h2:{
        label:'직무지식',
        desc:'수입검사·불량 데이터 분석·협력사 관리 전문성',
        questions:[
          {q:'직무 기준·이론 이해도', max:5},
          {q:'실무 적용 정확성·오류율', max:5},
          {q:'지식 공유·전파 활동', max:5},
        ],
        weight:15
      },
      h3:{
        label:'품질지향',
        desc:'검사 기준 준수·불량 재발 방지 제안',
        questions:[
          {q:'품질 기준 준수율·오류 건수', max:5},
          {q:'불량·오류 재발 방지 노력', max:5},
          {q:'품질 개선 아이디어 제안', max:5},
        ],
        weight:15
      },
    },
    auto:{ recommended:['A2','A5'], selected:[], maxScore:10 },
  },
];

// ── 시급직 직원 목록 ─────────────────────────────────
// ⚠ 양춘향: hourly 레코드 삭제 완료 (annual 팀장대행으로 전환, A0029)
const HOURLY_EMPLOYEES = [
  { team:'생산관리팀', name:'공인선', rank:'대리', type:'hourly' },
  { team:'품질팀', name:'장시영', rank:'대리', type:'hourly' },
  { team:'품질팀', name:'박종현', rank:'부장', type:'hourly' },
  { team:'품질팀', name:'박영미', rank:'주임', type:'hourly' },
  { team:'사출팀', name:'이호정', rank:'차장', type:'hourly' },
  { team:'사출팀', name:'김일봉', rank:'과장', type:'hourly' },
  { team:'사출팀', name:'이봉철', rank:'과장', type:'hourly' },
  { team:'사출팀', name:'신순월', rank:'대리', type:'hourly' },
  { team:'조립팀', name:'김춘화', rank:'대리', type:'hourly' },
  { team:'조립팀', name:'강영국', rank:'사원', type:'hourly' },
  { team:'조립팀', name:'김선화', rank:'사원', type:'hourly' },
  { team:'조립팀', name:'김연미', rank:'사원', type:'hourly' },
  { team:'조립팀', name:'김향란', rank:'사원', type:'hourly' },
];

// ── 시급직 통합 평가 템플릿 (HOURLY_EVAL_TEMPLATE) ───────
// 설계: 5문항 × 20점 = 100점 | 모든 시급직 동일 적용
// 평가자 가중치: 본인30% / 반장40% / 팀장20% / 공장장10%
// 법적 근거: 근로기준법 제23조, 대법원 2012다12870 (합리적 기준 + 절차적 공정성)
// BARS(행동기준평가척도): 주관적 태도 표현 금지, 관찰 가능한 행동 사실 기준
const HOURLY_EVAL_TEMPLATE = [
  {
    id: 'H1', label: '근태·출근 성실성', sahunRef: '성실성', weight: 20,
    evidence: '전자출퇴근 기록, 결근신청서',
    legalNote: '객관적 수치 기반 — 권고사직 시 가장 강력한 입증 자료',
    questions: [
      { q:'이달 지각·조퇴 횟수 (0회=5점, 1회=4점, 2회=3점, 3회=2점, 4회=1점, 5회이상=0점)', max:5, type:'objective' },
      { q:'무단결근 없이 사전 연락(유선·문자) 후 결근 처리 이행 여부', max:5, type:'behavioral' },
      { q:'작업 시작 전 준비(작업복·보호구 착용, 기계 점검) 이행률', max:5, type:'behavioral' },
      { q:'잔업·특근 요청 시 합리적 사유 없이 반복 거부한 횟수 (0회=5점 역산)', max:5, type:'behavioral' },
    ],
  },
  {
    id: 'H2', label: '작업 지시 이행도', sahunRef: '책임감', weight: 20,
    evidence: '일일 작업지시서, 생산실적일보, 재작업 기록',
    legalNote: '재작업 지시 수용 여부는 업무명령 불이행 증빙으로 활용 가능',
    questions: [
      { q:'일일 작업지시서 완수율 (목표 대비 실적 달성 여부)', max:5, type:'objective' },
      { q:'재작업·수정 지시 수용 및 기한 내 완수 여부', max:5, type:'behavioral' },
      { q:'작업 완료 후 결과 보고 및 인수인계 체크리스트 이행', max:5, type:'behavioral' },
      { q:'업무 마감 및 전후 공정 인수인계 적시성', max:5, type:'behavioral' },
    ],
  },
  {
    id: 'H3', label: '품질·공정 관리', sahunRef: '품질지향', weight: 20,
    evidence: '자주검사 시트, 불량 발생 기록, 품질일보',
    legalNote: '불량 수치는 수치화 입증 가능 — 동일 불량 반복 시 PIP 트리거 근거',
    questions: [
      { q:'담당 공정 불량 발생 건수 (팀 평균 이하=5점, 평균 수준=3점, 초과=1점)', max:5, type:'objective' },
      { q:'자주검사 시트 누락 없이 기록·서명 이행 여부', max:5, type:'behavioral' },
      { q:'불량·이상 발생 즉시 상급자 보고 및 격리 조치 이행', max:5, type:'behavioral' },
      { q:'동일 불량 재발 방지 노력 (표준 준수, 개선 제안 여부)', max:5, type:'behavioral' },
    ],
  },
  {
    id: 'H4', label: '안전수칙 준수', sahunRef: '책임감', weight: 20,
    evidence: '안전점검일지, 보호구 체크리스트, 교육이수 기록',
    legalNote: '중대재해처벌법 대응 + 산재 발생 시 관리 소홀 입증 차단 목적',
    questions: [
      { q:'개인보호구(PPE) 착용 미준수 적발 횟수 (0회=5점, 1회=3점, 2회이상=0점)', max:5, type:'objective' },
      { q:'작업구역 5S(정리·정돈·청소·청결·생활화) 유지 상태', max:5, type:'behavioral' },
      { q:'위험 요인·아차사고 발견 시 즉시 보고 및 표시 이행 여부', max:5, type:'behavioral' },
      { q:'월 안전교육 전 항목 이수 여부 (100 이수=5점, 미이수 1건당 -2점)', max:5, type:'objective' },
    ],
  },
  {
    id: 'H5', label: '협력·개선 참여', sahunRef: '팀웍', weight: 20,
    evidence: '개선제안서, 반장 면담 기록, OJT 수료증',
    legalNote: 'BARS 기반 필수 — 반장 관찰 일지에 행동 사실(날짜·상황·반응) 구체 기재',
    questions: [
      { q:'동료 요청 시 즉각 지원하고 업무 분담 마찰 없이 협조 (반장 관찰 기록 기준)', max:5, type:'behavioral' },
      { q:'상급자 피드백·지도 수용 태도 (적극 수용=5점, 소극적=3점, 반복 거부=1점)', max:5, type:'behavioral' },
      { q:'개선 제안 또는 아이디어 제출 여부 (1건 이상=5점, 0건=2점)', max:5, type:'behavioral' },
      { q:'다기능 OJT 참여 의향 및 실제 이수 여부 (이수=5점, 참여의향=3점, 거부=1점)', max:5, type:'behavioral' },
    ],
  },
];

// 시급직 평가자별 가중치
const HOURLY_EVAL_WEIGHTS = { self:30, foreman:40, teamLeader:20, factoryMgr:10 };

const ALL_EMPLOYEES = [...ANNUAL_EMPLOYEES, ...HOURLY_EMPLOYEES];

function getEmployee(name) {
  return ALL_EMPLOYEES.find(e => e.name === name) || null;
}

function getEmployeesByTeam() {
  const teams = {};
  ALL_EMPLOYEES.forEach(e => {
    if (!teams[e.team]) teams[e.team] = [];
    teams[e.team].push(e);
  });
  return teams;
}

// Node.js 환경에서 검증 스크립트용 export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ANNUAL_EMPLOYEES, HOURLY_EMPLOYEES, ALL_EMPLOYEES,
    AUTO_OPTIONS, GOAL_COST, GOAL_ORG, GOAL_SUST,
    HOURLY_EVAL_TEMPLATE, HOURLY_EVAL_WEIGHTS,
    getEmployee, getEmployeesByTeam
  };
}
