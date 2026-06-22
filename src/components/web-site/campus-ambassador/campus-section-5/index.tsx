"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CampusSection5() {
  return (
    <section className="py-10 sm:py-20 layout-spacing text-[#183668]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
      >
        <div className="grid gap-2.5">
          <h1 className=" uppercase font-bold text-2xl md:text-4xl">
            What You&apos;ll Gain
          </h1>

          <ul className="space-y-4 [&>li]:grid [&>li]:grid-cols-[20px_1fr] [&>li]:items-start [&>li]:gap-3">
            <li>
              <span className="w-2 h-2 mt-2 rounded-full bg-[#027EBE] justify-self-center"></span>
              <p>
                <span className="font-semibold">Leadership Experience → </span>
                Develop real-world leadership, communication, and organizational
                skills.
              </p>
            </li>

            <li>
              <span className="w-2 h-2 mt-2 rounded-full bg-[#027EBE] justify-self-center"></span>
              <p>
                <span className="font-semibold">Mentorship & Training → </span>
                Access mentorship sessions, workshops, and learning resources.
              </p>
            </li>

            <li>
              <span className="w-2 h-2 mt-2 rounded-full bg-[#027EBE] justify-self-center"></span>
              <p>
                <span className="font-semibold">
                  Networking Opportunities →
                </span>
                Connect with ambassadors from other campuses and professionals
                in education, tech, and social impact.
              </p>
            </li>

            <li>
              <span className="w-2 h-2 mt-2 rounded-full bg-[#027EBE] justify-self-center"></span>
              <p>
                <span className="font-semibold">Career Growth → </span>
                Boost your CV with recognized experience in leadership and
                community building.
              </p>
            </li>

            <li>
              <span className="w-2 h-2 mt-2 rounded-full bg-[#027EBE] justify-self-center"></span>
              <p>
                <span className="font-semibold">
                  {" "}
                  Certificates & Recognition →{" "}
                </span>
                Earn a certificate of service and exclusive opportunities to
                represent ThriveRise Foundation in bigger projects.
              </p>
            </li>
          </ul>
        </div>
        <span className="relative w-full aspect-[1/0.7] mx-auto">
          <Image
            src={"/website-ui/campus-ambassador-5.svg"}
            fill
            sizes="1024px"
            alt="Icon"
          />
        </span>
      </motion.div>
    </section>
  );
}
