import plant1 from "../assets/images/plant1.jpg";
import plant2 from "../assets/images/plant2.jpg";
import plant3 from "../assets/images/plant3.jpg";

export const products = [
    { id: 1, name: "Aloe Vera", price: 15, image: plant1 },
    { id: 2, name: "Snake Plant", price: 20, image:plant2 },
    { id: 3, name: "Test Plant", price: 20, image:plant3 },
    { id: 4, name: "Aloe Vera", price: 15, image: plant1 },
    { id: 5, name: "Snake Plant", price: 20, image:plant2 },
    { id: 6, name: "Test Plant", price: 20, image:plant3 },
  ];
  
  // src/pages/Shop.jsx
  import React from "react";
  import  ProductCard  from "../wcomponents/ProductCard";
  // import { products } from "./api/products";
  
  export const Shop = () => (
    <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );