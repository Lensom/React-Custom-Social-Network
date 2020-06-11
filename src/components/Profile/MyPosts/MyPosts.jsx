import React from 'react';
import Post from './Post/Post';
import './MyPosts.css';

import SendIcon from '@material-ui/icons/Send';

import M from 'materialize-css';

const MyPosts = (props) => {

  const newPostElement = React.createRef();

  console.log(newPostElement);

  document.addEventListener('DOMContentLoaded', function () {
    M.textareaAutoResize(newPostElement);
  });

  let postItem = props.posts.map(e => <Post id={e.id} message={e.msg} likesCount={e.likesCount} />);

  const addPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className="user__tape">
      <div className="user__new-post">
        {/* <form onSubmit={submitPrevent}> */}
        <div className="input-field col s12">
          <textarea
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
            id="textarea1"
            className="materialize-textarea"
          />
          <label for="textarea1">Textarea</label>
        </div>
        <button onClick={addPost} className="btn waves-effect waves-light" type="submit" name="action">Submit
           <SendIcon />
        </button>
        {/* </form> */}
      </div>

      <div className="user__posts">
        {postItem}
      </div>
    </div >
  )
}

export default MyPosts;