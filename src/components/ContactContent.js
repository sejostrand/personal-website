import React from 'react';
import { SiGithub, SiLinkedin, SiGoogle } from 'react-icons/si';
import { MdContentCopy } from 'react-icons/md';
import copy from 'copy-to-clipboard';

const ContactContent = () => {
  return (
    <div
      id='contact-content'
      class='mx-8 text-white flex flex-col items-center relative section-transition section-hidden
      overflow-hidden'
    >
      <div class='text-yellow-500 text-2xl mb-14'>Send me a message!</div>
      <form class='px-2 py-3 flex flex-col items-end border-2 border-yellow-600 rounded-2xl'>
        <div class='flex flex-col bg-transparent rounded w-full text-yellow-500 text-md'>
          <div class='flex flex-row flex-wrap'>
            <div class='flex flex-col'>
              <div class='mt-2 ml-2'>Email:</div>
              <input
                type='email'
                placeholder='Your Email'
                class='bg-gray-200 text-gray-900 rounded mx-2 p-2 text-lg'
              ></input>
            </div>
            <div class='flex flex-col'>
              <div class='mt-2 ml-2'>Subject:</div>
              <input
                type='text'
                placeholder='Subject'
                class='bg-gray-200 text-gray-900 rounded mx-2 p-2 text-lg'
              ></input>
            </div>
          </div>
          <div class='mt-2 ml-2'>Message:</div>
          <textarea
            placeholder='Say hello..'
            type='text'
            class='bg-gray-200 text-gray-900 content-start rounded text-lg h-24 mx-2 mb-2 p-2'
          ></textarea>
        </div>
        <button
          class='
                mt-6
                mx-1
                transition-colors
                duration-300
                ease-in-out
                text-white
                bg-yellow-600
                ring-2 ring-yellow-600
                py-2
                px-10
                hover:ring-2 hover:ring-white hover:bg-opacity-20
                rounded'
        >
          Send
        </button>
      </form>
      <div class='mt-14 flex md:flex-row flex-col items-center'>
        <div class='flex m-6 justify-center text-lg'>
          sejostrand@gmail.com{' '}
          <MdContentCopy
            onClick={() => copy('sejostrand@gmail.com')}
            class='ml-3 my-2 text-sm text-yellow-500 cursor-pointer hover:opacity-70'
          />
        </div>

        <div class='m-4 justify-center flex flex-row flex-nowrap text-white text-3xl'>
          <SiGithub
            onClick={() => window.open('https://github.com/sejostrand')}
            class='m-2 cursor-pointer hover:opacity-80'
          />
          <SiLinkedin
            onClick={() =>
              window.open('https://www.linkedin.com/in/sebastianstrand/')
            }
            class='m-2 cursor-pointer hover:opacity-80'
          />
        </div>
        <div class='m-6 text-bold text-sm justify-center items-center'>
          <span class='mr-2 text-xs text-yellow-500'>mobile</span>(+44) 7434
          902711
        </div>
      </div>
      <div class='w-full h-14'></div>
    </div>
  );
};

export default ContactContent;
