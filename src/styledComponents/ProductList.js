import React from "react";
import loading from "./loading.gif";
import ProductCard from "./ProductCard";

const ProductList = ({ products, productsAreLoading }) => {
  let content = (
    <div className="d-flex justify-content-center">
      <img src={loading} alt=""></img>
    </div>
  );

  if (!productsAreLoading && products) {
    content = (
      <div className="card-columns">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return content;
};

export default ProductList;
