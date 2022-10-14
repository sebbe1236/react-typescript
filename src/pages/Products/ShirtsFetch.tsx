import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BASE_URL } from "../../utils/api";
import ProductsData from "./ProductsData";

interface Array {
  price: number;
  description: string;
  title: string;
  id: number;
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
        console.log(json);
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
      <Container>
        <ProductsData content={shirts} />
      </Container>
    </>
  );
}

export default ShirtsFetch;
