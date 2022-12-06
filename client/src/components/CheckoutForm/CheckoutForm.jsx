import React from "react";

export default function CheckoutForm({
   showForm,
   setShowForm,
   submitOrder,
   handleChange,
}) {
   return (
      <>
         {showForm && (
            <div className=" checkout-form">
               <span
                  onClick={() => {
                     setShowForm(false);
                  }}
                  className="close-icon"
               >
                  &times;
               </span>
               <form onSubmit={submitOrder}>
                  <div>
                     <label>Name</label>
                     <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                     />
                  </div>
                  <div>
                     <label>Email</label>
                     <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        required
                     />
                  </div>
                  <button type="submit">Checkout</button>
               </form>
            </div>
         )}
      </>
   );
}
