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

  clickSquare(target) {
    // const targetSquare = document.getElementsByName("stone");
    // targetSquare.addEventListener(
    //   "click",
    //   function(color) {
    // let stoneClass = color.target.className;
    let stoneColor;

    if (tglStone === 0) {
      stoneColor = "stoneWhite";
    } else {
      stoneColor = "stoneBlack";
    }
    console.log(target);
    this.setState({ a1: stoneColor });
    console.log(this.state);
    //   },
    //   false
    // );
  }
  renderSquare(s) {
    return (
      <div className="square">
        <button className={s} onClick={s => this.clickSquare(s)} />
      </div>
    );
  }
  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.state.a1)}
          {this.renderSquare(this.state.a2)}
          {this.renderSquare(this.state.a3)}
          {this.renderSquare(this.state.a4)}
          {this.renderSquare(this.state.a5)}
          {this.renderSquare(this.state.a6)}
          {this.renderSquare(this.state.a7)}
          {this.renderSquare(this.state.a8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.b1)}
          {this.renderSquare(this.state.b2)}
          {this.renderSquare(this.state.b3)}
          {this.renderSquare(this.state.b4)}
          {this.renderSquare(this.state.b5)}
          {this.renderSquare(this.state.b6)}
          {this.renderSquare(this.state.b7)}
          {this.renderSquare(this.state.b8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.c1)}
          {this.renderSquare(this.state.c2)}
          {this.renderSquare(this.state.c3)}
          {this.renderSquare(this.state.c4)}
          {this.renderSquare(this.state.c5)}
          {this.renderSquare(this.state.c6)}
          {this.renderSquare(this.state.c7)}
          {this.renderSquare(this.state.c8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.d1)}
          {this.renderSquare(this.state.d2)}
          {this.renderSquare(this.state.d3)}
          {this.renderSquare(this.state.d4)}
          {this.renderSquare(this.state.d5)}
          {this.renderSquare(this.state.d6)}
          {this.renderSquare(this.state.d7)}
          {this.renderSquare(this.state.d8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.e1)}
          {this.renderSquare(this.state.e2)}
          {this.renderSquare(this.state.e3)}
          {this.renderSquare(this.state.e4)}
          {this.renderSquare(this.state.e5)}
          {this.renderSquare(this.state.e6)}
          {this.renderSquare(this.state.e7)}
          {this.renderSquare(this.state.e8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.f1)}
          {this.renderSquare(this.state.f2)}
          {this.renderSquare(this.state.f3)}
          {this.renderSquare(this.state.f4)}
          {this.renderSquare(this.state.f5)}
          {this.renderSquare(this.state.f6)}
          {this.renderSquare(this.state.f7)}
          {this.renderSquare(this.state.f8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.g1)}
          {this.renderSquare(this.state.g2)}
          {this.renderSquare(this.state.g3)}
          {this.renderSquare(this.state.g4)}
          {this.renderSquare(this.state.g5)}
          {this.renderSquare(this.state.g6)}
          {this.renderSquare(this.state.g7)}
          {this.renderSquare(this.state.g8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.state.h1)}
          {this.renderSquare(this.state.h2)}
          {this.renderSquare(this.state.h3)}
          {this.renderSquare(this.state.h4)}
          {this.renderSquare(this.state.h5)}
          {this.renderSquare(this.state.h6)}
          {this.renderSquare(this.state.h7)}
          {this.renderSquare(this.state.h8)}
        </div>
      </div>
    );
  }
}

export default Othello;
