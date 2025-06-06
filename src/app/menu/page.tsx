import Faqs from "@/components/faqs/Faqs";
import FullMenu from "@/components/menu/FullMenu";
import Reviews from "@/components/reviews/Reviews";

export default function page() {
  return (
    <>
      <main>
        <FullMenu />
        <Reviews />
        <Faqs />
      </main>
    </>
  );
}
