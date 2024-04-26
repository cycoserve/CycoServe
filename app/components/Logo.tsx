import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function Logo() {
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
      <div className={`${scrolled ? "font-bold text-zinc-900" : "font-semibold text-white"}`}>CycoServe</div>
    </>
  );
}

export default Logo;
