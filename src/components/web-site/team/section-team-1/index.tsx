"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionTeam1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#183668]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid gap-16 text-white"
      >
        <div className="text-center">
          <h1 className="uppercase font-bold text-3xl sm:text-4xl lg:text-5xl">
            Our Board of Trustees
          </h1>
        </div>
        <div className="grid lg:grid-flow-col gap-7 lg:gap-12 lg:px-24">
          <Image
            src="/MichaelOlukayode.jpg"
            width={400}
            height={400}
            className="w-full"
            alt="Michael Olukayode"
          />

          <div className="pl-2">
            <p className="">
              Michael Olukayode is a social innovator and youth development
              advocate passionate about helping young Africans build the habits,
              skills, and support systems needed to thrive in the modern world.{" "}
              <br />
              He is the Founder and Executive Director of the Mikaelson
              Initiative, a youth-focused non-profit organization working at the
              intersection of personal development, technology, and community.
              Through his work, Michael has led initiatives that have impacted
              thousands of young people across Africa, creating opportunities
              for growth, leadership, digital literacy, and meaningful social
              change. <br />
              He also serves as board president at ThriveRise Foundation, where
              he supports efforts to expand access to formal, digital, and
              informal education for underserved children and communities. <br />
              His mission is to empower the next generation to live
              intentionally, contribute to their communities, and shape
              Africa&apos;s future.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
