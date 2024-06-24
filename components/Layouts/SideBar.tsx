import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTachometerAlt, faFileAlt, faBox, faUsers, faCog, faShoppingCart, faMusic, faVideo } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import Profile from '../Profile';

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
    //   heading: 'Customer Management',
    //   link: '/dashboard/customer-management',
    //   icon: faUsers,
    //   items: [
    //     { label: 'All Customers', link: '/dashboard/customers' },
    //     { label: 'Add Customer', link: '/dashboard/customers/create' },
    //   ],
    // },
        {
      heading: 'User Management',
      link: '/dashboard/user-management',
      icon: faUsers,
      items: [
        { label: 'All Users', link: '/dashboard/users' },
        { label: 'Add User', link: '/dashboard/users/create' },
      ],
    },
    {
      heading: 'Product Management',
      link: '/dashboard/product-management',
      icon: faBox,
      items: [
        { label: 'All Products', link: '/dashboard/products' },
        { label: 'Add Product', link: '/dashboard/products/create' },
        { label: 'Orders', link: '/dashboard/orders' },
        { label: 'Add Order', link: '/dashboard/orders/create' },
      ],
    },
    // {
    //   heading: 'Social Media Accounts',
    //   link: '/dashboard/social-media-accounts',
    //   icon: faUsers,
    //   items: [
    //     { label: 'All Social Accounts', link: '/dashboard/social-media-accounts' },
    //     { label: 'Add Account', link: '/dashboard/social-media-accounts/create' },
    //   ],
    // },
    {
      heading: 'Content Management',
      link: '/dashboard/content-management',
      icon: faFileAlt,
      items: [
        { label: 'Core Articles', link: '/dashboard/articles' },
        { label: 'Add Article', link: '/dashboard/articles/create' },
        { label: 'Videos', link: '/dashboard/videos' },
        { label: 'Add Video', link: '/dashboard/videos/create' },
        { label: 'Artists', link: '/dashboard/artists' },
        { label: 'Add Artist', link: '/dashboard/artists/create' },
        { label: 'Website Showcases', link: '/dashboard/website-showcases' },
        { label: 'Add Showcase', link: '/dashboard/websites/create' },
        { label: 'Websites', link: '/dashboard/websites' },
        { label: 'Add Website', link: '/dashboard/websites/create' },
      ],
    },
    // {
    //   heading: 'Website Management',
    //   link: '/dashboard/website-management',
    //   icon: faShoppingCart,
    //   items: [
    //     { label: 'All Websites', link: '/dashboard/websites' },
    //     { label: 'Add Website', link: '/dashboard/websites/create' },
    //     { label: 'Website Showcases', link: '/dashboard/website-showcases' },
    //     { label: 'Add Showcase', link: '/dashboard/website-showcases/create' },
    //     { label: 'Templates', link: '/dashboard/templates' },
    //     { label: 'Add Template', link: '/dashboard/templates/create' },
    //   ],
    // },
    {
      heading: 'Radio Management',
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
          { label: 'Manage Contracts', link: '/dashboard/artists/contracts' },
          { label: 'Add Contract', link: '/dashboard/artists/contracts/create' },
          { label: 'Manage Events', link: '/dashboard/artists/events' },
          { label: 'Add Event', link: '/dashboard/artists/events/create' },
          { label: 'Manage Albums', link: '/dashboard/artists/albums' },
          { label: 'Add Album', link: '/dashboard/artists/albums/create' },
        ],
      },
      // {
      //   heading: 'Music Management',
      //   link: '/dashboard/music-management',
      //   icon: faMusic,
      //   items: [
      //     { label: 'All Music', link: '/dashboard/music' },
      //     { label: 'Add Music', link: '/dashboard/music/create' },
      //     { label: 'Genres', link: '/dashboard/music/genres' },
      //     { label: 'Add Genre', link: '/dashboard/music/genres/create' },
      //     { label: 'Artists', link: '/dashboard/music/artists' },
      //     { label: 'Add Artist', link: '/dashboard/music/artists/create' },
      //     { label: 'Albums', link: '/dashboard/music/albums' },
      //     { label: 'Add Album', link: '/dashboard/music/albums/create' },
      //   ],
      // },
      // {
      //   heading: 'Video Management',
      //   link: '/dashboard/video-management',
      //   icon: faVideo,
      //   items: [
      //     { label: 'All Videos', link: '/dashboard/videos' },
      //     { label: 'Add Video', link: '/dashboard/videos/create' },
      //     { label: 'Categories', link: '/dashboard/videos/categories' },
      //     { label: 'Add Category', link: '/dashboard/videos/categories/create' },
      //     { label: 'Channels', link: '/dashboard/videos/channels' },
      //     { label: 'Add Channel', link: '/dashboard/videos/channels/create' },
      //   ],
      // },
            
    {
      heading: 'Settings',
      link: '/dashboard/settings',
      icon: faCog,
      items: [
        { label: 'General Settings', link: '/dashboard/settings' },
        { label: 'Out Reach Efforts', link: '/dashboard/settings/out-reach-efforts' },
        { label: 'Domain Names', link: '/dashboard/settings/domain-names' },
        { label: 'Web3 Assets', link: '/dashboard/settings/web3-assets' },
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
    <div className="bg-black h-full text-white w-[20em] flex-shrink-0 overflow-y-auto sidebar-custom-scrollbar hidden lg:block">
      <div className="bg-black px-8 pt-4 flex justify-start items-center mb-12">
        <Logo />
      </div>
      <div className="px-8 mt-4 flex-grow">
        <nav className="flex flex-col gap-4">
          <div>
            <p className=" text-white inline-flex items-center gap-4"><Profile /></p>
            <div className="border-t border-zinc-700 h-px mt-2"></div>
            {/* <Profile /> */}
          </div>
          {navigationSections.map((section, index) => (
            <React.Fragment key={index}>
              <div className="mt-4 flex items-center justify-between">
                <div 
                  className="text-sm text-gray-500 uppercase font-bold cursor-pointer flex items-center" 
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
              <div className="border-t border-zinc-700 h-px mt-2"></div>
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
                            className="block px-2 py-1 hover:bg-zinc-800 rounded-sm transition-colors duration-300 text-gray-300"
                          >
                            {item.label}
                          </motion.div>
                        </Link>
                        <div className="border-t border-zinc-700 h-px mt-2"></div>
                      </React.Fragment>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </nav>
      </div>
      <div className="px-8 py-4 mt-8 mb-12 bg-black border-t border-zinc-700">
        <p className="text-sm text-gray-500">© 2024 CycoServe Solutions, LLC</p>
        <p className="text-sm text-gray-500">Sunset, Henderson, NV 89074</p>
        <Link href="/documentation">
          <div className="text-sm text-gray-500 hover:underline">Documentation</div>
        </Link>
        <div className="mt-2">
          <Link href="https://github.com/yourgithubusername/yourrepository">
            <div className="text-sm text-gray-500 hover:underline flex items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              GitHub
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
