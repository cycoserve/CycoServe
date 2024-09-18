"use client";
import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ButtonAction from "@/components/ui/ButtonAction";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        // User is scrolling down
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop) {
        // User is scrolling up
        setScrollDirection("up");
      }

      setScrolled(currentScrollTop > 0);
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full right-0 z-10 transition-transform duration-500 ease-in-out ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? " backdrop-blur-xl shadow-md" : "bg-transparent"} py-2`}
      >
        <div className="container px-4 md:px-4 mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden lg:block -mb-3">
            <Navigation />
          </div>
          <div className="inline-flex">
            <div className="mr-4 mt-2 hidden lg:inline-block">
              <ButtonAction title="Download" url="https://github.com/cycoserve/CycoServe" />
            </div>
            <div className="mobile-menu lg:hidden mt-2">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
