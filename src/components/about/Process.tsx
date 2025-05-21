"use client";

import SubHeading from "../heading/SubHeading";
import Steps from "./Steps";
import { stepsData } from "@/lib/data";

export default function Process() {
  const aboutSubHeading = {
    text: "Fresh, Fast,",
    featuredText: "Flawless",
  };
  return (
    <section>
      <div className="wrapper">
        <div className="px-5 md:px-10 py-16 md:py-32">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
                <p className="max-md:text-center text-lg text-red">
                  Our Process
                </p>
                <SubHeading {...aboutSubHeading} />
              </div>
              <div className="flex flex-col justify-center items-center max-w-[1120px] mx-auto relative mt-10">
                <div className="grid grid-cols-[48px_1fr] md:grid-cols-[1fr_180px_1fr] relative pb-24 z-10 gap-y-20 max-md:gap-x-5">
                  <span className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-1 bg-[#414141] h-full -z-10"></span>
                  {stepsData.map((step, index) => (
                    <Steps key={index} {...step} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
