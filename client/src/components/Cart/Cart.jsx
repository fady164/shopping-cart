import React from "react";
import "../../css/Cart/Cart.css";

export default function Cart({ cartItems, removeFromCart }) {
   return (
      <div className="cart-wrapper">
         <div className="cart-title">
            {cartItems.length === 0 ? (
               "Card Empty "
            ) : (
               <p>There is {cartItems.length} products in cart</p>
            )}
         </div>
         <div className="cart-items">
            {cartItems.map((item) => (
               <div className="cart-item" key={item.id0}>
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="cart-info">
                     <div>
                        <p>Title : {item.title}</p>
                        <p>Qty : {item.qty}</p>
                        <p>Price : ${item.price}</p>
                     </div>
                     <button onClick={() => removeFromCart(item)}>
                        Remove
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
