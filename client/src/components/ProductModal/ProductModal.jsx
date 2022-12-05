import React from "react";
import Modal from "react-modal";

export default function ProductModal({ product, closeModal }) {
   return (
      <Modal isOpen={product} onRequestClose={closeModal}>
         <span className="close-item" onClick={closeModal}>
            &times;
         </span>
         <div className="product-info">
            <img src={product.imageUrl} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.desc}</p>
         </div>
      </Modal>
   );
}
