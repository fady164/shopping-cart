import React, { useState } from "react";
import "../../css/Products/Products.css";
import ProductModal from "../ProductModal/ProductModal";
// import Bounce from "react-reveal";

export default function Products({ products, addToCart }) {
   const [product, setProduct] = useState("");
   const openModal = (product) => {
      setProduct(product);
   };
   const closeModal = () => {
      setProduct(false);
   };

   return (
      // <Bounce left cascade>
      <div className="products-wrapper">
         {products.map((product) => (
            <div key={product.id} className="product-item">
               <a href="#" onClick={() => openModal(product)}>
                  <img src={product.imageUrl} alt={product.title} />
               </a>
               <div className="product-desc">
                  <p>{product.title}</p>
                  <span>${product.price}</span>
               </div>
               <button
                  onClick={() => {
                     addToCart(product);
                  }}
               >
                  add to cart
               </button>
            </div>
         ))}
         <ProductModal product={product} closeModal={closeModal} />
      </div>
      // </Bounce>
   );
}
