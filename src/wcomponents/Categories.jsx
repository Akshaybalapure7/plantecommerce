import React from "react";
import { FaLeaf, FaTree, FaTint, FaSeedling } from "react-icons/fa";
import bgImage from "../assets/images/bg.jpg";
const Categories = () => {
  const categories = [
    { name: "Indoor Plants", icon: <FaLeaf /> },
    { name: "Outdoor Plants", icon: <FaTree /> },
    { name: "Succulents", icon: <FaTint /> },
    { name: "Flowering Plants", icon: <FaSeedling /> },
  ];

  return (
    <section className="mt-8 py-12 text-center text-white relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-lg"></div>
      <h2 className="text-4xl font-bold mb-6 bg-white/20 p-4 rounded-xl inline-block shadow-lg text-green-200 drop-shadow-lg">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative bg-green-900/30 p-6 rounded-xl shadow-xl backdrop-blur-lg flex flex-col items-center justify-center 
            hover:scale-105 transition-transform duration-300 hover:shadow-green-300/50 hover:bg-green-800/40 cursor-pointer"
          >
            <div className="text-3xl mb-2 text-green-300 transition-transform group-hover:scale-125">
              {category.icon}
            </div>
            <p className="text-lg font-semibold tracking-wide">{category.name}</p>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
