import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg.jpg";
import sideImage from "../assets/images/bestseller.png";
import leaf1 from "../assets/images/fiddle-leaf.jpeg";
import leaf2 from "../assets/images/snake-plant.jpg";
import leaf3 from "../assets/images/peace-lily.jpg";

// Product Data with ₹ Symbol
const products = [
  { 
    name: "Fiddle Leaf Fig", 
    price: "₹3,199", 
    image: leaf1 
  },
  { 
    name: "Snake Plant", 
    price: "₹1,999", 
    image: leaf2 
  },
  { 
    name: "Peace Lily", 
    price: "₹2,499", 
    image: leaf3
  },
];

const BestSellers = () => {
  return (
    <section
      className="mt-8 py-12 text-white text-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg pointer-events-none"></div>

      {/* Section Title with Image */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
        <motion.img
          src={sideImage}
          alt="Best Sellers"
          className="w-16 h-16 md:w-24 md:h-24 object-contain"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <motion.h2
          className="text-4xl font-bold bg-white/20 p-4 rounded-xl shadow-lg text-green-200 drop-shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Best Sellers
        </motion.h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-green-900/30 p-6 rounded-xl shadow-xl backdrop-blur-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4 shadow-lg"
            />

            {/* Product Info */}
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-green-300">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
