import React from "react";
import "./Post.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className="user__post">
      <div className="message">{message}</div>
      <div className="like">{likesCount}</div>
    </div>
  );
};

export default Post;
