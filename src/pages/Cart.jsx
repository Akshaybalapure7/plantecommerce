import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
 const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between p-2 border-b">
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;