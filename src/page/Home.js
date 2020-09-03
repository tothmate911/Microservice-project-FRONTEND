import React, { useContext } from "react";
import ProductList from "../styledComponents/ProductList";
import { ProductContext } from "../context/ProductContext";

function Home() {
  const [products, productsAreLoading] = useContext(ProductContext);

  const content = (
    <React.Fragment>
      <div className="container p-5 mb-3">
        <ProductList
          products={products}
          productsAreLoading={productsAreLoading}
        />
      </div>
    </React.Fragment>
  );

  return content;
}

export default Home;
