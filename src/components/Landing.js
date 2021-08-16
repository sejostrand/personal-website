import React from 'react';

const Landing = (props) => {
  const openCV = () => {
    window.open('http://localhost:3000/src/cv-english.pdf', '_blank');
  };

  return (
    <div
      class='
          bg-gradient-to-br
          from-gray-900
          to-gray-800
          flex flex-col
          items-center
          p-8
        '
    >
      <div class='flex flex-col max-w-3xl'>
        <div class='flex w-fit text-yellow-500 text-xl m-2' id='greeting'>
          Hi, my name is
        </div>
        <h1 class='flex w-fit text-white text-4xl m-2'>Sebastian Strand.</h1>
        <div class='text-gray-300 text-lg sm:text-3xl m-2' id='greeting'>
          I'm an Industrial Engineer who taught himself Web Development.
        </div>
        <p class='text-white mx-2 my-6 max-w-2xl'>
          Why? Eventually, I want to create my own company and build great
          projects that can improve the quality of life for those who need it.
          Before I get there, I want to learn as much as I can from those I work
          with, and give back as much as possible while doing so.
        </p>
        <div class='flex flex-row flex-wrap m-2'>
          <button
            onClick={openCV}
            class='
            m-2
                transition-colors
                duration-300
                ease-in-out
                text-white
                bg-yellow-600
                py-2
                px-10
                ring-2 ring-yellow-600
                hover:ring-2 hover:ring-white hover:bg-opacity-20
                rounded
              '
          >
            Download CV
          </button>
          <button
            onClick={() => props.toLink('contact')}
            class='
            m-2
                transition-colors
                duration-300
                ease-in-out
                text-white
                bg-yellow-600
                ring-2 ring-yellow-600
                py-2
                px-10
                hover:ring-2 hover:ring-white hover:bg-opacity-20
                rounded
              '
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
