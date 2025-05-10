import { HeadingType } from "@/types/types";

export default function SubHeading({ text, featuredText }: HeadingType) {
  return (
    <>
      <h3 className="heading max-lg:text-center">
        {text} <span className="featured text-stroke-6">{featuredText}</span>
      </h3>
    </>
  );
}
