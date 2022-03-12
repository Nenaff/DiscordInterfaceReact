import React from 'react';
import { FaHashtag } from 'react-icons/fa';

function Channel(props: any) {
  return (
    <div className="channel">
        <FaHashtag/>
        <span>{props.text}</span>
    </div>
  );
}

export default Channel;
