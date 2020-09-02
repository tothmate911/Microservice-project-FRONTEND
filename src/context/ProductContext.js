import React, { createContext } from "react";
import useApiCall from "../hook/ApiCall";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const url = "http://localhost:8762/product-service/products";
  const [products, productsAreLoading] = useApiCall(url);

  return (
    <ProductContext.Provider value={[products, productsAreLoading]}>
      {props.children}
    </ProductContext.Provider>
  );
};
