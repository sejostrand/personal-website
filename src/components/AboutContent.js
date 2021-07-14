import React from 'react';
import PROFILE from '../img/profile.jpg';
import TechPill2 from './TechPill2';

const AboutContent = () => {
  const tech = [
    { tag: 'Javascript', caption: 'Fetch API, DOM manipulation, OOP' },
    { tag: 'MongoDB', caption: 'NoSQL, MongoAtlas' },
    { tag: 'Strapi', caption: 'Headless-CMS powered by Node.js' },
    { tag: 'React.js', caption: 'React Hooks, Styled-components, Axios' },
    { tag: 'TailwindCSS', caption: 'Utility first CSS framework/library' },
    { tag: 'PostgreSQL', caption: 'SQL' },
  ];

  return (
    <div
      id='about-content'
      class='mx-8 flex flex-row flex-wrap justify-center relative section-transition section-hidden
      overflow-hidden'
    >
      <div class='flex flex-col max-w-md'>
        <p class='text-white mb-4'>
          So, originally I'm from the UK and when I was 14 years old I moved to
          Chile, where I graduated from Industrial Engineering at Universidad
          Adolfo Ibanez in Santiago.
        </p>
        <p class='text-yellow-500 mx-2 my-4 text-3xl'>What's my stack?</p>
        <p class='text-white mx-2 mt-4 mb-6 text-sm'>
          Here are some of the technologies I've been using recently:
        </p>
        <div class='cursor-default flex flex-row flex-wrap text-white max-w-xs mt-2 mx-0 justify-start'>
          {tech.map((item) => {
            return <TechPill2 item={item} />;
          })}
        </div>
      </div>

      <div class='relative lg:my-0 my-20'>
        <img
          class='
                  relative
                  mx-12
                  h-56
                  z-10
                  transform
                  opacity-80
                  hover:opacity-100
                  transition-all
                '
          src={PROFILE}
        />
        <div
          class='
                  h-56
                  w-56
                  border-2 border-white
                  absolute
                  z-0
                  right-0
                  transform
                  -translate-y-52 -translate-x-8
                '
        ></div>
        <div
          class='
                  h-56
                  w-56
                  bg-gray-900
                  absolute
                  z-0
                  right-0
                  transform
                  -translate-y-56 -translate-x-12
                '
        ></div>
      </div>
      <div class='w-full h-32'></div>
    </div>
  );
};

export default AboutContent;
