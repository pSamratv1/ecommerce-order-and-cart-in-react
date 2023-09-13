import React from "react";
import Cards from "../component/Cards";
import Header from "../component/Header";
import Search from "../component/Search";
import { useSelector } from "react-redux";

const Order = () => {
  const { data } = useSelector((state) => state.search);

  return (
    <>
      <Header />
      <Search />
      <h3 className="orderpage-title">Click to add product</h3>
      <div className="order-page">
        {data.map((value) => (
          <Cards data={value} key={value.id} />
        ))}
      </div>
    </>
  );
};

export default Order;
