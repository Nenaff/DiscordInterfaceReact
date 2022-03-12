import React from 'react';

function EmojiPicker(props: any) {
  function changeEmoji(e: any) {
    let randomint = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

    // DONT COPY THIS, I never dared to make such an ugly code, may God forgive me
    let x = -29.7 * randomint(0, 10);
    let y = -30.5 * randomint(0, 3);
    e.currentTarget.style.backgroundPosition = x + "px " + y + "px";
  }

  return (
    <div className="emojiPickerContainer">
        <div className="emojiPicker" onMouseEnter={changeEmoji}>
        </div>
    </div>
  );
}

export default EmojiPicker;