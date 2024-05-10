"use client";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ButtonSecondary from "./ButtonSecondary";

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
        className={`${
          scrolled
            ? "bg-black bg-opacity-50 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        } fixed top-0 left-0 right-0 z-10 py-4 transition duration-300 ease-in-out`}
      >
        <div className="inner container px-4 md:px-2 mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden lg:block">
            <Navigation />
          </div>
          <div className="hidden lg:block">
            <div className="flex justify-between items-center gap-4">
              <ButtonSecondary title="Contact Us" btnLink="/contact-us" />
            </div>
          </div>
          <div className="block lg:hidden ">
            <MobileMenu />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
