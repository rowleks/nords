import Image from "next/image";
import SubHeading from "../heading/SubHeading";
import Link from "next/link";

export default function Story() {
  const aboutSubHeading = {
    text: "Where it all",
    featuredText: "Began",
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
              <p className="max-md:text-center text-lg text-red">Our Story</p>
              <SubHeading {...aboutSubHeading} />
              <div className="flex flex-col gap-6 text-lg">
                <p>
                  We started with the love of good food and the vision of
                  redefining the concept of fast food. What began as a small
                  idea has grown into a place where taste, quality and community
                  come together.
                </p>
                <p>
                  From our first burger to every meal we serve today, our story
                  is about passion, innovation, and a commitment to making every
                  life sweet.
                </p>
              </div>

              <Link
                href="/menu"
                className="tab opacity-100 flex items-center gap-3 bg-pink md:w-fit md:px-4 max-md:mx-auto md:ml-auto max-md:w-64 max-md:h-20"
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
