import React, { useState, useEffect } from 'react';
import LeftProjectTile from './LeftProjectTile';
import RightProjectTile from './RightProjectTile';
import yachtdropCover from '../img/yachtdrop.jpg';
import lacompaniaCover from '../img/la-compania.jpg';

const ProjectsContent = () => {
  const projects = [
    {
      title: 'Yachtdrop',
      content:
        'Ecommerce platform for yacht provisioning. Features include: cms for managing data, dynamic product filtering, shopping cart, user registration and authentication, favourite products, order creation and order history.',
      tech: [
        { tag: 'React.js', caption: 'React Hooks, Styled-components, Axios' },
        { tag: 'Strapi', caption: 'Headless-CMS powered by Node.js' },
        { tag: 'MongoDB', caption: 'NoSQL, MongoAtlas' },
      ],
      gitHubLink: 'http://www.github.com/sejostrand/yachtdrop',
      livelLink: 'http:/www.yachtdrop.com/',
      coverImg: yachtdropCover,
    },
    {
      title: 'La Compañía',
      content:
        'Website built with a CMS included for a marketing agency. Built in accordance to the design provided by the client.',
      tech: [
        { tag: 'React.js', caption: 'React Hooks, Styled-components, Axios' },
        { tag: 'Strapi', caption: 'Headless-CMS powered by Node.js' },
      ],
      gitHubLink: 'http://www.github.com/sejostrand/la-compania',
      liveLink: 'http:/www.lacompania.cl/',
      coverImg: lacompaniaCover,
    },
  ];

  return (
    <div
      id='projects-content'
      class='flex flex-col w-full items-center overflow-hidden section-transition section-hidden text-white'
    >
      <div class='mx-auto w-10/12 md:w-7/12 lg:w-8/12 xl:w-5/12'>
        <LeftProjectTile project={projects[0]} />
        <div class='w-full h-1'></div>
        <RightProjectTile project={projects[1]} />
      </div>
      <div class='w-full h-20'></div>
    </div>
  );
};

export default ProjectsContent;
