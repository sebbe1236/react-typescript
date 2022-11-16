// @ts-nocheck
import React, { useEffect, useState } from "react";

import { BASE_URL } from "../../utils/api";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

interface Array {
  price: any;
  description: string;
  title: string;
  id: any;
  image: HTMLImageElement;
  publishedAt: number;
  updatedAt: number;
  attributes: any;
  data: any;
}

export function ProductsFetch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setProducts(response.data);
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
      <h3 className="text-center">Products</h3>
      <Container>
        <Row sm={1} md={4} lg={6}>
          {products.map((product) => {
            return (
              <Col key={product.id}>
                <h4>{product.title}</h4>
                <img src={product.image} className="w-50" />
                <Button id={product.id} onClick={() => addItem(product)}>
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

export default ProductsFetch;
