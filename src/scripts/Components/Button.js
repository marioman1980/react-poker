import React from 'react';

export default function Button({value, onButtonClick}) {
  return(
    <button
      onClick={onButtonClick}
    >
      { value }
    </button>
  )
}