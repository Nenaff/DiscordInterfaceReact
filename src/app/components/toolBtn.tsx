import React from 'react';

function ToolBtn(props: any) {
  return (
    <button>
      <span className={`tooltip tooltip-${props.direction}`}>{props.text}</span>
      <props.icon/>
    </button>
  );
}

export default ToolBtn;