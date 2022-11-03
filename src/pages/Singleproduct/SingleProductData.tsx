import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CartProvider, useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
interface Data {
  title?: string;
  image?: HTMLImageElement;
  description?: string;
  content?: any;
  attributes?: any;
  id?: string;
  price?: number;
}

function SingleProductData({ content }: Data) {
  const { addItem } = useCart();

  return (
    <>
      <Container>
        <Row>
          <Col key={content.id}>
            <h3>{content.attributes.title}</h3>
            <img src={`http://localhost:1337${content.attributes.image.data.attributes.url}`} alt="test" />
            <p>{content.attributes.description}</p>
            <div>{content.attributes.price}$</div>
            <Button onClick={() => addItem(content)}>Add to cart</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleProductData;
