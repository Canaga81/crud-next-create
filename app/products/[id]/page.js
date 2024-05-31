"use client";

import { getProductById } from "@/services/productService";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductsDetail = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  const queryParams = useParams();
  const { id } = queryParams;
  const url = id.split("-")[0];

  useEffect(() => {
    const getProductsDetails = async () => {
      try {
        const item = await getProductById(url);
        setItem(item);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    getProductsDetails();
  }, [url]);

  if (loading) {
    return (
      <p className="text-center py-16 text-4xl font-extrabold">Loading...</p>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-9 py-12 px-16">
        {/* <p className="text-2xl font-bold text-red-500">Id Kodu: {item.id}</p> */}
        <img
          className="w-[450px] h-[350px]"
          src={item.image}
          alt="detail_image"
        />
        <h1 className="text-3xl font-bold">Qiymeti: {item.price}Azn</h1>
        <div>
          <p className="text-sm font-bold text-center">Adi: {item.title}</p>
        </div>
        <Link
          href={"/products"}
          className="inline-block font-bold py-2 px-5 border-none outline-none bg-green-500 text-white rounded-2xl text-[19px] transition-all hover:bg-opacity-85"
        >
          Geri Qayit
        </Link>
      </div>
    </>
  );
};

export default ProductsDetail;
