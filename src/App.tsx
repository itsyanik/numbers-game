import React from 'react';
import Header from './components/Header/header.tsx';
import Menu from './components/Menu/menu.tsx';
import './App.scss';

function App({ config }) {
  return (
    <React.Fragment>
      <Header />
      <div className="numbers-game">
        <Menu config={config} />
      </div>
    </React.Fragment>
  );
};

export default App;
