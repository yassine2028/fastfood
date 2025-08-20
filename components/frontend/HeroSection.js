import Image from "next/image";
import React from "react";
import banner from "../../public/hero-bg.jpg";
import Link from "next/link";


export const  HeroSection =  () => {

 

  return (
    <>
      <section className="relative h-[80vh]">
        <Image src={banner} alt="Home Banner" fill className="hidden sm:flex sm:object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex flex-col items-start  justify-center text-white text-center px-4">
          <div  className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center text-white text-center sm:text-start px-4 space-y-4">
            <h1 className="text-2xl sm:text-4xl font-bold outfit">
              The Best Fast Food Shop in Town
            </h1>
            <p className="text-sm sm:text-lg text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus reprehenderit at eligendi, a quisquam similique?
              Quidem mollitia ex quam quos.
            </p>
            <Link href={'menu'}>
              <button className="bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 px-4 py-2 outfit text-lg sm:text-xl rounded-lg cursor-pointer">
                Check Our Menu 
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
