import React, { useState, useEffect } from "react";

import { BASE_URL } from "../../utils/api";
import ProductsData from "../Products/ProductsData";

interface Array {
  price: number;
  description: string;
  title: string;
  id: number;
  publishedAt: number;
  updatedAt: number;
  attributes: any;
}

function SpecialOffersCall() {
  const [jackets, setJacket] = useState<Array[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = BASE_URL + "jackets?pagination[start]=0&pagination[limit]=3&populate=*";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setJacket(result.data);
        console.log(result.data);
      } catch (error: any) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>Shit</p>;
  }

  return (
    <>
      <ProductsData content={jackets} />
    </>
  );
}

export default SpecialOffersCall;
