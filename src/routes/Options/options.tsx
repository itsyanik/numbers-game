import React from 'react';
import Header from './../../components/Header/header.tsx';
import './options.scss';

const Options = ({ config }) => {
  const { options } = config;
  const { numberQty, minNumberQty, maxNumberQty } = options;

  const Option = ({ name, total, description, config }) => {
    return (
      <div className="option">
        <div className='nameTotal'>
          <span className="name">{name}:</span>
          <span className='total'>&nbsp; {total}</span>
        </div>
        <span className='description'>{description}</span>

        {config !== undefined ? 
          (
            <div className='config'>
              <label htmlFor={name}>&nbsp;{name}</label>
              <input type="range" min={config.min} max={config.max} defaultValue={config.min}/>
            </div>
          )
          : null
        }
      </div>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <section id="options">
        <Option 
          name={numberQty.name} 
          total={numberQty.total} 
          description={numberQty.description} 
          config={numberQty.config} 
        />
        <Option 
          name={minNumberQty.name} 
          total={minNumberQty.total} 
          description={minNumberQty.description}
        />
        <Option 
          name={maxNumberQty.name} 
          total={maxNumberQty.total} 
          description={maxNumberQty.description}
        />
      </section>
      <footer>
        <a href="/">Go back</a>
      </footer>
    </React.Fragment>
  );
};

export default Options;
