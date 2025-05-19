"use client";

import { useState, useMemo } from "react";
import { burgers, sides, desserts } from "@/lib/data";
import MenuCard from "./MenuCard";
import Heading from "../heading/Heading";
import { HeadingType } from "@/types/types";

export default function FullMenu() {
  const [activeTab, setActiveTab] = useState("burgers");

  const menuHeading: HeadingType = {
    text: "Our Delicious",
    featuredText: "Menu",
  };

  const menuItems = useMemo(() => {
    switch (activeTab) {
      case "burgers":
        return burgers;
      case "sides":
        return sides;
      case "desserts":
        return desserts;
      default:
        return [];
    }
  }, [activeTab]);

  return (
    <section className="py-20">
      <div className="px-5 md:px-8">
        <div className="flex flex-col gap-8">
          <div className="text-center mb-5">
            <div className="max-w-3xl text-center mx-auto">
              <Heading {...menuHeading} />
            </div>
            <span className="max-w-xl">
              Explore our mouthwatering menu filled with flavorful options to
              satisfy every craving.
            </span>
          </div>

          <div className="flex flex-col gap-12 px-5 md:px-8">
            <div className="flex md:items-center gap-4 justify-center flex-wrap">
              <button
                className={`tab ${
                  activeTab === "burgers" ? "opacity-100 bg-yellow" : ""
                }`}
                onClick={() => setActiveTab("burgers")}
              >
                BURGERS
              </button>
              <button
                className={`tab ${
                  activeTab === "sides" ? "opacity-100 bg-yellow" : ""
                }`}
                onClick={() => setActiveTab("sides")}
              >
                SIDES
              </button>
              <button
                className={`tab ${
                  activeTab === "desserts" ? "opacity-100 bg-yellow" : ""
                }`}
                onClick={() => setActiveTab("desserts")}
              >
                DESSERTS
              </button>
            </div>

            <div
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-in"
            >
              {menuItems.map((item, index) => (
                <MenuCard key={index} {...item} />
              ))}
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="tab bg-yellow w-fit">PREV</button>
              <button className="tab opacity-100 bg-yellow w-fit">NEXT</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
