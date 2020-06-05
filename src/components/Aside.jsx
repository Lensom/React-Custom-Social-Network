import React from 'react';

function Aside() {
  return (
    <aside className="aside">
      <ul className="menu">
        <li className="menu__itema"><a href="/">Profile</a></li>
        <li className="menu__itema"><a href="/">Messages</a></li>
        <li className="menu__itema"><a href="/">News</a></li>
        <li className="menu__itema"><a href="/">Music</a></li>
        <li className="menu__itema"><a href="/">Settings</a></li>
      </ul>
    </aside>
  )
}

export default Aside;