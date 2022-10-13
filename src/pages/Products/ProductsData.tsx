import React from "react";

interface Data {
  title?: string;
  image?: HTMLImageElement;
  content?: any;
}

function ProductsData({ content }: Data) {
  return (
    <>
      {content.map((product: any) => {
        return (
          <div key={product.id}>
            <h1>{product.attributes.title}</h1>
            <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt="test" />
          </div>
        );
      })}
    </>
  );
}

export default ProductsData;
