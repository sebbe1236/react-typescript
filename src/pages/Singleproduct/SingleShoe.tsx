import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
import SingleProductData from "./SingleProductData";

function SingleShoe() {
  const [singleShoe, setSingleShoe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = BASE_URL + `shoes/${id}?populate=*`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setSingleShoe(response.data.data);
      } catch (err: any) {
        console.log(err);
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>ups</p>;
  }

  return <SingleProductData content={singleShoe} />;
}

export default SingleShoe;
