import React, { useState, useEffect } from 'react';
import ContactContent from './ContactContent';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleVisibility = () => {
    if (isOpen) {
      document.getElementById('contact-content').classList.remove('invisible');
      document.getElementById('contact-content').classList.remove('max-h-0');
    } else {
      document.getElementById('contact-content').classList.add('invisible');
      document.getElementById('contact-content').classList.add('max-h-0');
    }
  };

  useEffect(() => toggleVisibility(), [isOpen]);

  return (
    <div
      id='contact'
      class='
          bg-gradient-to-br
          from-gray-800
          to-gray-900
          flex flex-col
          items-center
          p-8
        '
    >
      <div class='flex flex-col my-24 max-w-4xl'>
        <div
          id='contact'
          onClick={() => setIsOpen(!isOpen)}
          class='flex flex-row flex-nowrap items-center m-2 cursor-pointer'
        >
          <div class='text-yellow-500 text-xl mt-1 mr-2'>3.</div>
          <div class='text-white text-2xl'>Get in touch</div>
          <hr class='ml-4 w-96' />
          <div class='text-white text-sm ml-2'>
            {isOpen ? `hide ↼` : 'show ⇁'}
          </div>
        </div>
        <ContactContent />
      </div>
    </div>
  );
};

export default Contact;
