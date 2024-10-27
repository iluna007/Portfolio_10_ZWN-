import React, { useState } from "react";
import Masonry from "react-masonry-css";
import "./ProductList.css";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products.js";

const ProductList = ({ addToBag }) => {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState(null);

  const filteredProducts = products
    .filter((product) => {
      if (filter === "All") return true;
      if (filter === "Vidrio")
        return product.packaging === "Producto en Vidrio";
      if (filter === "Metal") return product.packaging === "Producto en Metal";
      if (filter === "Cartón")
        return product.packaging === "Producto en Cartón";
      if (filter === "Cabello")
        return product.category === "Producto para el Cabello";
      if (filter === "Cuerpo")
        return product.category === "Producto para el Cuerpo";
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "expensive") return b.price - a.price;
      if (sortOrder === "cheaper") return a.price - b.price;
      return 0;
    });

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="container example">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {filteredProducts.map((product, index) => (
          <div className="masonry-grid-item" key={index}>
            <ProductCard product={product} addToBag={addToBag} />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ProductList;
