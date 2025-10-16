import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBed } from "react-icons/fa";
import { IoMdWine } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";

function About() {
  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-4xl text-2xl font-bold text-neutral-700">
              We Offer You Delicious Meals{" "}
              <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
                & Entertainment
              </span>
            </h4>
            <p className="text-xs md:text-sm md:mt-8 mt-4 text-neutral-500">
              At Maggies Lounge, great food meets great vibes. Enjoy a
              mouthwatering selection of freshly prepared dishes while soaking
              in lively entertainment from top performers and DJs. Whether
              you’re here for a meal, a drink, or a night of fun, we’ve got
              everything you need to satisfy your taste and lift your spirit.
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col md:gap-10 gap-5">
            <div>
            <Image
              src="/maggies-bar-1.png"
              width={650}
              height={400}
              alt="maggies-bar-1"
              className="md:rounded-2xl rounded-xl"
            />
            </div>
            <div>
            <Image
              src="/maggies-bar-2.png"
              width={650}
              height={400}
              alt="maggies-bar-2"
              className="md:rounded-2xl rounded-xl"
            />
            </div>
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
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:flex-row flex-col">
          <div className="w-full">
            <h4 className="md:text-4xl text-2xl font-bold text-neutral-700">
              At Maggies Lounge, You're Served{" "}
              <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
                by Professionals
              </span>
            </h4>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4">
              At Maggies Lounge, we take pride in offering service that goes
              beyond expectations. Our experienced chefs, bartenders, and
              attendants are passionate about what they do — ensuring that every
              dish, drink, and detail is handled with care. From the moment you
              arrive to the time you leave, our friendly team is committed to
              making your visit comfortable, enjoyable, and truly unforgettable.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/maggies-waiter.png"
              width={650}
              height={650}
              alt="maggies-waiter"
              className="md:w-96 w-48 h-auto mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-7xl md:py-20 py-10 text-center">
          <h4 className="md:text-4xl text-2xl font-bold max-w-lg mx-auto text-neutral-700">
            Welcome to Maggies Lounge{" "}
            <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
              Garden
            </span>
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 max-w-2xl mx-auto md:mt-8 mt-4">
            Step into the serene atmosphere of our beautiful garden — a perfect
            spot to relax, dine, and enjoy the fresh air. Whether you’re sipping
            your favorite drink, sharing a meal with friends, or attending an
            event, Maggies Lounge Garden offers the ideal outdoor experience.
          </p>

          <div className="w-full md:p-6 p-3 bg-white grid grid-cols-auto md:gap-4 gap-2 rounded-4xl md:mt-12 mt-6">
            <div>
              <Image
                src="/maggies-garden-1.png"
                width={650}
                height={650}
                alt="maggies-garden-1"
                className="md:rounded-2xl rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/maggies-garden-2.png"
                width={650}
                height={650}
                alt="maggies-garden-2"
                className="md:rounded-2xl rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/maggies-garden-3.png"
                width={650}
                height={650}
                alt="maggies-garden-3"
                className="md:rounded-2xl rounded-xl"
              />
            </div>
            <div>
              <Image
                src="/maggies-garden-4.png"
                width={650}
                height={650}
                alt="maggies-garden-4"
                className="md:rounded-2xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-4xl text-2xl font-bold text-neutral-700">
              Experience Unmatched Luxury at{" "}
              <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
                Maggies VIP
              </span>
            </h4>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4">
              Indulge in an exclusive experience designed for ultimate comfort
              and sophistication. At Maggies VIP, you’ll enjoy premium service,
              a refined ambiance, and personalized attention that make every
              moment feel truly special.
            </p>
          </div>
          <div className=" flex items-center md:flex-row flex-col md:gap-10 gap-5">
            <div>
            <Image
              src="/maggies-vip-1.png"
              width={650}
              height={650}
              alt="maggies-vip-1"
              className="md:rounded-2xl rounded-xl"
            />
            </div>
            <div>
            <Image
              src="/maggies-vip-2.png"
              width={650}
              height={650}
              alt="maggies-vip-2"
              className="md:rounded-2xl rounded-xl"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
