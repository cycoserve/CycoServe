import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import { IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <div className="cursor-pointer flex items-center" onClick={toggleDropdown}>
        {title}
        {/* Dropdown Arrow */}
        <IconButton size="small">
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </div>

      {/* Dropdown Content */}
      <Collapse in={isOpen}>
        <div className="absolute mt-1 w-48 rounded shadow-lg">
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Dropdown;
