import Button from "./Button";

import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

import "./User.css";

export default function User(props) {
  const {setUserChoice, setComputerChoice} = props;

  const selectRock = () => {
    setUserChoice("rock");
  };

  const selectPaper = () => {
    setUserChoice("paper");
  };

  const selectScissors = () => {
    setUserChoice("scissors");
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