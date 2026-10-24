import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import { breakfast } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBed } from "react-icons/fa";
import { IoMdWine } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

function Home() {
  return (
    <div className="absolute top-20 left-0 w-full z-0">
      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center md:flex-row flex-col md:gap-10 gap-5">
          <div className="w-full">
            <h4 className="md:text-6xl text-3xl font-bold text-neutral-700">
              Enjoy Delicious Meals, Drinks &{" "}
              <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
                Accomodation
              </span>
            </h4>
            <p className="text-neutral-500 md:mt-8 mt-4">
              Indulge in a complete experience at Maggies Lounge — where
              flavorful dishes, refreshing drinks, and cozy rooms come together
              in one inviting space. Whether you’re dining, relaxing, or staying
              the night, we make every moment unforgettable.
            </p>
            <Link href="/">
              <button className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] p-4 w-32 md:w-40 rounded-full text-xs md:text-sm text-white md:mt-8 mt-4 cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
          <div className="w-full">
            <Image
              src="/maggies-home-img.jpeg"
              width={650}
              height={650}
              alt="maggies-home-img"
              className="md:rounded-3xl rounded-xl md:w-72 w-full md:mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center bg-linear-to-r from-[#fb0200] to-[#0ccf06]">
        <div className="w-full max-w-7xl grid grid-cols-auto md:gap-4 gap-2">
          <div className="bg-white md:p-8 p-4 border border-neutral-200 rounded-2xl text-center">
            <span>
              <IoFastFoodOutline className="md:size-10 size-5 font-bold mx-auto text-[#0ccf06]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Restaurant
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">
                Delicious Dishes
              </p>
            </div>
          </div>
          <div className="bg-white md:p-8 p-4 border border-neutral-200 rounded-2xl text-center">
            <span>
              <IoMdWine className="md:size-10 size-5 font-bold mx-auto text-[#0ccf06]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Bar
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">
                Refreshing Drinks
              </p>
            </div>
          </div>
          <div className="bg-white md:p-8 p-4 border border-neutral-200 rounded-2xl text-center">
            <span>
              <FaBed className="md:size-10 size-5 font-bold mx-auto text-[#0ccf06]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Accomodation
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">Comfortable</p>
            </div>
          </div>
          <div className="bg-white md:p-8 p-4 border border-neutral-200 rounded-2xl text-center">
            <span>
              <MdOutlineCalendarMonth className="md:size-10 size-5 font-bold mx-auto text-[#0ccf06]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Events
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">
                Top Performances
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center">
        <div className="w-full max-w-7xl">
          <h4 className="md:text-4xl text-2xl font-bold text-center text-neutral-700">
            Maggies{" "}
            <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
              Breakfast
            </span>
          </h4>
          <div className="md:mt-8 mt-4 grid grid-cols-auto md:gap-4 gap-2">
            {breakfast.slice(0, 4).map((dish, i) => (
              <Link href={`/restaurant/foods/${dish.id}`} key={i}>
                <div className="md:p-4 p-2 border border-neutral-200 md:rounded-4xl rounded-2xl">
                  <Image
                    src={dish.img}
                    width={250}
                    height={250}
                    alt={dish.name}
                    className="rounded-2xl"
                  />
                  <div className="md:mt-2 mt-1">
                    <h5 className="md:text-lg text-sm font-bold text-[#0ccf06]">
                      {dish.name}
                    </h5>
                    <p className="text-xs md:text-sm text-neutral-500">
                      {dish.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-7xl text-center">
          <h4 className="md:text-5xl text-2xl font-bold max-w-2xl mx-auto text-neutral-700">
            Get Entertained by DJs & MCs{" "}
            <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
              During Our Events
            </span>
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4 max-w-2xl mx-auto">
            Experience electrifying nights at Maggies Lounge with live
            performances from renowned artists, talented DJs, and vibrant MCs.
            Our events bring great music, good vibes, and unforgettable memories
            all under one roof.
          </p>
          <Link href="/">
            <button className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] p-4 w-32 md:w-40 rounded-full text-xs md:text-sm text-white md:mt-8 mt-4 cursor-pointer">
              View Events
            </button>
          </Link>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-5xl text-3xl font-bold">
              Relax, Sip, Enjoy and Unwind at{" "}
              <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
                Maggies Lounge
              </span>
            </h4>
            <p className="text-neutral-500 md:mt-8 mt-4">
              Step into a warm and inviting atmosphere where every moment feels
              special. Whether you’re enjoying a cocktail, sharing a meal, or
              simply taking a break, Maggies Lounge is the perfect place to
              relax and let the good times flow.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/maggies-drinks.jpeg"
              width={1280}
              height={700}
              alt="maggies-drinks"
              className="md:w-full h-auto mx-auto md:rounded-3xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      <Subscription />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Home;
