import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

import "./Game.css";

export default function Game(props) {
  return (
    <div className="game-screen">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        <div className="user-choice">
          {props.userChoice === "rock" &&
            <h1>
              <FaHandRock />
            </h1>
          }
          {props.userChoice === "paper" &&
            <h1>
              <FaHandPaper />
            </h1>
          }
          {props.userChoice === "scissors" &&
            <h1>
              <FaHandScissors />
            </h1>
          }
        </div>
        <div className="computer-choice">
          <h1>{props.computerChoice}</h1>
        </div>
      </div>
    </div>
  );
}