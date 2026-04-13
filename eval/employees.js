/**
 * 신성오토텍 2026 인사평가 - 직원 데이터 (연봉직)
 * ⚠️  이 파일은 xlsx에서 자동 생성됩니다. 직접 편집하지 마세요.
 */
const ANNUAL_EMPLOYEES = [
  {
    team:'경영지원팀', name:'박제성', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'인사평가 시스템·안전보건 점검 전산화·내부 보고 자동화(일일/주간/경영)', max:15 },
      { id:'kpi1', label:'KPI1 인사평가 프로세스', desc:'평가 일정 준수율 100% · 이의신청 처리 완결 · 결과 보고 완성도', max:15 },
      { id:'kpi2', label:'KPI2 산업안전보건 관리', desc:'중대재해 0건 · 위험성 평가 연 1회 · 법정 안전검사 적기 · 교육 이행률 100%', max:15 },
      { id:'kpi3', label:'KPI3 사내 설비·운영 감독', desc:'설비 정기점검 이행률 · 법정 안전검사 적기 완료 · 설비 이상 즉시 보고', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'일일/주간 현황보고서 적기 제출 및 점검 일지 누락 0건', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'이상 발생 시 24시간 내 조사보고서 작성 및 개선조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'현장부서 안전교육·인사평가 설명회 진행 참여 및 협업 요청 응대율', max:13 }
    ]
  },
  {
    team:'경영지원팀', name:'임정인', rank:'차장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'근태·급여 RPA 자동화 · ESG 실사 자료 디지털 자산화', max:15 },
      { id:'kpi1', label:'KPI1 근태·휴가·급여 관리', desc:'급여 오류 0건 · 근태 마감 적기율 100% · 연차 관리 · 4대보험 신고 기한 준수', max:15 },
      { id:'kpi2', label:'KPI2 ISO/ESG 인증·승인 관리', desc:'ISO14001 심사 적합률 · 인증 갱신 적기 완료 · 협력사 ESG 대응 완료율', max:15 },
      { id:'kpi3', label:'KPI3 ESG 지표·탄소 관리', desc:'탄소·에너지·폐기물 지표 집계 · 감축 목표 이행 · 고객사 ESG 항목 이행률', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'내외부 자료 요청 적기 제출 및 문서 갱신 주기 준수율', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'감사·실사 시 자료 누락 0건 · 지적사항 개선 완료 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'부서간 ESG·근태 데이터 수집 협조 요청 응대율 및 노사협의 참여도', max:13 }
    ]
  },
  {
    team:'회계팀', name:'황보령', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'ERP·AI 활용 결산 자동화·세금계산서 RPA 처리 및 데이터 정합성 관리', max:15 },
      { id:'kpi1', label:'KPI1 해외법인 서류·신고', desc:'해외 법인 관련 서류 관리 및 신고 이행률 100% (기한 준수·오류 0건)', max:15 },
      { id:'kpi2', label:'KPI2 수불장 프로세스', desc:'내부 수불장 기록 프로세스 정리·표준화 및 운영 안정화', max:15 },
      { id:'kpi3', label:'KPI3 이자비용 절감', desc:'은행 이자 감소 방법 개발 및 운영 (금리 협상·차입 구조 개선·상환 계획 수립)', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'회계 체크리스트 이행 및 일일 마감 현황 보고 충실도', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'재무 이상 발견 시 즉시 보고 및 처리 이행률 · 서류 반송 0건', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'유관부서 재무 자료 요청 적기 제공 및 수불장 공유 협조율', max:13 }
    ]
  },
  {
    team:'영업구매실', name:'안성현', rank:'실장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'영업-구매 통합 MES·RPA 운영 관리', max:15 },
      { id:'kpi1', label:'KPI1 영업 매출목표 총괄', desc:'영업팀 매출목표 달성·VI 방어(고객요구 3%)·납입율(D-2) 관리', max:15 },
      { id:'kpi2', label:'KPI2 구매·공급망 안정화', desc:'구매 단가 CI 목표·66개 협력사 정시납품률·재고비용 절감(연 10%)', max:15 },
      { id:'kpi3', label:'KPI3 신규수주·BizRoadmap', desc:'RFQ 대응 수주건수·New Biz Roadmap Y+2 예상매출 달성', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'영업·구매 일일/주간 보고 기한 준수 및 현황 보고 적기성', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'납기·클레임 이슈 발생 시 24시간 내 대응보고 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'영업-구매-생산 정기 협의 참여 및 공정거래 협약 준수율', max:13 }
    ]
  },
  {
    team:'영업팀', name:'이환돈', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 기반 영업 데이터 관리·RPA 활용 (전 조립팀 운영 경험 적용)', max:15 },
      { id:'kpi1', label:'KPI1 매출목표 달성', desc:'연간 매출목표 달성률·VI 방어(고객요구 3%)·납입율(D-2) 관리', max:15 },
      { id:'kpi2', label:'KPI2 재고비용 절감', desc:'재고비용 절감률(연 10% 목표)·출하제품 ABC 등급 관리', max:15 },
      { id:'kpi3', label:'KPI3 신규수주·RFQ 대응', desc:'신규수주 RFQ 대응건수·New Biz Roadmap Y+2 예상매출 달성', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'일일/주간 보고 및 고객 미팅 현황 보고 적기성', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'고객 클레임 접수 시 24시간 내 1차 대응 및 이력 기록 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'사내 유관부서 납기 조율 회의 정기 참여 및 협조 요청 응대율', max:13 }
    ]
  },
  {
    team:'영업팀', name:'김성진', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 입출고 데이터 관리·AI 납품 일정 최적화 활용 및 매출 마감 자동화', max:15 },
      { id:'kpi1', label:'KPI1 LG납입률', desc:'LG전자 조달 계획 대비 납입률', max:15 },
      { id:'kpi2', label:'KPI2 매출마감 완료', desc:'MES 매출 마감 적기 완료율', max:15 },
      { id:'kpi3', label:'KPI3 품질이슈 전파', desc:'품질 이슈 사내 전파 속도', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'익일 출하계획 배포 시간 준수 및 MES 매출 마감 체크리스트 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'품질이슈 접수 시 즉시 유관부서 공유 및 F/U 이력 관리 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'품질/생관팀 긴급 물량 조정 협업 요청 응대율', max:13 }
    ]
  },
  {
    team:'영업팀', name:'배규호', rank:'과장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 완제품 입출고 등록 정확도·RPA 거래명세서 자동 발행 활용', max:15 },
      { id:'kpi1', label:'KPI1 생산계획 배포', desc:'거래처 서열 생산계획 배포 준수율', max:15 },
      { id:'kpi2', label:'KPI2 제품 식별표', desc:'영업창고 제품 식별표 관리', max:15 },
      { id:'kpi3', label:'KPI3 공박스·이물', desc:'공박스 회수 및 이물 관리 상태', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'거래명세서 MES 등록 및 일일 납품 현황 보고 충실도', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'무사고 안전 운전 준수 및 차량 일일 점검 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'생산팀·창고팀과 공박스·납품 일정 사전 커뮤니케이션 이행률', max:13 }
    ]
  },
  {
    team:'영업팀', name:'신민호', rank:'대리', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES 활용', desc:'MES 출하 데이터 입력·현품표 전산화 정확도 관리', max:15 },
      { id:'kpi1', label:'KPI1 적기 납품률', desc:'완제품 적기 납품률', max:15 },
      { id:'kpi2', label:'KPI2 납품준비 적기율', desc:'거래처별 납품준비 적기율', max:15 },
      { id:'kpi3', label:'KPI3 육안검사 이행', desc:'완제품 최종 육안검사 이행률', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'일일 근태 준수 및 상하차 작업 사전 체크리스트 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'납품 이상 발견 시 즉시 상위 보고 및 이력 기록 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'창고팀·생관팀 출하 준비 사전 소통 및 협조 응대율', max:13 }
    ]
  },
  {
    team:'영업팀', name:'김수천', rank:'대리', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'RPA 활용 현품표 자동 생성·MES 재고 데이터 정합성 관리', max:15 },
      { id:'kpi1', label:'KPI1 CKD 포장 완성도', desc:'CKD 수출 파레트 포장 완성도', max:15 },
      { id:'kpi2', label:'KPI2 창고 레이아웃', desc:'영업창고 레이아웃 최적화 유지', max:15 },
      { id:'kpi3', label:'KPI3 지게차 효율', desc:'지게차 상하차 업무 효율', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'현품표 작업 사전 체크리스트 이행 및 적기 제출률', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'지게차 안전 운행 수칙 준수 및 일일 충전 관리 이행', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'창고 배치 개선 제안 및 팀원 공유 활동 참여도', max:13 }
    ]
  },
  {
    team:'영업팀', name:'김호수', rank:'주임', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES 활용', desc:'MES 창고 재고 전산 입력 정합성·실사 데이터 자동 대사', max:15 },
      { id:'kpi1', label:'KPI1 재고실사 정확도', desc:'재고실사 오차 최소화 실적', max:15 },
      { id:'kpi2', label:'KPI2 출고서류 정합성', desc:'출고 서류 및 송장 정합성', max:15 },
      { id:'kpi3', label:'KPI3 창고 3정5S', desc:'창고 정리정돈(3정 5S) 수준', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'출고 작업 전 체크리스트 이행 및 일일 보고 충실도', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'출고서류 이상 발견 시 즉시 보고 및 재처리 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'팀원 간 창고 업무 교차 지원 및 재고 정보 공유 활동', max:13 }
    ]
  },
  {
    team:'구매팀', name:'김대수', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 구매 단가·협력사 평가 데이터 관리·RPA 발주서 자동화 도입 활용', max:15 },
      { id:'kpi1', label:'KPI1 결품 0건', desc:'원부자재 결품 0건 달성', max:15 },
      { id:'kpi2', label:'KPI2 협력사 평가', desc:'협력사 평가 및 개선 실적', max:15 },
      { id:'kpi3', label:'KPI3 단가 절감', desc:'구매 단가 절감(CD) 목표액', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'발주서 처리 적기율 및 구매 현황 주간 보고 충실도', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'공급망 이슈 발생 시 24시간 내 대응보고 및 조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'생산·품질 부서의 원재료 요청 응대율 및 정기 협의 참여', max:13 }
    ]
  },
  {
    team:'구매팀', name:'이성호', rank:'대리', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 수불장 데이터 정합성·RPA 자재 입고 자동 처리 활용', max:15 },
      { id:'kpi1', label:'KPI1 정시 인도율(OTD)', desc:'구매 자재 정시 인도율(OTD)', max:15 },
      { id:'kpi2', label:'KPI2 원재료 잔량 처리', desc:'원재료 잔량 전산 처리 실적', max:15 },
      { id:'kpi3', label:'KPI3 통계DB 신뢰도', desc:'구매 통계 DB 구축 신뢰도', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'지게차 일일 점검 충실도 및 자재 입출고 현황 보고 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'원재료 입고 이상 발견 시 즉시 격리 보고 및 조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'생산팀·품질팀 자재 이슈 공유 및 협조 요청 응대율', max:13 }
    ]
  },
  {
    team:'개발팀', name:'김형권', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 금형 데이터 관리·AI 활용 개발 진행 현황 공유 및 디지털 이력 관리', max:15 },
      { id:'kpi1', label:'KPI1 금형 자산 실사', desc:'금형 자산 실사(QR) 이행률', max:15 },
      { id:'kpi2', label:'KPI2 도면 업로드 적기', desc:'도면 시스템 업로드 적기율', max:15 },
      { id:'kpi3', label:'KPI3 고객심사·TQRDCM 관리', desc:'고객 TQRDCM 평가(금형) · IATF16949 고객사 심사 대응 · 심사 자료 관리 적기율', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'개발 일정·도면 업로드 체크리스트 이행 및 적기 보고 충실도', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'IATF·고객 심사 지적사항 개선조치 계획 적기 제출 및 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'사출팀·품질팀 금형 이슈 협업 응대율 및 정보 공유 활동', max:13 }
    ]
  },
  {
    team:'생산실', name:'강한철', rank:'실장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 총괄', desc:'생산 전공정 MES 운영·사용자 교육·오류 대응·RPA 유지관리 (이환돈 이관 업무 포함)', max:15 },
      { id:'kpi1', label:'KPI1 통합 가동 효율', desc:'사출·후가공·조립 전 공정 통합 가동 효율 향상', max:15 },
      { id:'kpi2', label:'KPI2 3정5S 완료율', desc:'전 공정 3정 5S 점검·개선 완료율 (주 1회 투어 기준)', max:15 },
      { id:'kpi3', label:'KPI3 부서간 이슈 중재', desc:'TASK 활동 성과·부서 간 이슈 중재 만족도 (LGE 자주연구회·신성EP 포함)', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'생산 현황 보고 적기성 및 일일/주간/경영 회의 자료 준수', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'현장 이상 발생 시 2시간 내 상위 보고 및 대응 이력 기록 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'타 부서 협력·TASK 활동 및 영업·품질·개발팀 협업 요청 응대율', max:13 }
    ]
  },
  {
    team:'생산관리팀', name:'신용석', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 생산 계획-실적 연동·AI 수요예측 기반 생산계획 최적화 활용', max:15 },
      { id:'kpi1', label:'KPI1 생산 계획 달성률', desc:'생산 계획 대비 실적 달성률', max:15 },
      { id:'kpi2', label:'KPI2 과잉재고 억제', desc:'과잉 재고 억제율', max:15 },
      { id:'kpi3', label:'KPI3 팀 운영 성과', desc:'생산관리팀 조직 운영 성과', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'생산 정보 유관부서 공유 충실도 및 주간 보고 적기성', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'생산 계획 변경 시 즉시 유관부서 통보 및 이력 관리 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'부서간 생산 조율 정기 회의 참여 및 협업 요청 응대율', max:13 }
    ]
  },
  {
    team:'생산관리팀', name:'박세진', rank:'과장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 물류 이동 지시 정확도·RPA 납품 데이터 자동 업데이트 활용', max:15 },
      { id:'kpi1', label:'KPI1 납기 준수율', desc:'고객 납기 일정 준수율', max:15 },
      { id:'kpi2', label:'KPI2 물류 지시 정확도', desc:'물류 이동 지시 정확도', max:15 },
      { id:'kpi3', label:'KPI3 D라인 계획', desc:'D라인 생산계획 수립 적기율', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'고객 납품 데이터 실시간 업데이트 및 일일 현황 보고 충실도', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'납기 위협 징후 발견 시 즉시 상위 보고 및 대응 이력 기록률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'생산/영업 간 납기 정보 공유 요청 응대율 및 협조 활동', max:13 }
    ]
  },
  {
    team:'생산관리팀', name:'고윤상', rank:'대리', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 재고·계획 데이터 정합성·AI 부품 부족 예측 모델 활용', max:15 },
      { id:'kpi1', label:'KPI1 부품부족 예측', desc:'부품 부족 사전 예측 정확도', max:15 },
      { id:'kpi2', label:'KPI2 계획 배포 준수', desc:'사출/조립 계획 배포 준수율', max:15 },
      { id:'kpi3', label:'KPI3 납품 내역 정리', desc:'고객 납품 내역 정리 정확도', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'자재 수급 일일 모니터링 충실도 및 보고 적기성', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'부품 부족 예측 후 조치 요청 전달 이행 및 추적관리 충실도', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'사출·조립팀과의 자재 이슈 소통 및 협조 요청 응대율', max:13 }
    ]
  },
  {
    team:'생산관리팀', name:'지태범', rank:'주임', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES 활용', desc:'MES 창고 간 이동 전산 처리 정합성·이동 지시 자동 연동', max:15 },
      { id:'kpi1', label:'KPI1 이동 시간 준수', desc:'창고 간 제품 이동 시간 준수', max:15 },
      { id:'kpi2', label:'KPI2 물동량 매칭', desc:'상하차 물동량 매칭 정합성', max:15 },
      { id:'kpi3', label:'KPI3 공정 흐름 모니터링', desc:'사출-도장 흐름 모니터링 실적', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'일일 이동 현황 보고 충실도 및 체크리스트 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'이동 지연 발생 시 즉시 보고 및 대체 방안 제시 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'공정 간 자재 흐름 이슈 공유 및 협업 요청 응대율', max:13 }
    ]
  },
  {
    team:'생산관리팀', name:'도병구', rank:'대리', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 외주 발주 데이터 관리·RPA 발주서 자동 생성 및 매입 마감 자동화', max:15 },
      { id:'kpi1', label:'KPI1 외주 조달 준수', desc:'외주 발주 및 조달 준수율', max:15 },
      { id:'kpi2', label:'KPI2 매입 마감 정확도', desc:'외주 매입 마감 집계 정확도', max:15 },
      { id:'kpi3', label:'KPI3 업체 정보 공유', desc:'외주 업체 정보 공유 실시간성', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'외주 납기 모니터링 충실도 및 일일 현황 보고 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'외주 품질 이슈 발생 시 즉시 보고 및 격리 조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'외주업체 정기 소통 및 유관부서 협조 요청 응대율', max:13 }
    ]
  },
  {
    team:'품질팀', name:'황재훈', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 품질 지표 연동·AI 불량 패턴 분석 및 NCR 자동 분류 활용', max:15 },
      { id:'kpi1', label:'KPI1 NCR 관리', desc:'품질 현황 지표(NCR) 관리', max:15 },
      { id:'kpi2', label:'KPI2 IATF 심사 적합률', desc:'SQ/IATF 인증 심사 적합률', max:15 },
      { id:'kpi3', label:'KPI3 고객자료 대응', desc:'고객 요청 자료 대응 적기율', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'품질 보고서 주간 적기 제출 및 보고 누락 0건', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'고객 클레임 접수 시 24시간 내 원인분석 보고서 작성 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'품질 이슈 전사 공유 및 유관부서 협업 요청 응대율', max:13 }
    ]
  },
  {
    team:'품질팀', name:'박기훈', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 부적합 데이터 전산화·AI 기반 불량 재발 예측 보조 도구 활용', max:15 },
      { id:'kpi1', label:'KPI1 부적합 대응', desc:'고객 부적합 대응 완료율', max:15 },
      { id:'kpi2', label:'KPI2 불시점검 개선', desc:'내부 불시 점검 개선 완료율', max:15 },
      { id:'kpi3', label:'KPI3 신뢰성 시험', desc:'보증/신뢰성 시험 달성률', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'고객 이슈 대응 보고 적기율 및 체크리스트 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'부적합 조치 후 개선 이행 여부 추적관리 및 문서화 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'유관부서 품질 개선 협조 요청 응대율 및 정기 협의 참여', max:13 }
    ]
  },
  {
    team:'품질팀', name:'박창선', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 밀시트 전산 취합·RPA 정기검사 결과 자동 집계 활용', max:15 },
      { id:'kpi1', label:'KPI1 반출품 분석·개선', desc:'반출품 분석 및 개선 대책', max:15 },
      { id:'kpi2', label:'KPI2 밀시트 취합', desc:'정기검사 밀시트 취합 관리', max:15 },
      { id:'kpi3', label:'KPI3 한도 협의', desc:'주요 품목 외관 한도 협의', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'검사 기준서 주기적 업데이트 및 문서 갱신 이행률', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'반출 기준 이탈 발생 시 즉시 격리 보고 및 개선조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'고객사 한도 협의 사전 준비 및 원활한 진행 이행률', max:13 }
    ]
  },
  {
    team:'품질팀', name:'이우진', rank:'차장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES 활용', desc:'MES 정밀 측정 데이터 전산 등록 정합성·측정 결과 자동 연동', max:15 },
      { id:'kpi1', label:'KPI1 측정 건수·정확도', desc:'정밀 측정 처리 건수/정확도', max:15 },
      { id:'kpi2', label:'KPI2 성적서 등록', desc:'출하 성적서 전산 등록 적기율', max:15 },
      { id:'kpi3', label:'KPI3 형합성 Test 적중률', desc:'상대물 형합성 Test 적중률', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'측정 기기 일일 교정 준수 및 교정 이력 기록 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'측정 이상값 발견 시 즉시 재측정 요청 및 상위 보고 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'개발/고객과의 형합성 협의 참여 및 협조 요청 응대율', max:13 }
    ]
  },
  {
    team:'품질팀', name:'이다연', rank:'대리', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 품질 문서 표준화·AI 활용 문서 템플릿 자동화 및 이력 관리', max:15 },
      { id:'kpi1', label:'KPI1 게이지 R&R 이행', desc:'게이지 R&R 수행 이행률', max:15 },
      { id:'kpi2', label:'KPI2 문서 이력 표준화', desc:'품질 문서 이력 표준화율', max:15 },
      { id:'kpi3', label:'KPI3 개발 이슈 리드타임', desc:'개발 이슈 대응 리드타임', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'품질 문서 갱신 주기 준수 및 적기 업데이트 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'측정 데이터 이상 발견 시 즉시 담당자 통보 및 재검 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'개발팀과의 이슈 공유 협업 요청 응대율 및 정기 소통', max:13 }
    ]
  },
  {
    team:'품질팀', name:'최현숙', rank:'주임', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES 활용', desc:'MES 수입검사 결과 전산 처리 정합성·검사 데이터 자동 등록', max:15 },
      { id:'kpi1', label:'KPI1 수입검사 적기율', desc:'외주 입고 수입검사 적기율', max:15 },
      { id:'kpi2', label:'KPI2 XRF 측정 달성', desc:'원재료 XRF 측정 계획 달성', max:15 },
      { id:'kpi3', label:'KPI3 품질 보고 취합률', desc:'주간/월간 품질 보고 취합률', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'XRF 측정 일정 준수율 및 검사 일지 충실도', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'수입검사 불량 발견 시 즉시 격리 및 보고 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'구매팀과의 원재료 품질 이슈 공유 및 협조 요청 응대율', max:13 }
    ]
  },
  {
    team:'사출팀', name:'김민수', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES·PMS 설비보전 데이터 관리·AI 예지보전 모델 활용 고장 예측', max:15 },
      { id:'kpi1', label:'KPI1 현장 가동률', desc:'사출 현장 전체 가동률 달성', max:15 },
      { id:'kpi2', label:'KPI2 예방보전 이행률', desc:'예방보전 계획 대비 이행률', max:15 },
      { id:'kpi3', label:'KPI3 금형 자산 실사', desc:'고객사 금형 자산 실사 대응', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'현장 보전 일지·설비 점검표 적기 작성 및 누락 0건', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'설비 이상 신호 발견 시 즉시 보고 및 조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'부서 간 생산 조율 협의 참여 및 협업 요청 응대율', max:13 }
    ]
  },
  {
    team:'사출팀', name:'권경환', rank:'차장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 금형 위치·식별 데이터 관리·AI 활용 금형 수명 예측 보조', max:15 },
      { id:'kpi1', label:'KPI1 금형 보전 이행률', desc:'금형 정기/예방 보전 이행률', max:15 },
      { id:'kpi2', label:'KPI2 금형 식별 정합성', desc:'금형 위치/식별 정합성(MES)', max:15 },
      { id:'kpi3', label:'KPI3 금형 원가 절감', desc:'금형 개선을 통한 원가 절감', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'금형 점검 일지 충실도 및 주기적 이행 준수', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'금형 이상 징후 발견 시 즉시 개발팀 통보 및 조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'사출팀-개발팀 금형 이슈 협업 요청 응대율 및 정보 공유', max:13 }
    ]
  },
  {
    team:'사출팀', name:'김택범', rank:'사원', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 표준서·조건표 시스템 관리·AI 데이터 시각화 툴 활용 생산 분석', max:15 },
      { id:'kpi1', label:'KPI1 표준서 관리율', desc:'표준서/조건표 시스템 관리율', max:15 },
      { id:'kpi2', label:'KPI2 데이터 시각화', desc:'생산 데이터 시각화 활용도', max:15 },
      { id:'kpi3', label:'KPI3 사이클타임 취합', desc:'사이클타임 자료 취합 정확도', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'표준서·조건표 업데이트 체크리스트 이행 및 적기 완료', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'데이터 이상값 발견 시 즉시 상위 보고 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'유관부서 데이터 공유 요청 응대율 및 정보 공유 활동', max:13 }
    ]
  },
  {
    team:'조립팀', name:'양춘향', rank:'과장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 조립 라인 생산 실적 연동·RPA 일일 생산 보고 자동화 활용', max:15 },
      { id:'kpi1', label:'KPI1 UPH 달성률', desc:'조립 생산성(UPH) 달성률', max:15 },
      { id:'kpi2', label:'KPI2 LOB 최적화', desc:'신규 모델 LOB 최적화', max:15 },
      { id:'kpi3', label:'KPI3 Worst 불량 분석', desc:'Worst 모델 불량 원인 분석', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'일일/주간 업무 보고서 적기 제출 및 정확성', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'안전 지적사항 발생 시 즉시 보고 및 개선조치 적기 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'조립 인원 배치 효율화 소통 및 유관부서 협업 요청 응대율', max:13 }
    ]
  },
  {
    team:'후가공팀-도장1', name:'장성수', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 도장 생산 데이터 관리·AI 수율 패턴 분석 및 불량 원인 추적 활용', max:15 },
      { id:'kpi1', label:'KPI1 도장 생산 달성률', desc:'도장 생산 계획 달성률', max:15 },
      { id:'kpi2', label:'KPI2 생산성 향상', desc:'도장 공정 생산성 향상 실적', max:15 },
      { id:'kpi3', label:'KPI3 원부자재 이상 조치', desc:'원부자재 이상 보고 및 조치율', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'일일 생산 현황 보고 충실도 및 체크리스트 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'도장 불량 발생 시 즉시 라인 판단 보고 및 조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'사출-도장 공정 간 협업 요청 응대율 및 정보 공유', max:13 }
    ]
  },
  {
    team:'후가공팀-도장1', name:'신영종', rank:'주임', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/RPA 활용', desc:'MES 자재 조달 전산 처리·RPA 발주 요청 자동화 및 입고 데이터 연동', max:15 },
      { id:'kpi1', label:'KPI1 자재 조달 적기율', desc:'자재 조달 및 지원 적기율', max:15 },
      { id:'kpi2', label:'KPI2 수원공장 지원', desc:'수원공장 이동 자재 지원 실적', max:15 },
      { id:'kpi3', label:'KPI3 자재 낭비 감소', desc:'자재 낭비 및 폐기량 감소율', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'자재 입출고 일일 현황 보고 및 체크리스트 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'자재 소진 예상 시 사전 발주 요청 이행 및 리드타임 관리 충실도', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'공장 간 자재 지원 협업 요청 응대율 및 소통 활동', max:13 }
    ]
  },
  {
    team:'후가공팀-도장2', name:'박준성', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 도장 수율 데이터 관리·AI 배합 최적화 및 불량 이물 패턴 분석 활용', max:15 },
      { id:'kpi1', label:'KPI1 자동차 도장 수율', desc:'자동차 도장 수율 달성률', max:15 },
      { id:'kpi2', label:'KPI2 불량률 감소', desc:'도장 불량률(이물) 감소 실적', max:15 },
      { id:'kpi3', label:'KPI3 도료 배합 정합성', desc:'도료 배합 데이터 정합성', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'도료 배합 기록 충실도 및 작업 일지 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'도장 불량 발생 시 원인분석 보고서 적기 작성 및 개선 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'품질팀과의 불량 원인 협의 참여 및 협조 요청 응대율', max:13 }
    ]
  },
  {
    team:'후가공팀-인쇄', name:'김민식', rank:'부장', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 인쇄 생산 실적 데이터 관리·AI 불량 패턴 분석 및 수율 예측 활용', max:15 },
      { id:'kpi1', label:'KPI1 인쇄 수율', desc:'인쇄 생산성 및 품질 수율', max:15 },
      { id:'kpi2', label:'KPI2 지그·제판 정확도', desc:'인쇄 지그/제판 제작 정확도', max:15 },
      { id:'kpi3', label:'KPI3 불량 개선', desc:'인쇄 불량 원인 분석 개선 실적', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'인쇄 작업 일지 기록 충실도 및 적기 이행', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'인쇄 불량 발생 시 즉시 원인 분석 착수 및 조치 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'고객사 인쇄 요구 협의 참여 및 유관부서 협조 요청 응대율', max:13 }
    ]
  },
  {
    team:'후가공팀-품질', name:'박정금', rank:'주임', type:'annual',
    kpis:[
      { id:'mes', label:'자동화·MES/AI 활용', desc:'MES 수입 부품 검사 결과 전산화·AI 불량 판정 보조 툴 활용', max:15 },
      { id:'kpi1', label:'KPI1 검사 적기 처리', desc:'수입 부품 검사 적기 처리율', max:15 },
      { id:'kpi2', label:'KPI2 협력사 피드백', desc:'협력사 품질 피드백 실적', max:15 },
      { id:'kpi3', label:'KPI3 불량 데이터 분석', desc:'불량 데이터 분석 논리성', max:15 },
      { id:'h1', label:'사훈1 근면성실', desc:'검사 기준서 준수 이행률 및 일지 기록 충실도', max:13 },
      { id:'h2', label:'사훈2 책임완수', desc:'협력사 불량 발생 시 즉시 격리 및 피드백 전달 이행률', max:14 },
      { id:'h3', label:'사훈3 인화단결', desc:'품질팀과의 불량 데이터 공유 및 협조 요청 응대율', max:13 }
    ]
  },
];

