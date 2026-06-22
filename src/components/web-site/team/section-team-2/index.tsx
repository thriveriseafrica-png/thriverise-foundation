"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionTeam2() {
  return (
    <section className="py-10 sm:py-20 layout-spacing bg-[#183668]">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto text-white"
      >
        <div className="grid lg:grid-flow-col gap-7 lg:gap-12 lg:px-24">
          <div>
            <Image
              src="/website-ui/team-2.svg"
              width={400}
              height={400}
              className="w-full"
              alt="Boluwatife Adeleke"
            />
            <div className="mt-3 text-center">
              <p className="font-bold text-lg">Boluwatife Adeleke</p>
              <p className="opacity-75 text-sm">Trustee (Secretary)</p>
            </div>
          </div>

          <div className="pl-2">
            <p>
              Boluwatife Adeleke is a purpose-driven leader working at the
              intersection of social impact, marketing, and operations. <br />
              She is the Founder of Thrive Rise, a nonprofit organization
              committed to promoting SDG 4 (Quality Education) and SDG 8 (Decent
              Work and Economic Growth). Through Thrive Rise, she&apos;s
              creating pathways for underserved children to access education and
              empowering young people with the tools, mentorship, and training
              they need to thrive and contribute meaningfully to the economy.{" "}
              <br />
              She also leads Martvest, an e-commerce initiative designed to
              economically empower women in low-income communities by giving
              their locally made products visibility through a digital
              marketplace, bridging the gap between informal creators and
              mainstream consumers. <br />
              With a background in marketing and business operations, Boluwatife
              brings a strategic, people-centered approach to everything she
              builds. Her work doesn&apos;t just center impact, it is powered by
              effective communication, community building, and execution. Even
              within her nonprofit and startup ventures, she continues to drive
              brand strategy, campaign management, and operational growth,
              proving that marketing and mission are not mutually exclusive.{" "}
              <br />A multi-passionate builder, Boluwatife is driven by a desire
              to create systems that work, for people, for businesses, and for
              society. Whether she&apos;s designing programs, building teams,
              leading campaigns, or mobilizing communities, she shows up with
              intentionality, clarity, and heart.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
