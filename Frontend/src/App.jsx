import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";


import Home from "./components/Home";
import Menu from "./components/Menu";
import ContactUs from "./components/ContactUs";
import Ordernow from "./components/Ordernow";
import AboutUs from "./components/AboutUs";

function App() {
  const [data, setData] = useState("");
  const [cart, setCart] = useState([]); // This array will hold all confirmed items

  
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/data")
      .then((res) => setData(res.data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      
      {data && (
        <div className="bg-amber-900 text-amber-100 text-xs py-1 text-center"></div>
      )}

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
            <Ordernow cart={cart} setCart={setCart} onAddToCart={addToCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
