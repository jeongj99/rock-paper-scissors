import User from './components/User';
import Game from './components//Game';

import './App.css';

function App() {
  return (
    <>
      <section className='game'>
        <Game />
        <User />
      </section>
    </>
  );
}

export default App;
