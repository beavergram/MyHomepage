import React from "react";

const Home = () => {
  return (
    <div className="container text-black bg-white">
      <div className="max-w-[1180px] w-full mx-auto text-center flex flex-col justify-center px-4 ">
        <img src="/img/eagerBeaver.png" alt="" className="w-2/3 sm:w-1/3 md:w-1/4 max-w-xs mx-auto mb-5" />
        <p className="text-xl md:text-3xl p-2">
          <span className="text-[#ac1e99] font-bold text-2xl md:text-4xl">독</span>하게
          <span className="text-[#ac1e99] font-bold text-2xl md:text-4xl"> 독</span>학하는
        </p>
        <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold py-3 md:py-6">EagerBeaver</h1>

        {/* <div className="flex justify-center items-center"></div> */}
        <p className="md:text-2xl text-xl font-bold text-gray-500">Development</p>
        {/* <button className="bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto px-6 py-3 text-black">Let's test</button> */}
      </div>
    </div>
  );
};

export default Home;
