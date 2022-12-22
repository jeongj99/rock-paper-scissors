import Button from "./Button";

import "./User.css";

export default function User() {
  return (
    <div className="user-screen">
      <h1>Display user screen here</h1>
      <div className="user-option">
        <Button rock>Rock</Button>
        <Button scissors>Scissors</Button>
        <Button paper>Paper</Button>
      </div>
    </div>
  );
}