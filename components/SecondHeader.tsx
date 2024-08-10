import React, { useState, useEffect } from "react";
import SecondNavigation from "./SecondNavigation";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import ButtonPrimary from "./ButtonPrimary";
import LogoDark from "./LogoDark";

function SecondHeader() {
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
            ? "shadow-md"
            : ""
        } fixed top-0 left-0 w-full right-0 z-10 py-2 bg-white transition duration-600 ease-in-out`}
      >
        <div className="inner container px-4 md:px-2 mx-auto flex justify-between items-center">
         <LogoDark />
          <div className="hidden lg:block">
            <SecondNavigation />
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

export default SecondHeader;