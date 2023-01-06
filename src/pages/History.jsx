import React from "react";
import { HistoryDevItems, HistoryEtcItems } from "./items/HistoryItems";
const History = () => {
  return (
    <div className="container">
      {/* Dev Job History */}
      <div className=" flex justify-center mb-12">
        <div className="w-10/12 md:flex-none md:w-8/12 md:pl-5">
          <h1 className=" md:text-3xl text-xl font-bold mb-9 md:mb-12">Dev Job History</h1>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-14">
            <HistoryDevItems />
          </div>
        </div>
      </div>

      {/* etc. Job History */}
      <div className=" flex justify-center">
        <div className="w-10/12 md:flex-none md:w-8/12 md:pl-5">
          <h1 className=" md:text-3xl text-xl font-bold mb-9 md:mb-12">etc. Job History</h1>

          <div className="grid lg:grid-cols-2 gap-x-6 gap-y-3 md:gap-x-14 md:gap-y-7">
            <HistoryEtcItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
