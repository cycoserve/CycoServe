"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Navigation() {
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

  // Define menu items with ID, title, and URL
  const menuItems = [
    { id: 1, title: 'Experts', url: '/experts' },
    // { id: 2, title: 'Blog', url: '/blog' },
    { id: 3, title: 'Features', url: '/features' },
    { id: 4, title: 'Services', url: '/services' },
    { id: 5, title: 'Pricing', url: '/pricing' },
  ];

  return (
    <>
      <div className="menu">
        <ul className="flex justify-between items-center gap-8">
          {/* Map over menu items to generate list items */}
          {menuItems.map((item) => (
            <motion.li 
              key={item.id}
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Use Link component to create clickable links */}
              <Link href={item.url}>
                <p className={`${scrolled ? "text-gray-900 font-semibold" : "text-white"}`}>
                  {item.title}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navigation;
