import React from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="nav-wrapper">
          <a href="#" data-target="slide-out" className="sidenav-trigger"><MenuIcon fontSize="large">Menu</MenuIcon></a>
        </div>
      </nav>
    </header>
  )
}

export default Header;