import User from './components/User';
import Game from './components//Game';
import Computer from './components/Computer';

import './App.css';

function App() {
  return (
    <>
      <section className='game'>
        <User />
        <Game />
        <Computer />
      </section>
    </>
  );
}

export default App;
