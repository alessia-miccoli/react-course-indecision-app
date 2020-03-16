import React from 'react';

export default function Action(props) {
  return (
    <div>
      <button
        disabled={!props.hasOptions}
        onClick={props.handlePick}>What should I do?</button>
    </div>
  );
}