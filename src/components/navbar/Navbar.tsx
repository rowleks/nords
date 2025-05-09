"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative py-6 md:py-5">
      <div className="px-5 md:px-10">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex items-center justify-between gap-15">
            <Link href="/" className="cursor-pointer relative z-20">
              <Image
                src="/images/nords-logo-black.png"
                alt="nords logo"
                width={125}
                height={40}
              />
            </Link>

            <div className="flex items-center gap-4 relative z-30">
              <div className="relative min-w-11 cursor-pointer hover:translate-x-1.5 transition-all duration-300">
                <Image
                  src="/icons/cart-icon.svg"
                  alt="cart icon"
                  width={24}
                  height={24}
                />
                <div
                  className={`cart-quantity ${
                    isMenuOpen ? "border-pink" : "border-yellow"
                  } `}
                >
                  <span>0</span>
                </div>
              </div>

              <div
                aria-label="menu"
                role="button"
                aria-expanded={isMenuOpen}
                className="btn py-2 px-3 md:py-2.5 overflow-clip"
                onClick={toggleMenu}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm md:text-lg font-semibold">MENU</span>
                  <div className="flex flex-col gap-[1.5px] md:gap-[0.9px] w-9 h-9">
                    <Image
                      src="/icons/burger-top.svg"
                      alt="hamburger menu"
                      width={38}
                      height={18}
                      className={`transition-all duration-300 ${
                        isMenuOpen ? "top-open" : "close"
                      }`}
                    />
                    <Image
                      src="/icons/burger-middle.svg"
                      alt="hamburger menu"
                      width={38}
                      height={18}
                      className={`transition-all duration-700 ease-out relative ${
                        isMenuOpen ? "mid-open" : "close"
                      }`}
                    />
                    <Image
                      src="/icons/burger-bottom.svg"
                      alt="hamburger menu"
                      width={38}
                      height={18}
                      className={`transition-all duration-300 ${
                        isMenuOpen ? "bottom-open" : "close"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding NavLinks */}
      <div
        className={`absolute top-0 left-0 w-full transition-transform duration-700 delay-500 z-10 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavLinks />
      </div>
    </header>
  );
}
