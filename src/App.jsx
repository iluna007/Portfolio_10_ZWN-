import { useState } from "react";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import WishlistPage from "./pages/Wishlist";
import useBag from "./Hooks/useBag";
import useWishlist from "./Hooks/useWishlist";

function App() {
  const [product, setProduct] = useState("Visual Product");
  const {
    data,
    bag,
    addToBag,
    removeFromBag,
    increaseQuantity,
    decreaseQuantity,
    clearBag,
    isEmpty,
    bagTotal
  } = useBag();

  const { wishlist, addToWishlist, clearWishlist } = useWishlist();

  return (
    <BrowserRouter>
      <Navbar
        product={product}
        bag={bag}
        wishlist={wishlist}
        addToWishlist={addToWishlist}
        addToBag={addToBag}
        removeFromBag={removeFromBag}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearBag={clearBag}
        isEmpty={isEmpty}
        bagTotal={bagTotal}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product-list"
          element={
            <ProductList
              setProduct={setProduct}
              addToBag={addToBag}
              addToWishlist={addToWishlist}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetail addToBag={addToBag} addToWishlist={addToWishlist} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/wishlist"
          element={
            <WishlistPage
              wishlist={wishlist}
              addToBag={addToBag}
              clearWishlist={clearWishlist}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
