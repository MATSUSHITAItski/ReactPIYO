import React, { useState } from "react";
import './Message.css';

const Message = ({ value, onClick }) => {
  const handleOnClick = () => {
    let newValue;
    if (value === 0) {
      newValue = 1;
    } else if (value === 1) {
      newValue = 2;
    } else if (value === 2) {
      newValue = 0;
    } else {
      newValue = 0;
    }
    // 新しい値を設定
    onClick(newValue);
  };
  let message = "";
  if (value === 0) {
    message = "test\ntest";
  } else if (value === 1) {
    message = "testtest";
  } else if (value === 2) {
    message = "testtesttest"
  }
  return (
    <div className="Message">
      <p onClick={handleOnClick}>{message}</p>
    </div>
  );
};
export default Message;

/*const Message = ({ value }) => {
  const [click, setClick] = useState(value);

  const handleOnClick = (newValue) => {
    setClick(newValue);
    if (value === 0) {
      newValue = 2;
    } else if (value === 1) {
      newValue = 2;
    } else if (value === 2) {
      newValue = 0;
    } else {
      newValue = 0;
    }
  };

  let message = "";

  if (value === 0) {
    message = "test\ntest";
  } else if (value === 1) {
    message = "testtest";
  } else if (value === 2) {
    message = "testtesttest";
  }


  return (
    <div className="Message">
      <p onClick={handleOnClick}>{message}</p>
    </div>
  );

};
export default Message;*/