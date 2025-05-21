import Image from "next/image";
import SubHeading from "../heading/SubHeading";
import Link from "next/link";

export default function Mission() {
  const aboutSubHeading = {
    text: "Flavor with",
    featuredText: "Purpose",
  };
  return (
    <section>
      <div className="wrapper">
        <div className="px-5 py-16 md:py-32">
          <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-16">
            <div className="rounded-[2rem] border-4">
              <Image
                src="/images/mission.webp"
                alt="smiling nords customer"
                width={1280}
                height={1280}
                className="object-cover aspect-square rounded-[2rem]"
              />
            </div>

            <div className="flex flex-col gap-6 lg:max-w-lg">
              <p className="max-md:text-center text-lg text-red">Our Mission</p>
              <SubHeading {...aboutSubHeading} />
              <div className="flex flex-col gap-6 text-lg">
                <p>
                  Our mission is simple: to deliver fast, fresh, and flavorful
                  meals that bring joy to every bite. We’re dedicated to
                  creating a dining experience that combines quality
                  ingredients, exceptional taste, and unbeatable convenience.
                </p>
                <p>
                  Whether it’s a quick snack or a full meal, we strive to make
                  every moment with us unforgettable.
                </p>
              </div>

              <Link
                href="/menu"
                className="tab opacity-100 flex items-center gap-3 bg-pink md:w-fit md:px-4 max-md:w-64 max-md:h-20 max-md:mx-auto"
              >
                <button className="">OUR MENU</button>
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
