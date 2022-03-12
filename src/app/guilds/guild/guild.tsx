import React from 'react';
import './../guilds.scss';

function Guild(props: any) {
  return (
    <div className={`guild ${props.classes ? props.classes : ""}`}>
      <div className="guildIcon">
        {
          props.icon ? 
          <props.icon/>
          :
          props.src ? 
          <img src={props.src}></img>
          :
          props.text
        }
      </div>
      <div className="guildBorder">
      </div>
      <span className="tooltip tooltip-right">{props.text}</span>
    </div>
  );
}

function GuildSeparator() {
  return (
    <div className="separator"></div>
  );
}

export {Guild, GuildSeparator};
