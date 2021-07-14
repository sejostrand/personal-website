import React, { useState, useEffect } from 'react';
import ProjectsContent from './ProjectsContent';
import SectionTitle from './SectionTitle';

const Projects = (props) => {
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
      id='projects'
      class='
          bg-gradient-to-br
          from-gray-800
          to-gray-900
          flex flex-col flex-nowrap
          items-center
        '
    >
      <SectionTitle
        prefix='2.'
        title='Some of my projects'
        elementId='projects-content'
        setIsOpen={props.section.setIsOpen}
        isOpen={props.section.isOpen}
      />
      <ProjectsContent />
    </div>
  );
};

export default Projects;
