import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

import Home from "./components/Home";
import Menu from "./components/Menu";
import ContactUs from "./components/ContactUs";
import Ordernow from "./components/Ordernow";
import AboutUs from "./components/AboutUs";

function App() {
  const [cart, setCart] = useState([]);
  const [balance, setBalance] = useState(500);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="relative flex gap-6 p-4 text-lg md:font-semibold text-amber-800 hover:text-amber-300 transition bg-amber-950/10">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact Us</Link>

        <span className="ml-auto bg-amber-800 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
          🛒 {cart.length}
        </span>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/order-now"
          element={
            <Ordernow
              cart={cart}
              setCart={setCart}
              onAddToCart={addToCart}
              balance={balance}
              setBalance={setBalance}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
