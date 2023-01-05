import React, { useState } from "react";

const TabmenuSub = (props) => {
  const [currentTab, SetCurrnetTab] = useState("(1)");
  const handleTabClick = (e) => {
    SetCurrnetTab(e.target.id);
  };
  return (
    <div className="">
      <div className="md:w-3/4 mx-auto flex flex-wrap justify-center text-center mb-9">
        {props.tabs.map((tab, i) => {
          return (
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={handleTabClick}
              className="disabled:font-bold disabled:bg-sky-900 bg-slate-400 text-white h-auto w-1/6 p-2 text-xs md:text-xs mx-1 mb-2"
            >
              {tab.tabTitle}
            </button>
          );
        })}
      </div>
      <div className="content">
        {props.tabs.map((tab, i) => {
          // console.log(currentTab, tab.id);
          return <div key={i}>{currentTab === `${tab.id}` && <div>{tab.content}</div>}</div>;
        })}
      </div>
    </div>
  );
};

export default TabmenuSub;
