import React, { useState } from 'react';
import './numberContainer.scss';

const NumberContainer = ({ number }) => {

  const [clicked, setClicked] = useState(false);

  const onClick = function () {
    // Cell must not reset state
    setClicked(true);
  }

  const DozenAndUnit = ({ number }) => {
    const unit = number%10;
    const dozen = Math.floor(number/10);

    return (
      <React.Fragment>
        <span className="dozen">{ dozen | 0 }</span>
        <span className="unit">{ unit | 0 }</span>
      </React.Fragment>
    );
  };

  return (
    <div 
      className={`number-container ${clicked ? 'clicked' : ''}`} 
      onClick={onClick}
      id={number}
    >
      <DozenAndUnit number={number}/>
    </div>
  );
};

export default NumberContainer;
