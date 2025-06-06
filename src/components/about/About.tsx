import Image from "next/image";
import SubHeading from "../heading/SubHeading";
import Link from "next/link";

export default function About() {
  const aboutSubHeading = {
    text: "Made with love",
    featuredText: "Daily",
  };
  return (
    <section>
      <div className="wrapper">
        <div className="px-5 py-16 md:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16">
            <div className="rounded-[2rem] border-4">
              <Image
                src="/images/about-img.webp"
                alt="smiling nords customer"
                width={1280}
                height={1280}
                className="object-cover aspect-square rounded-[2rem]"
              />
            </div>

            <div className="flex flex-col gap-6 lg:max-w-lg">
              <SubHeading {...aboutSubHeading} />
              <div className="flex flex-col gap-6 text-lg">
                <p>
                  At Nord&apos;s Bakery, we believe that the simplest pleasures
                  in life often bring the most joy. Freshly baked goods, made
                  with love and care, have the power to bring people together
                  and make life a little sweeter.
                </p>
                <p>
                  Our bakery is dedicated to providing you with the most
                  delicious and satisfying treats, perfect for any occasion.
                  Whether you&apos;re celebrating a special day or just need a
                  pick-me-up, we&apos;re here to help make your day a little
                  brighter.
                </p>
              </div>

              <Link
                href="/about"
                className="tab opacity-100 flex items-center gap-3 bg-pink md:w-fit md:px-4 ml-auto max-md:w-56 max-md:h-20"
              >
                <button className="">ABOUT US</button>
                <div className="arrow">
                  <Image
                    src="/icons/arrow.svg"
                    alt="arrow icon"
                    width={10}
                    height={11}
                    className="object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
