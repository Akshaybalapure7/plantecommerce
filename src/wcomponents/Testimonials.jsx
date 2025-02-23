import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/images/bg.jpg";

const Testimonials = () => {
  const reviews = [
    { name: "Emma", review: "Beautiful plants! Highly recommend." },
    { name: "John", review: "Fast shipping and great quality." },
    { name: "Sophia", review: "Great customer service and amazing products!" },
  ];

  return (
    <section
      className="relative mt-8 py-12 text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for glass effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold mb-6 bg-white/20 p-4 rounded-xl inline-block shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our Customers Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {reviews.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-green-900/40 p-6 rounded-xl shadow-xl backdrop-blur-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="italic text-lg">"{testimonial.review}"</p>
              <p className="font-bold mt-2 text-green-300">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
