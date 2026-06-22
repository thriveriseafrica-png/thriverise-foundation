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
            src="/website-ui/team-1.svg"
            width={400}
            height={400}
            className="w-full"
            alt="Saudat"
          />

          <div className="pl-2">
            <p className="">
              Michael Olukayode is a purpose-driven leader working at the
              intersection of cybersecurity, AI, social impact, and community
              development. <br />
              He is the President of the Board of Trustees at ThriveRise Foundation,
              a nonprofit organization dedicated to expanding access to
              education across Africa. Through ThriveRise Foundation, he is helping create
              pathways for underserved children to access quality education and
              empowering young people with mentorship, tools, and training to
              thrive academically and professionally. <br />
              Michael also leads the Mikaelson Innovation and Community
              Development Initiative, a people-first movement shaping
              Africa&apos;s future through habits, community, and technology.
              The initiative helps young people build discipline, digital
              skills, and leadership habits that transform personal lives and
              ripple into lasting community impact. Under his leadership, the
              organization advances SDG 4, 8, 9, 11, and 17 through programs
              like Mikaelson Labs, the 30-Day Reset Challenge, and strategic
              community partnerships. <br />
              In addition, Michael is a cybersecurity facilitator, educator, and
              community builder, teaching the full CompTIA Security+ curriculum
              and mentoring aspiring professionals. He has organized and led
              high-impact events such as DevFest Ilorin, DevFest Lagos,
              CareerFest 2024, and the Global Community Expo 1.0, creating
              platforms that cultivate skills, collaboration, and innovation
              among young tech enthusiasts. With a strong background in
              technology education, operations, and community engagement,
              Michael brings a strategic, people-centered approach to building
              initiatives that empower individuals and transform communities.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
