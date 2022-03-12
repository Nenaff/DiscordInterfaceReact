import React from 'react';
import Profile from '../profile/profile';
import Category from './category';
import Channel from './channel';
import CheatHead from '../chatHead';
import Chat from '../chat/chat';
import MembersList from './membersList';

function GuildSide(props: any) {
  return (
    <div className="content">
        <div className="contentLeft">
            <div className="guildNavigation">
              <div className="guildHead">
                <h2>Serv cool</h2>
              </div>
              <div className="channels">
                <Category text="Catégorie">
                  <Channel text="a"/>
                </Category>
                <Channel text="b"/>
                <Channel text="c"/>
              </div>
            </div>
            <Profile/>
        </div>
        <div className="contentRight">
          <CheatHead type="user" title="Nenaff"/>
          <div className="chatBody">
            <Chat/>
            <MembersList/>
          </div>
        </div>
    </div>
  );
}

export default GuildSide;
