import "./Game.css"

export default function Game(props) {
  return (
    <div className="game-screen">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        <div className="user-choice">
          <h1>{props.userChoice}</h1>
        </div>
        <div className="computer-choice">
          <h1>{props.computerChoice}</h1>
        </div>
      </div>
    </div>
  )
}