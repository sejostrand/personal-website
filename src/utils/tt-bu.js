import React, { useEffect } from 'react';

const ToggleTheme = (props) => {
  const updateColor = () => {
    if (props.isDark) {
      document.getElementById('theme-toggle').classList.remove('bg-gray-900');
      document.getElementById('theme-toggle').classList.add('bg-yellow-500');
      document.getElementById('bg-cover').classList.remove('dark-cover');
      document.getElementById('bg-cover').classList.add('light-cover');
      document.getElementsByClassName();
    } else {
      document.getElementById('theme-toggle').classList.remove('bg-yellow-500');
      document.getElementById('theme-toggle').classList.add('bg-gray-900');
      document.getElementById('bg-cover').classList.remove('light-cover');
      document.getElementById('bg-cover').classList.add('dark-cover');
    }
  };

  useEffect(() => updateColor(), [props.isDark]);

  return (
    <button
      id='theme-toggle'
      onClick={() => props.setIsDark(!props.isDark)}
      class=' transition-all z-10 w-28 font-mono flex flex-row justify-center text-white bg-blur bg-opacity-50 rounded-3xl'
    >
      <div class='mb-0.5 text-sm'>
        {props.isDark ? 'light mode' : 'dark mode'}
      </div>
    </button>
  );
};

export default ToggleTheme;
