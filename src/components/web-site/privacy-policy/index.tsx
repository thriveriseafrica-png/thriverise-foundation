import React from "react";
import { Icon, Icons } from "@/ui";
export default function PrivacyPolicy() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto max-w-4xl grid gap-3 items-center place-items-center text-[#183668]">
        <div className="grid gap-2.5 order-2 lg:order-none pl-5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="">
            Your privacy is important to us at ThriveRise Foundation. Here's how we
            handle your data:
          </p>
          <p>Your donation supports:</p>

          <div className="grid gap-2.5 [&>div]:grid [&>div]:grid-cols-[auto_1fr] [&>div]:gap-2 [&>div]:items-start pb-4">
            <div>
              <div className="mt-2.5">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>
                We only collect personal information (such as name, email,
                phone) when you provide it, through contact forms, donations, or
                sign-ups.
              </p>
            </div>
            <div>
              <div className="mt-2.5">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>
                We use your information only for internal purposes (e.g.,
                communication, updates, donor receipts).
              </p>
            </div>
            <div>
              <div className="mt-2.5">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>
                We do not sell or share your personal data with third parties.
              </p>
            </div>
            <div>
              <div className="mt-2.5">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>We use secure platforms to manage and store your data.</p>
            </div>
            <div>
              <div className="mt-2.5">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>
                You may request to have your data deleted at any time by
                contacting us.
              </p>
            </div>
            <p>
              For privacy-related requests, email: thriveriseafrica@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
