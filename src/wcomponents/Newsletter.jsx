import React from "react";

const Newsletter = () => {
  return (
    <section className="py-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-6 bg-white/20 p-4 rounded-xl">Join Our Newsletter</h2>
      <input type="email" placeholder="Enter your email" className="p-2 rounded-lg w-2/3 bg-white/30 text-black placeholder-gray-600" />
      <button className="ml-4 px-4 py-2 bg-green-600 rounded-lg text-white shadow-lg hover:bg-green-700">Subscribe</button>
    </section>
  );
};

export default Newsletter;
