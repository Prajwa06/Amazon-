import React from "react";
import Banner from "./Banner";
import ProductFeed from "./ProductFeed";
import products from "../products";
export default function Home() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </div>
    </div>
  );
}
