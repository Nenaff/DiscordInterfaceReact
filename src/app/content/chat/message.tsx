import React from 'react';

function Message(props: any) {
  return (
    <div className="message">
        <img src="/pictures/battler.png"></img>
        <div className="messageContent">
            <div className="messageHead">
                <h3>Battola</h3>
                <h5>Today at 16:24</h5>
            </div>
            <div className="messageBody">
                {props.text}
            </div>
        </div>
    </div>
  );
}

export default Message;