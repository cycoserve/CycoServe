"use client";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ButtonPrimary from "./ButtonPrimary";



function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${scrolled
          ? "bg-black shadow-sm"
          : "bg-black"
          } fixed top-0 left-0 w-full right-0 z-10 py-4 transition duration-300 ease-in-out`}
      >
        <div className="inner container px-4 md:px-2 mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden lg:block">
            <Navigation />
          </div>
          <div className="inline-flex">
            <div className="mr-4">
              <ButtonPrimary title="Sign In" url="https://station.cycoserve.com/login" />
            </div>
            <div className="div lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
