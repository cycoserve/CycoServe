import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

function LogoDark() {
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
    <div className="flex -mt-2 justify-center items-center bg-transparent">
      <Link href={"/"} >
      <img
        src={scrolled ? "/logo-dark.svg" : "/logo-dark.svg"}
        alt="Logo"
        className=" h-8 object-cover"
        width={150}
        height={100}
      />
      </Link>

    </div>
  );
}

export default LogoDark;
