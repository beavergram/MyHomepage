import React from "react";

const About = () => {
  return (
    <div className="container">
      {/* overview */}
      <div className=" flex justify-center">
        <div className="w-10/12 md:flex-none md:w-8/12 md:pl-5">
          <h1 className=" md:text-3xl sm:text-2xl text-xl font-bold mb-10">Who is EagerBeaver ?</h1>
          <div>
            <div className=" md:text-4xl sm:text-3xl text-2xl mb-10">
              <span className="font-bold text-[#ac1e99]">상상</span>하는 것을 좋아하고
              <br />
              그것을<span className="font-bold text-[#ac1e99]"> 창조하는</span> 개발자 입니다.
            </div>
            <div className=" md:text-lg sm:text-sm text-sm">
              <p>저는 무언가를 만드는 것을 좋아합니다. </p>
              <p>상상하는 것을 그리고싶어 그림을 배우고, 상상하는 것을 나무로 만들고 싶어 목수가 되어보았습니다. </p>
              <p className="mb-5">이제는 개발자라는 창조적인 직업에 매료되었습니다.</p>
              <p>
                컴퓨터만 있다면 내가 상상하는 것들을 만들 수 있는 것. <br />
                이것이 제가 개발을 하는 이유입니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History */}
      {/* <div className=" flex justify-center mt-16 md:mt-24">
        <div
          className="border-t-2 border-[#ac1e99] border-dashed
      w-4/5 md:flex-none md:w-7/12 md:pl-5 pt-10"
        >
          <h1 className=" md:text-3xl sm:text-2xl text-xl font-bold mb-9 md:mb-12">Dev Job History</h1>

          <div className="grid md:grid-cols-2 gap-6 md:gap-14">
            <div className="card bg-[#ffd7d7] p-4 rounded-xl text-black">
              <div className="text-xs mb-4">
                <div className="font-bold">
                  <p className="">2020.03 ~ 현재</p>
                  <p className="">(주)에스피투로보틱스</p>
                  <p className="mb-3">머신비전 전문 회사</p>
                </div>
                <div>
                  <ul className="">
                    <li>회사 홈페이지 Front-end 담당</li>
                    <li>암호화폐 시스템 트레이딩 Front-end 담당</li>
                    <li>농기계 모니터링 시스템 Front-end 담당 </li>
                    <li>회사 홈페이지 리뉴얼 Front-end 담당</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
