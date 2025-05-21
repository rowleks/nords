"use client";
import { StepsType } from "@/types/types";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Steps({
  stepNumber,
  stepTitle,
  stepSubTitle,
  stepDescription,
  imageSrc,
  imageAlt,
}: StepsType) {
  return (
    <>
      <div className="hidden md:block">
        <h2 className="sticky top-[50vh] text-right">{stepTitle}</h2>
      </div>
      <div className="flex justify-center">
        <StickyStep>{stepNumber}</StickyStep>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="md:hidden text-[2.75rem]">{stepTitle}</h2>
        <p className="hidden md:block text-2xl font-medium">{stepTitle}</p>
        <p className="text-xl">{stepSubTitle}</p>
        <small className="text-small">{stepDescription}</small>
        <div className="rounded-[2rem] border-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1080}
            height={1080}
            className="object-cover aspect-square rounded-[2rem]"
          />
        </div>
      </div>
    </>
  );
}

function StickyStep({ children }: { children: React.ReactNode }) {
  // Observe a sentinel placed before the sticky element
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="relative flex flex-col items-center">
      {/* Sentinel: invisible, just above the sticky element */}
      <span ref={ref} className="absolute -top-80 h-1 w-1" />
      <span
        className={`rounded-full flex justify-center items-center w-[50px] h-[50px] sticky top-[50vh] outline-4 text-xl ${
          !inView ? "bg-pink" : "bg-white"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
