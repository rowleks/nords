import { CategoryType } from "@/types/types";
import Image from "next/image";

export default function CategoryCard({ name, src, alt }: CategoryType) {
  return (
    <>
      <div className="flex flex-col gap-[1px]">
        <div className="product-card">
          <Image src={src} alt={alt} width={800} height={800} className="" />

          <span className="price">{name}</span>
        </div>
      </div>
    </>
  );
}
