import React from 'react';
import './../Messages.css';

import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = `/messages/${props.id}`;
  return (
    <li className="collection-item avatar">
      <NavLink to={path} >
        <img src={props.img} alt="" className="circle" />
        <span className="title">{props.name}</span>
        <p>First Line Second Line</p>
      </NavLink>
    </li>
  )
}

export default DialogItem;
