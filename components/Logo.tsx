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
    <div className="flex -mt-2 justify-center items-center bg-transparent">
      <Link href="/" >
        <Image
          src={scrolled ? "/logo-dark.svg" : "/logo-light.svg"}
          alt="Logo"
          width={150}
          height={20}
          className=" object-cover"
        />
      </Link>
    </div>
  );
}

export default Logo;
