import React from "react";
import { Icon, Icons } from "@/ui";
export default function TermsOfUse() {
  return (
    <section className="py-10 sm:py-20 layout-spacing">
      <div className="container mx-auto max-w-4xl grid gap-3 items-center place-items-center text-[#183668]">
        <div className="grid gap-2.5 order-2 lg:order-none pl-5">
          <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl">
            Terms of Use
          </h1>
          <p className="">
            By using our website or interacting with ThriveRise Foundation, you
            agree to:
          </p>

          <div className="grid gap-2.5 [&>div]:grid [&>div]:grid-cols-[auto_1fr] [&>div]:gap-2 [&>div]:items-start pb-4">
            <div>
              <div className="mt-2.5">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>Use the site and its content lawfully and respectfully.</p>
            </div>
            <div>
              <div className="mt-2.5">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>
                Not reproduce or use our materials (photos, logos, text) without
                permission.
              </p>
            </div>
            <div>
              <div className="mt-2.5">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>
                Acknowledge that any misuse of content or impersonation will be
                addressed legally.
              </p>
            </div>
            <div>
              <div className="mt-2">
                <Icon type={Icons.Dot} size={4} color="#183668" />
              </div>
              <p>
                Comply with our content use guidelines for downloadable
                resources and public-facing documents.
              </p>
            </div>
            <p>
              We reserve the right to update these policies to better serve and
              protect our users.
            </p>
            <p>
              {" "}
              <span className="font-bold">Last Updated:</span> July 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
