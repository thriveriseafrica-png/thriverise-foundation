"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SOCIALS_SCHEMA } from "@/constants/footer.constant";
import { Button, ButtonVariants, Icon, Input } from "@/ui";
import { Inputs } from "@/ui/inputs/_types";

export default function SectionContact1() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto grid lg:grid-cols-2 gap-12 text-[#183668] order-2 lg:order-0 pl-5 md:pl-0"
      >
        <div className="grid gap-12 md:gap-15">
          {/* Paragraph 1 */}
          <div className="grid gap-2.5">
            <h1 className="uppercase font-bold text-4xl md:text-6xl">
              Contact Us
            </h1>
            {/* <p className="lg:max-w-sm 2xl:max-w-xl"> */}
            <p className="md:text-lg">
              We&apos;d love to hear from you! Whether you have a question, want
              to partner, volunteer, or just learn more about our work,
              we&apos;re always open to a conversation. Let&apos;s build a
              future where education and opportunity are accessible to all.
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-7 [&_h2]:font-bold [&_h2]:text-[26px] [&_p]:text-lg [&_p]:md:text-lg">
            <div>
              <h2>Email:</h2>
              <a
                href="mailto:thriveriseafrica@gmail.com"
                className="hover:font-bold"
              >
                thriveriseafrica@gmail.com{" "}
              </a>
            </div>
            <div>
              <h2>Phone/WhatsApp:</h2>
              <p>+234 702520 1857</p>
            </div>
            <div>
              <h2>Address:</h2>
              <p>Tanke, Ilorin, Kwara State, Nigeria</p>
            </div>
            <div>
              <h2>Media & Partnership Inquiries</h2>
              <p>
                For press, partnerships, or speaking engagements, please email:{" "}
                <br />
                <a
                  className="font-bold italic hover:font-normal"
                  href="mailto:thriveriseafrica@gmail.com"
                >
                  thriveriseafrica@gmail.com{" "}
                </a>{" "}
                <br /> Subject Line: Media/Partnership Inquiry
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="grid grid-flow-col pt-2 pb-1 gap-4 w-max items-center">
            {SOCIALS_SCHEMA.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                className="w-7 h-7 rounded-full border border-[#183668] bg-[#01AED9] bg-opacity-15 grid place-content-center"
              >
                <Icon type={social.icon} size={16} color="#183668" />
              </Link>
            ))}
          </div>
        </div>

        {/* Message Information */}
        <div className="bg-[#01AED9] rounded-xl [&_h2]:text-4xl [&_h2]:font-bold [&_h2]:md:text-5xl px-5 py-8">
          <div className="grid gap-2.5 md:gap-5 pb-5 md:pb-10">
            <h2>Send Us a Message</h2>
            <p>
              Have a message or request? Fill out our quick contact form and
              we&apos;ll get back to you as soon as we can.
            </p>
          </div>

          <div className="grid gap-7">
            <div className="grid gap-2.5">
              <Input type={Inputs.Text} label="Name" name="" />
              <Input type={Inputs.Email} label="Email" name="" />
              <Input type={Inputs.Text} label="Subject" name="" />
              <Input type={Inputs.Textarea} label="Message" name="" />
            </div>
            <div className="">
              <Button
                variant={ButtonVariants.NavyBlueWhiteFilledRounded}
                className="w-full"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
