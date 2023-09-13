import React from "react";
import './Grid.css';
import Player from "./Player";

const Grid = () => {
  return (
    <div className="grid-container">
      <div className="item">
        <Player name="1" />
      </div>
      <div className="item">
        <Player name="2" />
      </div>
      <div className="item">
        <Player name="3" />
      </div>
      <div className="item">
        <Player name="4" />
      </div>
      <div className="item">
        <Player name="5" />
      </div>
      <div className="item">
        <Player name="6" />
      </div>
      <div className="item">
        <Player name="7" />
      </div>
      <div className="item">
        <Player name="8" />
      </div>
      <div className="item">
        <Player name="9" />
      </div>
    </div>
  );
};

export default Grid;