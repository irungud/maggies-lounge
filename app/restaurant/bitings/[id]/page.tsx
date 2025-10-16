"use client";

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
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center bg-neutral-100">
        <div className="bg-white w-full max-w-7xl md:p-10 p-5 rounded-4xl flex md:flex-row flex-col md:gap-10 gap-5">
          <div className="w-full relative">
            <button
              onClick={() => router.back()}
              className="absolute top-4 left-4 bg-gradient-to-r from-[#b86320] to-[#f1852d] text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
            >
              <FaAngleLeft className="text-3xl" />
            </button>
            <img src={food.img} alt={food.name} className="rounded-2xl" />
          </div>
          <div className="w-full">
            <h1 className="md:text-3xl text-xl font-bold text-neutral-700">
              {food.name}
            </h1>
            <p className="text-xs md:text-sm text-neutral-600 bg-neutral-200 px-4 py-2 w-fit rounded-full md:mt-2 mt-1">
              {food?.category}
            </p>
            <p className="text-xs md:text-sm text-neutral-500 md:mt-4 mt-2">
              {food.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biting;