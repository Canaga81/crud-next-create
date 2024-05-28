"use client";

import { createProduct } from '@/services/productService';
import Link from 'next/link';
import React, { useState } from 'react';

const Create = () => {

    const [item, setItem] = useState({
        price: "",
        title: "",
        image: "",
    });

    const addHandler = () => {

        const createProductFunc = async () => {
            try {
                const res = await createProduct(item)
                alert("Product Create !");
                setItem({price: "", title: "", image: ""});
                window.location.href = '/products';
            } catch (error) {
                alert("Product don't create" + error);
            }
        }

        createProductFunc();

    }

  return (

    <>

        <div className='flex flex-col items-center justify-center h-screen gap-5 py-7 px-6'>
            <div>
                <h1 className='font-bold text-[36px] tracking-[3px] text-center'>Create Person</h1>
            </div>
            <div className='flex flex-col gap-4 items-center w-full max-w-[600px]'>
                <input value={item.price} type='text' onChange={(e) => setItem({...item, price: e.target.value})} className='w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md' placeholder="Qiymetini Yaziniz" />
                <input value={item.title} type='text' onChange={(e) => setItem({...item, title: e.target.value})} className='w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md' placeholder="Adini yaziniz" />
                <input value={item.image} type='text' onChange={(e) => setItem({...item, image: e.target.value})} className='w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md' placeholder="Sekil url'i yaziniz" />
            </div>
            <div className='flex items-center gap-5'>
                <Link href={'/products'}>
                    <button className="inline-block font-bold py-2 px-6 border-none outline-none bg-red-500 text-white rounded-xl text-[16px] transition-all hover:bg-opacity-85">Geri Qayit</button>
                </Link>
                <button onClick={addHandler} className="inline-block font-bold py-2 px-6 border-none outline-none bg-green-500 text-white rounded-xl text-[16px] transition-all hover:bg-opacity-85">Gonder</button>
            </div>
        </div>
    </>

  )

}

export default Create;