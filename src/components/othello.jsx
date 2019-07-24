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
    let possibility;
    if (this.sColor === undefined) {
      this.sColor = "stoneWhite";
    }
    possibility = this.reverseValidation(this.sColor, sId);
    if (possibility === true) {
      if (sClass === "") {
        // if (this.possibility === true) {
        if (tglStone === 0) {
          sColor = "stoneWhite";
        } else {
          sColor = "stoneBlack";
        }
      }
      this.setState({ [sId]: sColor });
      tglStone === 0 ? (tglStone = 1) : (tglStone = 0);

      // if (this.tglStone === 0) {
      //   status = "Next player: WHITE";
      // } else {
      //   status = "Next player: BLACK";
      // }
      // }
    }
  }

  reverseValidation(sColor, sId) {
    var possibility = false;
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
    let squareUp;
    let squareDown;
    let squareLeftUp;
    let squareLeftDown;
    let squareRightUp;
    let squareRightDown;

    if (sColor === "stoneWhite") {
      switch (sIdChar) {
        case "a":
          squareRight = "a" + sIdNumRightStr;
          squareLeft = "a" + sIdNumLeftStr;
          squareDown = "b" + sIdNum;
          squareLeftDown = "b" + sIdNumLeftStr;
          squareRightDown = "b" + sIdNumRightStr;
          if (
            this.state[squareRight] === "stoneBlack" ||
            this.state[squareLeft] === "stoneBlack" ||
            this.state[squareDown] === "stoneBlack" ||
            this.state[squareLeftDown] === "stoneBlack" ||
            this.state[squareRightDown] === "stoneBlack"
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
            this.state[squareRight] === "stoneBlack" ||
            this.state[squareLeft] === "stoneBlack" ||
            this.state[squareDown] === "stoneBlack" ||
            this.state[squareLeftDown] === "stoneBlack" ||
            this.state[squareRightDown] === "stoneBlack" ||
            this.state[squareUp] === "stoneBlack" ||
            this.state[squareLeftUp] === "stoneBlack" ||
            this.state[squareRightUp] === "stoneBlack"
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
            this.state[squareRight] === "stoneBlack" ||
            this.state[squareLeft] === "stoneBlack" ||
            this.state[squareDown] === "stoneBlack" ||
            this.state[squareLeftDown] === "stoneBlack" ||
            this.state[squareRightDown] === "stoneBlack" ||
            this.state[squareUp] === "stoneBlack" ||
            this.state[squareLeftUp] === "stoneBlack" ||
            this.state[squareRightUp] === "stoneBlack"
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
            this.state[squareRight] === "stoneBlack" ||
            this.state[squareLeft] === "stoneBlack" ||
            this.state[squareDown] === "stoneBlack" ||
            this.state[squareLeftDown] === "stoneBlack" ||
            this.state[squareRightDown] === "stoneBlack" ||
            this.state[squareUp] === "stoneBlack" ||
            this.state[squareLeftUp] === "stoneBlack" ||
            this.state[squareRightUp] === "stoneBlack"
          ) {
            possibility = true;
          } else {
            possibility = false;
          }

          break;
        case "e":
          break;
        case "f":
          break;
        case "g":
          break;
        case "h":
          break;
        default:
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
