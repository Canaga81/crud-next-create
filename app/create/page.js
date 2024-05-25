"use client";

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';

const Create = () => {

    const [item, setItem] = useState({
        name: "",
        blog: "",
        img: "",
    });

    const addHandler = () => {

        try {
            axios.post('https://65034c35a0f2c1f3faebc287.mockapi.io/blog', item);
            alert("Person Create !");
            setItem({name: "", blog: "", img: ""})
        } catch (error) {
            alert("Person don't create" + error);
        }

    }

  return (

    <>

        <div className='flex flex-col items-center justify-center h-screen gap-5 py-7 px-6'>
            <div>
                <h1 className='font-bold text-[36px] tracking-[3px] text-center'>Create Person</h1>
            </div>
            <div className='flex flex-col gap-4 items-center w-full max-w-[600px]'>
                <input value={item.name} type='text' onChange={(e) => setItem({...item, name: e.target.value})} className='w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md' placeholder="Adini Yaziniz" />
                <input value={item.blog} type='text' onChange={(e) => setItem({...item, blog: e.target.value})} className='w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md' placeholder="Haqqinda melumat yaziniz" />
                <input value={item.img} type='text' onChange={(e) => setItem({...item, img: e.target.value})} className='w-full inline-block border-none outline-none text-xl font-normal bg-slate-200 text-black placeholder:text-black/70 py-3 px-10 rounded-md' placeholder="Sekil url'i yaziniz" />
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