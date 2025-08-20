import React from 'react'

export const About = () => {
  return (
    <section className='relative bg-gray-800'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 '>

            <div className='p-10 md:'>
                <img src="Images/about-img.png" alt="" />
            </div>

            <div className='flex flex-col space-y-4 text-start justify-center'>
                <h2 className='text-white text-5xl outfit font-bold tracking-wider'>
                    We Are The Best!
                </h2>
                <p className='text-gray-300 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quam cupiditate a enim harum vitae. Quo beatae excepturi sed. Aliquam facilis veniam ab fugiat eum cupiditate ea omnis exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore error veritatis vel sint iure voluptate quae, excepturi praesentium voluptatibus debitis!
                </p>
                {/* <a href="/about" className="bg-yellow-500 hover:bg-yellow-400 text-white transition-all duration-300 hover:scale-110 px-4 py-2 outfit text-lg sm:text-2xl rounded-lg cursor-pointer w-fit font-semibold">
                    Learn More
                </a> */}
            </div>

        </div>

    </section>
  )
}
