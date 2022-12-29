import Button from "./Button";

import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

import "./User.css";

export default function User(props) {
  const { setUserChoice, setComputerChoice, setUserScore, setComputerScore, setMessage } = props;

  const getRandomNum = max => {
    return Math.floor(Math.random() * max);
  };

  const selectRock = () => {
    setUserChoice("rock");

    const num = getRandomNum(3);

    switch (num) {
      case 0:
        setComputerChoice("rock");
        setMessage("Tie");
        break;
      case 1:
        setComputerChoice("paper");
        setComputerScore(prev => prev + 1);
        setMessage("Computer Wins");
        break;
      case 2:
        setComputerChoice("scissors");
        setUserScore(prev => prev + 1);
        setMessage("You Win");
        break;
      default:
        setComputerChoice("");
        break;
    }
  };

  const selectPaper = () => {
    setUserChoice("paper");

    const num = getRandomNum(3);

    switch (num) {
      case 0:
        setComputerChoice("rock");
        setUserScore(prev => prev + 1);
        setMessage("You Win");
        break;
      case 1:
        setComputerChoice("paper");
        setMessage("Tie");
        break;
      case 2:
        setComputerChoice("scissors");
        setComputerScore(prev => prev + 1);
        setMessage("Computer Wins");
        break;
      default:
        setComputerChoice("");
        break;
    }
  };

  const selectScissors = () => {
    setUserChoice("scissors");

    const num = getRandomNum(3);

    switch (num) {
      case 0:
        setComputerChoice("rock");
        setComputerScore(prev => prev + 1);
        setMessage("Computer Wins");
        break;
      case 1:
        setComputerChoice("paper");
        setUserScore(prev => prev + 1);
        setMessage("You Win");
        break;
      case 2:
        setComputerChoice("scissors");
        setMessage("Tie");
        break;
      default:
        setComputerChoice("");
        break;
    }
  };

  return (
    <div className="user-screen">
      <h1>Display user screen here</h1>
      <div className="user-option">
        <Button rock onClick={selectRock}>
          <FaHandRock />
        </Button>
        <Button paper onClick={selectPaper}>
          <FaHandPaper />
        </Button>
        <Button scissors onClick={selectScissors}>
          <FaHandScissors />
        </Button>
      </div>
    </div>
  );
}