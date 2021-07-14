import React, { useState, useEffect } from 'react';
import ContactContent from './ContactContent';
import SectionTitle from './SectionTitle';

const Contact = (props) => {
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
      id='contact'
      class='
          bg-gradient-to-br
          from-gray-800
          to-gray-900
          flex flex-col
          items-center
        '
    >
      <SectionTitle
        prefix='3.'
        n
        title='Get in touch'
        elementId='contact-content'
        setIsOpen={props.section.setIsOpen}
        isOpen={props.section.isOpen}
      />
      <ContactContent />
    </div>
  );
};

export default Contact;
