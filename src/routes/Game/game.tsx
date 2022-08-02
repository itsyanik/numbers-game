import React from 'react';
import NumberContainer from '../../components/NumberContainer/numberContainer.tsx';
import Header from './../../components/Header/header.tsx';
import './game.scss';

const Game = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='game'>
        <div className='number-row'>
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
        </div>
        <div className='number-row'>
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
        </div>
        <div className='number-row'>
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
          <NumberContainer />
        </div>
      </div>
      <footer>
        <a href="/">Go back</a>
      </footer>
    </React.Fragment>
  );
};

export default Game;