import React, { useState } from "react";

const TabmenuMain = (props) => {
  const [currentTab, SetCurrnetTab] = useState("1");
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
              className="disabled:border-b-2 disabled:font-bold disabled:border-sky-900 border-gray-300 border-b-2 h-auto w-1/5 p-2 text-xs md:text-base mx-1 mb-2"
            >
              {tab.tabTitle}
            </button>
          );
        })}
      </div>
      <div className="content">
        {props.tabs.map((tab, i) => {
          return <div key={i}>{currentTab === `${tab.id}` && <div>{tab.content}</div>}</div>;
        })}
      </div>
    </div>
  );
};

export default TabmenuMain;
