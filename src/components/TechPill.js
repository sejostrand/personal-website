import React, { useState } from 'react';

const TechPill = (props) => {
  const [captionIsShown, setCaptionIsShown] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setCaptionIsShown(true)}
        onMouseLeave={() => setCaptionIsShown(false)}
        class='bg-white text-gray-900 px-3 mx-1 rounded-full hover:opacity-80'
      >
        {props.item.tag}
      </div>
      {captionIsShown && (
        <div class='transition-all absolute mt-8 text-xs'>
          {props.item.caption}
        </div>
      )}
    </>
  );
};

export default TechPill;
