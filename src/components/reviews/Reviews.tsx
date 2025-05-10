"use client";

import React from "react";
import Image from "next/image";
import Heading from "../heading/Heading";
import Star from "./Star";
import { reviews } from "@/lib/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Reviews() {
  const reviewsHeading = {
    text: "Reviews from our happy",
    featuredText: "Customers",
  };

  return (
    <section className="py-24">
      <div className="max-w-[70rem] mx-auto">
        <div className="flex flex-col px-5 md:px-8">
          <div className="">
            <Heading {...reviewsHeading} />
          </div>

          <div className="md:mt-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={false}
              pagination={{ clickable: true }}
              className="review-swiper min-h-[30rem]"
            >
              {reviews.map((review, index) => (
                <SwiperSlide className="" key={index}>
                  <div className="flex flex-col gap-5 relative items-center">
                    <div className="flex items-center gap-1 my-5 mx-auto">
                      {[...Array(5)].map((_, i) => (
                        <Star filled={i < review.rating} key={i} />
                      ))}
                    </div>

                    <div className="text-center grid gap-6 cursor-grabbing">
                      <p className="text-lg max-w-2xl">
                        &quot;{review.comment}&quot;
                      </p>

                      <div className="grid gap-0.5">
                        <b className="text-lg">{review.name}</b>
                        <small>{review.occupation}</small>
                      </div>
                    </div>

                    <div className="border-3 rounded-full">
                      <Image
                        src={review.avatar}
                        alt="happy client"
                        width={90}
                        height={90}
                        className="rounded-full"
                      />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-5 -z-10">
                      <Image
                        src="/icons/quote-icon.svg"
                        alt="quote icon"
                        width={400}
                        height={400}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
