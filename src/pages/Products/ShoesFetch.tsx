import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import ProductsData from "./ProductsData";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Array {
  price: number;
  description: string;
  title: string;
  id?: number;
  publishedAt: number;
  updatedAt: number;
  attributes: any;
}

function ShoesFetch() {
  const [shoes, setShoes] = useState<Array[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = BASE_URL + "shoes?populate=*";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        setShoes(response.data.data);
      } catch (error: any) {
        console.log(error.message);
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
    return <p>error</p>;
  }
  const quanity = 0;
  return (
    <>
      <h3 className="text-center">Shoes</h3>
      <Container>
        <Row md={3} lg={6}>
          {shoes.map((product: any) => {
            return (
              <Col key={product.id} className="text-center">
                <h4>{product.attributes.title}</h4>
                <img
                  className="w-100 h-50"
                  src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
                  alt="test"
                />
                <Link to={`/shoe/${product.id}`}>View</Link>
                {quanity === 0 ? (
                  <Button className="p-3 m-3" id={product.id}>
                    Add to cart
                  </Button>
                ) : (
                  <div>
                    <Button>-</Button>
                    <span>{quanity} in cart</span>
                    <Button>+</Button>
                  </div>
                )}
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ShoesFetch;
