import React from "react";
import FriendItem from "./FriendItem/FriendItem";
import "./Friends.css";

const Friends = ({ state }) => {
  const friendItems = state.friends.map(({ id, img, name, link }) => (
    <FriendItem id={id} img={img} name={name} link={link} key={id} />
  ));

  return (
    <ul className="friends">
      <li className="friends__title friends__item">Top friends:</li>
      {friendItems}
    </ul>
  );
};

export default Friends;
