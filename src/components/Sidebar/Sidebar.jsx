import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Aside = () => {
  return (
    <aside className="aside">
      <ul className="menu">
        <li className="menu__item"><NavLink to="/profile">Profile</NavLink></li>
        <li className="menu__item"><NavLink to="/messages">Messages</NavLink></li>
        <li className="menu__item"><NavLink to="/news">News</NavLink></li>
        <li className="menu__item"><NavLink to="/music">Music</NavLink></li>
        <li className="menu__item"><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </aside>
  )
}

export default Aside;