import React, { useState } from "react";
import './Choice.css';

const Choice = ({ value }) => {
  const [selected, setSelected] = useState();

  const handleChoiceClick = (newValue) => {
    setSelected(newValue);
    value(newValue);
  };

  let command1 = "";
  let command2 = "";
  let command3 = "";
  let command4 = "";
  if (value === 1) {
    command1 = "test\ntest";
    command2 = "test";
    command3 = "";
    command4 = "testtest";
  } else if (value === 3) {
    command1 = "testtest";
  } else if (value === 5) {
    command1 = "testtesttest"
  }
  console.log(command1)

  return (
    <div className="Command">
      <div>
        <p onClick={() => handleChoiceClick(1)}>{command1}</p>
        <p onClick={() => handleChoiceClick(2)}>{command2}</p>
        <p onClick={() => handleChoiceClick(3)}>{command3}</p>
        <p onClick={() => handleChoiceClick(4)}>{command4}</p>
      </div>
    </div>
  );
};

export default Choice;
