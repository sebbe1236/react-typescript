import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import ProductsData from "./ProductsData";
import { Container, Row, Col, Button } from "react-bootstrap";
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

function JacketFetch() {
  const [jackets, setJackets] = useState<Array[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = BASE_URL + "jackets?populate=*";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.data);
        setJackets(response.data.data);
      } catch (error: any) {
        console.log(error, "bu");
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }
  return (
    <>
      <h3 className="text-center">Jackets</h3>
      <Container>
        <Row md={3} lg={6}>
          {jackets.map((product) => {
            return (
              <Col key={product.id}>
                <h4 key={product.id}>{product.attributes.title}</h4>
                <img
                  className="w-100 h-50"
                  src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                  alt="test"
                />
                <Link to={`/jacket/${product.id}`}>View</Link>
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

export default JacketFetch;
