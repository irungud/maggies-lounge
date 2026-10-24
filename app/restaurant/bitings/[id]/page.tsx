"use client";

import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import Subscription from "@/components/Subscription";
import { Bitings } from "@/constants";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";

function Biting({ params }: any) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const { id } = resolvedParams;
  const food = Bitings.find((item) => item.id.toString() === id.toString());

  return (
    <div className="absolute top-20 left-0 w-full z-0">
      <div className="px-[8%] md:py-20 py-10 flex items-center justify-center bg-neutral-100">
        <div className="bg-white w-full max-w-7xl md:p-6 p-3 rounded-4xl flex md:flex-row flex-col md:gap-10 gap-5">
          <div className="w-full relative">
            <button
              onClick={() => router.back()}
              className="absolute top-4 left-4 bg-[#0ccf06] text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            >
              <FaAngleLeft className="text-3xl" />
            </button>
            <img src={food.img} alt={food.name} className="rounded-2xl" />
          </div>
          <div className="w-full">
            <h1 className="md:text-5xl text-2xl font-bold text-neutral-700 md:mt-6 mt-3">
              {food.name}
            </h1>
            <p className="text-xs md:text-sm text-neutral-600 bg-neutral-200 px-4 py-2 w-fit rounded-full md:mt-6 mt-3">
              {food?.category}
            </p>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-4 mt-2">
              {food.desc}
            </p>
          </div>
        </div>
      </div>

      <Subscription />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Biting;