import { useState } from "react";

import User from './components/User';
import Game from './components//Game';

import './App.css';
import React from 'react';

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState('scissors');

  return (
    <>
      <section className='game'>
        <Game userChoice={userChoice} computerChoice={computerChoice} />
        <User setUserChoice={setUserChoice} setComputerChoice={setComputerChoice} />
      </section>
    </>
  );
}

export default App;
