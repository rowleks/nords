import FullCategories from "@/components/categories/FullCategories";
import Faqs from "@/components/faqs/Faqs";
import Reviews from "@/components/reviews/Reviews";

export default function page() {
  return (
    <>
      <main>
        <FullCategories />
        <Reviews />
        <Faqs />
      </main>
    </>
  );
}
