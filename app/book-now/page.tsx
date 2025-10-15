import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function BookNow() {
  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:items-center md:gap-20 gap-5">
          <div className="w-full">
            <Image
              src="/booking-img.png"
              width={650}
              height={650}
              alt="booking-img"
              className="md:w-96 w-48 h-auto"
            />
          </div>
          <div className="w-full bg-neutral-100 md:p-10 p-5 rounded-3xl">
            <h5 className="md:text-3xl text-xl font-bold text-neutral-700">
              Book Accomodation
            </h5>
            <p className="text-xs md:text-sm text-neutral-500">
              Fill The Form to Book Accomodation
            </p>
            <div className="md:p-10 p-5 bg-white rounded-xl md:mt-8 mt-4 border border-neutral-200">
              <form action="">
                <div className="flex md:flex-row flex-col md:gap-4 gap-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-xs md:text-sm text-neutral-500"
                    >
                      Firstname
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="John"
                      className="w-full border border-neutral-300 px-4 py-2 rounded-md text-xs md:text-sm outline-none focus:ring-2 focus:ring-neutral-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-xs md:text-sm text-neutral-500"
                    >
                      Lastname
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full border border-neutral-300 px-4 py-2 rounded-md text-xs md:text-sm outline-none focus:ring-2 focus:ring-neutral-200"
                    />
                  </div>
                </div>
                <div className="md:mt-4 mt-2">
                  <label
                    htmlFor="phoneNumber"
                    className="text-xs md:text-sm text-neutral-500"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    placeholder="+254 786 484 277"
                    className="w-full border border-neutral-300 px-4 py-2 rounded-md text-xs md:text-sm outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
                <div className="md:mt-4 mt-2">
                  <label
                    htmlFor="email"
                    className="text-xs md:text-sm text-neutral-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@email.com"
                    className="w-full border border-neutral-300 px-4 py-2 rounded-md text-xs md:text-sm outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
                <div className="md:mt-4 mt-2">
                  <label
                    htmlFor="message"
                    className="text-xs md:text-sm text-neutral-500"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write Your Message Here..."
                    className="w-full border border-neutral-300 px-4 py-2 rounded-md text-xs md:text-sm outline-none focus:ring-2 focus:ring-neutral-200"
                  ></textarea>
                </div>
                <Button className="w-full md:mt-4 mt-2 bg-gradient-to-r from-[#b86320] to-[#f1852d] text-white px-4 py-2 hover:bg-gradient-to-l transition-all duration-500 cursor-pointer">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNow;
