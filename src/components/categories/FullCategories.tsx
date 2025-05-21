import { categories } from "@/lib/data";
import CategoryCard from "./CategoryCard";
import Heading from "../heading/Heading";
import Link from "next/link";

export default function FullCategories() {
  const CategoriesHeading = {
    text: "Discover Your",
    featuredText: "favourites",
  };

  return (
    <section>
      <div className="px-5 md:px-8 max-w-[90rem] mx-auto">
        <div className="py-16 md:py-32 flex flex-col gap-12 md:gap-16">
          <div className="text-center max-w-4xl mx-auto">
            <Heading {...CategoriesHeading} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((item, index) => (
              <Link href={`/categories/${item.name.toLowerCase()}`} key={index}>
                <CategoryCard {...item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
