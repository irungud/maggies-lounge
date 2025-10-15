"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import Image from "next/image";

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
});

function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <div>
      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:flex-row flex-col md:gap-20 gap-5">
          <div className="w-full max-sm:hidden">
            <Image
              src="/contact-img.png"
              width={650}
              height={650}
              alt="contact-img"
              className="md:w-96 w-48 h-auto md:mx-auto"
            />
          </div>
          <div className="w-full bg-neutral-100 rounded-3xl md:p-10 p-5">
            <h4 className="text-2xl font-bold text-neutral-700">
              Send Us a Message
            </h4>
            <p className="text-xs md:text-sm text-neutral-500">
              Fill the Form Below to Send Us an Email
            </p>
            <form
              action=""
              className="md:mt-8 mt-4 bg-white md:p-10 p-5 rounded-2xl border border-neutral-200"
            >
              <div className="flex md:flex-row flex-col md:gap-4 gap-2">
                <div className="w-full">
                  <label htmlFor="firstName" className="text-xs md:text-sm">
                    Firstname
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full text-xs md:text-sm border border-neutral-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="text-xs md:text-sm">
                    Lastname
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full text-xs md:text-sm border border-neutral-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-neutral-200"
                  />
                </div>
              </div>
              <div className="md:mt-4 mt-2">
                <label htmlFor="email" className="text-xs md:text-sm">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johndoe@company.com"
                  className="w-full text-xs md:text-sm border border-neutral-300 px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-neutral-200"
                />
              </div>
              <div className="md:mt-4 mt-2">
                <label htmlFor="email" className="text-xs md:text-sm">
                  Email
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Message Here..."
                  className="w-full text-xs md:text-sm border border-neutral-300 px-4 py-2 md:h-32 h-16 rounded-md outline-none focus:ring-2 focus:ring-neutral-200"
                ></textarea>
                <Button className="w-full px-4 py-2 bg-gradient-to-r from-[#b86320] to-[#f1852d] md:mt-4 mt-2 text-white hover:bg-gradient-to-l transition-all duration-500 cursor-pointer">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center bg-neutral-100">
        <div className="w-full max-w-7xl md:py-20 py-10">
          <div className="bg-white md:p-10 p-5 rounded-3xl">
            <div>
              <iframe
                width="100%"
                height="500"
                className="rounded-xl"
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Maggies%20Nest%20Kenya+(Maggies%20Nest%20Kenya)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">
                  città più popolate Italia mappa
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[8%] md:py-8 py-4 flex items-center justify-center">
        <div className="w-full max-w-7xl md:py-20 py-10 flex items-center md:gap-20 gap-5">
          <div className="w-full">
            <h4 className="md:text-3xl text-xl font-bold text-neutral-700">
              Talk{" "}
              <span className="bg-gradient-to-r from-[#b86320] to-[#f1852d] bg-clip-text text-transparent">
                to Us
              </span>
            </h4>
            <div className="md:mt-4 mt-2">
              <div className="flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-[#b86320] to-[#f1852d]">
                <span></span>
                <p className="text-white text-xs md:text-sm">
                  +254 785 546 302 - Restaurant
                </p>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-[#b86320] to-[#f1852d] md:mt-2 mt-1">
                <span></span>
                <p className="text-xs md:text-sm text-white">
                  +254 786 484277 - Accomodation
                </p>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-[#b86320] to-[#f1852d] md:mt-2 mt-1">
                <span></span>
                <p className="text-xs md:text-sm text-white">
                  info@maggieslounge.com
                </p>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-full bg-gradient-to-r from-[#b86320] to-[#f1852d] md:mt-2 mt-1">
                <span></span>
                <p className="text-xs md:text-sm text-white">
                  Waithaka, Nduaru Rd.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/maggies-customer-service.png"
              width={650}
              height={650}
              alt="maggies-customer-service"
              className="md:w-96 w-48 h-auto md:mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
