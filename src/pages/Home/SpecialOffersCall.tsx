import React, { useState, useEffect } from "react";

import { BASE_URL } from "../../utils/api";

interface Array {
  price: number;
  description: string;
  title: string;
  id: number;
  publishedAt: number;
  updatedAt: number;
}

type CatchError = {
  error: string;
};

function SpecialOffersCall() {
  const [jacket, setJacket] = useState<Array[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = BASE_URL + "jackets";

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setJacket(result);
        console.log(result.data);
      } catch (error: any) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return <div>SpecialOffersCall</div>;
}

export default SpecialOffersCall;
