import React from 'react';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import './MyPosts.css';


const MyPosts = (props) => {

  let postItem = props.posts.map(e => <Post id={e.id} message={e.msg} likesCount={e.likesCount} />);

  return (
    <div className="user__tape">
      <NewPost state={props} />
      <div className="user__posts">
        {postItem}
      </div>
    </div >
  )
}

export default MyPosts;