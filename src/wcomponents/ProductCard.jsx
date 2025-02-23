import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} // Fade in + slide up on load
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0], transition: { duration: 0.3 } }} // Wiggle effect on hover
      className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 rounded-2xl shadow-xl"
    >
      
      {/* Product Image */}
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-2xl" />
        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full shadow-md">
          New
        </span>
      </div>

      {/* Product Details */}
      <h3 className="text-lg font-bold mt-3 text-white drop-shadow-md">{product.name}</h3>
      <p className="text-green-300 font-semibold">${product.price}</p>

      {/* Add to Cart Button with Press Animation */}
      <motion.button 
        onClick={() => addToCart(product)}
        whileTap={{ scale: 0.95 }} // Press-down effect on click
        className="mt-3 w-full bg-green-500 hover:bg-green-700 transition-all duration-300 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl"
      >
        🛒 Add to Cart
      </motion.button>
      
    </motion.div>
  );
};

export default ProductCard;
