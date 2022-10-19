import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/api";
import axios from "axios";
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
      <ProductsData content={jackets} />
    </>
  );
}

export default JacketFetch;
