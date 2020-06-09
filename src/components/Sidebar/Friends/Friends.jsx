import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import './Friends.css';

const Friends = (props) => {

  let friendItems = props.state.friends.map(e => <FriendItem id={e.id} img={e.img} name={e.name} link={e.link} />)

  return (
    <ul className="friends">
      {friendItems}
    </ul>
  )
}

export default Friends;