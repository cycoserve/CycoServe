"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerColumns = [
    {
      id: 1,
      header: "Company",
      links: [
        { id: 1, title: "Home", url: "/" },
        { id: 2, title: "About", url: "/about" },
        // { id: 3, title: "Features", url: "/features" },
        // { id: 4, title: "Experts", url: "/experts" },
        { id: 5, title: "Contact", url: "/contact-us" },
      ],
    },
    {
      id: 2,
      header: "Services",
      links: [
        // { id: 4, title: "Web Development", url: "/web-development" },
        // {
        //   id: 5,
        //   title: "Mobile App Development",
        //   url: "/mobile-app-development",
        // },
        { id: 6, title: "All Services", url: "/services" },
      ],
    },
    {
      id: 3,
      header: "Resources",
      links: [
        { id: 7, title: "Blog", url: "/blog" },
        // { id: 8, title: "Documentation", url: "/docs" },
        // { id: 9, title: "FAQs", url: "/faqs" },
      ],
    },
    {
      id: 4,
      header: "Follow Us",
      links: [
        { id: 10, title: "Twitter", url: "https://twitter.com" },
        // { id: 11, title: "LinkedIn", url: "https://linkedin.com" },
        // { id: 12, title: "Instagram", url: "https://instagram.com" },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-black bg-[url('')]  bg-cover bg-bottom pt-12">
        <div className="container mx-auto px-4 lg:px-0 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 bg-black p-4 rounded-lg border-2 border-opacity-15 border-zinc-300 bg-opacity-60 ">
            {/* Map over footer columns to generate columns */}
            {footerColumns.map((column) => (
              <div key={column.id}>
                <h3 className="text-white text-lg font-semibold mb-4">
                  {column.header}
                </h3>
                <ul>
                  {/* Map over footer links within each column */}
                  {column.links.map((link) => (
                    <motion.li key={link.id} whileHover={{ scale: 1.01 }}>
                      <Link
                        href={link.url}
                        className="text-white hover:text-gray-400"
                      >
                        {link.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="lower bg-black py-4 border-t border-t-gray-700">
          <div className="container px-4 lg:px-0 mx-auto text-white text-xs">
            <p> &copy; {currentYear} CycoServe, LLC. All rights reserved. </p>
          </div>
        </div>
      </footer>
    </>

  );
};

export default Footer;