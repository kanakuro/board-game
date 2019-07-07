import * as React from "react";
import "../index.css";

class Othello extends React.Component {
  a1 = "";
  a2 = "";
  a3 = "";
  a4 = "";
  a5 = "";
  a6 = "";
  a7 = "";
  a8 = "";
  b1 = "";
  b2 = "";
  b3 = "";
  b4 = "";
  b5 = "";
  b6 = "";
  b7 = "";
  b8 = "";
  c1 = "";
  c2 = "";
  c3 = "";
  c4 = "";
  c5 = "";
  c6 = "";
  c7 = "";
  c8 = "";
  d1 = "";
  d2 = "";
  d3 = "";
  d4 = "stoneWhite";
  d5 = "stoneBlack";
  d6 = "";
  d7 = "";
  d8 = "";
  e1 = "";
  e2 = "";
  e3 = "";
  e4 = "stoneBlack";
  e5 = "stoneWhite";
  e6 = "";
  e7 = "";
  e8 = "";
  f1 = "";
  f2 = "";
  f3 = "";
  f4 = "";
  f5 = "";
  f6 = "";
  f7 = "";
  f8 = "";
  g1 = "";
  g2 = "";
  g3 = "";
  g4 = "";
  g5 = "";
  g6 = "";
  g7 = "";
  g8 = "";
  h1 = "";
  h2 = "";
  h3 = "";
  h4 = "";
  h5 = "";
  h6 = "";
  h7 = "";
  h8 = "";

  renderSquare(s) {
    return (
      <button className="square">
        <div className={s} />
      </button>
    );
  }
  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(this.a1)}
          {this.renderSquare(this.a2)}
          {this.renderSquare(this.a3)}
          {this.renderSquare(this.a4)}
          {this.renderSquare(this.a5)}
          {this.renderSquare(this.a6)}
          {this.renderSquare(this.a7)}
          {this.renderSquare(this.a8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.b1)}
          {this.renderSquare(this.b2)}
          {this.renderSquare(this.b3)}
          {this.renderSquare(this.b4)}
          {this.renderSquare(this.b5)}
          {this.renderSquare(this.b6)}
          {this.renderSquare(this.b7)}
          {this.renderSquare(this.b8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.c1)}
          {this.renderSquare(this.c2)}
          {this.renderSquare(this.c3)}
          {this.renderSquare(this.c4)}
          {this.renderSquare(this.c5)}
          {this.renderSquare(this.c6)}
          {this.renderSquare(this.c7)}
          {this.renderSquare(this.c8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.d1)}
          {this.renderSquare(this.d2)}
          {this.renderSquare(this.d3)}
          {this.renderSquare(this.d4)}
          {this.renderSquare(this.d5)}
          {this.renderSquare(this.d6)}
          {this.renderSquare(this.d7)}
          {this.renderSquare(this.d8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.e1)}
          {this.renderSquare(this.e2)}
          {this.renderSquare(this.e3)}
          {this.renderSquare(this.e4)}
          {this.renderSquare(this.e5)}
          {this.renderSquare(this.e6)}
          {this.renderSquare(this.e7)}
          {this.renderSquare(this.e8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.f1)}
          {this.renderSquare(this.f2)}
          {this.renderSquare(this.f3)}
          {this.renderSquare(this.f4)}
          {this.renderSquare(this.f5)}
          {this.renderSquare(this.f6)}
          {this.renderSquare(this.f7)}
          {this.renderSquare(this.f8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.g1)}
          {this.renderSquare(this.g2)}
          {this.renderSquare(this.g3)}
          {this.renderSquare(this.g4)}
          {this.renderSquare(this.g5)}
          {this.renderSquare(this.g6)}
          {this.renderSquare(this.g7)}
          {this.renderSquare(this.g8)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.h1)}
          {this.renderSquare(this.h2)}
          {this.renderSquare(this.h3)}
          {this.renderSquare(this.h4)}
          {this.renderSquare(this.h5)}
          {this.renderSquare(this.h6)}
          {this.renderSquare(this.h7)}
          {this.renderSquare(this.h8)}
        </div>
      </div>
    );
  }
}

export default Othello;
