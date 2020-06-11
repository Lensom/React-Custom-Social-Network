import React from 'react';
import Post from './Post/Post';
import './MyPosts.css';

import SendIcon from '@material-ui/icons/Send';

import M from 'materialize-css';

const MyPosts = (props) => {


  document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('textarea1');
    M.textareaAutoResize(textarea);
  });

  let postItem = props.posts.map(e => <Post id={e.id} message={e.msg} like={e.like} />)

  return (
    <div className="user__tape">
      <div className="user__new-post">
        <form action="/">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Textarea</label>
          </div>
          <button onClick={() => alert('sd')} class="btn waves-effect waves-light" type="submit" name="action">Submit
           <SendIcon />
          </button>
        </form>
      </div>

      <div className="user__posts">
        {postItem}
      </div>
    </div>
  )
}

export default MyPosts;