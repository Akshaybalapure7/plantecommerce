import { useState } from "react";

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const { id, name, price, image, quantity } = item;
  const [count, setCount] = useState(quantity);

  const handleQuantityChange = (amount) => {
    const newQuantity = count + amount;
    if (newQuantity < 1) return;
    setCount(newQuantity);
    onUpdateQuantity(id, newQuantity);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-16 h-16 object-cover rounded-lg" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">${price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(-1)}
          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          −
        </button>
        <span className="text-lg font-medium">{count}</span>
        <button
          onClick={() => handleQuantityChange(1)}
          className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onRemove(id)}
        className="text-red-500 hover:text-red-700"
      >
        ❌
      </button>
    </div>
  );
}
