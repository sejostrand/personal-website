import React, { useState, useEffect } from 'react';
import { useMediaQuery } from './utils/useMediaQuery';

import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToggleTheme from './components/ToggleTheme';
import Clock from './components/Clock';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [projectsIsOpen, setProjectsIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);
  const media = useMediaQuery('(min-width: 800px)');

  const sectionTarget = {
    about: {
      id: 'about-content',
      isOpen: aboutIsOpen,
      setIsOpen: setAboutIsOpen,
    },
    projects: {
      id: 'projects-content',
      isOpen: projectsIsOpen,
      setIsOpen: setProjectsIsOpen,
    },
    contact: {
      id: 'contact-content',
      isOpen: contactIsOpen,
      setIsOpen: setContactIsOpen,
    },
  };

  const toggleSection = (section) => {
    if (!section.isOpen) {
      document
        .getElementById(section.id)
        .classList.replace('section-hidden', 'section-visible');
    } else {
      document
        .getElementById(section.id)
        .classList.replace('section-visible', 'section-hidden');
    }
    section.setIsOpen(!section.isOpen);
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      if (media) {
        document.getElementById('hide-nav').style.top = '0';
      }
    } else {
      if (media) {
        document.getElementById('hide-nav').style.top = '-48px';
      }
    }
    prevScrollpos = currentScrollPos;
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toLinkMobile = (id) => {
    if (document.getElementById('mobile-nav').classList.contains('h-screen')) {
      document
        .getElementById('mobile-nav')
        .classList.replace('h-screen', 'h-12');
    } else {
      document
        .getElementById('mobile-nav')
        .classList.replace('h-12', 'h-screen');
    }
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
    document
      .getElementById(`${id}-content`)
      .classList.replace('section-hidden', 'section-visible');
  };

  const toLink = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
    });
    document
      .getElementById(`${id}-content`)
      .classList.replace('section-hidden', 'section-visible');
  };

  return (
    <>
      <Navbar toTop={toTop} toLink={toLink} toLinkMobile={toLinkMobile} />

      <div id='bg-cover' class='dark-cover flex flex-col w-full'>
        <div class='w-full h-72 flex flex-row justify-between items-end p-2'>
          <ToggleTheme isDark={isDark} setIsDark={setIsDark} />
          <Clock />
        </div>
        <Landing toLink={toLink} />
        <div class='w-full my-36'></div>
        <About toggleSection={toggleSection} section={sectionTarget.about} />
        <div class='w-full my-36'></div>
        <Projects
          toggleSection={toggleSection}
          section={sectionTarget.projects}
        />
        <div class='w-full my-36'></div>
        <Contact
          toggleSection={toggleSection}
          section={sectionTarget.contact}
        />
        <div class='w-full my-12'></div>
        <Footer toTop={toTop} toLink={toLink} />
      </div>
    </>
  );
}

export default App;
