import React from 'react';

export default function Option(props) {
  return (
    <div>
      <p>{props.optionText}</p>
      <button onClick={() => props.handleDeleteOption(props.optionText)}>Remove</button>
    </div>
  );
}