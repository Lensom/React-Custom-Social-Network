import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className="user__post">
      <div className="message">
        {props.message}
      </div>
      <div className="like">{props.like}</div>
    </div>
  )
}

export default Post;