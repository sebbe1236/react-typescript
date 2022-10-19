import React from "react";
import JacketFetch from "./JacketFetch";
import ShirtsFetch from "./ShirtsFetch";
import ShoesFetch from "./ShoesFetch";
import Heading from "../../components/layout/Heading";

function Products() {
  return (
    <>
      <Heading>Products</Heading>
      <ShirtsFetch />
      <JacketFetch />
      <ShoesFetch />
    </>
  );
}

export default Products;
