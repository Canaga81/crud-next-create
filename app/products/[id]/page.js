"use client";

import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductsDetail = () => {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const queryParams = useParams();
  const { id } = queryParams;

  useEffect(() => {

    const getProductsDetails = async () => {

      try {
        const response = await axios.get(`https://65034c35a0f2c1f3faebc287.mockapi.io/blog/${id}`);
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }

    };

    getProductsDetails();

  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-9 py-12 px-16">
        <p className="text-2xl font-bold text-red-500">Id Kodu: {item.id}</p>
        <img className="w-[450px] h-[350px]" src={item.img} alt="detail_image" />
        <h1 className="text-3xl font-bold">Adi: {item.name}</h1>
        <div>
          <p className="text-sm font-bold text-center">Haqqinda: {item.blog}</p>
        </div>
        <Link href={'/products'} className="inline-block font-bold py-2 px-5 border-none outline-none bg-green-500 text-white rounded-2xl text-[19px] transition-all hover:bg-opacity-85">Geri Qayit</Link>
      </div>
    </>
  );
};

export default ProductsDetail;