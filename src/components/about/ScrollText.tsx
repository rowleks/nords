"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollText() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  // Move -200px to 200px as you scroll from 0 to 1000px
  const x = useTransform(scrollY, [0, 1000], [200, -200]);

  return (
    <div ref={ref} className="overflow-clip">
      <motion.h1
        style={{ x }}
        className="heading text-15rem max-xs:text-[17vw] text-center text-stroke-3 xl:text-[12rem] lg:text-[10rem] overflow-clip"
      >
        Life is{" "}
        <span className="featured text-stroke-6 max-sm:-top-1 lg:text-[8rem]">
          Sweet!
        </span>
      </motion.h1>
    </div>
  );
}
