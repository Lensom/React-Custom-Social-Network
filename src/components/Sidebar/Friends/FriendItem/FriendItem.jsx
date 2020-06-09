import React from 'react';
import './FriendItem.css';

const FriendItem = (props) => {
  return (
    <li className="friends__item">
      <a href={props.link} id={props.id} className="friend__link">
        <div className="friend__photo">
          <img src={props.img} alt="" />
        </div>
        <div className="friend__name">
          {props.name}
        </div>
      </a>
    </li>
  )
}

export default FriendItem;