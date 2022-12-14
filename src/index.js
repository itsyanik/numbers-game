import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';

import App from './App.tsx';
import Game from './routes/Game/game.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const config = {
  numberQty: 30
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/game' element={<Game config={config}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
