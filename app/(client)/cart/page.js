"use client"
import React, { useContext, useState } from 'react'
import { CartContext, cartProductPrice } from '../../../lib/AppContext'
import { Mail, MapPin, Phone, Send, Trash2, User, Wallet } from 'lucide-react';
import Image from 'next/image'

const page = () => {

    const { cartProducts, removeCartProduct, clearCart } = useContext(CartContext);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    

    

    let total = 0;

    for (const p of cartProducts) {
        total += cartProductPrice(p);
    }

    // Inside your Cart component
    const handlePlaceOrder = async () => {
        const orderPayload = {
            items: cartProducts.map(product => ({
                product: product._id,
                size: product.size
                ,
                extras: product.extras,  // [{ name, price }, …]
            })),
            total: total,
            customer: { phone, address },
        };

        const res = await fetch('/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderPayload),
        });

        if (res.ok) {
            alert('Votre commande a été enregistrée !');
            clearCart();        // your cart-clear logic
            // or navigate to a “Thank you” page
        } else {
            alert('Erreur lors de la création de la commande.');
        }
    };

    return (
        <>

            <section className="mt-8 h-full">

                <div className="text-center pb-10 ">
                    <h2 className="text-2xl sm:text-4xl md:text-8xl font-bold text-red-600 logo border-b-2 border-dashed">
                        CheckOut
                    </h2>
                </div>

                <div className="grid gap-4  lg:grid-cols-2 my-7">

                    <div className='px-5 pb-8'>
                        {cartProducts.length === 0 && (
                            <div>Aucun Produit Pour Le Moment</div>
                        )}
                        {cartProducts.length > 0 && cartProducts.map((product, index) => (

                            <div key={index} className='flex items-center gap-2 lg:gap-4 mb-4 border-b-2 border-sky-500 border-dashed py-4 '>

                                <div className='w-32 '>
                                    <img
                                        src={product.imageUrl}
                                        alt="img"
                                        className="max-h-[160px] mx-auto max-w-full group-hover:scale-110 transition-all duration-300"
                                    />
                                </div>

                                <div className='lg:grow'>
                                    <h3 className='text-red-500 font-semibold text-2xl outfit'>

                                        {product.name}
                                    </h3>
                                    {product.size && (
                                        <div className='text-lg text-gray-500 font-semibold'>
                                            Taille: <span className='text-black font-bold'>{product.size.name}</span>
                                        </div>
                                    )}
                                    {product.extras && (
                                        <div className='text-lg font-semibold text-gray-500'>
                                            Extras:
                                            {product.extras.map((extra, index) => (
                                                <div className='text-black font-bold' key={index}>
                                                    {extra.name} {extra.price}MAD
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className='font-black logo text-sm lg:text-xl text-green-700 ' >
                                    {cartProductPrice(product)}MAD
                                </div>

                                <div className='sm:ml-0 ml-2 '>
                                    <button
                                        type='button'
                                        onClick={() => removeCartProduct(index)}
                                        className='border hover:border-white p-2 text-red-600 hover:bg-red-600 hover:text-white border-red-600 rounded-lg cursor-pointer transition-all duration-300'>
                                        <Trash2 />
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className='py-2 text-right pr-15 font-semibold text-gray-500'>
                            Total: <span className=' font-bold text-green-700'>{total}MAD</span>
                        </div>
                    </div>

                    <div className='w-full px-[5%] bg-white rounded-[20px] border border-gray-300 shadow-xl relative py-10 z-10 '>
                        <h2 className="text-4xl font-bold black outfit border-b-2 mb-8">
                            Delivery Information
                        </h2>
                        <form className="space-y-6" onSubmit={e => { e.preventDefault(); handlePlaceOrder(); }}>


                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-semibold uppercase text-font'>
                                    Phone Number
                                </label>
                                <div className='flex items-center bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200 '>
                                    <Phone className='text-[#10b4d1] w-5 h-5 mx-4 animate-pulse' />
                                    <input value={phone} onChange={ev => setPhone(ev.target.value)} type="tel" placeholder="Enter Your Phone Number" className='w-full bg-transparent outline-none text-font placeholder:text-font/60' required />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-semibold uppercase text-font'>
                                    Address
                                </label>
                                <div className='flex items-center bg-[#f0fbfb] border border-[#d0e7ea] rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#10b4d1] transition-all duration-200 '>
                                    <MapPin className='text-[#10b4d1] w-5 h-5 mx-4 animate-pulse' />
                                    <input type="text" placeholder="Enter Your Address here" className='w-full bg-transparent outline-none text-font placeholder:text-font/60' required value={address} onChange={ev => setAddress(ev.target.value)} />
                                </div>
                            </div>

                            <button className='bg-[#f2c94c] hover:bg-[#e6b326] text-white px-10 py-3 text-lg rounded-full font-semibold tracking-widest hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 mx-auto' type='submit'>
                                <Wallet className='w-5 h-5' /> Place Order ({total}MAD)
                            </button>


                        </form>
                    </div>

                    {/* <div className='bg-gray-200 mx-4 rounded-lg h-fit'>
                        <h1 className='text-2xl text-center py-3 text-black'>Vos Informations</h1>
                        <form className='px-4 py-2 ' onSubmit={e => { e.preventDefault(); handlePlaceOrder(); }}>
                            <label className="text-gray-700 text-md leading-tight">Phone</label>
                            <input
                                className="block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100"

                                type="tel" placeholder="Phone number"
                                value={phone} onChange={ev => setPhone(ev.target.value)} />
                            <label className="text-gray-700 text-md leading-tight">Street address</label>
                            <input className="block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100"

                                type="text" placeholder="Street address"
                                value={address} onChange={ev => setAddress(ev.target.value)}
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="text-gray-700 text-md leading-tight">Postal code</label>
                                    <input className="block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100"

                                        type="text" placeholder="Postal code"
                                        value={postalCode} onChange={ev => setPostalCode(ev.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-700 text-md leading-tight">City</label>
                                    <input className="block w-full mb-2 rounded-xl border p-2 border-gray-300 bg-gray-100"

                                        type="text" placeholder="City"
                                        value={city} onChange={ev => setCity(ev.target.value)}
                                    />
                                </div>
                            </div>

                            <button type='submit' className="w-full py-3 text-lg bg-orange-600 text-white font-semibold rounded-lg hover:scale-105 active:scale-90 hoverEffect cursor-pointer ">Payer ${total}</button>

                        </form>
                    </div> */}


                </div>
            </section>

        </>
    )
}

export default page