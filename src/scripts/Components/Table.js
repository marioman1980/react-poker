import React from 'react';
import { useState } from 'react';
import Player from './Player';
import Button from './Button';

export default function Table() {
  const deckArray = ['AC', '2C'];
  const [deck, setDeck] = useState(deckArray);
  // console.log(deck);
  
  function foo() {
    setDeck(['AH', 'KH']);
  }

  return(
    <>
      <div className='table-container'>
        <div>
          <Player cardValues={ ["JD", "10D"] } />
        </div>
        <div>CC</div>
        <div>
          <Player cardValues={ ["3H", "3S"] } />
        </div>
        <button onClick={() => foo()}>FOO</button>
      </div>
      <div className="controls">
        <Button value="Start" />
        <Button value="Deal" />
      </div>
    </>
  )
}