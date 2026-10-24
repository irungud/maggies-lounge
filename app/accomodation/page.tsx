import Image from "next/image";
import React from "react";
import { FaBed, FaShower, FaTv } from "react-icons/fa";
import { PiArmchairFill, PiDeskFill } from "react-icons/pi";
import { GiClothes, GiTowel, GiElectric, GiSlippers } from "react-icons/gi";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";


function Accomodation() {
  return (
    <div className="absolute top-20 left-0 w-full z-0">
      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center">
        <div className="w-full max-w-7xl flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-5xl text-2xl font-bold">
              Experience a Comfortable Night at{" "}
              <span className="bg-gradient-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">
                Maggies Lounge
              </span>
            </h4>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-8 mt-4">
              When it comes to accomodation, our client&apos;s luxury is our
              priority. We have rooms suitable for personal and family use. Our
              rooms are equipped with features that give unmatched comfort each
              night you spend at Maggies Nest Accomodation. Our accomodation
              rooms are quiet, and privacy of our clients is guaranteed. To
              cater for family needs, we have double beds in our rooms, thus
              giving families an opportunity to also spend their nights at
              Maggies Nest Accomodation.
            </p>
          </div>
          <div className="w-full aspect-video overflow-hidden">
            <Image
              src="/maggies-accomodation-1.png"
              width={450}
              height={450}
              alt="maggies-accomodation-1"
              className="rounded-3xl w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-7xl">
          <h4 className="md:text-4xl text-2xl font-bold text-center">
            Accomodation <span className="bg-linear-to-r from-[#fb0200] to-[#0ccf06] bg-clip-text text-transparent">Features</span>
          </h4>
          <div className="grid grid-cols-auto md:gap-5 gap-2 md:mt-8 mt-4">
            <div className="bg-white md:p-6 p-3 border border-neutral-200 md:rounded-4xl rounded-3xl">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fb0200] to-[#0ccf06] flex items-center justify-center">
                <FaShower className="text-white text-2xl" />
              </span>
              <div className="md:mt-4 mt-2">
                <h5 className="md:text-2xl text-xl font-bold text-neutral-700">
                  Bathroom
                </h5>
                <p className="text-xs md:text-sm text-neutral-500">
                  Clean & private bathroom, with water available 24/7 and heated
                  shower, to keep you comfortable as you take your shower
                </p>
              </div>
            </div>
            <div className="bg-white md:p-6 p-3 border border-neutral-200 md:rounded-4xl rounded-3xl">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fb0200] to-[#0ccf06] flex items-center justify-center">
                <PiArmchairFill className="text-white text-2xl" />
              </span>
              <div className="md:mt-4 mt-2">
                <h5 className="md:text-xl text-lg font-bold text-neutral-700">
                  Personal Desk
                </h5>
                <p className="text-xs md:text-sm text-neutral-500">
                  A desk and chair will keep you comfortable in case you&apos;d like
                  complete unfinished tasks from your laptop
                </p>
              </div>
            </div>
            <div className="bg-white md:p-6 p-3 border border-neutral-200 md:rounded-4xl rounded-3xl">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fb0200] to-[#0ccf06] flex items-center justify-center">
                <GiClothes className="text-white text-2xl" />
              </span>
              <div className="md:mt-4 mt-2">
                <h5 className="md:text-xl text-lg font-bold text-neutral-700">
                  Wardrobe
                </h5>
                <p className="text-xs md:text-sm text-neutral-500">
                  Clean wardrobes and shelfs, where you can pack your clothes as
                  you spend time at Maggies Nest Accomodation.
                </p>
              </div>
            </div>
            <div className="bg-white md:p-6 p-3 border border-neutral-200 md:rounded-4xl rounded-3xl">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fb0200] to-[#0ccf06] flex items-center justify-center">
                <FaBed className="text-white text-2xl" />
              </span>
              <div className="md:mt-4 mt-2">
                <h5 className="md:text-xl text-lg font-bold text-neutral-700">
                  Beds
                </h5>
                <p className="text-xs md:text-sm text-neutral-500">
                  We have both single beds and double beds, which you can choose
                  from based on your preference.
                </p>
              </div>
            </div>
            <div className="bg-white md:p-6 p-3 border border-neutral-200 md:rounded-4xl rounded-3xl">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fb0200] to-[#0ccf06] flex items-center justify-center">
                <FaTv className="text-white text-2xl" />
              </span>
              <div className="md:mt-4 mt-2">
                <h5 className="md:text-xl text-lg font-bold text-neutral-700">
                  TVs
                </h5>
                <p className="text-xs md:text-sm text-neutral-500">
                  TVs to help you follow the news from the comfort of your room.
                  Remotes are available, so you can turn on and off whenever you
                  need.
                </p>
              </div>
            </div>
            <div className="bg-white md:p-6 p-3 border border-neutral-200 md:rounded-4xl rounded-3xl">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fb0200] to-[#0ccf06] flex items-center justify-center">
                <GiTowel className="text-white text-2xl" />
              </span>
              <div className="md:mt-4 mt-2">
                <h5 className="md:text-xl text-lg font-bold text-neutral-700">
                  Personal Effects
                </h5>
                <p className="text-xs md:text-sm text-neutral-500">
                  Yes, personal effects such as soap, tissue and bathing towel
                  are available, saving you from the headache of looking for a
                  shop outside
                </p>
              </div>
            </div>
            <div className="bg-white md:p-6 p-3 border border-neutral-200 md:rounded-4xl rounded-3xl">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fb0200] to-[#0ccf06] flex items-center justify-center">
                <GiElectric className="text-white text-2xl" />
              </span>
              <div className="md:mt-4 mt-2">
                <h5 className="md:text-xl text-lg font-bold text-neutral-700">
                  Charging Area
                </h5>
                <p className="text-xs md:text-sm text-neutral-500">
                  For a more comfortable stay, you need your gadgets&apos; battery at
                  100%, and we got you covered on that. Charge from regularly
                  maintaned sockets.
                </p>
              </div>
            </div>
            <div className="bg-white md:p-6 p-3 border border-neutral-200 md:rounded-4xl rounded-3xl">
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#fb0200] to-[#0ccf06] flex items-center justify-center">
                <GiSlippers className="text-white text-2xl" />
              </span>
              <div className="md:mt-4 mt-2">
                <h5 className="md:text-xl text-lg font-bold text-neutral-700">
                  Sandals
                </h5>
                <p className="text-xs md:text-sm text-neutral-500">
                  Whenever you get into our accomodation, relieve your feet from
                  the office shoes. We have comfortable sandals awaiting you
                  even before you get in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 grid grid-cols-auto md:gap-5 gap-2">
          <div>
            <Image
              src="/accomodation-img-1.png"
              width={550}
              height={550}
              alt="accodation-img-1"
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/accomodation-img-2.png"
              width={550}
              height={550}
              alt="accodation-img-2"
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/accomodation-img-3.png"
              width={550}
              height={550}
              alt="accodation-img-3"
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/accomodation-img-4.png"
              width={550}
              height={550}
              alt="accodation-img-4"
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/accomodation-img-5.png"
              width={550}
              height={550}
              alt="accodation-img-4"
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/accomodation-img-6.png"
              width={550}
              height={550}
              alt="accodation-img-4"
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/accomodation-img-7.png"
              width={550}
              height={550}
              alt="accodation-img-4"
              className="rounded-3xl"
            />
          </div>
          <div>
            <Image
              src="/accomodation-img-8.png"
              width={550}
              height={550}
              alt="accodation-img-4"
              className="rounded-3xl"
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

export default Accomodation;
