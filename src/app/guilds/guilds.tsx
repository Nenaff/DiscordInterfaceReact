import React from 'react';
import './guilds.scss';
import {Guild, GuildSeparator} from './guild/guild';

import { FaDiscord } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoCompassSharp } from 'react-icons/io5';

function App() {
  return (
    <div className="guilds">
      <Guild text="Home" icon={FaDiscord}/>
      <GuildSeparator/>
      <Guild text="New server" icon={AiOutlinePlus} classes="successGuild"/>
      <Guild text="Explore public servers" icon={IoCompassSharp} classes="successGuild"/>
    </div>
  );
}

export default App;
