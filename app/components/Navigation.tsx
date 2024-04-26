import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 3, title: 'Features', url: '/features' },
    { id: 4, title: 'Services', url: '/services' },
    { id: 5, title: 'Pricing', url: '/pricing' },
  ];

  return (
    <>
      <div className="menu">
        <ul className={`${scrolled ? "text-zinc-900 font-semibold " : "text-white"} flex justify-between items-center gap-8`}>
          {/* Map over menu items to generate list items */}
          {menuItems.map((item) => (
            <li key={item.id}>
              {/* Use Link component to create clickable links */}
              <Link href={item.url}>
               {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navigation;
