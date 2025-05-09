import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="mt-10 pb-15">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center md:px-8">
          <div className="flex-1">
            <h1 className="heading text-10rem max-xs:text-[17vw] text-center text-stroke-3">
              Savor every delicious{" "}
              <span className="featured text-stroke-6 max-sm:-top-1">Bite</span>
            </h1>
          </div>

          <div className="flex items-center justify-center overflow-clip flex-1">
            <Image
              src="/images/home-hero2.png"
              alt="Happy customer eating burger"
              width={620}
              height={260}
              className="object-contain aspect-square"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
