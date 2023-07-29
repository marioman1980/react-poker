import React from "react";
import Card from './Card';

export default function Player({cardValues}) {
  return(
    <>
      <div class="player">
        <Card value={cardValues[0]} />
        <Card value={cardValues[1]} />
      </div>
    </>
  )
}