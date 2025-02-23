import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import leaf1 from "../assets/images/leaf1.png";
import leaf2 from "../assets/images/leaf2.jpg";
import leaf3 from "../assets/images/leaf3.jpg";

// Function to generate random floating animation
const floatingAnimation = {
  initial: { x: "-10vw", y: 0, opacity: 0 },
  animate: {
    x: ["-10vw", "50vw", "100vw"],
    y: ["0vh", "-10vh", "10vh", "-5vh", "0vh"],
    opacity: [0, 1, 1, 1, 0],
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-600 bg-opacity-30 backdrop-blur-md shadow-lg z-50 overflow-hidden">
      <div className="relative container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Floating Leaves Container (Prevents Overflow) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.img
            src={leaf1}
            alt="Floating Leaf"
            className="absolute w-12 h-12"
            {...floatingAnimation}
            style={{ top: "2vh", left: "-10vw" }}
          />
          <motion.img
            src={leaf1}
            alt="Floating Leaf"
            className="absolute w-10 h-10"
            {...floatingAnimation}
            style={{ top: "5vh", left: "-15vw" }}
          />
          <motion.img
            src={leaf1}
            alt="Floating Leaf"
            className="absolute w-14 h-14"
            {...floatingAnimation}
            style={{ top: "7vh", left: "-5vw" }}
          />
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-white tracking-wide drop-shadow-md"
        >
          🌿 Plant Store
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            to="/shop"
            className="text-white text-lg font-semibold transition-all duration-300 hover:text-green-300 hover:drop-shadow-lg"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="text-white text-lg font-semibold transition-all duration-300 hover:text-green-300 hover:drop-shadow-lg"
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="text-white text-lg font-semibold transition-all duration-300 hover:text-green-300 hover:drop-shadow-lg"
          >
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
