import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import './Friends.css';

const Friends = (props) => {

  let friendItems = props.state.friends.map(e => <FriendItem id={e.id} img={e.img} name={e.name} link={e.link} />)

  return (
    <ul className="friends">
      <li className="friends__title friends__item">Top friends:</li>
      {friendItems}
    </ul>
  )
}

export default Friends;