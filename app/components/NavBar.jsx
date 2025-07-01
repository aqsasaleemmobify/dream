"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkActiveSection = () => {
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;

        if (currentPath === "/" && currentHash === "#about") {
          setActive("ABOUT");
        } else if (currentPath === "/") {
          setActive("HOME");
        } else if (currentPath === "/portfolio") {
          setActive("PORTFOLIO");
        } else if (currentPath === "/contact") {
          setActive("CONTACT");
        } else if (currentPath === "/privacy-policy") {
          setActive("PRIVACY");
        } else {
          setActive("");
        }
      }
    };

    checkActiveSection();

    // Optional: Listen for hash change
    window.addEventListener("hashchange", checkActiveSection);

    return () => {
      window.removeEventListener("hashchange", checkActiveSection);
    };
  }, [pathname]);

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="pt-10">
      <div className="flex justify-between items-center px-4 max-w-[1440px] mx-auto">
        <Image
          onClick={handleClick}
          src="/images/DreamlandLogo.svg"
          width={200}
          height={75}
          alt="logo"
          className="md:w-[200px] w-[150px]"
        />
        <div className="flex items-center gap-8">
          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8">
            <li
              onClick={() => {
                setActive("HOME");
                setIsOpen(false);
              }}
              className={`cursor-pointer text-base ${
                active === "HOME"
                  ? "border-b-2 border-b-[#FF9C0E] font-bold text-white "
                  : "text-white font-medium"
              }`}
            >
              <Link href="/">HOME</Link>
            </li>
            <li
              onClick={() => {
                setActive("ABOUT");
                setIsOpen(false);
              }}
              className={`cursor-pointer text-base ${
                active === "ABOUT"
                  ? "border-b-2 border-b-[#FF9C0E] font-bold text-white "
                  : "text-white font-medium"
              }`}
            >
              <Link href="/?#about">ABOUT</Link>
            </li>
            <li
              onClick={() => {
                setActive("PORTFOLIO");
                setIsOpen(false);
              }}
              className={`cursor-pointer text-base ${
                active === "PORTFOLIO"
                  ? "border-b-2 border-b-[#FF9C0E] font-bold text-white "
                  : "text-white font-medium"
              }`}
            >
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li
              className={`cursor-pointer text-base ${
                active === "CONTACT"
                  ? "border-b-2 border-b-[#FF9C0E] font-bold text-white "
                  : "text-white font-medium"
              }`}
            >
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
          <a
            href="https://play.google.com/store/apps/dev?id=6508553873090680206&hl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="md:block hidden">
              <Image
                src="/images/English.svg"
                width={120}
                height={40}
                alt="button"
              />
            </button>
          </a>
        </div>
        {/* Burger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <svg
              width={26}
              height={21}
              viewBox="0 0 26 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H25"
                stroke="white"
                strokeWidth={1.97939}
                strokeLinecap="round"
              />
              <path
                d="M1 19.6207H25"
                stroke="white"
                strokeWidth={1.97939}
                strokeLinecap="round"
              />
              <path
                d="M6.32031 10.5182L24.5272 10.5182"
                stroke="white"
                strokeWidth={1.97939}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10">
          <li
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer text-lg ${
              active === "HOME"
                ? "border-b-2 border-b-[#FF9C0E] font-bold text-black"
                : "text-black font-medium"
            }`}
          >
            <Link href="/">HOME</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer text-lg ${
              active === "ABOUT"
                ? "border-b-2 border-b-[#FF9C0E] font-bold text-black"
                : "text-black font-medium"
            }`}
          >
            <Link href="/?#about">ABOUT</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer text-lg ${
              active === "PORTFOLIO"
                ? "border-b-2 border-b-[#FF9C0E] font-bold text-black"
                : "text-black font-medium"
            }`}
          >
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer text-lg ${
              active === "CONTACT"
                ? "border-b-2 border-b-[#FF9C0E] font-bold text-black"
                : "text-black font-medium"
            }`}
          >
            <Link href="/contact">CONTACT</Link>
          </li>
          {/* <li
            onClick={() => setIsOpen(false)}
            className={`cursor-pointer text-lg ${
              active === "PRIVACY "
                ? "border-b-2 border-b-[#FF9C0E] font-bold text-black"
                : "text-black font-medium"
            }`}
          >
            <Link href="/privacy-policy">PRIVACY & POLICY</Link>
          </li> */}
        </ul>
        <div className="text-center mt-10 max-w-[120px] mx-auto">
          <a
            href="https://play.google.com/store/apps/dev?id=6508553873090680206&hl"
            target="_blank"
          >
            <button className="md:hidden block ">
              <Image
                src="/images/English.svg"
                width={120}
                height={40}
                alt="button"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