const HOURLY_CRITERIA = [
  { id:'c1',  label:'① 근면성실',      desc:'출퇴근 시간 엄수, 지시사항 성실 이행, 업무 태도 및 집중도', max:10 },
  { id:'c2',  label:'② 인화단결',      desc:'동료 간 협력, 팀워크, 갈등 최소화 노력', max:10 },
  { id:'c3',  label:'③ 책임완수',      desc:'맡은 업무의 완성도, 기한 준수, 실수 시 즉각 보고 및 처리', max:10 },
  { id:'c4',  label:'④ 작업숙련도',    desc:'담당 공정의 숙련도, 작업 속도 및 정확도', max:10 },
  { id:'c5',  label:'⑤ 생산성',        desc:'생산 목표 대비 달성률, 공정 효율 기여', max:10 },
  { id:'c6',  label:'⑥ 품질관리',      desc:'불량 발생 최소화, 검사 기준 준수, 품질 개선 활동 참여', max:10 },
  { id:'c7',  label:'⑦ 설비관리',      desc:'설비 점검 이행, 이상 즉시 보고, 청결 유지', max:10 },
  { id:'c8',  label:'⑧ 안전수칙',      desc:'안전 장비 착용, 안전 수칙 준수, 위험 상황 즉시 보고', max:10 },
  { id:'c9',  label:'⑨ 정리정돈(5S)',  desc:'작업장 정리정돈 수준, 5S 활동 참여도', max:10 },
  { id:'c10', label:'⑩ 지시이행',      desc:'상사 지시 이행도, 업무 지침 준수, 개선 제안 참여', max:10 },
];

