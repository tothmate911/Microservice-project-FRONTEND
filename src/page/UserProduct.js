import React, { useState } from "react";
import ProductCard from "../styledComponents/ProductCard";
import axios from "axios";
import { useParams } from "react-router";

function UserProductsList() {
  const [prods, setProds] = useState([]);
  let { id } = useParams();

  let userProducts = axios
    .get(`http://localhost:8762/product-service/products/user/${id}`)
    .then((response) => setProds(response.data), prods);

  let content = (
    <div className="container p-5 mb-3">
      <div className="card-columns">
        {prods.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
  return content;
}

export default UserProductsList;
