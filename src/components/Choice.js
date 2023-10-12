import React, { useState, useEffect } from "react";
import './Choice.css';

const Choice = ({ value, onClick, switch31, switch32, switch22, switch21, switch23, switch12, switch11 }) => {
  const [selected, setSelected] = useState();
  const [command1, setCommand1] = useState("");
  const [command2, setCommand2] = useState("");
  const [command3, setCommand3] = useState("");
  const [command4, setCommand4] = useState("");
  const [choice1, setChoice1] = useState();
  const [choice2, setChoice2] = useState();
  const [choice3, setChoice3] = useState();
  const [choice4, setChoice4] = useState();

  useEffect(() => {
    if (value === 3311) {
      setCommand1("扉を開ける");
      setCommand2("部屋を調べる");
      setCommand3("");
      setCommand4("");
      setChoice1(3210);
      setChoice2(3320);
      setChoice3();
      setChoice4();
    } else if (value === 3331) {
      setCommand1("扉を開ける");
      setCommand2("");
      setCommand3("");
      setCommand4("");
      setChoice1(3210);
      setChoice2();
      setChoice3();
      setChoice4();
    } else if (value === 3211) {
      setCommand1("正面の扉へ進む");
      setCommand2("左手の扉へ進む");
      if (switch32 === 0) {
        setCommand3("部屋を調べる");
        setChoice3(3220);
      } else {
        setCommand3("");
        setChoice3();
      }
      setCommand4("");
      setChoice1(3110);
      setChoice2(2210);
      setChoice4();
    } else if (value === 3221) {
      setCommand1("正面の扉へ進む");
      setCommand2("左手の扉へ進む");
      setCommand3("");
      setCommand4("");
      setChoice1(3110);
      setChoice2(2210);
      setChoice3();
      setChoice4();
    } else if (value === 3111) {
      if (switch31 === 0) {
        setCommand1("部屋を調べる");
        setChoice1(3120);
      } else {
        setCommand1("引き返す");
        setChoice1(3230);
      }
      setCommand2("");
      setCommand3("");
      setCommand4("");
      setChoice2();
      setChoice3();
      setChoice4();
    } else if (value === 3231) {
      setCommand1("右手の扉へ進む");
      if (switch32 === 0) {
        setCommand2("部屋を調べる");
        setChoice2(3240);
      } else {
        setCommand2("");
        setChoice2();
      }
      setCommand3("");
      setCommand4("");
      setChoice1(2210);
      setChoice3();
      setChoice4();
    } else if (value === 2211) {
      if (switch22 === 0) {
        setCommand1("右の扉へ進む");
        setCommand2("左の扉へ進む");
        setCommand3("部屋の中を調べる");
        setCommand4("引き返す");
        setChoice1(2110);
        setChoice2(2310);
        setChoice3(2220);
        setChoice4(3250);
      } else {
        setCommand1("右の扉へ進む");
        setCommand2("左の扉へ進む");
        setCommand3("引き返す");
        setCommand4("");
        setChoice1(2110);
        setChoice2(2310);
        setChoice3(3250);
        setChoice4();
      }
      
    } else if (value === 3251) {
      if (switch32 === 0) {
        setCommand1("左の扉へ進む");
        setCommand2("部屋を調べる");
        setCommand3("引き返す");
        setCommand4("");
        setChoice1(3110);
        setChoice2(3260);
        setChoice3(2210);
        setChoice4();
      } else {
        setCommand1("左の扉へ進む");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(3110);
      setChoice2(2210);
      setChoice3();
      setChoice4();
      }
    } else if (value === 2111) {
      if (switch21 === 0) {
        setCommand1("♡の扉へ進む");
        setCommand2("引き返す");
        setCommand3("");
        setCommand4("");
        setChoice1(2120);
        setChoice2(2230);
        setChoice3();
        setChoice4();
      } else {
        setCommand1("♡の扉へ進む");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(1110);
      setChoice2(2230);
      setChoice3();
      setChoice4();
      }
    } else if (value === 2121) {
      if (switch31 === 0) {
        setCommand1("引き返す");
        setCommand2("");
        setCommand3("");
        setCommand4("");
        setChoice1(2230);
        setChoice2();
        setChoice3();
        setChoice4();
      } else {
        setCommand1("♡のカギを使う");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(2130);
      setChoice2(2230);
      setChoice3();
      setChoice4();
      }
    } else if (value === 2231) {
      if (switch22 === 0) {
        setCommand1("正面の扉へ進む");
        setCommand2("左手の扉へ進む");
        setCommand3("部屋を調べる");
        setCommand4("引き返す");
        setChoice1(2310);
        setChoice2(3250);
        setChoice3(2220);
        setChoice4(2110);
      } else {
        setCommand1("正面の扉へ進む");
      setCommand2("左手の扉へ進む");
      setCommand3("引き返す");
      setCommand4("");
      setChoice1(2310);
      setChoice2(3250);
      setChoice3(2110);
      setChoice4();
      }
    } else if (value === 2311) {
      if (switch23 === 0) {
        setCommand1("♤の扉へ進む");
        setCommand2("引き返す");
        setCommand3("");
        setCommand4("");
        setChoice1(2320);
        setChoice2(2240);
        setChoice3();
        setChoice4();
      } else {
        setCommand1("♤の扉へ進む");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(1310);
      setChoice2(2240);
      setChoice3();
      setChoice4();
      }
    } else if (value === 2321) {
      if (switch12 === 0) {
        setCommand1("引き返す");
        setCommand2("");
        setCommand3("");
        setCommand4("");
        setChoice1(2240);
        setChoice2();
        setChoice3();
        setChoice4();
      } else {
        setCommand1("♤のカギを使う");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(2330);
      setChoice2(2240);
      setChoice3();
      setChoice4();
      }
    } else if (value === 2241) {
      if (switch22 === 0) {
        setCommand1("正面の扉へ進む");
        setCommand2("右手の扉へ進む");
        setCommand3("部屋を調べる");
        setCommand4("引き返す");
        setChoice1(2110);
        setChoice2(3250);
        setChoice3(2220);
        setChoice4(2310);
      } else {
        setCommand1("正面の扉へ進む");
      setCommand2("右手の扉へ進む");
      setCommand3("引き返す");
      setCommand4("");
      setChoice1(2110);
      setChoice2(3250);
      setChoice3(2310);
      setChoice4();
      }
    } else if (value === 1111) {
      if (switch11 === 0) {
        setCommand1("部屋を調べる");
        setCommand2("引き返す");
        setCommand3("");
        setCommand4("");
        setChoice1(1120);
        setChoice2(2140);
        setChoice3();
        setChoice4();
      } else {
        setCommand1("扉の先へ進む");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(1210);
      setChoice2(2140);
      setChoice3();
      setChoice4();
      }
    } else if (value === 2141) {
      setCommand1("扉を開ける");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(2230);
      setChoice2(1110);
      setChoice3();
      setChoice4();
    } else if (value === 1121) {
      setCommand1("扉の先へ進む");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(1210);
      setChoice2(2140);
      setChoice3();
      setChoice4();
    } else if (value === 1211) {
      if (switch12 === 0) {
        setCommand1("部屋を調べる");
        setCommand2("引き返す");
        setCommand3("");
        setCommand4("");
        setChoice1(1220);
        setChoice2(1130);
        setChoice3();
        setChoice4();
      } else {
        setCommand1("引き返す");
      setCommand2("");
      setCommand3("");
      setCommand4("");
      setChoice1(1130);
      setChoice2();
      setChoice3();
      setChoice4();
      }
    } else if (value === 1131) {
      setCommand1("♡の扉へ進む");
      setCommand2("引き返す");
      setCommand3("");
      setCommand4("");
      setChoice1(2140);
      setChoice2(1210);
      setChoice3();
      setChoice4();
    } else if (value === 1311) {
      setCommand1("外へ出る");
      setCommand2("");
      setCommand3("");
      setCommand4("");
      setChoice1(4000);
      setChoice2();
      setChoice3();
      setChoice4();
    } else {
      setCommand1("てすと");
      setCommand2("");
      setCommand3("");
      setCommand4("");
    }
  }, [value]);

  const handleChoiceClick = (newValue) => {
    setSelected(newValue);
    onClick(newValue);
  };

  console.log(command1)

  return (
    <div className="Command">
      <div>
        <p onClick={() => handleChoiceClick(choice1)}>{command1}</p>
        <p onClick={() => handleChoiceClick(choice2)}>{command2}</p>
        <p onClick={() => handleChoiceClick(choice3)}>{command3}</p>
        <p onClick={() => handleChoiceClick(choice4)}>{command4}</p>
      </div>
    </div>
  );
};

export default Choice;