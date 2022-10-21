import axios from "axios";
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../../utils/api";
import ProductsData from "./ProductsData";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Array {
  price: number;
  description: string;
  title: string;
  id?: string;
  publishedAt: number;
  updatedAt: number;
  attributes: any;
}

function ShirtsFetch() {
  const [shirts, setShirts] = useState<Array[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = BASE_URL + "shirts?populate=*";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.data);
        setShirts(json.data);
      } catch (error: any) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading.....</p>;
  }
  if (error) {
    return <p>404 error</p>;
  }

  return (
    <>
      <h3 className="text-center">Shirts</h3>
      <Container>
        <Row md={3} lg={6}>
          {shirts.map((product) => {
            return (
              <Col key={product.id}>
                <h4>{product.attributes.title}</h4>
                <img
                  className="w-100 h-50"
                  src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                  alt="test"
                />
                <Link to={`/shirt/${product.id}`}>View</Link>
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

export default ShirtsFetch;
