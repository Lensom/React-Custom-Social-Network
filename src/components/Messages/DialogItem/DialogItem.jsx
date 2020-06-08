import React from 'react';
import './../Messages.css';

import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  let path = `/messages/${props.id}`;
  return (
    <li className="dialogs__item"><NavLink to={path}>{props.name}</NavLink></li>
  )
}

export default DialogItem;