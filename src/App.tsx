import React from 'react';
import './App.scss';
import Header from './components/Header/header.tsx';
import Menu from './components/Menu/menu.tsx';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="numbers-game">
        <Menu />
      </div>
    </React.Fragment>
  );
};

export default App;
