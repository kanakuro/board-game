import * as React from "react";
import "../index.css";
// import GameRule from "./";

let tglStone = 0;
let status;
let sColor;

class Othello extends React.Component {
  constructor(props) {
    super(props);
    // 石の色をstateに保持
    this.state = {
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      a5: "",
      a6: "",
      a7: "",
      a8: "",
      b1: "",
      b2: "",
      b3: "",
      b4: "",
      b5: "",
      b6: "",
      b7: "",
      b8: "",
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: "",
      c7: "",
      c8: "",
      d1: "",
      d2: "",
      d3: "",
      d4: "stoneWhite",
      d5: "stoneBlack",
      d6: "",
      d7: "",
      d8: "",
      e1: "",
      e2: "",
      e3: "",
      e4: "stoneBlack",
      e5: "stoneWhite",
      e6: "",
      e7: "",
      e8: "",
      f1: "",
      f2: "",
      f3: "",
      f4: "",
      f5: "",
      f6: "",
      f7: "",
      f8: "",
      g1: "",
      g2: "",
      g3: "",
      g4: "",
      g5: "",
      g6: "",
      g7: "",
      g8: "",
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
      h7: "",
      h8: ""
    };
  }
  // クリックしたらCSSで石を描く
  clickSquare(sClass, sId) {
    if (this.sColor === undefined) {
      this.sColor = "stoneWhite";
    }

    this.reverseValidation(this.sColor, sId);

    // 次のターンの準備
    tglStone === 0 ? (tglStone = 1) : (tglStone = 0);
    if (tglStone === 0) {
      this.sColor = "stoneWhite";
    } else {
      this.sColor = "stoneBlack";
    }
    // if (this.tglStone === 0) {
    //   status = "Next player: WHITE";
    // } else {
    //   status = "Next player: BLACK";
    // }
    // }
    // }
  }

