"use client"
import { X } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const MealsPage = () => {

    const [form, setForm] = useState({ name: '', description: '', price: '' })
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [sizes, setSizes] = useState([{ name: '', price: '' }])
    const [extras, setExtras] = useState([{ name: '', price: '' }])

    // console.log(categoryId);
    

    function fetchCategories() {
        fetch('/api/category').then(res => {
            res.json().then(categories => {
                setCategories(categories)
            })
        })
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('price', form.price);
        formData.append('category', categoryId);
        formData.append('sizes', JSON.stringify(sizes));
        formData.append('extras', JSON.stringify(extras));
        formData.append('image', file)

        const res = await fetch('/api/menu-item/upload', {
            method: 'POST', body: formData,
        });

        if(res.ok) toast.success('Product Added Successfully!!')
    }


    return (
        <>

            <main className='flex flex-col w-full p-10 space-y-10'>

                <div className='text-center '>
                    <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold logo tracking-wider'>
                        Add A Meal
                    </h1>
                </div>

                <section className='relative space-y-5'>




                    <div className=' w-full p-8 '>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full mx-auto px-6 space-y-5">
                            
                            {/* The Meal's Name */}
                            <div className='flex flex-col gap-3'>
                                <label className='text-2xl font-bold outfit text-gray-700'>
                                    The Name of The Meal:
                                </label>
                                <input name='name' onChange={e => setForm({ ...form, name:e.target.value})} type='text' placeholder='Enter The Name of The Meal' className='bg-gray-200 p-4 outline-none  text-xl outfit font-semibold rounded-2xl focus-within:ring-4 focus-within:ring-green-500 text-gray-900' />
                            </div>

                            {/* The Meal's Description */}
                            <div className='flex flex-col gap-3'>
                                <label className='text-2xl font-bold outfit text-gray-700'>
                                    The Description:
                                </label>
                                <textarea name='description' onChange={e => setForm({ ...form, description:e.target.value})} rows={3} type='text' placeholder='Enter The Description Here' className='bg-gray-200 p-4 outline-none  text-xl outfit font-semibold rounded-2xl focus-within:ring-4 focus-within:ring-green-500 text-gray-900' />
                            </div>
                            
                            {/* The Meal's Price */}
                            <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                                <div className='flex flex-col gap-3 w-1/2'>
                                    <label className='text-2xl font-bold outfit text-gray-700'>
                                        The Price:
                                    </label>
                                    <input onChange={e => setForm({ ...form, price:e.target.value})} name='price' type='number' placeholder='Enter The Price Here' className='bg-gray-200 p-4 outline-none  text-xl outfit font-semibold rounded-2xl focus-within:ring-4 focus-within:ring-green-500 text-gray-900' />
                                </div>

                                <div className='flex flex-col gap-3 w-1/2'>
                                    <label className='text-2xl font-bold outfit text-gray-700'>
                                        The Category:
                                    </label>
                                    <select value={categoryId} onChange={e => setCategoryId(e.target.value)} required className='bg-gray-200 p-4 outline-none  text-xl outfit font-semibold rounded-2xl focus-within:ring-4 focus-within:ring-green-500 text-gray-900 '>
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat._id} value={cat._id} >{cat.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            
                            {/* The Meal's Picture */}
                            <div className='flex flex-col gap-3'>
                                <label className='text-2xl font-bold outfit text-gray-700'>
                                    The Image:
                                </label>
                                <label className=" mb-1 cursor-pointer bg-green-800 text-white font-semibold hover:scale-110 transition-all duration-300  px-4 py-2 rounded inline-block w-fit">
                                    Add a Picture
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={e => setFile(e.target.files[0])}
                                    />
                                </label>
                            </div>

                            {/* Sizes */}
                            <div className='flex flex-col gap-3 w-1/2'>
                                <label className='text-2xl font-bold outfit text-gray-700'>
                                    The Sizes:
                                </label>

                                {sizes.map((size, i) => (
                                    <div className='flex gap-5 items-center' key={i}>
                                        <input value={size.name} onChange={e => {
                                            const copy = [...sizes];
                                            copy[i].name = e.target.value;
                                            setSizes(copy)
                                        }} type='text' placeholder='The Size' className='bg-gray-200 p-4 outline-none  text-xl outfit font-semibold rounded-2xl focus-within:ring-4 focus-within:ring-green-500 text-gray-900' />
                                        <input value={size.price} onChange={e => {
                                            const copy = [...sizes];
                                            copy[i].price = e.target.value;
                                            setSizes(copy)
                                        }} type='number' placeholder='The Price' className='bg-gray-200 p-4 outline-none  text-xl outfit font-semibold rounded-2xl focus-within:ring-4 focus-within:ring-green-500 text-gray-900' />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const copy = sizes.filter((_, index) => index !== i);
                                                setSizes(copy);
                                            }}
                                            className="text-white bg-red-600 hover:scale-110 transition-all duration-300 cursor-pointer px-2 h-10 w-10 rounded-full justify-center "
                                        >
                                            <X />
                                        </button>

                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => setSizes([...sizes, { name: '', price: '' }])}
                                    className="cursor-pointer bg-green-800 text-white font-semibold hover:scale-110 transition-all duration-300  px-4 py-2 rounded inline-block w-fit"
                                >
                                    + Add a Size
                                </button>

                            </div>

                            {/* Extras */}
                            <div className='flex flex-col gap-3 w-1/2'>
                                <label className='text-2xl font-bold outfit text-gray-700'>
                                    The Extras:
                                </label>

                                {extras.map((extra, i) => (
                                    <div className='flex gap-5 items-center' key={i}>
                                        <input value={extra.name} onChange={e => {
                                            const copy = [...extras];
                                            copy[i].name = e.target.value;
                                            setExtras(copy)
                                        }}  placeholder='The Extra' className='bg-gray-200 p-4 outline-none  text-xl outfit font-semibold rounded-2xl focus-within:ring-4 focus-within:ring-green-500 text-gray-900' />
                                        <input value={extra.price} onChange={e => {
                                            const copy = [...extras];
                                            copy[i].price = e.target.value;
                                            setExtras(copy)
                                        }} type='number' placeholder='The Price' className='bg-gray-200 p-4 outline-none  text-xl outfit font-semibold rounded-2xl focus-within:ring-4 focus-within:ring-green-500 text-gray-900' />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const copy = extras.filter((_, index) => index !== i);
                                                setExtras(copy);
                                            }}
                                            className="text-white bg-red-600 hover:scale-110 transition-all duration-300 cursor-pointer px-2 h-10 w-10 rounded-full justify-center "
                                        >
                                            <X />
                                        </button>

                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => setExtras([...extras, { name: '', price: '' }])}
                                    className="cursor-pointer bg-green-800 text-white font-semibold hover:scale-110 transition-all duration-300  px-4 py-2 rounded inline-block w-fit"
                                >
                                    + Add an Extra
                                </button>

                            </div>

                            <button type="submit" className="bg-green-800/75 hover:bg-green-800 hover:scale-105 transtirion-all duration-300 text-white py-2 text-lg rounded-lg ">Add Product</button>

                        </form>
                    </div>



                </section>

            </main>

        </>
    )
}

export default MealsPage