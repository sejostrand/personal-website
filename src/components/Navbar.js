import React from 'react';
import { useMediaQuery } from '../utils/useMediaQuery';

const Navbar = (props) => {
  const media = useMediaQuery('(min-width: 800px)');

  const toggleNavbar = () => {
    if (document.getElementById('mobile-nav').classList.contains('h-screen')) {
      document
        .getElementById('mobile-nav')
        .classList.replace('h-screen', 'h-12');
    } else {
      document
        .getElementById('mobile-nav')
        .classList.replace('h-12', 'h-screen');
    }
  };

  const toTopMobile = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toggleNavbar();
  };

  const desktopNav = (
    <div
      id='hide-nav'
      class='
        overflow-hidden
        fixed
        w-full
        text-white
        flex flex-row
        transition-all
        top-0
        z-20
      '
    >
      <div
        class='
          flex flex-nowrap
          w-full
          bg-blur bg-gray-900 bg-opacity-70
          px-6
          py-3
        '
      >
        <div class='cursor-pointer' onClick={() => toTopMobile()}>
          Sebastian Strand
        </div>
      </div>

      <div id='nav-menu' class='flex flex-row md:visible flex-nowrap'>
        <div
          onClick={() => props.toLink('about')}
          class='
            bg-blur bg-gray-900 bg-opacity-70
            px-6
            py-3
            cursor-pointer
            hover:bg-opacity-40
            flex flex-row flex-nowrap
            items-end
          '
        >
          <span class='py-0.5 pr-2 text-yellow-400 text-sm'>1. </span>ABOUT
        </div>
        <div
          onClick={() => props.toLink('projects')}
          class='
            bg-blur bg-gray-900 bg-opacity-70
            px-6
            py-3
            cursor-pointer
            hover:bg-opacity-40
            flex flex-row flex-nowrap
            items-end
          '
        >
          <span class='py-0.5 pr-2 text-yellow-400 text-sm'>2. </span>PROJECTS
        </div>
        <div
          onClick={() => props.toLink('contact')}
          class='
            bg-blur bg-gray-900 bg-opacity-70
            px-6
            py-3
            cursor-pointer
            hover:bg-opacity-40
            flex flex-row flex-nowrap
            items-end
          '
        >
          <span class='py-0.5 pr-2 text-yellow-400 text-sm'>3. </span>CONTACT
        </div>
      </div>
    </div>
  );

  const mobileNav = (
    <div
      id='mobile-nav'
      class='
        overflow-hidden
        fixed
        w-full
        text-white
        flex flex-col
        transition-all
        top-0
        z-20
        h-12
        bg-blur bg-gray-900 bg-opacity-70
      '
    >
      <div
        class='
          flex flex-nowrap
          w-full
          px-6
          py-3
        '
      >
        <div class='cursor-pointer' onClick={() => toTopMobile()}>
          Sebastian Strand
        </div>
      </div>

      <div onClick={() => toggleNavbar()} class='absolute right-2 z-20'>
        <div
          class='
            flex flex-col flex-nowrap
            p-4
            items-end
            cursor-pointer
          '
        >
          <div class='bg-white w-8 h-0.5 my-0.5'></div>
          <div class='bg-white w-4 h-0.5 my-0.5'></div>
          <div class='bg-white w-6 h-0.5 my-0.5'></div>
        </div>
      </div>

      <div class='min-h-50vh my-auto flex flex-col flex-nowrap text-2xl'>
        <div
          onClick={() => props.toLinkMobile('about')}
          class='
            px-6
            py-3
            cursor-pointer
            flex flex-row flex-nowrap
            justify-end
            items-end
          '
        >
          <span class='py-0.5 px-2 text-yellow-400 text-sm'>1. </span>ABOUT
        </div>
        <div
          onClick={() => props.toLinkMobile('projects')}
          class='
            px-6
            py-3
            cursor-pointer
            flex flex-row flex-nowrap
            justify-end
            items-end
          '
        >
          <span class='py-0.5 px-2 text-yellow-400 text-sm'>2. </span>PROJECTS
        </div>
        <div
          onClick={() => props.toLinkMobile('contact')}
          class='
            px-6
            py-3
            cursor-pointer
            flex flex-row flex-nowrap
            justify-end
            items-end
          '
        >
          <span class='py-0.5 px-2 text-yellow-400 text-sm'>3. </span>CONTACT
        </div>
      </div>
    </div>
  );

  return media ? desktopNav : mobileNav;
};

export default Navbar;
