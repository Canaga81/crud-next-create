"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductsFunc = async () => {
      try {
        const response = await axios.get(
          "https://65034c35a0f2c1f3faebc287.mockapi.io/blog"
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProductsFunc();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const resp = await axios.delete(
        `https://65034c35a0f2c1f3faebc287.mockapi.io/blog/${id}`
      );
      setItems((prev) => prev.filter((item) => item.id !== id));
      alert("Person Delete !");
    } catch (error) {
      alert("Person don't Delete !" + error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-7 p-16">
        <div className="flex items-start justify-between flex-wrap gap-5">
          <h1 className="font-bold text-[36px] tracking-[3px]">CRUD Project</h1>
          <Link href={"/create"}>
            <button className="py-3 px-6 bg-red-500 text-white text-[18px] tracking-[1.5px] rounded-2xl font-bold transition-all hover:opacity-80">
              Add Person
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          {loading ? (
            <h1 className="text-[20px] font-bold">Loading...</h1>
          ) : (
            items &&
            items.map((item) => (
              <div
                key={item.id}
                className="w-[350px] h-[420px] flex flex-col gap-5"
              >
                <div>
                  <img className="w-[350px] h-[270px]" src={item.img} />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <p className="text-xl font-normal w-[350px]">
                      {item.blog?.slice(0, 30)}...
                    </p>
                  </div>
                  <div className="flex gap-x-3 items-start mb-6">
                    <Link href={`/products/${item.id}`}>
                      <button className="inline-block font-bold py-2 px-5 border-none outline-none bg-green-500 text-white rounded-2xl text-[19px] transition-all hover:bg-opacity-85">
                        Etrafli Melumat
                      </button>
                    </Link>
                    <Link href={`/edit/${item.id}`}>
                      <button className="inline-block font-bold py-2 px-5 border-none outline-none bg-green-500 text-white rounded-2xl text-[19px] transition-all hover:bg-opacity-85">
                        🖊️
                      </button>
                    </Link>
                    <button
                      onClick={() => deleteProduct(item.id)}
                      className="inline-block font-bold py-2 px-5 border-none outline-none bg-green-500 text-white rounded-2xl text-[19px] transition-all hover:bg-opacity-85"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
