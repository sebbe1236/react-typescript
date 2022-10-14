import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
interface Data {
  title?: string;
  image?: HTMLImageElement;
  content?: any;
}

function ProductsData({ content }: Data) {
  return (
    <>
      <Container>
        <Row md={3} lg={6}>
          {content.map((product: any) => {
            return (
              <Col key={product.id}>
                <h1>{product.attributes.title}</h1>
                <img
                  className="w-100 h-50"
                  src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                  alt="test"
                />

                <Button id={product.id}>Add to cart</Button>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ProductsData;
