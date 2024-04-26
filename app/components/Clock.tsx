// components/Clock.tsx

import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const amPm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${formattedHours}:${minutes}:${seconds} ${amPm}`);
    };

    // Update the clock every second
    const intervalId = setInterval(updateClock, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-4xl font-bold text-white mb-4 w-40">{currentTime}</div>
      <div className="text-lg font-semibold text-gray-500">Current Time</div>
    </div>
  );
};

export default Clock;
