"use client";
import { Navigation } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import ButtonPrimary from "../ButtonPrimary";
import Logo from "../Logo";
import DashboardMobileMenu from "./DashboardMobileMenu";




function DashboardHeader() {
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
                    ? "bg-black shadow-sm py-2"
                    : "bg-black py-4"
                    } fixed top-0 left-0 w-full right-0 z-10 py-0 transition duration-500 ease-in-out`}
            >
                <div className="inner container px-4 md:px-2 mx-auto flex justify-between items-center">
                    <Logo />
                    <div className="hidden lg:block">
                        <Navigation />
                    </div>
                    <div className="inline-flex">
                        <div className="mr-4 text-white h-8 w-8 bg-red-500 rounded-full">
                            <div className="font-bold text-xl flex flex-col justify-center items-center">M</div>
                        </div>
                        <div className="div lg:hidden">
                            <DashboardMobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardHeader;
