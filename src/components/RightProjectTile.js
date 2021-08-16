import React from 'react';
import screenshot from '../img/la-compania.jpg';
import { SiGithub } from 'react-icons/si';
import TechPill from './TechPill';
import { MdWeb } from 'react-icons/md';

const RightProjectTile = (props) => {
  return (
    <div class='self-start my-24 relative flex flex-col cursor-default mt-36 lg:mt-0'>
      <div class='flex flex-col z-10 items-start'>
        <div class='text-yellow-600'>featured project</div>
        <div class='text-3xl mb-3'>{props.project.title}</div>
        <div class='p-4 bg-gray-700 rounded-xl text-sm max-w-sm'>
          {props.project.content}
        </div>
        <div class='flex flex-row my-4'>
          {props.project.tech.map((item) => {
            return <TechPill item={item} />;
          })}
        </div>

        <div class='flex flex-row'>
          <button onClick={() => window.open(props.project.gitGubLink)}>
            <SiGithub class='text-2xl mt-8 mx-2 hover:opacity-80' />
          </button>
          <button onClick={() => window.open(props.project.liveLink)}>
            <MdWeb class='text-2xl mt-8 mx-2 hover:opacity-80' />
          </button>
        </div>
      </div>
      <img
        src={screenshot}
        class='absolute z-0 h-64 rounded-lg transform -translate-y-32 lg:translate-x-80 lg:translate-y-0'
      />
    </div>
  );
};

export default RightProjectTile;
