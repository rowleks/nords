import { HeadingType } from "@/types/types";

export default function Heading({ text, featuredText }: HeadingType) {
  return (
    <>
      <h2 className="heading text-center">
        {text} <span className="featured text-stroke-6">{featuredText}</span>
      </h2>
    </>
  );
}
