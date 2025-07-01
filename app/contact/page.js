"use client";
import React from "react";
import NavBar from "../components/NavBar";
import Image from "next/image";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="bg-black ">
        <NavBar />
        {/* Header Section */}
        <div className="relative max-w-[1040px] mx-auto py-[52px]">
          <div className="max-w-[780px] mx-auto text-center text-white">
            <h1 className="lg:text-[70px] md:text-[50px] text-[34px] font-bold text-fade-in-up-wave">
              Lets Talk
            </h1>
            <p className="mt-4 mb-8 px-4 text-fade-in-up-wave">
              For all enquiries, feel free to contact us from the form below.
            </p>
            <div>
                {/* lg */}
              <Image
                src="/images/game.svg"
                width={108}
                height={99}
                className="absolute top-0 md:left-20 left-0 fish-float-leftright z-10 md:block hidden"
                alt="Floating coin"
              />
              {/* mobile */}
              <Image
                src="/images/game.svg"
                width={70}
                height={60}
                className="absolute top-0 md:left-20 left-0 fish-float-leftright z-10 md:hidden block"
                alt="Floating coin"
              />
              {/* lg */}
              <Image
                src="/images/game-coin-2.png"
                width={108}
                height={99}
                className="absolute right-0 bottom-0 animate-float-up-down z-0 md:block hidden"
                alt="Vector side"
              />
              {/* mobile */}
              <Image
                src="/images/game-coin-2.png"
                width={70}
                height={60}
                className="absolute right-0 bottom-0 animate-float-up-down z-0 md:hidden block"
                alt="Vector side"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-white drop-shadow-xl rounded-[10px] py-6  my-[76px] max-w-[1196px]  mx-auto">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden ">
          {/* Right Panel */}
          <div className=" p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1 text-[#8D8D8D]">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b outline-none pb-1 border-b-[#8D8D8D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#8D8D8D]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b outline-none pb-1 border-b-[#8D8D8D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#8D8D8D]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-b outline-none pb-1 border-b-[#8D8D8D]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-[#8D8D8D]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border-b outline-none pb-1 border-b-[#8D8D8D]"
                  />
                </div>
              </div>
              <div className="mt-12">
                <label className="block text-sm font-medium mb-1 text-[#8D8D8D]">
                  Message
                </label>
                <textarea
                  placeholder="Write your message.."
                  rows="2"
                  className="w-full border-b outline-none pb-1 border-b-[#8D8D8D] "
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#FF9C0E] text-white rounded hover:bg-[#ff9b0ebd] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;