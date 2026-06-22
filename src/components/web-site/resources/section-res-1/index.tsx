"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function SectionResources1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-3 items-center text-[#183668]"
      >
        <div className="grid gap-2.5 text-[#183668] pl-2">
          <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl">
            Learn. Track. Stay Informed.
          </h1>
          <p className="">
            Welcome to the ThriveRise Foundation Resources Hub, your go-to space
            for the latest updates, stories, data, and insights about our work
            and the communities we serve. <br />
            Stay inspired by our blog, explore our reports, and catch up on
            press features and announcements.
          </p>
        </div>

        <span className="relative w-full aspect-[1/0.7] mx-auto">
          <Image
            src={"/website-ui/resources.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>
      </motion.div>
    </section>
  );
}
