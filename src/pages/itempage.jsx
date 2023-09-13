import React from "react";
import Header from "../component/Header";
import Search from "../component/Search";
import { useSelector } from "react-redux";

const Itempage = () => {
  const { filteredId } = useSelector((state) => state.search);
  const { data } = useSelector((state) => state.search);

  return (
    <>
      <Header />
      <Search />
      {data.map(
        (item) =>
          filteredId === item.id && (
            <>
              <div className="item-image">
                <img className="item-images" src={item.thumbnail} alt="image" />
              </div>
              <div className="itempage">
                <div className="item-id">Product Id: {item.id}</div>
                <div className="item-title">Product Name: {item.title}</div>
                <div className="item-desc">Description: {item.description}</div>
                <div className="item-price">Price: {item.price}</div>
              </div>
            </>
          )
      )}
    </>
  );
};
export default Itempage;
