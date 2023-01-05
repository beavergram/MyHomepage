import React from "react";
import TabmenuMain from "../components/TabmenuMain";
import ProductsItems from "./items/ProductsContent";
const Portfolio = () => {
  return (
    <div className="container">
      <div className=" mt-16 md:mt-24 w-full text-center">
        <h1 className=" text-3xl font-bold mb-9">제품소개</h1>
        <TabmenuMain tabs={ProductsItems} />
      </div>
    </div>
  );
};

export default Portfolio;
