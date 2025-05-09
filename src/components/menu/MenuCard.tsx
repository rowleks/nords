import { MenuItem } from "@/types/types";
import Image from "next/image";

export default function MenuCard({ name, src, alt, price }: MenuItem) {
  return (
    <>
      <div className="flex flex-col gap-[1px]">
        <div className="product-card">
          <Image src={src} alt={alt} width={800} height={800} className="" />

          <span className="price">${price}</span>
        </div>
        <small className="text-lg md:text-xl ml-4">{name}</small>
      </div>
    </>
  );
}
