import React, { useState } from 'react';
import NumberContainer from '../../components/NumberContainer/numberContainer.tsx';
import Header from './../../components/Header/header.tsx';
import shuffle from '../../helpers/shuffle';
import './game.scss';

const Game = ({ config }) => {
  const { numberQty } = config ;

  const numbersArray = [];
  const [clickCount, setClickCount] = useState(0);

  // can't use regular loop inside JSX
  // so have to fill an array before looping.
  // the numbers shouldn't go higher than 100
  // so this shouldn't be a performance hit.
  const fillNumbersArray = function () {
    for (let i = 0; i <= numberQty; i++) {
      numbersArray.push(i);
    };
  };

  const updateCounter = function () {
    const counter = clickCount + 1;
    setClickCount(counter);
  }

  fillNumbersArray();
  const shuffled = shuffle(numbersArray);

  return (
    <React.Fragment>
      <Header />
      <div className='game'>
        <div className='number-grid'>
          {shuffled.map((number) => {
            return (
              <NumberContainer 
                number={number} 
                key={number} 
                clickCounter={clickCount}
                updateCounter={updateCounter}
              />
            );
          })}
        </div>
      </div>
      <footer>
        <a href="/">Go back</a>
      </footer>
    </React.Fragment>
  );
};

export default Game;