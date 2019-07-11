import * as React from "react";
import "../index.css";
let tglStone = 0;

class Othello extends React.Component {
  constructor(props) {
    super(props);
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

  clickSquare(ss) {
    let stoneColor;

    if (tglStone === 0) {
      stoneColor = "stoneWhite";
    } else {
      stoneColor = "stoneBlack";
    }
    this.setState({ [ss]: stoneColor });
    tglStone === 0 ? (tglStone = 1) : (tglStone = 0);
  }

  renderSquare(s, sId) {
    return (
      <div className="square">
        <button className={s} id={sId} onClick={() => this.clickSquare(sId)} />
      </div>
    );
  }

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

  render() {
    const status = "Next player: X";

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
