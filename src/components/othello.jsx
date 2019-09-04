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
    // 現ターンで石が置ける場所かどうか判断
    let possibility;
    if (this.sColor === undefined) {
      this.sColor = "stoneWhite";
    }
    possibility = this.reverseValidation(this.sColor, sId);

    // 石が置けるようなら置く
    if (possibility === true) {
      if (sClass === "") {
        // if (this.possibility === true) {
        if (tglStone === 0) {
          this.sColor = "stoneWhite";
        } else {
          this.sColor = "stoneBlack";
        }
      }

      // state変更つまり石を置く
      this.setState({ [sId]: this.sColor });

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
    }
  }

  reverseValidation(sColor, sId) {
    let possibility = false;
    const sIdChar = sId.split("")[0];
    const sIdNum = sId.split("")[1];
    const sIdNumTarget = Number(sIdNum);
    let sIdNumLeft;
    let sIdNumRight;

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
    const sIdNumLeftStr = String(sIdNumLeft);
    const sIdNumRightStr = String(sIdNumRight);

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

    if (sColor === "stoneWhite") {
      nextColor = "stoneBlack";
    } else {
      nextColor = "stoneWhite";
    }

    // 右方向
    squareRight = sIdChar + sIdNumRightStr;
    if (this.state[squareRight] === nextColor) {
      for (let n = 1; n < sIdNum - n; n++) {
        squareRight = sIdChar + String(sIdNumRight + n);
        squareCurrent = sIdChar + String(sIdNumRight + n - 1);
        if (this.state[squareRight] === nextColor) {
          //TODO: これより左のすべてのマスをsColorにする
          this.setState({ [squareCurrent]: this.sColor });
        } else if (this.state[squareRight] === sColor) {
        } else {
          break;
        }
      }
    }

    switch (sIdChar) {
      case "a":
        squareRight = "a" + sIdNumRightStr;
        squareLeft = "a" + sIdNumLeftStr;
        squareDown = "b" + sIdNum;
        squareLeftDown = "b" + sIdNumLeftStr;
        squareRightDown = "b" + sIdNumRightStr;
        if (
          this.state[squareRight] === nextColor ||
          this.state[squareLeft] === nextColor ||
          this.state[squareDown] === nextColor ||
          this.state[squareLeftDown] === nextColor ||
          this.state[squareRightDown] === nextColor
        ) {
          return (possibility = true);
        } else {
          return (possibility = false);
        }
      case "b":
        squareRight = "b" + sIdNumRightStr;
        squareLeft = "b" + sIdNumLeftStr;
        squareDown = "c" + sIdNum;
        squareLeftDown = "c" + sIdNumLeftStr;
        squareRightDown = "c" + sIdNumRightStr;
        squareUp = "a" + sIdNum;
        squareLeftUp = "a" + sIdNumLeftStr;
        squareRightUp = "a" + sIdNumRightStr;

        if (
          this.state[squareRight] === nextColor ||
          this.state[squareLeft] === nextColor ||
          this.state[squareDown] === nextColor ||
          this.state[squareLeftDown] === nextColor ||
          this.state[squareRightDown] === nextColor ||
          this.state[squareUp] === nextColor ||
          this.state[squareLeftUp] === nextColor ||
          this.state[squareRightUp] === nextColor
        ) {
          return (possibility = true);
        } else {
          return (possibility = false);
        }

      case "c":
        squareRight = "c" + sIdNumRightStr;
        squareLeft = "c" + sIdNumLeftStr;
        squareDown = "d" + sIdNum;
        squareLeftDown = "d" + sIdNumLeftStr;
        squareRightDown = "d" + sIdNumRightStr;
        squareUp = "b" + sIdNum;
        squareLeftUp = "b" + sIdNumLeftStr;
        squareRightUp = "b" + sIdNumRightStr;

        if (
          this.state[squareRight] === nextColor ||
          this.state[squareLeft] === nextColor ||
          this.state[squareDown] === nextColor ||
          this.state[squareLeftDown] === nextColor ||
          this.state[squareRightDown] === nextColor ||
          this.state[squareUp] === nextColor ||
          this.state[squareLeftUp] === nextColor ||
          this.state[squareRightUp] === nextColor
        ) {
          return (possibility = true);
        } else {
          return (possibility = false);
        }

      case "d":
        squareRight = "d" + sIdNumRightStr;
        squareLeft = "d" + sIdNumLeftStr;
        squareDown = "e" + sIdNum;
        squareLeftDown = "e" + sIdNumLeftStr;
        squareRightDown = "e" + sIdNumRightStr;
        squareUp = "c" + sIdNum;
        squareLeftUp = "c" + sIdNumLeftStr;
        squareRightUp = "c" + sIdNumRightStr;

        if (
          this.state[squareRight] === nextColor ||
          this.state[squareLeft] === nextColor ||
          this.state[squareDown] === nextColor ||
          this.state[squareLeftDown] === nextColor ||
          this.state[squareRightDown] === nextColor ||
          this.state[squareUp] === nextColor ||
          this.state[squareLeftUp] === nextColor ||
          this.state[squareRightUp] === nextColor
        ) {
          return (possibility = true);
        } else {
          return (possibility = false);
        }
      case "e":
        squareRight = "e" + sIdNumRightStr;
        squareLeft = "e" + sIdNumLeftStr;
        squareDown = "f" + sIdNum;
        squareLeftDown = "f" + sIdNumLeftStr;
        squareRightDown = "f" + sIdNumRightStr;
        squareUp = "d" + sIdNum;
        squareLeftUp = "d" + sIdNumLeftStr;
        squareRightUp = "d" + sIdNumRightStr;

        if (
          this.state[squareRight] === nextColor ||
          this.state[squareLeft] === nextColor ||
          this.state[squareDown] === nextColor ||
          this.state[squareLeftDown] === nextColor ||
          this.state[squareRightDown] === nextColor ||
          this.state[squareUp] === nextColor ||
          this.state[squareLeftUp] === nextColor ||
          this.state[squareRightUp] === nextColor
        ) {
          return (possibility = true);
        } else {
          return (possibility = false);
        }
      case "f":
        squareRight = "f" + sIdNumRightStr;
        squareLeft = "f" + sIdNumLeftStr;
        squareDown = "g" + sIdNum;
        squareLeftDown = "g" + sIdNumLeftStr;
        squareRightDown = "g" + sIdNumRightStr;
        squareUp = "e" + sIdNum;
        squareLeftUp = "e" + sIdNumLeftStr;
        squareRightUp = "e" + sIdNumRightStr;

        if (
          this.state[squareRight] === nextColor ||
          this.state[squareLeft] === nextColor ||
          this.state[squareDown] === nextColor ||
          this.state[squareLeftDown] === nextColor ||
          this.state[squareRightDown] === nextColor ||
          this.state[squareUp] === nextColor ||
          this.state[squareLeftUp] === nextColor ||
          this.state[squareRightUp] === nextColor
        ) {
          return (possibility = true);
        } else {
          return (possibility = false);
        }

      case "g":
        squareRight = "g" + sIdNumRightStr;
        squareLeft = "g" + sIdNumLeftStr;
        squareDown = "h" + sIdNum;
        squareLeftDown = "h" + sIdNumLeftStr;
        squareRightDown = "h" + sIdNumRightStr;
        squareUp = "f" + sIdNum;
        squareLeftUp = "f" + sIdNumLeftStr;
        squareRightUp = "f" + sIdNumRightStr;

        if (
          this.state[squareRight] === nextColor ||
          this.state[squareLeft] === nextColor ||
          this.state[squareDown] === nextColor ||
          this.state[squareLeftDown] === nextColor ||
          this.state[squareRightDown] === nextColor ||
          this.state[squareUp] === nextColor ||
          this.state[squareLeftUp] === nextColor ||
          this.state[squareRightUp] === nextColor
        ) {
          return (possibility = true);
        } else {
          return (possibility = false);
        }

      case "h":
        squareRight = "h" + sIdNumRightStr;
        squareLeft = "h" + sIdNumLeftStr;
        squareUp = "g" + sIdNum;
        squareLeftUp = "g" + sIdNumLeftStr;
        squareRightUp = "g" + sIdNumRightStr;

        if (
          this.state[squareRight] === nextColor ||
          this.state[squareLeft] === nextColor ||
          this.state[squareUp] === nextColor ||
          this.state[squareLeftUp] === nextColor ||
          this.state[squareRightUp] === nextColor
        ) {
          return (possibility = true);
        } else {
          return (possibility = false);
        }

      default:
        return;
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
