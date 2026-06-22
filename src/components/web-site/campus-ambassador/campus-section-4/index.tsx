"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CampusSection4() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#007DBC]">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <span className="relative w-full aspect-[1/0.7] mx-auto">
          <Image
            src={"/website-ui/campus-ambassador-4.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>

        <div className="grid gap-2.5 text-[#FFF8EB]">
          <h1 className="uppercase font-bold text-2xl md:text-4xl">
            What You&apos;ll Do
          </h1>

          <ul className="space-y-3">
            {[
              "Represent ThriveRise Foundation in your school.",
              "Spread awareness about our programs and opportunities.",
              "Connect with fellow student leaders and drive collaborations.",
              "Share feedback, ideas, and stories from your campus community.",
              "Take part in monthly challenges and campaigns.",
            ].map((text, index) => (
              <li
                key={index}
                className="grid grid-cols-[16px_1fr] items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#183668] justify-self-center"></span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
