import { categories } from "@/lib/data";
import CategoryCard from "./CategoryCard";
import Heading from "../heading/Heading";
import Link from "next/link";

export default function MiniCategories() {
  const miniCategoriesHeading = {
    text: "Explore Our",
    featuredText: "Categories",
  };

  return (
    <section>
      <div className="wrapper">
        <div className="px-5 py-16 md:py-32 flex flex-col gap-8 md:gap-12">
          <div className="text-center">
            <Heading {...miniCategoriesHeading} />
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
