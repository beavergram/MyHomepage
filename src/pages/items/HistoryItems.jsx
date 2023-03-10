export const HistoryDevItems = () => {
  const data = [
    {
      id: 1,
      period: "2020.03 ~ 현재",
      company: "(주)에스피투로보틱스",
      field: "머신비전 전문 회사",
      department: "개발/디자인/기획",
      Responsibilities: ["Front-end 개발", "UI/UX 기획/디자인", "사업기획 및 제안서 작성"],
    },
  ];
  <div className="grid lg:grid-cols-2 gap-6 md:gap-14"></div>;
  return data.map((data, i) => {
    return (
      <div key={i}>
        <div className="card  text-black border-l-2 border-black pl-5">
          <div className="text-sm md:text-base mb-4">
            <div className="">
              <p className="font-bold">{data.period}</p>
              <p className="font-bold mb-1">{data.company}</p>
              <p className="text-xs">{data.field}</p>
              <p className="text-xs mb-3">{data.department}</p>
            </div>
            <div>
              <ul className="list-disc text-sm ml-4">
                {data.Responsibilities.map((r) => {
                  return <li key={r}>{r}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export const HistoryEtcItems = () => {
  const data = [
    {
      id: 1,
      period: "2019.03 ~ 2020.02",
      company: "에스디에이코퍼레이션",
      field: "AR, 인테리어",
      department: "감리/기획",
      Responsibilities: [
        "AR 콘텐츠 설비 제작/관리 ",
        "BTS 해외공연 AR 콘텐츠 장비 관리 및 고객 관리",
        "미디어아트 제안서 작성",
        "인테리어 2D/3D 설계 및 시공 감리",
      ],
    },
    {
      id: 2,
      period: "2017.12 ~ 2019.02",
      company: "인테리어 목수",
      field: "",
      department: "",
      Responsibilities: ["인테리어"],
    },
    {
      id: 3,
      period: "2013.12 ~ 2015.11",
      company: "영풍정밀(주) / 고려아연 자회사",
      field: "플랜트 펌프 제조사",
      department: "펌프사업부 기술영업/PM",
      Responsibilities: ["펌프 영업", "기술 요청서 검토", "테크니컬 미팅", "프로젝트 매니징"],
    },
  ];

  return data.map((data, i) => {
    return (
      <div key={i}>
        <div className="card  text-black border-l-2 border-black pl-5">
          <div className="text-sm md:text-base mb-4">
            <div className="">
              <p className="font-bold">{data.period}</p>
              <p className="font-bold mb-1">{data.company}</p>
              <p className="text-xs">{data.field}</p>
              <p className="text-xs mb-3">{data.department}</p>
            </div>
            <div>
              <ul className="list-disc text-sm ml-4">
                {data.Responsibilities.map((r) => {
                  return <li key={r}>{r}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
