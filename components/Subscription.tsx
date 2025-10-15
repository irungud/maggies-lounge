import React from "react";

function Subscription() {
  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-7xl md:py-20 py-10 text-center">
          <h4 className="md:text-3xl text-xl font-bold text-neutral-700">
            Subscribe to <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">our Newsletter</span>
          </h4>
          <p className="text-xs md:text-sm text-neutral-500 md:mt-2 mt-1">
            Get Our Event Updates, Offers & Discounts
          </p>
          <div className="flex items-center justify-center">
            <form action="" className="md:mt-8 mt-4 flex flex-row items-center">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-white md:px-6 px-4 md:py-4 py-2 rounded-l-full border border-neutral-300 focus:ring-2 focus:ring-neutral-200 outline-none text-xs md:text-sm md:w-96 w-48"
              />
              <button className="md:px-6 px-4 md:py-4 py-2 bg-gradient-to-r from-[#b86320] to-[#f1852d] rounded-r-full text-xs md:text-sm text-white cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
