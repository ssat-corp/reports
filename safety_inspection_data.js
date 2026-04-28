/* 안전검사(위험기계) 초기 데이터 — 민감 컬럼(설비명/모델/업체/제작연월/안전검사번호/비고) 제외
   엑셀 EHS연간계획표.xls 안전검사(2026) 시트에서 자동 추출 */
const INSP_INIT = {
  "machines": [
    {
      "site": "본사",
      "asset_no": "기계-78",
      "capacity": "330T",
      "mgmt_no": "1호기",
      "valid_start": "2020-07-27",
      "valid_end": "2023-07-26",
      "cycle": "3",
      "next_due": "",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "기계-160",
      "capacity": "900T",
      "mgmt_no": "1호기",
      "valid_start": "2026-02-12",
      "valid_end": "2028-02-11",
      "cycle": "2",
      "next_due": "2028-02-11",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "기계-109-01",
      "capacity": "330T",
      "mgmt_no": "2호기",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-114",
      "capacity": "330T",
      "mgmt_no": "3호기",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-152",
      "capacity": "450T",
      "mgmt_no": "5호기",
      "valid_start": "2026-02-12",
      "valid_end": "2028-02-11",
      "cycle": "2",
      "next_due": "2028-02-11",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "기계-44",
      "capacity": "60T",
      "mgmt_no": "6호기(12호기)",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-10",
      "capacity": "60T",
      "mgmt_no": "7호기(10호기)",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-9",
      "capacity": "60T",
      "mgmt_no": "8호기(9호기)",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-8",
      "capacity": "80T",
      "mgmt_no": "9호기(6호기)",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-109-04",
      "capacity": "80T",
      "mgmt_no": "10호기(7호기)",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-109-04",
      "capacity": "80T",
      "mgmt_no": "11호기(8호기)",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-172",
      "capacity": "80T",
      "mgmt_no": "12호기",
      "valid_start": "2024-10-15",
      "valid_end": "2026-10-14",
      "cycle": "2",
      "next_due": "2026-10-14",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "기계-11",
      "capacity": "100T",
      "mgmt_no": "13호기(15호기)",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-176",
      "capacity": "110T",
      "mgmt_no": "14호기",
      "valid_start": "",
      "valid_end": "",
      "cycle": "3",
      "next_due": "2027-10-01",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "기계-2",
      "capacity": "150T",
      "mgmt_no": "15호기(16호기)",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-109-02",
      "capacity": "150T",
      "mgmt_no": "16호기(13호기)",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-109-03",
      "capacity": "150T",
      "mgmt_no": "17호기(14호기)",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-171",
      "capacity": "170T",
      "mgmt_no": "18호기",
      "valid_start": "2024-10-15",
      "valid_end": "2026-10-14",
      "cycle": "2",
      "next_due": "2026-10-14",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "기계-173",
      "capacity": "280T",
      "mgmt_no": "19호기",
      "valid_start": "2024-06-13",
      "valid_end": "2026-06-12",
      "cycle": "2",
      "next_due": "2026-06-12",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "기계-166",
      "capacity": "250T",
      "mgmt_no": "20호기(17호기)",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "기계-6",
      "capacity": "250T",
      "mgmt_no": "21호기(18호기)",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-124",
      "capacity": "250T",
      "mgmt_no": "22호기(19호기)",
      "valid_start": "2026-02-12",
      "valid_end": "2028-02-11",
      "cycle": "2",
      "next_due": "2028-02-11",
      "matrix": {
        "2022-03": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-124",
      "capacity": "250T",
      "mgmt_no": "23호기(20호기)",
      "valid_start": "2026-02-12",
      "valid_end": "2028-02-11",
      "cycle": "2",
      "next_due": "2028-02-11",
      "matrix": {
        "2022-03": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-43",
      "capacity": "60T",
      "mgmt_no": "24호기(11호기)",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "기계-7",
      "capacity": "120T",
      "mgmt_no": "13호기",
      "valid_start": "2020-07-27",
      "valid_end": "2023-07-26",
      "cycle": "3",
      "next_due": "",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "미등록",
      "capacity": "5T",
      "mgmt_no": "C-1",
      "valid_start": "2024-11-16",
      "valid_end": "2026-11-15",
      "cycle": "2",
      "next_due": "2026-11-15",
      "matrix": {
        "2022-11": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "미등록",
      "capacity": "5T",
      "mgmt_no": "C-2",
      "valid_start": "2024-11-16",
      "valid_end": "2026-11-15",
      "cycle": "2",
      "next_due": "2026-11-15",
      "matrix": {
        "2022-11": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "미등록",
      "capacity": "3T",
      "mgmt_no": "C-3",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "시설장치-41",
      "capacity": "2T",
      "mgmt_no": "L-1",
      "valid_start": "2024-11-16",
      "valid_end": "2026-11-15",
      "cycle": "2",
      "next_due": "2026-11-15",
      "matrix": {
        "2022-11": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "시설장치-41",
      "capacity": "2T",
      "mgmt_no": "L-2",
      "valid_start": "2024-11-16",
      "valid_end": "2026-11-15",
      "cycle": "2",
      "next_due": "2026-11-15",
      "matrix": {
        "2022-11": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "미등록",
      "capacity": "1.0㎥",
      "mgmt_no": "E-1",
      "valid_start": "2025-10-07",
      "valid_end": "2027-10-06",
      "cycle": "2",
      "next_due": "2027-10-06",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "미등록",
      "capacity": "0.0037㎥",
      "mgmt_no": "",
      "valid_start": "",
      "valid_end": "",
      "cycle": "",
      "next_due": "",
      "matrix": {
        "2021-10": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "미등록",
      "capacity": "",
      "mgmt_no": "",
      "valid_start": "2023-05-18",
      "valid_end": "2026-05-17",
      "cycle": "3",
      "next_due": "2026-05-17",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "건물-4 일부",
      "capacity": "3kw",
      "mgmt_no": "",
      "valid_start": "2025-01-15",
      "valid_end": "2029-01-12",
      "cycle": "4",
      "next_due": "2029-01-12",
      "matrix": {
        "2021-01": "완료"
      }
    },
    {
      "site": "본사",
      "asset_no": "시설장치-63",
      "capacity": "115kw",
      "mgmt_no": "",
      "valid_start": "2024-11-15",
      "valid_end": "2028-11-14",
      "cycle": "4",
      "next_due": "2028-11-14",
      "matrix": {}
    },
    {
      "site": "본사",
      "asset_no": "한국가스E.N.G",
      "capacity": "",
      "mgmt_no": "",
      "valid_start": "2024-03-12",
      "valid_end": "2028-03-11",
      "cycle": "4",
      "next_due": "2028-03-11",
      "matrix": {}
    },
    {
      "site": "화성공장",
      "asset_no": "기계-136",
      "capacity": "150T",
      "mgmt_no": "21호기",
      "valid_start": "",
      "valid_end": "",
      "cycle": "3",
      "next_due": "",
      "matrix": {
        "2021-07": "제외"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "기계-99",
      "capacity": "150T",
      "mgmt_no": "22호기(13호기)",
      "valid_start": "2022-07-27",
      "valid_end": "2024-07-26",
      "cycle": "2",
      "next_due": "",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "기계-90",
      "capacity": "2.8T",
      "mgmt_no": "C-1",
      "valid_start": "2025-09-01",
      "valid_end": "2027-08-31",
      "cycle": "2",
      "next_due": "2027-08-31",
      "matrix": {
        "2021-08": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "1.0㎥",
      "mgmt_no": "E-1",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "1.0㎥",
      "mgmt_no": "E-2",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "0.5㎥",
      "mgmt_no": "E-3",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "0.05㎥",
      "mgmt_no": "V-D-1",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "0.05㎥",
      "mgmt_no": "V-D-2",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "0.08㎥",
      "mgmt_no": "E-D-1",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "0.08㎥",
      "mgmt_no": "E-D-2",
      "valid_start": "2024-07-27",
      "valid_end": "2026-07-26",
      "cycle": "2",
      "next_due": "2026-07-26",
      "matrix": {
        "2022-07": "완료"
      }
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "0.4Ton",
      "mgmt_no": "D-1",
      "valid_start": "2024-12-05",
      "valid_end": "2026-12-04",
      "cycle": "2",
      "next_due": "2026-12-04",
      "matrix": {}
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "0.4Ton",
      "mgmt_no": "D-2",
      "valid_start": "2024-12-05",
      "valid_end": "2026-12-04",
      "cycle": "2",
      "next_due": "2026-12-04",
      "matrix": {}
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "119m",
      "mgmt_no": "L-1",
      "valid_start": "2024-12-05",
      "valid_end": "2026-12-04",
      "cycle": "2",
      "next_due": "2026-12-04",
      "matrix": {}
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "",
      "mgmt_no": "",
      "valid_start": "2025-12-30",
      "valid_end": "2028-12-29",
      "cycle": "3",
      "next_due": "2028-12-29",
      "matrix": {}
    },
    {
      "site": "화성공장",
      "asset_no": "미등록",
      "capacity": "",
      "mgmt_no": "",
      "valid_start": "2022-10-27",
      "valid_end": "2025-10-26",
      "cycle": "3",
      "next_due": "2025-10-26",
      "matrix": {
        "2022-10": "완료"
      }
    }
  ],
  "years": [
    2018,
    2019,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026
  ]
};
