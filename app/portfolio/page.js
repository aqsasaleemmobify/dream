import Image from "next/image";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Portfolio = () => {
  const gamesPortfolio = [
    {
      id: 1,
      img: "/images/petdr.svg",
      title: "PET DOCTOR",
      downloads: "194K • 4.5",
      googlePlay: true,
      appStore: true,
      link: "https://play.google.com/store/apps/details?id=com.pet.clinic.animal.doctor.game",
    },
    {
      id: 2,
      img: "/images/fasion.svg",
      title: "FASHION GAME",
      downloads: "",
      googlePlay: true,
      appStore: true,
      link: "https://play.google.com/store/apps/details?id=com.sg.fashion.makeover.dressup.game",
    },
    {
      id: 3,
      img: "/images/bikeS.svg",
      title: "BIKE STUNT GAMES",
      downloads: "",
      googlePlay: true,
      appStore: true,
    },
    {
      id: 4,
      img: "/images/openheart.svg",
      title: "Open Heart Surgery",
      downloads: "",
      googlePlay: true,
      appStore: true,
    },
    {
      id: 5,
      img: "/images/realS.svg",
      title: "REAL SURGEON SIMULATOR",
      downloads: "",
      googlePlay: true,
      appStore: true,
    },
    {
      id: 6,
      img: "/images/makeover.svg",
      title: "MAKEOVER GAMES",
      downloads: "",
      googlePlay: true,
      appStore: true,
    },
    {
      id: 7,
      img: "/images/ASMRDoctorSurgeon.svg",
      title: "ASMR Doctor Surgeon",
      downloads: "",
      googlePlay: true,
      appStore: true,
    },
  ];

  return (
    <>
      <div className="bg-black ">
        <NavBar />
        {/* Header Section */}
        <div className="relative max-w-[1040px] mx-auto py-[52px]">
          <div className="max-w-[780px] mx-auto text-center text-white ">
            <h1 className="lg:text-[70px] md:text-[50px] text-[34px] font-bold text-fade-in-up-wave">
              OUR GAMES
            </h1>
            <p className="mt-4 mb-8 px-4 text-fade-in-up-wave">
              Welcome to our world of endless imagination and boundless
              creativity. Let's embark on a remarkable journey where dreams
              become realities.
            </p>
            <div>
              {/* lg */}
              <Image
                src="/images/game-coin-2.png"
                width={108}
                height={99}
                className="absolute top-0 md:left-20 left-0 fish-float-leftright z-10 md:block hidden"
                alt="Floating coin"
              />
              {/* mobile */}
              <Image
                src="/images/game-coin-2.png"
                width={70}
                height={60}
                className="absolute top-0 md:left-20 left-0 fish-float-leftright z-10 md:hidden block"
                alt="Floating coin"
              />
              {/* lg */}
              <Image
                src="/images/game.svg"
                width={108}
                height={99}
                className="absolute right-0 bottom-0 animate-float-up-down z-0 md:block hidden"
                alt="Vector side"
              />
              {/* mobile */}
              <Image
                src="/images/game.svg"
                width={70}
                height={60}
                className="absolute right-0 bottom-0 animate-float-up-down z-0 md:hidden block"
                alt="Vector side"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Games Grid */}
      <div className="max-w-[1040px] mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-6">
          {gamesPortfolio.map((game) => (
            <div key={game.id} className="text-center">
              {/* Game Image with Hover Effect */}

              <div className="mb-3 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                <Image
                  src={game.img}
                  width={472}
                  height={320}
                  alt={game.title}
                />
              </div>

              {/* Game Title */}
              <h3 className="text-black font-bold text-2xl mb-2">
                {game.title}
              </h3>

              {/* Download Buttons */}
              <div className="flex justify-center space-x-2">
                {game.googlePlay && (
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src="/images/google-footer.svg"
                      width={120}
                      height={40}
                      alt="Google Play"
                    />
                  </a>
                )}
                {game.appStore && (
                  <a
                    href="#"
                    className="flex items-center transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  >
                    <Image
                      src="/images/app-footer.svg"
                      width={120}
                      height={40}
                      alt="App Store"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
