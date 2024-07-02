import { Divider } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import DashSideBar from "../Layouts/DashSideBar";




const DashboardMobileMenu = () => {
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
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                </svg>
            </button>
     
                <Drawer
                    lockBackgroundScroll={true}
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="left"
                    className="dash-mobile-menu"
                    overlayColor={'black'}
                    enableOverlay={true}
                    overlayOpacity={0.6}
                    size={259}
                    

                >
                    <div className="div bg-black h-full">
                            <DashSideBar /> 
                    </div>
               
                </Drawer>
     
        </>
    );
};

export default DashboardMobileMenu;
