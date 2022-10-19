import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

/**
 * Må map`e i hver api call for å få singleParams til å funke fordi link/product.id henter begge med id 5 for eksempel i singlefetchn
 * så må matte over i api calln så sette opp egen route med link der som /singlejacket/:id for eksempel.
 */
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
              <Col key={product.id} className="text-center">
                <h4>{product.attributes.title}</h4>
                <img
                  className="w-100 h-50"
                  src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                  alt="test"
                />

                <Button className="p-3 m-3" id={product.id}>
                  Add to cart
                </Button>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ProductsData;