  reverseValidation(sColor, sId) {
    const sIdChar = sId.split("")[0];
    const sIdNum = sId.split("")[1];
    const sIdNumTarget = Number(sIdNum);
    let sIdNumLeft;
    let sIdNumRight;
    let sIdCharUp;
    let sIdCharDown;

    // IDの列番号の数字
    if (sIdNumTarget === 1) {
      sIdNumRight = sIdNumTarget + 1;
      sIdNumLeft = 0;
    } else if (sIdNumTarget === 8) {
      sIdNumLeft = sIdNumTarget - 1;
      sIdNumRight = 0;
    } else {
      sIdNumRight = sIdNumTarget + 1;
      sIdNumLeft = sIdNumTarget - 1;
    }

    // IDの列番号の文字列
    const sIdNumLeftStr = String(sIdNumLeft);
    const sIdNumRightStr = String(sIdNumRight);
    const sIdNumStr = String(sIdNum);

    // IDの行名を番号化
    const lineArray = [
      { charStr: "a", charNum: 1 },
      { charStr: "b", charNum: 2 },
      { charStr: "c", charNum: 3 },
      { charStr: "d", charNum: 4 },
      { charStr: "e", charNum: 5 },
      { charStr: "f", charNum: 6 },
      { charStr: "g", charNum: 7 },
      { charStr: "h", charNum: 8 }
    ];
    // 行番号を検索するメソッド
    let sIdCharNum;
    let sIdCharStr;
    let targetCharNum;
    // mode 1:上方向 2:下方向
    // idChar: 変換したい文字
    function sIdCharToNum(mode, targetChar) {
      sIdCharNum = lineArray.filter(char => {
        return char.charStr === targetChar;
      });
      if (mode === 1) {
        targetCharNum = sIdCharNum[0].charNum - 1;
      } else if (mode === 2) {
        targetCharNum = sIdCharNum[0].charNum + 1;
      }
      sIdCharStr = lineArray.filter(num => {
        return num.charNum === targetCharNum;
      });
      return sIdCharStr[0].charStr;
    }

    // reverseのための行名の行列
    let sIdCharUpArr;
    let sIdCharDownArr;
    switch (sIdChar) {
      case "a":
        sIdCharDownArr = ["b", "c", "d", "e", "f", "g", "h"];
        break;
      case "b":
        sIdCharDownArr = ["c", "d", "e", "f", "g", "h"];
        break;
      case "c":
        sIdCharUpArr = ["b", "a"];
        sIdCharDownArr = ["d", "e", "f", "g", "h"];
        break;
      case "d":
        sIdCharUpArr = ["c", "b", "a"];
        sIdCharDownArr = ["e", "f", "g", "h"];
        break;
      case "e":
        sIdCharUpArr = ["d", "c", "b", "a"];
        sIdCharDownArr = ["f", "g", "h"];
        break;
      case "f":
        sIdCharUpArr = ["e", "d", "c", "b", "a"];
        sIdCharDownArr = ["g", "h"];
        break;
      case "g":
        sIdCharUpArr = ["f", "e", "d", "c", "b", "a"];
        break;
      case "h":
        sIdCharUpArr = ["g", "f", "e", "d", "c", "b", "a"];
        break;
      default:
        break;
    }

    // 周囲のマスの変数宣言
    let squareRight;
    let squareLeft;
    let squareCurrent;
    let squareUp;
    let squareDown;
    let squareLeftUp;
    let squareLeftDown;
    let squareRightUp;
    let squareRightDown;
    let nextColor;
    let ableToReverse;

    // 次の石の色を定義
    if (sColor === "stoneWhite") {
      nextColor = "stoneBlack";
    } else {
      nextColor = "stoneWhite";
    }

    // 右方向
    squareRight = sIdChar + sIdNumRightStr;
    //右隣に敵の石があるとき
    if (this.state[squareRight] === nextColor) {
      ableToReverse = 1;
      for (let n = 1; n <= 8 - sIdNum; n++) {
        squareRight = sIdChar + String(sIdNumRight + n);
        // 右隣も敵の石のときableToReverseのカウントが上がる
        if (this.state[squareRight] === nextColor) {
          ableToReverse++;
          //右隣に自陣の石があればableToReveerse分のマスをsColorにして終了
        } else if (this.state[squareRight] === sColor) {
          this.setState({ [sId]: this.sColor });
          for (let n = 0; n < ableToReverse; n++) {
            squareCurrent = sIdChar + String(sIdNumRight + n);
            this.setState({ [squareCurrent]: this.sColor });
          }
          break;
          // 最終的に右隣に自陣の石がなければ終了
        } else {
          break;
        }
      }
    }

    // 左方向
    squareLeft = sIdChar + sIdNumLeftStr;
    //左隣に敵の石があるとき
    if (this.state[squareLeft] === nextColor) {
      ableToReverse = 1;
      for (let n = 1; n < sIdNum; n++) {
        squareLeft = sIdChar + String(sIdNumLeft - n);
        // 左隣も敵の石のときableToReverseのカウントが上がる
        if (this.state[squareLeft] === nextColor) {
          ableToReverse++;
          //左隣に自陣の石があればableToReveerse分のマスをsColorにして終了
        } else if (this.state[squareLeft] === sColor) {
          this.setState({ [sId]: this.sColor });
          for (let n = 0; n < ableToReverse; n++) {
            squareCurrent = sIdChar + String(sIdNumLeft - n);
            this.setState({ [squareCurrent]: this.sColor });
          }
          break;
          // 最終的に右隣に自陣の石がなければ終了
        } else {
          break;
        }
      }
    }

    // 上方向
    sIdCharStr = sIdCharToNum(1, sIdChar);
    squareUp = sIdCharStr + sIdNumStr;
    //上に敵の石があるとき
    if (this.state[squareUp] === nextColor) {
      ableToReverse = 1;
      for (let n = 1; n < sIdCharNum[0].charNum; n++) {
        sIdCharStr = sIdCharToNum(1, sIdCharStr);
        squareUp = sIdCharStr + sIdNumStr;
        // 上も敵の石のときableToReverseのカウントが上がる
        if (this.state[squareUp] === nextColor) {
          ableToReverse++;
          //上に自陣の石があればableToReveerse分のマスをsColorにして終了
        } else if (this.state[squareUp] === sColor) {
          this.setState({ [sId]: this.sColor });
          for (let n = 0; n < ableToReverse; n++) {
            squareCurrent = sIdCharUpArr[n] + sIdNumStr;
            this.setState({ [squareCurrent]: this.sColor });
          }
          break;
          // 最終的に右隣に自陣の石がなければ終了
        } else {
          break;
        }
      }
    }

    // 下方向
    sIdCharStr = sIdCharToNum(2, sIdChar);
    squareDown = sIdCharStr + sIdNumStr;
    // 下に敵の石があるとき
    if (this.state[squareDown] === nextColor) {
      ableToReverse = 1;
      for (let n = 1; n < 8 - sIdCharNum[0].charNum; n++) {
        sIdCharStr = sIdCharToNum(2, sIdCharStr);
        squareDown = sIdCharStr + sIdNumStr;
        // 下も敵の石のときableToReverseのカウントが上がる
        if (this.state[squareDown] === nextColor) {
          ableToReverse++;
          //上に自陣の石があればableToReveerse分のマスをsColorにして終了
        } else if (this.state[squareDown] === sColor) {
          this.setState({ [sId]: this.sColor });
          for (let n = 0; n < ableToReverse; n++) {
            squareCurrent = sIdCharDownArr[n] + sIdNumStr;
            this.setState({ [squareCurrent]: this.sColor });
          }
          break;
          // 最終的に右隣に自陣の石がなければ終了
        } else {
          break;
        }
      }
    }

    // 右上方向
    sIdCharStr = sIdCharToNum(1, sIdChar);
    squareRightUp = sIdCharStr + sIdNumRightStr;
    // 右上に敵の石があるとき
    if (this.state[squareRightUp] === nextColor) {
      ableToReverse = 1;
      for (let n = 1; n < 8 - sIdNum; n++) {
        sIdCharStr = sIdCharToNum(1, sIdCharStr);
        squareRightUp = sIdCharStr + String(sIdNumRight + n);
        // 右上も敵の石のときableToReverseのカウントが上がる
        if (this.state[squareRightUp] === nextColor) {
          ableToReverse++;
          //右上に自陣の石があればableToReveerse分のマスをsColorにして終了
        } else if (this.state[squareRightUp] === sColor) {
          this.setState({ [sId]: this.sColor });
          for (let n = 0; n < ableToReverse; n++) {
            squareCurrent = sIdCharUpArr[n] + String(sIdNumRight + n);
            this.setState({ [squareCurrent]: this.sColor });
          }
          break;
          // 最終的に右上に自陣の石がなければ終了
        } else {
          break;
        }
      }
    }

    // 左上方向
    sIdCharStr = sIdCharToNum(1, sIdChar);
    squareLeftUp = sIdCharStr + sIdNumLeftStr;
    // 左上に敵の石があるとき
    if (this.state[squareLeftUp] === nextColor) {
      ableToReverse = 1;
      for (let n = 1; n < sIdNum; n++) {
        sIdCharStr = sIdCharToNum(1, sIdCharStr);
        squareLeftUp = sIdCharStr + String(sIdNumLeft - n);
        // 左上も敵の石のときableToReverseのカウントが上がる
        if (this.state[squareLeftUp] === nextColor) {
          ableToReverse++;
          //左上に自陣の石があればableToReveerse分のマスをsColorにして終了
        } else if (this.state[squareLeftUp] === sColor) {
          this.setState({ [sId]: this.sColor });
          for (let n = 0; n < ableToReverse; n++) {
            squareCurrent = sIdCharUpArr[n] + String(sIdNumLeft - n);
            this.setState({ [squareCurrent]: this.sColor });
          }
          break;
          // 最終的に左上に自陣の石がなければ終了
        } else {
          break;
        }
      }
    }

    // 右下方向
    sIdCharStr = sIdCharToNum(2, sIdChar);
    squareRightDown = sIdCharStr + sIdNumRightStr;
    // 右下に敵の石があるとき
    if (this.state[squareRightDown] === nextColor) {
      ableToReverse = 1;
      for (let n = 1; n < 8 - sIdNum; n++) {
        sIdCharStr = sIdCharToNum(2, sIdCharStr);
        squareRightDown = sIdCharStr + String(sIdNumRight + n);
        // 右下も敵の石のときableToReverseのカウントが上がる
        if (this.state[squareRightDown] === nextColor) {
          ableToReverse++;
          //右下に自陣の石があればableToReveerse分のマスをsColorにして終了
        } else if (this.state[squareRightDown] === sColor) {
          this.setState({ [sId]: this.sColor });
          for (let n = 0; n < ableToReverse; n++) {
            squareCurrent = sIdCharDownArr[n] + String(sIdNumRight + n);
            this.setState({ [squareCurrent]: this.sColor });
          }
          break;
          // 最終的に右下に自陣の石がなければ終了
        } else {
          break;
        }
      }
    }

    // 左下方向
    sIdCharStr = sIdCharToNum(2, sIdChar);
    squareLeftDown = sIdCharStr + sIdNumLeftStr;
    // 左下に敵の石があるとき
    if (this.state[squareLeftDown] === nextColor) {
      ableToReverse = 1;
      for (let n = 1; n < sIdNum; n++) {
        sIdCharStr = sIdCharToNum(2, sIdCharStr);
        squareLeftDown = sIdCharStr + String(sIdNumLeft - n);
        // 左下も敵の石のときableToReverseのカウントが上がる
        if (this.state[squareLeftDown] === nextColor) {
          ableToReverse++;
          //左下に自陣の石があればableToReveerse分のマスをsColorにして終了
        } else if (this.state[squareLeftDown] === sColor) {
          this.setState({ [sId]: this.sColor });
          for (let n = 0; n < ableToReverse; n++) {
            squareCurrent = sIdCharDownArr[n] + String(sIdNumLeft - n);
            this.setState({ [squareCurrent]: this.sColor });
          }
          break;
          // 最終的に左下に自陣の石がなければ終了
        } else {
          break;
        }
      }
    }
  }

