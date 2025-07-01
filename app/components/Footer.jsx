'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter()


    const handleClick = () => {
    router.push("/");
  };
  return (
    <>
    <footer className="bg-[#000000] text-white">
     <hr className=" border-gray-700" />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex lg:flex-row flex-col justify-between  gap-6 items-start">
          {/* Logo & Nav */}
          <div className="flex flex-col  gap-6 lg:items-start items-center  justify-center">
            {/* Logo */}

            <div className="">
              <Image
               onClick={handleClick}
                src="/images/Dreamland-footer.svg"
                width={200}
                height={75}
                alt="logo"
                className="md:ml-auto mx-auto"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex space-x-6 md:space-y-0 space-y-4 text-sm lg:justify-start justify-center flex-wrap uppercase tracking-wide">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/#about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/portfolio" className="hover:text-gray-300">
                Portfolio
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
              <Link href="/privacy-policy" className="hover:text-gray-300 ">
                Privacy & Policy
              </Link>
            </nav>
          </div>
          {/* buttons */}
          <div className="flex gap-2 justify-center items-center w-full lg:w-auto mt-4 lg:mt-0">
            <a
              href="https://play.google.com/store/apps/dev?id=6508553873090680206&hl"
              target="_blank"
            >
              <Image
                src="/images/google-footer.svg"
                width={120}
                height={40}
                alt="logo"
              />
            </a>
            <a
              href="https://apps.apple.com/us/developer/dreamland-games/id1730206190?see-all=i-phonei-pad-apps"
              target="_blank"
            >
              <Image
                src="/images/app-footer.svg"
                width={120}
                height={40}
                alt="logo"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Row */}
        <div className=" text-[#D4D4D8] md:text-left text-center text-sm">
          <p>© 2025 Dreamland Games Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;