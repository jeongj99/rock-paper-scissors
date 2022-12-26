import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

import "./Game.css";

export default function Game(props) {
  return (
    <div className="game-screen">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        <div className="user">
          <h1>User Score: {props.userScore}</h1>
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
        </div>
        <div className="computer">
          <h1>Computer Score: {props.computerScore}</h1>
          <div className="computer-choice">
            {props.computerChoice === "rock" &&
              <h1>
                <FaHandRock />
              </h1>
            }
            {props.computerChoice === "paper" &&
              <h1>
                <FaHandPaper />
              </h1>
            }
            {props.computerChoice === "scissors" &&
              <h1>
                <FaHandScissors />
              </h1>
            }
          </div>
        </div>
      </div>
    </div>
  );
}