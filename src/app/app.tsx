import React from 'react';
import './app.scss';
import Guilds from './guilds/guilds';
import HomeSide from './content/guildSide/guildSide';
import Notification from './content/notification';

function App() {
  return (
    <div className="contentContainer">
      <Guilds/>
      <div className="base">
        <Notification color="bg-discord" text="Discord Interface !"/>
        <HomeSide/>
      </div>
    </div>
  );
}

export default App;
