import React from "react";
import "../../css/Products/Products.css";

export default function Products({ products }) {
   return (
      <div className="products-wrapper">
         {products.map((product) => (
            <div key={product.id} className="product-item">
               <img src={product.imageUrl} alt={product.title} />
               <div className="product-desc">
                  <p>{product.title}</p>
                  <span>{product.price}</span>
               </div>
               <button>add to cart</button>
            </div>
         ))}
      </div>
   );
}
