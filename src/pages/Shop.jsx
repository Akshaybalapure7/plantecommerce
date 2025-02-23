import React from "react";
import  ProductCard  from "../wcomponents/ProductCard";
import { products } from "../api/products";

 const Shop = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default Shop