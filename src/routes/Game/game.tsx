import React from 'react';
import Header from './../../components/Header/header.tsx';
import './game.scss';

const Game = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='game'>
        <h2>Game</h2>
      </div>
    </React.Fragment>
  );
};

export default Game;