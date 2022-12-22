import Button from "./Button";

import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

import "./User.css";

export default function User() {
  return (
    <div className="user-screen">
      <h1>Display user screen here</h1>
      <div className="user-option">
        <Button rock>
          <FaHandRock />
          </Button>
        <Button paper>
          <FaHandPaper />
        </Button>
        <Button scissors>
          <FaHandScissors />
        </Button>
      </div>
    </div>
  );
}