import Image from "next/image";
import NavBar from "./components/NavBar";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <div className="bg-dream md:h-screen h-[80vh] flex flex-col  2xl:gap-20 lg:gap-6 gap-10 relative overflow-hidden">
          <NavBar />

          {/* Animated Fishes */}
          <Image
            src="/images/Fish-left-topp.svg"
            alt="Fish left"
            width={100}
            height={100}
            className="absolute top-[30%] left-[15%] w-[100px] fish-swim"
          />
          <Image
            src="/images/Fish-right-top.svg"
            alt="Fish right"
            width={100}
            height={100}
            className="absolute top-[50%] right-[20%] w-[90px] fish-swim-slow "
          />
          <Image
            src="/images/Fishbottom.svg"
            alt="Fish bottom"
            width={100}
            height={100}
            className="absolute top-[60%] right-[40%] w-[80px] fish-swim-left-to-right"
          />

          {/* Hero Text */}
          <div className="flex flex-col items-center justify-center  gap-8">
            <h1 className="2xl:text-[80px] md:text-[50px] text-[35px] text-white text-center font-bold leading-tight text-fade-in-up-wave">
              Beyond the Pixel <br />
              <span>Into the Playground</span>
            </h1>

            <p
              className="text-center text-white 2xl:text-[22px] text-base max-w-[554px] mx-auto text-fade-in-up-wave md:px-6 px-4"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              Across the globe, our games have brought smiles to the screens of
              millions of mobile users.
            </p>

            <div
              className="text-center text-fade-in-up-wave"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              <button className=" px-6 py-2 bg-[#FBAE17] w-fit transform transition delay-500 text-white font-semibold rounded-lg shadow-lg">
                Let&apos;s Explore
              </button>
            </div>
          </div>
          <div className="absolute  bottom-[14%] left-1/2 transform -translate-x-1/2 z-20">
            <svg
              id="scrl-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 38.9"
              className="w-[30px] h-auto"
            >
              <path
                className="scrl-body"
                d="M12.8 38.4h-1.6C5.2 38.4.4 33.6.4 27.6V11.2C.4 5.2 5.2.4 11.2.4h1.6c6 0 10.8 4.8 10.8 10.8v16.5c0 5.9-4.8 10.7-10.8 10.7z"
              />
              <path
                className="scrl-wheel"
                d="M12 13.9a4.2 4.2 0 01-4.2-4.2V4.2C7.8 1.9 9.7 0 12 0c2.3 0 4.2 1.9 4.2 4.2v5.4a4.1 4.1 0 01-4.2 4.3z"
              />
            </svg>
          </div>
        </div>

        {/* About Section */}
        <div
          id="about"
          className="bg-[#FFFFF5] mt-[-40px]  rounded-t-[50px] px-6 pb-12  relative z-10"
        >
          <div className="absolute rounded-t-[50px] -top-8 left-0 w-full h-[100px] bg-[#FFFFF5] transform rotate-[-2deg] origin-bottom" />
          <div className="relative z-10  ">
            <div className="mx-auto justify-between flex flex-col-reverse lg:flex-row items-center gap-10 max-w-7xl">
              <div>
                <Image
                  src="/images/character2.svg"
                  width={412}
                  height={500}
                  alt="character2"
                />
              </div>
              <div className="max-w-2xl relative">
                <h2 className="lg:text-[50px] text-3xl font-bold text-center mb-4">
                  <span className="text-black">HOW IT </span>
                  <span className="text-[#FBAE17]">STARTED</span>
                </h2>
                <p className="text-[16px] leading-relaxed text-gray-700 md:max-w-[714px] w-full">
                  At our design studio, we are a collective of talented
                  individuals ignited by our unwavering passion for transforming
                  ideas into reality. With a harmonious blend of diverse
                  backgrounds and a vast array of skill sets, we join forces to
                  craft most memorable experiences for our esteemed users.
                  Collaboration is at the heart of what we do. Our team thrives
                  on the synergy that arises when unique perspectives converge,
                  fostering an environment of boundless creativity. By
                  harnessing our collective expertise, we produce extraordinary
                  results that consistently surpass expectations.
                </p>
                <Image
                  src="/images/game.svg"
                  width={108}
                  height={99}
                  className="absolute -top-[30%] -left-[20%] fish-float-leftright z-10 md:block hidden"
                  alt="Floating coin"
                />
              </div>
            </div>
            <Image
              src="/images/game-coin-2.png"
              width={108}
              height={99}
              className="absolute -right-[10px] bottom-12 animate-float-up-down  z-0 md:block hidden"
              alt="Vector side"
            />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/70 to-transparent z-20 rotate-[-2deg] " />
          </div>
        </div>
      </div>
      <About />
    </>
  );
}