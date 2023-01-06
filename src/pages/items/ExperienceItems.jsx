export const ExperienceItems = () => {
  const data = [
    {
      id: 7,
      title: "이거비버(EagerBeaver) 홈페이지 개발",
      period: "2023.01 ~ 2023.01",
      skill: "HTML, CSS(Tailwind), React.js, Node.js, Putty, Navercloud, Centos, Nginx",
      responsibilities: ["토이 프로젝트", "React.js 복습을 위한 토이프로젝트", "컴포넌트, props, useState, map에 대해서 익숙해짐"],
    },
    {
      id: 6,
      title: "회사 홈페이지 React.js Ver 리뉴얼",
      period: "2023.01 ~ 2023.01",
      skill: "HTML, CSS(Tailwind), React.js, Emailjs, Node.js, Putty, Navercloud, Centos, Nginx",
      responsibilities: [
        "회사 프로젝트",
        "기존 회사 프로젝트 사이트 리뉴얼 전담",
        "UI/UX 기획",
        "React.js 첫 프로젝트",
        "빌드 및 Nginx 배포 진행",
        "https://www.sp2robotics.com/",
      ],
    },
    {
      id: 5,
      title: "Upbit 암호화폐 자동매매 프로그램 Javascript Ver 개발",
      period: "2022.09 ~ 2022.10",
      skill: "Javascript, Node.js",
      responsibilities: [
        "토이 프로젝트",
        "모니터링 프로젝트를 통해 배운 Javascript와 REST API를 개인 실습하기 위해 토이 프로젝트 진행",
        "Upbit 공식 홈페이지의 REST API 코드 활용",
        "API 시간 지연 Error로 Interval Loop가 종료되는 경우 발생",
        "Try catch문으로 위의 문제 해결",
      ],
    },
    {
      id: 4,
      title: "차량 센서 모니터링 웹페이지 전체 리뉴얼",
      period: "2022.07 ~ 2022.12",
      skill: "HTML, CSS, Javascript, Jquery",
      responsibilities: [
        "L모기업 모니터링 프로젝트",
        "회원가입/로그인/대시보드/차량지도표기 등",
        "UI/UX 기획",
        "Front-End 전담, Javascript, REST API 첫 경험",
        "Back-End(Django)와 협업하며 아키텍쳐의 중요성 인지",
        "Interval로 REST API 요청 시 테이블이 재 생성되어 sorting이 초기화 되는 문제 발생",
        "테이블의 id와 json data를 비교해 해당 innerHtml만 갱신함으로써 위의 문제 해결",
      ],
    },
    {
      id: 3,
      title: "회사 홈페이지 제작",
      period: "2022.06 ~ 2022.06",
      skill: "HTML, CSS",
      responsibilities: ["회사 프로젝트", "회사 홈페이지 제작 전담"],
    },
    {
      id: 2,
      title: "Upbit, Binance 암호화폐 자동매매 및 백테스트 프로그램 개발",
      period: "2022.01 ~ 2022.02",
      skill: "Python, AWS, GitHub",
      responsibilities: [
        "토이 프로젝트",
        "Multiprocessing 활용하여 다중 코인 관리",
        "REST API 활용법을 몰라서 라이브러리 활용",
        "GitHub, AWS 첫 활용",
        "GitHub Public Repository에 배포하여 300만원 해킹당함",
      ],
    },
    {
      id: 1,
      title: "암호화폐 시스템트레이딩 웹 서비스",
      period: "2021.09 ~ 2021.12",
      skill: "HTML, CSS(Bootstrap)",
      responsibilities: [
        "회사 프로젝트",
        "회원가입/로그인/현재자산/트레이딩 페이지 등",
        "UI/UX 기획 및 HTML/CSS 퍼블리싱 전담",
        "런칭 후 홍보활동으로 100여명 회원 유치 및 관리",
      ],
    },
  ];

  return data.map((data, i) => {
    return (
      <div key={i}>
        <div className="card  text-black mb-8">
          <div className="">
            <div className="mb-2">
              <p className="font-bold">{data.title}</p>
              <p className="text-sm">{data.period}</p>
            </div>
            <div>
              <ul className="list-disc text-sm ml-4">
                {data.responsibilities.map((r) => {
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
