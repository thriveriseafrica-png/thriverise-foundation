"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionAbout1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid gap-5 items-center text-[#183668]"
      >
        <div className="grid gap-2.5">
          <h1 className="text-5xl uppercase font-bold md:text-6xl">
            About ThriveRise Foundation for Educational Development
          </h1>
          <p className="md:text-xl lg:max-w-4xl leading-relaxed">
            At ThriveRise, we believe that education and opportunity should
            never be a privilege. We're on a mission to create equitable access
            to learning, growth, and work for underserved children, youth, and
            students across Nigeria and Africa.
          </p>
        </div>

        {/* Images Section */}
        <div className="relative grid md:grid-flow-col gap-8 md:gap-16 items-start">
          {/* Left Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/website-ui/about-hero.svg"
              alt="Smiling child"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right Image */}
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/website-ui/thriverise-community.svg"
              alt="Children learning"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Center Overlapping Image */}
          <div className="absolute bottom-[120px] sm:bottom-[300px] md:bottom-[-59px] left-1/2 -translate-x-1/2 md:left-[50%] w-[75%] md:w-72 lg:w-96 aspect-[6/9] sm:aspect-[4/3]">
            <Image
              src="/website-ui/about-hero-3.svg"
              alt="Happy children group"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
