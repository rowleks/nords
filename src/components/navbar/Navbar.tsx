"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuToggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuToggleRef.current &&
        !menuToggleRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100;

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 bg-yellow py-6 md:py-5 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-5 md:px-10">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex items-center justify-between gap-15">
            <Link href="/" className="cursor-pointer relative z-20">
              <Image
                src="/images/nords-logo-black.png"
                alt="nords bakery logo"
                width={125}
                height={40}
              />
            </Link>

            <div ref={navRef} className="flex items-center gap-4 relative z-30">
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
                ref={menuToggleRef}
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

      <div
        ref={navRef}
        className={`absolute top-0 left-0 w-full transition-transform duration-700 delay-500 z-10 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavLinks />
      </div>
    </header>
  );
}
