import { breakfast } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBed } from "react-icons/fa";
import { IoMdWine } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

function Home() {
  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-4xl text-2xl font-bold text-neutral-700">
              Enjoy Delicious Meals, Drinks &{" "}
              <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
                Accomodation
              </span>
            </h4>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4">
              Indulge in a complete experience at Maggies Lounge — where
              flavorful dishes, refreshing drinks, and cozy rooms come together
              in one inviting space. Whether you’re dining, relaxing, or staying
              the night, we make every moment unforgettable.
            </p>
            <Link href="/">
              <button className="bg-gradient-to-r from-[#b86320] to-[#f1852d] px-6 py-4 rounded-full text-xs md:text-sm text-white md:mt-8 mt-4 cursor-pointer">
                Learn More
              </button>
            </Link>
          </div>
          <div className="w-full">
            <Image
              src="/roasted-chicken.png"
              width={400}
              height={250}
              alt="roasted-chicken"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-7xl md:py-20 py-10 grid grid-cols-auto md:gap-5 gap-2">
          <div className="bg-white md:p-10 p-5 border border-neutral-200 rounded-2xl text-center">
            <span>
              <IoFastFoodOutline className="md:text-4xl text-2xl font-bold mx-auto text-[#f1852d]" />
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
          <div className="bg-white md:p-10 p-5 border border-neutral-200 rounded-2xl text-center">
            <span>
              <IoMdWine className="md:text-4xl text-2xl font-bold mx-auto text-[#f1852d]" />
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
          <div className="bg-white md:p-10 p-5 border border-neutral-200 rounded-2xl text-center">
            <span>
              <FaBed className="md:text-4xl text-2xl font-bold mx-auto text-[#f1852d]" />
            </span>
            <div className="md:mt-4 mt-2">
              <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                Accomodation
              </h5>
              <p className="text-xs md:text-sm text-neutral-500">Comfortable</p>
            </div>
          </div>
          <div className="bg-white md:p-10 p-5 border border-neutral-200 rounded-2xl text-center">
            <span>
              <MdOutlineCalendarMonth className="md:text-4xl text-2xl font-bold mx-auto text-[#f1852d]" />
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

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10">
          <h4 className="md:text-4xl text-2xl font-bold text-center text-neutral-700">
            Maggies{" "}
            <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
              Breakfast
            </span>
          </h4>
          <div className="md:mt-8 mt-4 grid grid-cols-auto-sm md:gap-4 gap-2">
            {breakfast.slice(0, 6).map((dish, i) => (
              <Link href={`/restaurant/food/${dish.id}`} key={i}>
                <div>
                  <Image
                    src={dish.img}
                    width={250}
                    height={250}
                    alt={dish.name}
                    className="rounded-2xl"
                  />
                  <div className="md:mt-2 mt-1">
                    <h5 className="md:text-lg text-sm font-bold text-neutral-700">
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

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-7xl md:py-20 py-10 text-center">
          <h4 className="md:text-3xl text-xl font-bold max-w-xl mx-auto text-neutral-700">
            Performance by Top Artists, DJs & MCs{" "}
            <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
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
            <button className="bg-gradient-to-r from-[#b86320] to-[#f1852d] px-6 py-4 rounded-full text-xs md:text-sm text-white md:mt-8 mt-4 cursor-pointer">
              View Events
            </button>
          </Link>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-4xl text-2xl font-bold">
              Relax, Sip, Enjoy and Unwind at{" "}
              <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
                Maggies Lounge
              </span>
            </h4>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4">
              Step into a warm and inviting atmosphere where every moment feels
              special. Whether you’re enjoying a cocktail, sharing a meal, or
              simply taking a break, Maggies Lounge is the perfect place to
              relax and let the good times flow.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/maggies-heineken.png"
              width={650}
              height={650}
              alt="maggies-heineken"
              className="md:w-96 w-48 h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