// ── 시급직 직원 목록 ─────────────────────────────
const HOURLY_EMPLOYEES = [
  { team:'생산관리팀', name:'공인선', rank:'대리', type:'hourly' },
  { team:'품질팀', name:'장시영', rank:'대리', type:'hourly' },
  { team:'품질팀', name:'박종현', rank:'부장', type:'hourly' },
  { team:'품질팀', name:'박영미', rank:'주임', type:'hourly' },
  { team:'사출팀', name:'이호정', rank:'차장', type:'hourly' },
  { team:'사출팀', name:'김일봉', rank:'과장', type:'hourly' },
  { team:'사출팀', name:'이봉철', rank:'과장', type:'hourly' },
  { team:'사출팀', name:'신순월', rank:'대리', type:'hourly' },
  { team:'사출팀', name:'김용', rank:'사원', type:'hourly' },
  { team:'사출팀', name:'김철', rank:'사원', type:'hourly' },
  { team:'사출팀', name:'박동윤', rank:'사원', type:'hourly' },
  { team:'사출팀', name:'이길룡', rank:'사원', type:'hourly' },
  { team:'조립팀', name:'김춘화', rank:'대리', type:'hourly' },
  { team:'조립팀', name:'강영국', rank:'주임', type:'hourly' },
  { team:'조립팀', name:'김선화', rank:'주임', type:'hourly' },
  { team:'조립팀', name:'김연미', rank:'주임', type:'hourly' },
  { team:'후가공팀-도장1', name:'윤아투', rank:'사원', type:'hourly' },
  { team:'후가공팀-도장1', name:'김미희', rank:'주임', type:'hourly' },
  { team:'후가공팀-품질', name:'도성화', rank:'주임', type:'hourly' },
];

const ALL_EMPLOYEES = [...ANNUAL_EMPLOYEES, ...HOURLY_EMPLOYEES];
function getEmployee(name) { return ALL_EMPLOYEES.find(e => e.name === name); }
