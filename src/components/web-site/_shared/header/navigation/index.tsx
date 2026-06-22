"use client";
import React from "react";
import NavigationItem from "./navigation-item";
import MobileNavigation from "./mobile-navigation";

export default function Navigation() {
  return (
    <>
      <MobileNavigation />

      <div className="hidden lg:grid grid-flow-col gap-5 w-max items-center ">
        <NavigationItem url="/about-us">About Us</NavigationItem>
        {/* <NavigationItem url="/our-work">Our Work</NavigationItem> */}
        <NavigationItem url="/resources">Resources</NavigationItem>
        <NavigationItem url="/team">Team</NavigationItem>
        <NavigationItem url="/get-involved">Get Involved</NavigationItem>
        <NavigationItem url="/contact">Contact</NavigationItem>
      </div>
    </>
  );
}
