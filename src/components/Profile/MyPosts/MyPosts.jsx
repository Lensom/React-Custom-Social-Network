import React from "react";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";
import "./MyPosts.css";

const MyPosts = (props) => {
  let postItem = props.posts.map(({ id, msg, likesCount }) => (
    <Post id={id} message={msg} likesCount={likesCount} key={id} />
  ));

  return (
    <div className="user__tape">
      <NewPost state={props} />
      <div className="user__posts">{postItem}</div>
    </div>
  );
};

export default MyPosts;
