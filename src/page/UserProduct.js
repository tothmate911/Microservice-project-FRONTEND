import React, { useContext } from "react";
import ProductCard from "../styledComponents/ProductCard";
import { useParams } from "react-router";
import { ProductContext } from "../context/ProductContext";
import { Spinner } from "react-bootstrap";

function UserProductsList() {
  let { id } = useParams();
  const [products, productsAreLoading] = useContext(ProductContext);

  let content = (
    <div className="d-flex justify-content-center">
      <Spinner animation="grow" variant="light" />
    </div>
  );

  let putUserProduct = (product) => {
    if (product.userId == id) {
      return <ProductCard key={product.id} product={product} />;
    }
    return "";
  };

  if (!productsAreLoading && products) {
    content = (
      <div className="container p-5 mb-3">
        <div className="card-columns">
          {products.map((product) => putUserProduct(product))}
        </div>
      </div>
    );
  }
  return content;
}

export default UserProductsList;
