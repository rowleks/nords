import HomeHero from "@/components/hero/HomeHero";
import MiniMenu from "@/components/menu/MiniMenu";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <>
      <main>
        <HomeHero />
        <MiniMenu />
        <Reviews />
      </main>
    </>
  );
}
