import React from "react";
import ProductCard from "./ProductCard";
import Spinner from "react-bootstrap/Spinner";

const ProductList = ({ products, productsAreLoading }) => {
  let content = (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" variant="light" />
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
