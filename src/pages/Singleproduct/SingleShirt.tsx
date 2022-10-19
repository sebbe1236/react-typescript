import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import { BASE_URL } from "../../utils/api";
import SingleProductData from "./SingleProductData";

function SingleShirt() {
  const [singleShirt, SetSingleShirt] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = BASE_URL + `shirts/${id}?populate=*`;

  useEffect(() => {
    const singleFetch = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.data);
        SetSingleShirt(response.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    singleFetch();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <SingleProductData content={singleShirt} />
    </>
  );
}

export default SingleShirt;
