// components/SecondNavigation.tsx

"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { menuItems } from './data/menuItems'; // Import the dynamic menu items

const SecondNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="menu">
        <ul className="flex justify-between items-center gap-8 list-none">
          {menuItems.map((item) => (
            <motion.li 
              key={item.id}
              whileHover={{ scale: 1.09 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.url}>
                <p className={`${scrolled ? "text-zinc-800 font-semibold hover:bg-orange-500 hover:text-white hover:shadow-xl px-4 py-1 rounded-full" : "text-zinc-800 font-semibold hover:bg-orange-500 hover:text-white hover:shadow-xl px-4 py-1 rounded-full "}`}>
                  {item.title}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SecondNavigation;
