import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./wcomponents/Navbar";
import Footer from "./wcomponents/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Hero from "./wcomponents/Hero";
import CartProvider from "./context/CartContext";
import "./styles/global.css";

const RainEffect = () => {
  const [rainDrops, setRainDrops] = useState([]);

  useEffect(() => {
    const drops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      animationDelay: Math.random() * 2 + "s",
      animationDuration: Math.random() * 2 + 2 + "s",
    }));
    setRainDrops(drops);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-0.5 h-10 bg-white opacity-50"
          style={{
            left: drop.left,
            animation: `rainDrop ${drop.animationDuration} linear infinite ${drop.animationDelay}`,
          }}
        />
      ))}
    </div>
  );
};

const LightParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const lights = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      top: Math.random() * 100 + "vh",
      animationDuration: Math.random() * 3 + 3 + "s",
      animationDelay: Math.random() * 2 + "s",
    }));
    setParticles(lights);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((light) => (
        <div
          key={light.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-70 blur-lg"
          style={{
            left: light.left,
            top: light.top,
            animation: `floatLight ${light.animationDuration} ease-in-out infinite ${light.animationDelay}`,
          }}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <div className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-green-200 bg-opacity-40 backdrop-blur-xl z-0"></div>

        {/* Background Effects */}
        {/* <div className="absolute inset-0 z-0">
          <RainEffect />
          <LightParticles />
        </div> */}

        <Router>
          {/* Navbar - Now Above Effects */}
          <div className="relative z-50">
            <Navbar />
          </div>

          {/* Content Section */}
          <div className="container mx-auto p-6 relative z-10 min-h-screen overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/hero" element={<Hero />} />
            </Routes>
          </div>

          {/* Footer - Now Above Effects */}
          <div className="relative z-50">
            <Footer />
          </div>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
