import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg.jpg";

const Blog = () => {
  const posts = [
    { title: "How to Care for Indoor Plants", date: "Feb 10, 2025" },
    { title: "Best Plants for Beginners", date: "Jan 15, 2025" },
  ];

  return (
    <section
      className="relative mt-8 py-12 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for glassy effect */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-lg"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-6 bg-white/20 p-4 rounded-xl inline-block shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          From Our Blog
        </motion.h2>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-green-900/40 p-6 rounded-xl shadow-xl backdrop-blur-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm opacity-80">{post.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
