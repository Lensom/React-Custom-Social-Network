import React from 'react';
import './Aside.css';

function Aside() {
  return (
    <aside className="aside">
      <ul className="menu">
        <li className="menu__item"><a href="/">Profile</a></li>
        <li className="menu__item"><a href="/">Messages</a></li>
        <li className="menu__item"><a href="/">News</a></li>
        <li className="menu__item"><a href="/">Music</a></li>
        <li className="menu__item"><a href="/">Settings</a></li>
      </ul>
    </aside>
  )
}

export default Aside;