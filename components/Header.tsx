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
          ? "bg-white py-2 shadow-md"
          : "bg-transparent py-2"
          } fixed top-0 left-0 w-full right-0 z-10 py-0 transition duration-600 ease-in-out`}
      >
        <div className="px-4 md:px-4 mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden lg:block">
            <Navigation />
          </div>
          <div className="inline-flex">
            <div className="mr-4">
              <ButtonPrimary title="Sign In" url="/signin" />
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
