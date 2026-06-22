import { Button, ButtonVariants, Icon, Icons, Logo } from "@/ui";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavigationItem from "./navigation-item";
import { AnimatePresence, motion, Variants } from "motion/react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const variants: Variants = {
    initial: () => ({
      height: 0,
      opacity: 0,
    }),
    animate: {
      height: "100%",
      opacity: 1,
    },
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <Button
        onClick={handleToggle}
        variant={ButtonVariants.SkyBlueFilledRounded}
        className="lg:hidden cursor-pointer"
      >
        MENU
      </Button>

      {isOpen && (
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-white w-full h-[100svh] grid py-5 overflow-hidden"
          >
            <div className="grid gap-16 grid-flow-row content-start h-screen overflow-hidden">
              {/* Logo and Close button */}
              <div className="px-5 pt-12">
                <div className="container mx-auto grid grid-flow-col items-center justify-between">
                  <Logo variant="black" className="w-14 h-14" />

                  <Button
                    variant={ButtonVariants.SkyBlueFilledRounded}
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    CLOSE
                  </Button>
                </div>
              </div>

              {/* Navigations */}
              <div className="overflow-y-auto custom-scroll-bar px-5">
                <div className="grid gap-12 container mx-auto">
                  <NavigationItem url="/about-us" onClick={handleToggle}>
                    About Us
                  </NavigationItem>
                  {/* <NavigationItem url="/our-work" onClick={handleToggle}>
                    Our Work
                  </NavigationItem> */}
                  <NavigationItem url="/resources" onClick={handleToggle}>
                    Resources
                  </NavigationItem>
                  <NavigationItem url="/team" onClick={handleToggle}>
                    Team
                  </NavigationItem>
                  <NavigationItem url="/get-involved" onClick={handleToggle}>
                    Get Involved
                  </NavigationItem>
                  <NavigationItem url="/contact" onClick={handleToggle}>
                    Contact
                  </NavigationItem>
                </div>
              </div>

              {/* Call to actions */}
              <div className="px-5">
                <div className="container mx-auto grid grid-flow-col gap-3">
                  <Link href={"get-involved#volunteer-section"}>
                    <Button
                      variant={ButtonVariants.CreamFilledRounded}
                      className="w-full"
                    >
                      Join Us
                    </Button>
                  </Link>
                  <Link href={"get-involved#donate-section"}>
                    <Button
                      variant={ButtonVariants.SkyBlueFilledRounded}
                      className="w-full"
                    >
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
