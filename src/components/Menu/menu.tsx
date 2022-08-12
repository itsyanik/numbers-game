import React from 'react';
import { Link } from "react-router-dom";

import './menu.scss';

const Menu = ({ config }) => {
  const { menuEntries } = config;
  
  return (
    <section id="menu">
      <ul>
        {menuEntries.map((entry, idx) => {
          const entryKey = Object.keys(entry)[0];
          const { linkTo, text } = entry[entryKey];
          
          return (
            <li key={idx}>
              <Link to={linkTo}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Menu;