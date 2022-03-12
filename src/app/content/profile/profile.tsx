import React from 'react';
import { FaCog, FaMicrophone, FaHeadphonesAlt } from 'react-icons/fa';
import ToolBtn from '../../components/toolBtn';

function Profile(props: any) {
  return (
    <div className="profile">
        <div className="pictureContainer">
          <img className="picture" src="/pictures/battler.png"></img>
          <div className="status"></div>
        </div>
        <div className="name">
          <h1>Battola</h1><h2>#1234</h2>
        </div>
        <div className="tools">
          <ToolBtn direction="up" text="Mute" icon={FaMicrophone}/>
          <ToolBtn direction="up" text="Toggle sound" icon={FaHeadphonesAlt}/>
          <ToolBtn direction="up" text="Settings" icon={FaCog}/>
        </div>
    </div>
  );
}

export default Profile;