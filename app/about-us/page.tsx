import Image from "next/image";
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
              Yes, the happiness and comfort of our customers come first.
              Starting with our meals, real expertise is at work. We have
              traditional and modern delicacies, with a taste of excellence.
              When it comes to drinks, we serve you drinks based on your taste
              and preference. Entertainment is never left behind, we play our
              client's favorite playlists, which keeps our customers happy.
              Football is always watched from our large screens, leaving every
              fan with every detail of the game. Everything we do is a piece of
              art.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/maggies-beers.png"
              width={650}
              height={400}
              alt="maggies-beers"
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
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:flex-row flex-col">
          <div className="w-full">
            <h4 className="md:text-4xl text-2xl font-bold text-neutral-700">
              At Maggies Lounge, You're Served{" "}
              <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
                by Professionals
              </span>
            </h4>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4">
              To preserve Maggies Nest Restaurant quality, we have to make sure
              each department is being handled by expert. When it comes to
              preparing meals, we have professional chefs doing the work, and
              they do it the best way possible. Our waiters and waitresses are
              also trained to serve our customers excellently. We work with
              professionals to serve our customers the best.
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
    </div>
  );
}

export default About;
