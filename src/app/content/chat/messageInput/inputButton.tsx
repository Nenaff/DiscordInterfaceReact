import React from 'react';

function InputButton(props: any) {
  return (
    <div className="inputButton">
      <span className="tooltip tooltip-up">{props.text}</span>
      <props.icon/>
    </div>
  );
}

export default InputButton;