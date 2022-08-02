import React from 'react';
import { Link } from "react-router-dom";

import './menu.scss';

const Menu = () => {
  return (
    <section className="menu">
      <ul>
        <li>
          <Link to="/game">Start</Link>
        </li>
        <li>Instructions</li>
        <li>Options</li>
      </ul>
    </section>
  );
};

export default Menu;