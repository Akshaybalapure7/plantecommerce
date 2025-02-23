import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

 const Checkout = () => {
  const { cart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Checkout successful! Thank you for your purchase.");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="p-2 border-b">{item.name} - ${item.price}</li>
            ))}
          </ul>
          <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout