import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import bgImage from "../assets/images/bg.jpg";

const SocialFeed = () => {
  return (
    <section
      className="relative mt-8 py-12 text-white text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for glass effect */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-lg"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-6 bg-white/20 p-4 rounded-xl inline-block shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Follow Us on Social Media
        </motion.h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <motion.a
            href="#"
            className="bg-blue-600 p-4 rounded-full shadow-lg backdrop-blur-lg text-white text-2xl hover:scale-125 transition-transform flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaFacebookF />
          </motion.a>

          <motion.a
            href="#"
            className="bg-pink-500 p-4 rounded-full shadow-lg backdrop-blur-lg text-white text-2xl hover:scale-125 transition-transform flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: -10 }}
          >
            <FaInstagram />
          </motion.a>

          <motion.a
            href="#"
            className="bg-blue-400 p-4 rounded-full shadow-lg backdrop-blur-lg text-white text-2xl hover:scale-125 transition-transform flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaTwitter />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
