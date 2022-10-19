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

function ShoesFetch() {
  const [shoes, setShoes] = useState<Array[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = BASE_URL + "shoes?populate=*";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.data);
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
  return (
    <>
      <h3 className="text-center">Shoes</h3>
      <ProductsData content={shoes} />
    </>
  );
}

export default ShoesFetch;
