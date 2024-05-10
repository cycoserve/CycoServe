import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex -mt-1 justify-center items-center bg-transparent">
      <Link href={"/"} >
      <img
        src={scrolled ? "/logo-light.svg" : "/logo-light.svg"}
        alt="Logo"
        className="h-8 object-cover"
      />
      </Link>

    </div>
  );
}

export default Logo;
