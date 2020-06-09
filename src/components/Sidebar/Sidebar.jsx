import React from 'react';
import Logotype from './Logotype/Logotype';
import Friends from './Friends/Friends';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

import M from 'materialize-css';

const Aside = (props) => {


  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  });

  return (
    <aside className="aside">

      <ul id="slide-out" className="sidenav sidenav-fixed menu">
        <li className="menu__logotype">
          <Logotype />
        </li>
        <li className="menu__item"><NavLink to="/profile" className="waves-effect waves-teal">Profile</NavLink></li>
        <li className="menu__item"><NavLink to="/messages" className="waves-effect waves-teal">Messages</NavLink></li>
        <li className="menu__item"><NavLink to="/news" className="waves-effect waves-teal">News</NavLink></li>
        <li className="menu__item"><NavLink to="/music" className="waves-effect waves-teal">Music</NavLink></li>
        <li className="menu__item"><NavLink to="/settings" className="waves-effect waves-teal">Settings</NavLink></li>
        <li className="menu__item">
          <Friends state={props.state} />
        </li>
      </ul>

    </aside>

  )
}

export default Aside;