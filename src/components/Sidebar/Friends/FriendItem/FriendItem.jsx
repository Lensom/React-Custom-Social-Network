import React from "react";
import "./FriendItem.css";

const FriendItem = (props) => {
  const { link, id, img, name } = props;
  return (
    <li className="friends__item">
      <a href={link} id={id} className="friend__link">
        <div className="friend__photo">
          <img src={img} alt="" />
        </div>
        <div className="friend__name">{name}</div>
      </a>
    </li>
  );
};

export default FriendItem;
