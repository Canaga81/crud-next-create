"use client";

import { deleteProduct, getAllProducts } from "@/services/productService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { slugify } from "../utils/slugify";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      try {
        const items = await getAllProducts();
        setItems(items);
      } catch (error) {
        console.log(error.message);
      }
      finally {
        setLoading(false);
      }
    }

    getItems();
  }, []);

  const deleteProductFunc = async (id) => {
    try {
      const resp = await deleteProduct(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
      alert("Product Delete !");
    } catch (error) {
      alert("Product don't Delete !" + error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-7 p-16">
        <div className="flex items-start justify-between flex-wrap gap-5">
          <h1 className="font-bold text-[36px] tracking-[3px]">CRUD Project</h1>
          <Link href={"/create"}>
            <button className="py-3 px-6 bg-red-500 text-white text-[18px] tracking-[1.5px] rounded-2xl font-bold transition-all hover:opacity-80">
              Add Product
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
                  <img className="w-[350px] h-[270px] object-contain" src={item.image} />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-normal w-[350px]">
                      {item.title}
                    </p>
                    <h3 className="text-2xl font-bold">{item.price}Azn</h3>
                  </div>
                  <div className="flex gap-x-3 items-start mb-6">
                    <Link href={`/products/${item.id}-${slugify(item.title)}`}>
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
                      onClick={() => deleteProductFunc(item.id)}
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
