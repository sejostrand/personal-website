import React from 'react';

const Footer = (props) => {
  return (
    <div class='flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black w-full h-48'>
      <div class='flex-row flex-wrap justify-center text-lg flex m-4 text-white'>
        <a
          onClick={() => props.toTop()}
          class='hover:bg-opacity-10 mb-1 mx-2 py-1 px-6 rounded-full bg-blur bg-black bg-opacity-50 cursor-pointer'
        >
          toTop
        </a>
        <a
          onClick={() => props.toLink('about')}
          class='hover:bg-opacity-10  mb-1 mx-2 py-1 px-6 rounded-full bg-blur bg-black bg-opacity-50 cursor-pointer'
        >
          About
        </a>
        <a
          onClick={() => props.toLink('projects')}
          class='hover:bg-opacity-10 mb-1 mx-2 py-1 px-6 rounded-full bg-blur bg-black bg-opacity-50 cursor-pointer'
        >
          Projects
        </a>
        <a
          onClick={() => props.toLink('contact')}
          class='hover:bg-opacity-10 mb-1 mx-2 py-1 px-6 rounded-full bg-blur bg-black bg-opacity-50 cursor-pointer'
        >
          Contact
        </a>
      </div>
      <div class='text-white mb-10 text-xs md:text-lg'>
        Website Created with{' '}
        <span class='bg-white text-gray-900 px-3 mx-1 rounded-full'>
          React.js
        </span>{' '}
        and{' '}
        <span class='bg-white text-gray-900 px-3 mx-1 rounded-full'>
          TailwindCSS
        </span>
        .
      </div>
    </div>
  );
};

export default Footer;
