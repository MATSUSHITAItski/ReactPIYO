import React, { useState } from "react";
import Grid from "./components/Grid";
import Message from "./components/Message";
import Choice from "./components/Choice";

const App = () => {
  const [value, setValue] = useState(0);
  console.log(value)

  const handleClick = (newValue) => {
    setValue(newValue);
  };

  const [switch31, setSwitch31] = useState(0);
  const handleSwitch31 = (switch31OnOff) => {
    setSwitch31(switch31OnOff);
  };

  const [switch32, setSwitch32] = useState(0);
  const handleSwitch32 = (switch32OnOff) => {
    setSwitch32(switch32OnOff);
  };

  const [switch22, setSwitch22] = useState(0);
  const handleSwitch22 = (switch22OnOff) => {
    setSwitch22(switch22OnOff);
  };

  const [switch21, setSwitch21] = useState(0);
  const handleSwitch21 = (switch21OnOff) => {
    setSwitch21(switch21OnOff);
  };

  const [switch23, setSwitch23] = useState(0);
  const handleSwitch23 = (switch23OnOff) => {
    setSwitch23(switch23OnOff);
  };

  const [switch12, setSwitch12] = useState(0);
  const handleSwitch12 = (switch12OnOff) => {
    setSwitch12(switch12OnOff);
  };

  const [switch11, setSwitch11] = useState(0);
  const handleSwitch11 = (switch11OnOff) => {
    setSwitch11(switch11OnOff);
  };

  return (
    <div>
      <h1>ピヨちゃんの冒険</h1>
      <Grid value={value}/>
      <div className="messageBox">
        <Message value={value}
        onClick={handleClick}
        onSwitch31={handleSwitch31}
        onSwitch32={handleSwitch32}
        onSwitch22={handleSwitch22}
        onSwitch21={handleSwitch21}
        onSwitch23={handleSwitch23}
        onSwitch12={handleSwitch12}
        onSwitch11={handleSwitch11}
        />
      </div>
      {value % 2 === 1 &&
      <div className="commandBox">
        <Choice value={value}
        onClick={handleClick}
        switch31={switch31}
        switch32={switch32}
        switch22={switch22}
        switch21={switch21}
        switch23={switch23}
        switch12={switch12}
        switch11={switch11}
        />
      </div>}
      
    </div>
  );

};

export default App;