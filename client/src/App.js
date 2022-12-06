import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { words } from "./words";
import data from "./data.json";
import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

function App() {
   const [products, setProducts] = useState(data);
   const [sort, setSort] = useState("");
   const [size, setSize] = useState("");
   const [cartItems, setCartItems] = useState(
      JSON.parse(localStorage.getItem("cartItems"))
   );

   const handleFilterBySize = (e) => {
      setSize(e.target.value);
      if (e.target.value === "all") {
         setProducts(data);
      } else {
         let productsClone = [...products];
         let newProducts = productsClone.filter(
            (product) => product.sizes.indexOf(e.target.value) !== -1
         );
         setProducts(newProducts);
      }
   };
   const handleFilterByOrder = (e) => {
      let order = e.target.value;
      setSort(order);
      let productsClone = [...products];
      let newProducts = productsClone.sort((a, b) => {
         if (order === "lowest") {
            return a.price - b.price;
         } else if (order === "highest") {
            return b.price - a.price;
         } else {
            return a.id < b.id ? 1 : -1;
         }
      });
      setProducts(newProducts);
   };

   const addToCart = (product) => {
      const cartItemsClone = [...cartItems];
      var isProductExist = false;
      cartItemsClone.forEach((item) => {
         if (item.id === product.id) {
            item.qty++;
            isProductExist = true;
         }
      });
      if (!isProductExist) {
         cartItemsClone.push({ ...product, qty: 1 });
      }
      setCartItems(cartItemsClone);
   };

   const removeFromCart = (product) => {
      var cartItemsClone = [...cartItems];
      setCartItems(cartItemsClone.filter((p) => p.id !== product.id));
   };

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems]);

   return (
      <div className="layout">
         <Header />
         <main>
            <div className="wrapper">
               <Products addToCart={addToCart} products={products} />
               <Filter
                  productNumber={products.length}
                  size={size}
                  sort={sort}
                  handleFilterBySize={handleFilterBySize}
                  handleFilterByOrder={handleFilterByOrder}
               />
            </div>
            <Cart removeFromCart={removeFromCart} cartItems={cartItems} />
         </main>
         <Footer />
      </div>
   );
}

export default App;
