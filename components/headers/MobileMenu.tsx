import Link from "next/link";
import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ButtonPrimary from "../ui/ButtonPrimary";
import Image from "next/image";
import ButtonExplore from "../ui/ButtonExplore";
// import SearchComponent from "../Sections/SearchComponent";
import { menuItems } from './data/menuItems';



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
          viewBox="0 0 28 28"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </button>
      <div className=" rounded-lg">
        <Drawer
          lockBackgroundScroll={true}
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="mobile-menu"
          overlayColor="black"
          size={280}
        >
          <div className="bg-black h-full w-full">
            {/* Logo */}
            <div className="bg-black px-2 pt-4">
              <Image src={"/logo-light.svg"} alt={""} width={150} height={100} />
            </div>
            {/* Action Buttons */}
            {/* <div className="pt-2 pb-4 bg-black px-2 flex flex-row gap-2 justify-between items-center">
              <ButtonPrimary title={"Download"} url={"https://github.com/cycoserve/CycoServe"} />
              <ButtonExplore title={"Guides"} url={"https://docs.cycoserve.com"} />
            </div> */}
            {/* Search */}
            <div className="pt-2 pb-4 bg-black px-2 flex flex-row gap-2 justify-between items-center">
              {/* <SearchComponent /> */}
            </div>

            <div className="list flex flex-col justify-stretch h-full items-start text-zinc-900 py-0 text-xl gap-0">
              {menuItems.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="w-full">
                    {/* Top Divider */}
                    <div className="w-full h-[1px] bg-zinc-600" />
                    <Link href={item.url}>
                      <div className="p-4 text-white hover:bg-zinc-600 hover:text-white transition duration-200">
                        {item.title}
                      </div>
                  
                    </Link>
                    {/* Bottom Divider */}
                    <div className="w-full h-[1px] bg-zinc-600" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default MobileMenu;
