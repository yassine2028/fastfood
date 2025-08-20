"use client"
import React, { useEffect, useState } from 'react'
import EditingForm from '../../../../components/EditingPopUp'
import { toast } from 'react-hot-toast';
import { Pen,  Trash } from 'lucide-react';

const Page = () => {

    const [meals, setMeals] = useState([]);
    const [editingMeal, setEditingMeal] = useState(null);

    useEffect(() => {
        fetch('/api/menu-item').then(res => res.json()).then(setMeals);
    }, []);


    const handleUpdate = async (id, formData) => {
        await fetch(`/api/menu-item/${id}`, {
            method: 'PUT', body: formData,
        });
        toast.success('Meal Updated');
        setEditingMeal(null);
        const refreshed = await fetch('/api/menu-item').then(res => res.json());
        setMeals(refreshed);
    };

    const handleDelete = async (id) => {
        const confirmed = confirm('are you sure you want to delete this item?')
        if (!confirmed) return;

        await fetch(`/api/menu-item/${id}`, { method: 'DELETE' })
        const refreshed = await fetch('/api/menu-item').then(res => res.json());
        setMeals(refreshed);
    }


    return (
        <>

            <main className='flex flex-col w-full p-10 space-y-10'>

                <div className='text-center '>
                    <h1 className='text-3xl md:text-4xl lg:text-7xl font-bold logo tracking-wider'>
                        Manage Your Menu
                    </h1>
                </div>


                <section className='relative'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>



                        {meals.map(meal => (
                            <div key={meal._id} >
                                {editingMeal?._id === meal._id ? (
                                    <EditingForm
                                        initialData={editingMeal}
                                        onSubmit={(formData) => handleUpdate(meal._id, formData)} 
                                        isEditing={setEditingMeal}
                                    />
                                ) : (
                                    <div className="flex flex-col  rounded-[20px]">
                                        <div className="bg-[#f1f2f3] flex justify-center items-center h-[250px] p-5 rounded-bl-2xl rounded-t-2xl">
                                            <img
                                                src={meal.imageUrl} alt={meal.name}
                                                className="max-h-[160px] max-w-full group-hover:scale-110 transition-all duration-300"
                                            />
                                        </div>

                                        <div className="flex flex-col text-white bg-gray-800 p-5 space-y-3 rounded-b-2xl">
                                            <h2 className="text-2xl font-bold outfit ">
                                                {meal.name}
                                            </h2>
                                            <p className="text-gray-300">{meal.description}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="logo text-3xl text-red-300">
                                                    {meal.price} MAD
                                                </span>
                                            </div>
                                            <div className='flex items-center justify-center gap-5 w-full'>
                                                <button
                                                    onClick={() => setEditingMeal(meal)}
                                                    className="bg-green-600/75 hover:bg-green-600 hover:scale-105 transtirion-all duration-300 text-white py-2 text-lg rounded-lg flex items-center justify-center gap-2 w-full"
                                                >
                                                    <Pen /> Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(meal._id)}
                                                    className="bg-red-600/75 hover:bg-red-600 hover:scale-105 transtirion-all duration-300 text-white py-2 text-lg rounded-lg  flex items-center justify-center gap-2 w-full"
                                                >
                                                    <Trash /> Delete
                                                </button>
                                            </div>
                                        </div>


                                    </div>
                                )}
                            </div>
                        ))}

                    </div>

                </section>

            </main>

        </>
    )
}

export default Page