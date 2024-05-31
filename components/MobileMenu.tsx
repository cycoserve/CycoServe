import { Divider } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";


const menuItems = [
  { id: "1", title: "Home", url: "/" },
  { id: "2", title: "The Agency", url: "/about" },
  { id: "3", title: "Why Choose Us?", url: "/why-choose-us" },
  { id: "4", title: "Services", url: "/services" },
  { id: "5", title: "Pricing", url: "/pricing" },
  { id: "6", title: "Core Articles", url: "/blog" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className={`text-${scrolled ? "white" : "white"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      <div className="color bg-black">
        <Drawer
          lockBackgroundScroll={true}
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="mobile-menu"
          overlayColor={'black'}

        >
          <div className="bg-orange-400 h-full w-full pt-8">
            <div className="list flex flex-col justify-stretch h-full items-start px-6 text-zinc-900 py-8 text-xl gap-4">
              {menuItems.map((items) => (
                <><Link key={items.id} href={items.url}>
                  <div className="div">{items.title}</div>
                </Link>
                </>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MobileMenu;
