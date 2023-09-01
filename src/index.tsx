import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Repeat } from 'typescript-tuple'


type SquareState = 'O' | 'X' | null
type SquareProps = {
  value: SquareState
  onClick: () => void
}
const Square = (props: SquareProps) => (
  <button className='square' onClick={props.onClick}>
      {props.value}
  </button>
)

type BoardState = Repeat<SquareState, 9>
type BoardProps = {
  squares: BoardState
  onClick: (i: number) => void
}
const Board = (props: BoardProps) => {
  const renderSquare = (i: number) => (
      <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  )

  return (
      <div>
          <div className='board-row'>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
          </div>
          <div className='board-row'>
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
          </div>
          <div className='board-row'>
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
          </div>
      </div>
  )
}

type Step = {
  squares: BoardState
  xIsNext: boolean
}
type GameState = {
  readonly history: Step[]
  readonly stepNumber: number
}
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Game />);
