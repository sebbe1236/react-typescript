import React, { useEffect } from "react";
import { BASE_URL } from "../../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import SingleProductData from "./SingleProductData";
import { CartProvider, useCart } from "react-use-cart";
interface Data {
  title?: string;
  image?: HTMLImageElement;
  description?: string;
  content?: any;
  attributes?: any;
  id?: string;
}

function SingleJacket() {
  const [singleJacket, setSingleJacket] = useState([] as any[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = BASE_URL + `jackets/${id}?populate=*`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.data);
        setSingleJacket(response.data.data);
      } catch (error: any) {
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
    return <p>something odd happened</p>;
  }

  return (
    <Container>
      <SingleProductData content={singleJacket} />
    </Container>
  );
}

export default SingleJacket;
