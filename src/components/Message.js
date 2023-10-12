import React, { useState } from "react";
import './Message.css';

const Message = ({ value, onClick, onSwitch31, onSwitch32, onSwitch22, onSwitch21, onSwitch23, onSwitch12, onSwitch11 }) => {
  const handleOnClick = () => {
    let newValue;
    let newSwitch31 = onSwitch31;
    let newSwitch32 = onSwitch32;
    let newSwitch22 = onSwitch22;
    let newSwitch21 = onSwitch21;
    let newSwitch23 = onSwitch23;
    let newSwitch12 = onSwitch12;
    let newSwitch11 = onSwitch11;

    if (value === 0) {
      newValue = 3310;
    } else if (value === 3310) {
      newValue = 3311;
    } else if (value === 3320) {
      newValue = 3330;
    } else if (value === 3330) {
      newValue = 3331;
    } else if (value === 3210) {
      newValue = 3211;
    } else if (value === 3220) {
      newValue = 3221;
      newSwitch32 = 1
    } else if (value === 3110) {
      newValue = 3111;
    } else if (value === 3120) {
      newValue = 3130;
    } else if (value === 3130) {
      newValue = 3110;
      newSwitch31 = 1;
    } else if (value === 3230) {
      newValue = 3231;
    } else if (value === 3240) {
      newValue = 3231;
      newSwitch32 = 1;
    } else if (value === 2210) {
      newValue = 2211;
    } else if (value === 3250) {
      newValue = 3251;
    } else if (value === 3260) {
      newValue = 3250;
      newSwitch32 = 1;
    } else if (value === 3260) {
      newValue = 3261;
    } else if (value === 2220) {
      newValue = 2211;
      newSwitch22 = 1;
    } else if (value === 2110) {
      newValue = 2111;
    } else if (value === 2120) {
      newValue = 2121;
    } else if (value === 2230) {
      newValue = 2231;
    } else if (value === 2310) {
      newValue = 2311;
    } else if (value === 2320) {
      newValue = 2321;
    } else if (value === 2240) {
      newValue = 2241;
    } else if (value === 2130) {
      newValue = 1110;
      newSwitch21 = 1;
    } else if (value === 1110) {
      newValue = 1111;
    } else if (value === 2140) {
      newValue = 2141;
    } else if (value === 1120) {
      newValue = 1122;
      newSwitch11 = 1;
    } else if (value === 1122) {
      newValue = 1124;
    } else if (value === 1124) {
      newValue = 1126;
    } else if (value === 1126) {
      newValue = 1121;
    } else if (value === 1210) {
      newValue = 1211;
    } else if (value === 1220) {
      newValue = 1210;
      newSwitch12 = 1;
    } else if (value === 1130) {
      newValue = 1131;
    } else if (value === 2330) {
      newValue = 1310;
      newSwitch23 = 1;
    } else if (value === 1310) {
      newValue = 1311;
    }
    else {
      newValue = value;
    }

    // 新しい値を設定
    onClick(newValue);
    onSwitch31(newSwitch31);
    onSwitch32(newSwitch32);
    onSwitch22(newSwitch22);
    onSwitch21(newSwitch21);
    onSwitch23(newSwitch23);
    onSwitch12(newSwitch12);
    onSwitch11(newSwitch11);
  };
  let message = "";
  if (value === 0) {
    message = "ピヨちゃんが目を覚ますと\n見知らぬ部屋にいた。";
  } else if (value === 3310) {
    message = "正面に扉がある以外は何もない\n薄暗い部屋だ。";
  } else if (value === 3311) {
    message = "正面に扉がある以外は何もない\n薄暗い部屋だ。";
  } else if (value === 3320) {
    message = "ピヨちゃんは部屋の中を調べた。";
  } else if (value === 3330) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。"
  } else if (value === 3331) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。"
  } else if (value === 3210) {
    message = "扉の向こうも薄暗い部屋だ。\n正面と左手に扉がある。";
  } else if (value === 3211) {
    message = "扉の向こうも薄暗い部屋だ。\n正面と左手に扉がある。";
  } else if (value === 3220) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。";
  } else if (value === 3221) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。";
  } else if (value === 3110) {
    message = "物が散乱した部屋だ。\n他の扉は見当たらない。";
  } else if (value === 3111) {
    message = "物が散乱した部屋だ。\n他の扉は見当たらない。";
  } else if (value === 3120) {
    message = "ピヨちゃんは部屋の中を調べた。";
  } else if (value === 3130) {
    message = "部屋に散乱したガラクタの下に\n♡マークのカギを見つけた。";
  } else if (value === 3230) {
    message = "正面と右手に扉がある。\n正面は最初にいた部屋だ。";
  } else if (value === 3231) {
    message = "正面と右手に扉がある。\n正面は最初にいた部屋だ。";
  } else if (value === 3240) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。";
  } else if (value === 3241) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。";
  } else if (value === 2210) {
    message = "広い部屋だ。左右に扉がある。\nそれ以外には何も見当たらない。";
  } else if (value === 2211) {
    message = "広い部屋だ。左右に扉がある。\nそれ以外には何も見当たらない。";
  } else if (value === 3250) {
    message = "左右に扉がある。\n右手は最初に居た部屋だ。";
  } else if (value === 3251) {
    message = "左右に扉がある。\n右手は最初に居た部屋だ。";
  } else if (value === 3260) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。";
  } else if (value === 3261) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。";
  } else if (value === 2220) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。";
  } else if (value === 2221) {
    message = "ピヨちゃんは部屋の中を調べた。\nしかし何も見つからなかった。";
  } else if (value === 2110) {
    message = "細い廊下だ。左に曲がっており\nその先には♡マークの扉がある。";
  } else if (value === 2111) {
    message = "細い廊下だ。左に曲がっており\nその先には♡マークの扉がある。";
  } else if (value === 2120) {
    message = "扉は鍵がかかっている。";
  } else if (value === 2121) {
    message = "扉は鍵がかかっている。";
  } else if (value === 2230) {
    message = "広い部屋だ。\n正面と左手に扉がある。";
  } else if (value === 2231) {
    message = "広い部屋だ。\n正面と左手に扉がある。";
  } else if (value === 2310) {
    message = "細い廊下だ。右に曲がっており\nその先には♤マークの扉がある。";
  } else if (value === 2311) {
    message = "細い廊下だ。右に曲がっており\nその先には♤マークの扉がある。";
  } else if (value === 2320) {
    message = "扉は鍵がかかっている。";
  } else if (value === 2321) {
    message = "扉は鍵がかかっている。";
  } else if (value === 2240) {
    message = "広い部屋だ。\n正面と右手に扉がある。";
  } else if (value === 2241) {
    message = "広い部屋だ。\n正面と右手に扉がある。";
  } else if (value === 2130) {
    message = "ガチャリと音がして扉が開いた。";
  } else if (value === 1110) {
    message = "瓦礫の散乱した部屋だ。\n天井が崩れて空が見えている。";
  } else if (value === 1111) {
    message = "瓦礫の散乱した部屋だ。\n天井が崩れて空が見えている。";
  } else if (value === 2140) {
    message = "細い廊下だ。右に曲がっており\nその先には扉がある。";
  } else if (value === 2141) {
    message = "細い廊下だ。右に曲がっており\nその先には扉がある。";
  } else if (value === 1120) {
    message = "ピヨちゃんは部屋の中を調べた。";
  } else if (value === 1122) {
    message = "ピヨちゃんは飛べないので､天井\nから外に出るのは難しそうだ。";
  } else if (value === 1124) {
    message = "……!　　　　　　　　　　　　\n　　　　　　　　　　　　　　";
  } else if (value === 1126) {
    message = "瓦礫の裏に扉が隠れていた。\nピヨちゃんなら通れそうだ。";
  } else if (value === 1121) {
    message = "瓦礫の裏に扉が隠れていた。\nピヨちゃんなら通れそうだ。";
  } else if (value === 1210) {
    message = "中央に机の置かれた部屋だ。\nそれ以外には何も見当たらない。";
  } else if (value === 1211) {
    message = "中央に机の置かれた部屋だ。\nそれ以外には何も見当たらない。";
  } else if (value === 1220) {
    message = "ピヨちゃんは部屋の中を調べた。\n机の上に♤の鍵を見つけた。";
  } else if (value === 1221) {
    message = "ピヨちゃんは部屋の中を調べた。\n机の上に♤の鍵を見つけた。";
  } else if (value === 1130) {
    message = "瓦礫の散乱した部屋だ。\n天井が崩れて空が見えている。";
  } else if (value === 1131) {
    message = "瓦礫の散乱した部屋だ。\n天井が崩れて空が見えている。";
  } else if (value === 2330) {
    message = "ガチャリと音がして扉が開いた。";
  } else if (value === 1310) {
    message = "外から光が差し込んでいる。\n出口だ！";
  } else if (value === 1311) {
    message = "外から光が差し込んでいる。\n出口だ！";
  } else if (value === 4000) {
    message = "ピヨちゃんはおうちへ帰った。\n　　　　　　　　Game Clear！";
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