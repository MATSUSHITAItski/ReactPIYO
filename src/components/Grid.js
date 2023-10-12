import React from "react";
import './Grid.css';
import Player from "./Player";

const Grid = ({ value }) => {
  const valueTop2 = Math.floor(value / 100);
  console.log(valueTop2)

  return (
    <div className="grid-container">
      <div className="item">
        {valueTop2 === 11 && (
        <Player name="1" />
        )}
      </div>
      <div className="item">
        {valueTop2 === 21 && (
        <Player name="2" />
        )}
      </div>
      <div className="item">
        {valueTop2 === 31 && (
        <Player name="3" />
        )}
      </div>
      <div className="item">
        {valueTop2 === 12 && (
        <Player name="4" />
        )}
      </div>
      <div className="item">
        {valueTop2 === 22 && (
        <Player name="5" />
        )}
      </div>
      <div className="item">
        {valueTop2 === 32 && (
        <Player name="6" />
        )}
      </div>
      <div className="item">
        {valueTop2 === 13 && (
        <Player name="7" />
        )}
      </div>
      <div className="item">
        {valueTop2 === 23 && (
        <Player name="8" />
        )}
      </div>
      <div className="item">
        {valueTop2 === 33 && (
        <Player name="9" />
        )}
      </div>
    </div>
  );
};

export default Grid;