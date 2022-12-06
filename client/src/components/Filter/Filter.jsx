import React from "react";
import "../../css/Filter/filter.css";

export default function Filter() {
   return (
      <div className="filter-wrapper">
         <h2 className="filter-title">Filter</h2>
         <div className="num-of-products">Number of product 4</div>
         <div className="filter-by-size">
            <span>Filter</span>
            <select className="filter-select ">
               <option value="all">All</option>
               <option value="s">S</option>
               <option value="m">M</option>
               <option value="l">L</option>
               <option value="xl">XL</option>
            </select>
         </div>
         <div className="filter-by-order">
            <span>Order</span>
            <select className="filter-select ">
               <option value="latest">Latest</option>
               <option value="lower">Lower</option>
               <option value="highest">Highest</option>
            </select>
         </div>
      </div>
   );
}
