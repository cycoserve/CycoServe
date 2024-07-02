import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTachometerAlt, faFileAlt, faBox, faUsers, faCog, faShoppingCart, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';


const Sidebar: React.FC = () => {
  // Example data for navigation items
  const navigationSections = [
    {
      heading: 'Dashboard',
      link: '/dashboard',
      icon: faTachometerAlt,
      items: [
        { label: 'Overview', link: '/dashboard' },
      ],
    },
    // {
    //   heading: 'Users',
    //   link: '/dashboard/user-management',
    //   icon: faUsers,
    //   items: [
    //     { label: 'All Users', link: '/dashboard/users' },
    //     { label: 'Add User', link: '/dashboard/users/create' },
    //   ],
    // },
    // {
    //   heading: 'Apps',
    //   link: '/dashboard/apps',
    //   icon: faBox,
    //   items: [
    //     { label: 'All Apps', link: '/dashboard/apps' },
    //     { label: 'Add App', link: '/dashboard/apps/create' },
    //   ],
    // },
    {
      heading: 'Content',
      link: '/dashboard/content-management',
      icon: faFileAlt,
      items: [
        { label: 'Articles', link: '/dashboard/articles' },
        { label: 'Add Article', link: '/dashboard/articles/create' },
        { label: 'Videos', link: '/dashboard/videos' },
        { label: 'Add Video', link: '/dashboard/videos/create' },
      ],
    },
    {
      heading: 'Radio Stations',
      link: '/dashboard/radio-management',
      icon: faShoppingCart,
      items: [
        { label: 'Radio Stations', link: '/dashboard/radio-stations' },
        { label: 'Add Radio Station', link: '/dashboard/radio-stations/create' },
      ],
    },
    {
      heading: 'Artists',
      link: '/dashboard/artists',
      icon: faMusic,
      items: [
        { label: 'All Artists', link: '/dashboard/artists' },
        { label: 'Add Artist', link: '/dashboard/artists/create' },
      ],
    },
    {
      heading: 'Settings',
      link: '/dashboard/settings',
      icon: faCog,
      items: [
        { label: 'General Settings', link: '/dashboard/settings' },
      ],
    },
  ];



  const [openSections, setOpenSections] = useState<string[]>(() => {
    // Initialize state from localStorage
    if (typeof window !== 'undefined') {
      const savedSections = localStorage.getItem('openSections');
      return savedSections ? JSON.parse(savedSections) : [];
    }
    return [];
  });

  useEffect(() => {
    // Save open sections to localStorage whenever they change
    localStorage.setItem('openSections', JSON.stringify(openSections));
  }, [openSections]);

  const toggleSection = (heading: string) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(heading)
        ? prevOpenSections.filter((section) => section !== heading)
        : [...prevOpenSections, heading]
    );
  };

  return (
    <>
      <div className="bg-black h-full text-white w-[16em] flex-shrink-0 overflow-y-auto sidebar-custom-scrollbar hidden lg:block">
        <div className='pt-4 flex justify-start pl-4 sticky top-0 bg-black pb-3 border-b border-zinc-800'>
          <Logo />
        </div>

        <div className="pl-4 pr-2 mt-4 flex-grow">

          <nav className="flex flex-col gap-4">
            {navigationSections.map((section, index) => (
              <React.Fragment key={index}>
                <div className="mt-4 flex items-center justify-start gap-2">
                  <div
                    className="text-xs text-gray-400 uppercase font-bold cursor-pointer flex items-center"
                    onClick={() => toggleSection(section.heading)}
                  >
                    <FontAwesomeIcon icon={section.icon} className="mr-2" size="lg" />
                    {section.heading}
                  </div>
                  <FontAwesomeIcon
                    icon={openSections.includes(section.heading) ? faChevronUp : faChevronDown}
                    className="cursor-pointer"
                    onClick={() => toggleSection(section.heading)}
                    size="sm"
                  />
                </div>
                <div className="border-t border-zinc-900 h-px mt-2"></div>
                <AnimatePresence initial={false}>
                  {openSections.includes(section.heading) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4 overflow-hidden"
                    >
                      {section.items.map((item, subIndex) => (
                        <React.Fragment key={subIndex}>
                          <Link href={item.link}>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              className="block px-2 py-1 hover:bg-zinc-800 rounded-sm transition-colors duration-300 text-gray-300 text-sm"
                            >
                              {item.label}
                            </motion.div>
                          </Link>
                          <div className="border-t border-zinc-800 h-px mt-2"></div>
                        </React.Fragment>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            ))}
          </nav>
        </div>
        <div className="px-8 py-4 mt-8 mb-12 bg-black border-t border-zinc-800">
          <div className='flex flex-col gap-1'>
            <p className="text-xs text-gray-500">© 2024 CycoServe Solutions, LLC</p>
            <p className="text-xs text-gray-500">Sunset, Henderson, NV 89074</p>
          </div>

          <div className="mt-2 flex flex-row gap-2">
            <Link href="https://github.com/yourgithubusername/yourrepository">
              <div className="text-xs text-gray-500 hover:underline flex items-center">
                GitHub
              </div>
            </Link>
            <Link href="/documentation">
              <div className="text-xs text-gray-500 hover:underline">Documentation</div>
            </Link>
          </div>
        </div>
      </div>
    </>

  );
};

export default Sidebar;
