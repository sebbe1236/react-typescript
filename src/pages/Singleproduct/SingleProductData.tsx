import React from "react";
import { Container, Col, Row } from "react-bootstrap";

interface Data {
  title?: string;
  image?: HTMLImageElement;
  description?: string;
  content?: any;
  attributes?: any;
}

function SingleProductData({ content }: Data) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h3>{content.attributes.title}</h3>
            <img src={`http://localhost:1337${content.attributes.image.data.attributes.url}`} alt="test" />
            <p>{content.attributes.description}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleProductData;
