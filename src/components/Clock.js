import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000);
    clearInterval();
  }, []);

  return (
    <div class='font-mono h-min flex flex-row items-end text-white px-4 py-1 bg-blur bg-gray-900 bg-opacity-60 rounded-3xl'>
      <div class='mb-0.5 text-xs md:text-sm'>{currentTime.toDateString()}</div>
      <div class='ml-2 text-lg md:text-2xl'>
        {currentTime.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Clock;
