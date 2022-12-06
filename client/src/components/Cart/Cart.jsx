import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Cart({ cartItems, removeFromCart }) {
   const [showForm, setShowForm] = useState(false);
   const [value, setValue] = useState("");

   const handleChange = (e) => {
      setValue((pervState) => ({
         ...pervState,
         [e.target.name]: e.target.value,
      }));
   };

   const submitOrder = (e) => {
      e.preventDefault();
      const order = {
         name: value.name,
         email: value.email,
      };
      console.log(order);
   };

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
         {cartItems.length !== 0 && (
            <div className="cart-footer">
               <div className="total">
                  Total :$
                  {cartItems.reduce((acc, p) => {
                     return acc + p.price;
                  }, 0)}
               </div>
               <button
                  onClick={() => {
                     setShowForm(true);
                  }}
               >
                  Select Product
               </button>
            </div>
         )}
         {/* CHECKOUT FORM */}
         <CheckoutForm
            showForm={showForm}
            setShowForm={setShowForm}
            submitOrder={submitOrder}
            handleChange={handleChange}
         />
      </div>
   );
}
