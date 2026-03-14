// src/pages/Products.jsx
import { useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import { products } from "../data/products";

function Products() {
  const { category } = useParams();

  // Filter products by category
  const filteredProducts = category
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products;
   


    
  return (
    <div className="container">
      <h1 style={{textAlign:"center", marginBottom:"20px"}}>
        {category ? category.toUpperCase() + " Shoes" : "All Products"}
      </h1>
      <div className="grid">
        {filteredProducts.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;