"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "./Footer";
import { useRouter } from "next/navigation";

// Custom styles for the pagination bullets
const customStyles = `
  .swiper-pagination {
    position: relative;
    bottom: 0 !important;
    margin-top: 30px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #D9D9D9;
    opacity: 1;
    transition: all 0.3s ease;
  }
  
  .swiper-pagination-bullet-active {
    background: #FBAE17;
    width: 30px;
    height: 10px;
    border-radius: 5px;
  }

  .game-slider {
    padding-bottom: 50px;
  }

  .swiper-button-next, .swiper-button-prev {
    color: #FBAE17 !important;
    display: none;
  }

  @media (min-width: 768px) {
    .swiper-button-next, .swiper-button-prev {
      display: none;
    }
  }
`;

const About = () => {
  const router = useRouter();
  const games = [
    {
      id: 1,
      src: "/images/slide1.svg",
      alt: "Block Twist",
      title: "BLOCK TWIST",
      description:
        "Match blocks and create combos in this addictive puzzle game",
    },
    {
      id: 2,
      src: "/images/slide2.svg",
      alt: "Brain King",
      title: "BRAIN KING",
      description:
        "Test your logic skills with challenging puzzles and brain teasers",
    },
    {
      id: 3,
      src: "/images/slide3.svg",
      alt: "Fashion Artist",
      title: "FASHION ARTIST",
      description: "Design stunning outfits and become a fashion icon",
    },
    {
      id: 4,
      src: "/images/slider4.svg",
      alt: "Wedding Dressup",
      title: "WEDDING DRESSUP",
      description: "Create perfect wedding looks for the bride and groom",
    },
  ];

  // Keep track of the active slide
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <>
      <style jsx global>
        {customStyles}
      </style>

      <div className="bg-[#ffffff] mt-[-40px] md:pt-20 px-6 pb-12 relative z-10">
        <div className="absolute -top-10 left-0 w-full h-[100px] bg-[#ffffff] transform rotate-[-2deg] origin-bottom" />
        <div className="relative">
          <Image
            src="/images/aim.png"
            width={100}
            height={100}
            alt="Aim icon"
          />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="lg:text-[50px] text-3xl text-black text-center font-bold">
            We aim to be the Benchmark
          </h1>
          <p className="text-black md:max-w-[716px] w-full mx-auto text-center">
            We're still pushing boundaries, breaking records, and celebrating
            every win along the way. Our mission is to turn our current and
            future games into lasting hits that don't just top the charts, but
            set the gold standard in gaming.
          </p>
        </div>
        <div className="absolute md:bottom-5 right-5 -z-10">
          <Image
            src="/images/green1.png"
            width={100}
            height={100}
            alt="Decoration"
          />
        </div>
      </div>

      <div className="w-full max-w-7xl ml-auto px-4 py-8 relative game-slider">
        <Swiper
          loop={true}
          loopAdditionalSlides={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
            // dynamicBullets: false,
            // dynamicMainBullets: 1,
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="flex flex-col items-center">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={game.src}
                    alt={game.alt}
                    width={390}
                    height={580}
                    className="rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bike Section */}
      <div className="bg-[#000000] mt-[60px] rounded-t-[33px] w-full px-6 relative z-10">
        <div className="absolute -top-10 rounded-t-[50px] w-full h-[100px] left-0 bg-[#000000] transform -rotate-[2deg] origin-bottom" />
        <div className="flex md:flex-row flex-col-reverse max-w-[1440px] mx-auto justify-between items-center border-b-gray-300">
          <div className="flex flex-col gap-8 md:pb-0 pb-8">
            <h1 className="lg:text-[30px] text-2xl md:max-w-[643px] w-full text-white font-bold">
              Our mission is to craft chart-topping games by cultivating
              top-performing people.
            </h1>
            <button
              onClick={handleClick}
              className="px-6 bg-[#FBAE17] w-fit py-2 transform transition-transform duration-300 hover:scale-105 text-white font-semibold rounded-lg shadow-lg"
            >
              Let&apos;s Connect
            </button>
          </div>
          <div className="relative">
            <Image
              src="/images/bikecharacter.svg"
              width={494}
              height={540}
              alt="Bike character"
              className="md:block hidden"
            />
            <Image
              src="/images/bikecharacter-mobile.svg"
              width={329}
              height={460}
              alt="Bike character mobile"
              className="md:hidden block mx-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;