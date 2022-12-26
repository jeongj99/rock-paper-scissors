import { useState } from "react";

import User from './components/User';
import Game from './components//Game';

import './App.css';
import React from 'react';

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState('scissors');
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return (
    <>
      <section className='game'>
        <Game
          userChoice={userChoice}
          computerChoice={computerChoice}
          userScore={userScore}
          computerScore={computerScore}
        />
        <User
          setUserChoice={setUserChoice}
          setComputerChoice={setComputerChoice}
          setUserScore={setUserScore}
          setComputerScore={setComputerScore}
        />
      </section>
    </>
  );
}

export default App;