  /* ************************************** 
    盤目を描く
   ************************************** */

  // 四角
  renderSquare(s, sId) {
    return (
      <div className="square">
        <button
          className={s}
          id={sId}
          onClick={() => this.clickSquare(s, sId)}
        />
      </div>
    );
  }

  // 行
  renderLine(line) {
    const squareId1 = line + "1";
    const squareId2 = line + "2";
    const squareId3 = line + "3";
    const squareId4 = line + "4";
    const squareId5 = line + "5";
    const squareId6 = line + "6";
    const squareId7 = line + "7";
    const squareId8 = line + "8";
    const stateClassNeme1 = this.state[squareId1];
    const stateClassNeme2 = this.state[squareId2];
    const stateClassNeme3 = this.state[squareId3];
    const stateClassNeme4 = this.state[squareId4];
    const stateClassNeme5 = this.state[squareId5];
    const stateClassNeme6 = this.state[squareId6];
    const stateClassNeme7 = this.state[squareId7];
    const stateClassNeme8 = this.state[squareId8];
    return (
      <div>
        {this.renderSquare(stateClassNeme1, squareId1)}
        {this.renderSquare(stateClassNeme2, squareId2)}
        {this.renderSquare(stateClassNeme3, squareId3)}
        {this.renderSquare(stateClassNeme4, squareId4)}
        {this.renderSquare(stateClassNeme5, squareId5)}
        {this.renderSquare(stateClassNeme6, squareId6)}
        {this.renderSquare(stateClassNeme7, squareId7)}
        {this.renderSquare(stateClassNeme8, squareId8)}
      </div>
    );
  }

  // 盤目
  render() {
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">{this.renderLine("a")}</div>
        <div className="board-row">{this.renderLine("b")}</div>
        <div className="board-row">{this.renderLine("c")}</div>
        <div className="board-row">{this.renderLine("d")}</div>
        <div className="board-row">{this.renderLine("e")}</div>
        <div className="board-row">{this.renderLine("f")}</div>
        <div className="board-row">{this.renderLine("g")}</div>
        <div className="board-row">{this.renderLine("h")}</div>
      </div>
    );
  }
}

export default Othello;
