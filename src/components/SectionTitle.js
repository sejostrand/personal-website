import React from 'react';

const SectionTitle = (props) => {
  const toggleSection = () => {
    if (!props.isOpen) {
      document
        .getElementById(props.elementId)
        .classList.replace('section-hidden', 'section-visible');
    } else {
      document
        .getElementById(props.elementId)
        .classList.replace('section-visible', 'section-hidden');
    }
    props.setIsOpen(!props.isOpen);
  };
  return (
    <div
      onClick={() => toggleSection()}
      class='md:max-w-4xl pl-14 md:pl-20 pr-12 flex flex-row flex-nowrap w-full items-center justify-end my-24 cursor-pointer'
    >
      <div class='flex flex-row items-center text-white text-md lg:text-2xl'>
        <span class='text-yellow-500 text-xs lg:text-xl mr-2'>
          {props.prefix}
        </span>
        <span class='w-max'>{props.title}</span>
      </div>
      <hr class='ml-2 w-full' />
      <div class='w-36 text-white text-sm'>
        <span class='mx-2'>{props.isOpen ? `hide` : 'show'}</span>
        <span>⇁</span>
      </div>
    </div>
  );
};

export default SectionTitle;
