import React, { useState, useEffect } from 'react';
import AboutContent from './AboutContent';
import SectionTitle from './SectionTitle';

const About = (props) => {
  const [fresh, setFresh] = useState(true);
  const freshToggle = () => {
    if (!props.section.isOpen && fresh) {
      setFresh(false);
      props.toggleSection(props.section);
    }
  };

  return (
    <div
      onMouseEnter={() => freshToggle()}
      onClick={() =>
        !props.section.isOpen ? props.toggleSection(props.section) : null
      }
      id='about'
      class='
          bg-gradient-to-br
          from-gray-800
          to-gray-900
          flex flex-col
          items-center
        '
    >
      <SectionTitle
        prefix='1.'
        title='About me'
        elementId='about-content'
        setIsOpen={props.section.setIsOpen}
        isOpen={props.section.isOpen}
      />
      <AboutContent />
    </div>
  );
};

export default About;
