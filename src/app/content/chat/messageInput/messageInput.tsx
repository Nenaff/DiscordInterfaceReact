import React from 'react';
import { HiPlusCircle, HiGift } from 'react-icons/hi';
import { IoGiftSharp } from 'react-icons/io5';
import InputButton from './inputButton';
import EmojiPicker from './emojiPicker';

function MessageInput(props: any) {
  function handleKeyDown(e: any) {
    if (e.key === 'Enter') {
      props.sendMessage(e.target.value);
      e.target.value = "";
    }
  }

  return (
    <div className="messageInputContainer">
        <div className="messageInput">
        <InputButton icon={HiPlusCircle} text="Test"/>
        <input onKeyDown={handleKeyDown} type="text" placeholder="Send a message"/>
        <InputButton icon={IoGiftSharp} text="Gift your friends with Nitro"/>
        <EmojiPicker/>
      </div>
    </div>
  );
}

export default MessageInput;