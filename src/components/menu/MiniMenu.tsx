"use client";

import { useState, useMemo } from "react";
import { burgers, sides, desserts } from "@/lib/data";
import MenuCard from "./MenuCard";
import Heading from "../heading/Heading";
import { HeadingType } from "@/types/types";

export default function MiniMenu() {
  const [activeTab, setActiveTab] = useState("burgers");

  const menuHeading: HeadingType = {
    text: "Our Tasty",
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
    <section className="py-24 bg-pink border-y-4">
      <div className="wrapper">
        <div className="flex flex-col gap-8">
          <Heading {...menuHeading} />

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

            <div className="ml-auto mt-4">
              <button className="tab opacity-100 bg-yellow w-fit">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
