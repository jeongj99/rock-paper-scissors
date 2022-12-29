import { useState } from "react";

import User from './components/User';
import Game from './components//Game';

import './App.css';
import React from 'react';

function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <>
      <section className='game'>
        <Game
          userChoice={userChoice}
          computerChoice={computerChoice}
          userScore={userScore}
          computerScore={computerScore}
          message={message}
        />
        <User
          setUserChoice={setUserChoice}
          setComputerChoice={setComputerChoice}
          setUserScore={setUserScore}
          setComputerScore={setComputerScore}
          setMessage={setMessage}
        />
      </section>
    </>
  );
}

export default App;
