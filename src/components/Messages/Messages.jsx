import React from 'react';
import './Messages.css';

import { NavLink } from 'react-router-dom';

const Messages = () => {
  return (
    <div className="messages">
      <ul className="dialogs">
        <li className="dialogs__item"><NavLink to="/messages/1">Alexey</NavLink></li>
        <li className="dialogs__item"><NavLink to="/messages/2">Nastya</NavLink></li>
        <li className="dialogs__item"><NavLink to="/messages/3">Vadim</NavLink></li>
        <li className="dialogs__item"><NavLink to="/messages/4">Alcoholic</NavLink></li>
      </ul>
      <div className="message">
        <div className="message__item">
          Hi, it's u?
        </div>
        <div className="message__item">
          Hi, it's u?
        </div>
        <div className="message__item">
          Hi, it's u? s
        </div>
      </div>
    </div>
  )
}

export default Messages;