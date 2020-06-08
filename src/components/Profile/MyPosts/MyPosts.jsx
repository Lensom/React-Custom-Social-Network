import React from 'react';
import Post from './Post/Post';
import './MyPosts.css';

const MyPosts = (props) => {

  let postItem = props.posts.map(e => <Post id={e.id} message={e.msg} like={e.like} />)

  return (
    <div className="user__tape">
      <div className="user__new-post">
        <form action="/">
          <textarea name="textarea" id="textarea" cols="30" rows="10" defaultValue="New Post"></textarea>
          <button type="submit">Post</button>
        </form>
      </div>

      <div className="user__posts">
        {postItem}
      </div>
    </div>
  )
}

export default MyPosts;