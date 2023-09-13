import React, { useState } from "react";
import Grid from "./components/Grid";
import Message from "./components/Message";
import Choice from "./components/Choice";

const App = () => {
  const [value, setValue] = useState(1);
  console.log(value)

  const handleClick = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <Grid />
      <div className="messageBox">
        <Message value={value} onClick={handleClick} />
      </div>
      {value % 2 === 1 &&
      <div className="commandBox">
        <Choice value={setValue} />
      </div>}
      
    </div>
  );

};

export default App;