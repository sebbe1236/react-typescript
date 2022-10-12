import React, { useEffect, useState } from "react";
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

function Home() {
  return <div>Home</div>;
}

export default Home;
