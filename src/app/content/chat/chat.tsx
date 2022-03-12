import React, { useEffect } from 'react';
import { renderToString } from 'react-dom/server'

import MessageInput from './messageInput/messageInput';
import Message from './message';

function Chat(props: any) {

  const chatRef : any = React.createRef();

  function sendMessage(val: Text) {
    chatRef.current.innerHTML += renderToString(<Message text={val}/>);
  }

  return (
    <div className="chatContainer">
      <div className="chatScroller">
        <div className="chatSpaceContainer">
          <div className="chat" ref={chatRef}>
            <Message text="aaaaa"/>
          </div>
          <div className="chatSpace"></div>
        </div>
      </div>
      <MessageInput sendMessage={sendMessage}/>
    </div>
  );
}

export default Chat;