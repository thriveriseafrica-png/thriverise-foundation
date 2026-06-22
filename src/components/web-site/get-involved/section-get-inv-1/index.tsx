"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function SectionGetInv1() {
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
            Join the ThriveRise Movement
          </h1>
          <p className="">
            At ThriveRise Foundation, we believe that lasting change happens when
            people come together. Whether you&apos;re passionate about teaching,
            donating, mentoring, or supporting from afar, there&apos;s a place
            for you here. Help us bridge education gaps, empower young people,
            and create a future where no child is left behind.
          </p>
        </div>

        <span className="relative w-full aspect-[1/0.7] mx-auto">
          <Image
            src={"/website-ui/thriverise-moment.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>
      </motion.div>
    </section>
  );
}
