import React, { useState } from 'react';

const TechPill2 = (props) => {
  const [captionIsShown, setCaptionIsShown] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setCaptionIsShown(true)}
        onMouseLeave={() => setCaptionIsShown(false)}
        class='bg-white text-gray-900 px-3 m-1 rounded-full hover:opacity-80'
      >
        {props.item.tag}
      </div>
      {captionIsShown && (
        <div class='transition-all absolute mt-20 text-xs ml-1'>
          {props.item.caption}
        </div>
      )}
    </>
  );
};

export default TechPill2;
