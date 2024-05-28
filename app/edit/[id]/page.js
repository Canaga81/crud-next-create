"use client";

import { getProductById, updateProduct } from "@/services/productService";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Edit = () => {
  const router = useRouter();
  const queryParams = useParams();
  const { id } = queryParams;

  const [item, setItem] = useState({
    price: "",
    title: "",
    image: "",
  });

  useEffect(() => {
    const getProductsDetails = async () => {
      try {
        const item = await getProductById(id);
        setItem(item);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProductsDetails();
  }, [id]);

  const addHandler = async () => {
    try {
      await updateProduct(id, item);
      alert("Product updated!");
      router.push("/products");
    } catch (error) {
      alert("Product couldn't be updated: " + error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-5 py-7 px-6">
        <div>
          <h1 className="font-bold text-[36px] tracking-[3px] text-center">
            Edit Person
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-center w-full max-w-[600px]">
          <input
            value={item.price}
            type="text"
            onChange={(e) => setItem({ ...item, price: e.target.value })}
            className="w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md"
            placeholder="Qiymetini Yaziniz"
          />
          <input
            value={item.title}
            type="text"
            onChange={(e) => setItem({ ...item, title: e.target.value })}
            className="w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md"
            placeholder="Adini yaziniz"
          />
          <input
            value={item.image}
            type="text"
            onChange={(e) => setItem({ ...item, image: e.target.value })}
            className="w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md"
            placeholder="Sekil url'i yaziniz"
          />
        </div>
        <div className="flex items-center gap-5">
          <Link href={"/products"}>
            <button className="inline-block font-bold py-2 px-6 border-none outline-none bg-red-500 text-white rounded-xl text-[16px] transition-all hover:bg-opacity-85">
              Geri Qayit
            </button>
          </Link>
          <button
            onClick={addHandler}
            className="inline-block font-bold py-2 px-6 border-none outline-none bg-green-500 text-white rounded-xl text-[16px] transition-all hover:bg-opacity-85"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Edit;