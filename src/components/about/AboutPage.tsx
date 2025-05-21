import Image from "next/image";
import SubHeading from "../heading/SubHeading";
import Link from "next/link";
import ScrollText from "./ScrollText";
import Story from "./Story";
import Mission from "./Mission";
import Process from "./Process";
import Staff from "../staff/Staff";

export default function AboutPage() {
  const aboutSubHeading = {
    text: "Who we",
    featuredText: "Are",
  };
  return (
    <section>
      <div className="wrapper">
        <div className="px-5 py-16 md:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center gap-16">
            <div className="flex flex-col gap-6 lg:max-w-lg">
              <SubHeading {...aboutSubHeading} />
              <div className="flex flex-col gap-6 text-lg">
                <p>
                  At Nords Bakery, we blend tradition with creativity to craft
                  fresh, artisanal baked goods every day. From our signature
                  sourdough loaves to decadent pastries and cakes, every item is
                  made with care using the finest ingredients. Our passion is
                  bringing people together over the simple joy of great bread
                  and sweet treats. Whether you’re stopping by for your morning
                  coffee, a family celebration, or just a moment of indulgence,
                  we’re here to make every visit warm, welcoming, and delicious.
                </p>
              </div>

              <Link
                href="/contact"
                className="tab opacity-100 flex items-center gap-3 bg-pink md:w-fit md:px-4 max-md:w-64 max-md:h-20 max-md:mx-auto"
              >
                <button className="">CONTACT US</button>
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

            <div className="rounded-[2rem] border-4">
              <Image
                src="/images/about-nords2.jpg"
                alt="smiling nords customer"
                width={1000}
                height={1000}
                className="object-cover md:aspect-square rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <ScrollText />
      </div>

      <Story />
      <Mission />
      <Process />
      <Staff />
    </section>
  );
}
