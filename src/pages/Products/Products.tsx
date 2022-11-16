import React from "react";
import JacketFetch from "./ProductsFetch";
import ProductsFetch from "./ProductsFetch";
import Heading from "../../components/layout/Heading";

function Products() {
  return (
    <>
      <Heading>Products</Heading>
      <ProductsFetch />
    </>
  );
}

export default Products;
