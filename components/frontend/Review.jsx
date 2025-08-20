"use client";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

export const Review = () => {
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center justify-center gap-5 space-y-3">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold logo ">
              Our Customers' Reviews
            </h2>
          </div>

          <div className="mt-5 w-full p-5">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 3000, // Time in milliseconds between slides
                disableOnInteraction: true, // Keeps autoplay running even after user interaction
              }}
              loop={true}
              navigation={true}
              spaceBetween={30}
              slidesPerView={2.5}
              breakpoints={{
                1399: { slidesPerView: 2.5 },
                1199: { slidesPerView: 2 },
                991: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
              style={{ padding: "10px" }}
            >
              <SwiperSlide className="p-10">
                <div className="flex flex-col items-center py-5 justify-center bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <img
                    src="/Images/client1.jpg"
                    alt=""
                    className="h-35 w-35 rounded-full"
                  />

                  <div className="flex flex-col items-center justify-center px-5 py-2 space-y-3">
                    <h2 className="font-bold text-white text-2xl md:text-3xl outfit ">
                      Moana Michell
                    </h2>
                    <p className="font-semibold text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur obcaecati sint suscipit! Iure, a eius error
                      accusantium quia alias. Quae facilis doloribus fuga illum
                      voluptas laborum aspernatur magnam dolorum in!
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="p-10">
                <div className="flex flex-col items-center py-5 justify-center bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <img
                    src="/Images/client2.jpg"
                    alt=""
                    className="h-35 w-35 rounded-full"
                  />

                  <div className="flex flex-col items-center justify-center px-5 py-2 space-y-3">
                    <h2 className="font-bold text-white text-2xl md:text-3xl outfit ">
                      Mike Hammel
                    </h2>
                    <p className="font-semibold text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur obcaecati sint suscipit! Iure, a eius error
                      accusantium quia alias. Quae facilis doloribus fuga illum
                      voluptas laborum aspernatur magnam dolorum in!
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="p-10">
                <div className="flex flex-col items-center py-5 justify-center bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <img
                    src="/Images/client1.jpg"
                    alt=""
                    className="h-35 w-35 rounded-full"
                  />

                  <div className="flex flex-col items-center justify-center px-5 py-2 space-y-3">
                    <h2 className="font-bold text-white text-2xl md:text-3xl outfit ">
                      Moana Michell
                    </h2>
                    <p className="font-semibold text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur obcaecati sint suscipit! Iure, a eius error
                      accusantium quia alias. Quae facilis doloribus fuga illum
                      voluptas laborum aspernatur magnam dolorum in!
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="p-10">
                <div className="flex flex-col items-center py-5 justify-center bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <img
                    src="/Images/client2.jpg"
                    alt=""
                    className="h-35 w-35 rounded-full"
                  />

                  <div className="flex flex-col items-center justify-center px-5 py-2 space-y-3">
                    <h2 className="font-bold text-white text-2xl md:text-3xl outfit ">
                      Mike Hammel
                    </h2>
                    <p className="font-semibold text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur obcaecati sint suscipit! Iure, a eius error
                      accusantium quia alias. Quae facilis doloribus fuga illum
                      voluptas laborum aspernatur magnam dolorum in!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
