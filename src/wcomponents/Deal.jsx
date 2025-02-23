import React from "react";
import bgImage from "../assets/images/bg.jpg";

const Deals = () => {
  return (
    <section 
      className="mt-8 py-12 text-center text-white bg-cover bg-center bg-no-repeat relative"  
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-lg pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-6 bg-white/20 p-4 rounded-xl inline-block shadow-lg">
          Exclusive Deals
        </h2>
        <p className="text-lg">Get up to 50% off on selected plants! Limited time offer.</p>
      </div>
    </section>
  );
};

export default Deals;
