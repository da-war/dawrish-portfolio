import Image from "next/image";

import memojiImage from "../assets/images/memoji-computer.png";
import ArrowDown from "../assets/icons/arrow-down.svg";

import grainImage from "../assets/images/grain.jpg";
import StarIcon from "../assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";

import SparkleIcon from "../assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      <div className="hero-circle size-[620px]"></div>
      <div className="hero-circle size-[820px]"></div>
      <div className="hero-circle size-[1020px]"></div>

      <div>
        <HeroOrbit rotate={-72} size={800}>
          <StarIcon className="size-28 text-emerald-500" />
        </HeroOrbit>
        <HeroOrbit size={550} rotate={20}>
          <StarIcon className="size-18 text-emerald-500" />
        </HeroOrbit>
        <HeroOrbit size={590} rotate={98}>
          <StarIcon className="size-8 text-emerald-500" />
        </HeroOrbit>
        <HeroOrbit size={430} rotate={-14}>
          <SparkleIcon className="size-8 text-emerald-500 opacity-30" />
        </HeroOrbit>
        <HeroOrbit size={440} rotate={0}>
          <StarIcon className="size-5 text-emerald-500" />
        </HeroOrbit>
        <HeroOrbit size={590} rotate={98}>
          <StarIcon className="size-8 text-emerald-500" />
        </HeroOrbit>
        <HeroOrbit size={590} rotate={98}>
          <StarIcon className="size-8 text-emerald-500" />
        </HeroOrbit>
      </div>

      <div className="hero-circle size-[1220px]"></div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="Memoji" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl md:font-bold">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional, high
            performance mobile and web applications with the robust and
            scaleable backends. Let's discuss your next project.
          </p>
        </div>
        <div className="flex md:flex-row sm:flex-col md:justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-5 h-12 rounded-xl">
            <span className="font-semibold ">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-lg">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
