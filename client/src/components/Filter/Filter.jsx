import React from "react";
// import Flip from "react-reveal/Flip";
import "../../css/Filter/filter.css";

export default function Filter({
   handleFilterBySize,
   size,
   handleFilterByOrder,
   sort,
   productNumber,
}) {
   return (
      // <Flip left>
      <div className="filter-wrapper">
         <h2 className="filter-title">Filter</h2>
         <div className="num-of-products">
            Number of product {productNumber}
         </div>
         <div className="filter-by-size">
            <span>Filter</span>
            <select
               value={size}
               className="filter-select"
               onChange={handleFilterBySize}
            >
               <option value="all">All</option>
               <option value="s">S</option>
               <option value="m">M</option>
               <option value="l">L</option>
               <option value="xl">XL</option>
            </select>
         </div>
         <div className="filter-by-order">
            <span>Order</span>
            <select
               value={sort}
               className="filter-select"
               onChange={handleFilterByOrder}
            >
               <option value="latest">Latest</option>
               <option value="lowest">Lowest</option>
               <option value="highest">Highest</option>
            </select>
         </div>
      </div>
      // </Flip>
   );
}
