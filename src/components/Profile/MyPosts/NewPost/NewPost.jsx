import React from 'react';
import './NewPost.css';
import SendIcon from '@material-ui/icons/Send';
import M from 'materialize-css';


const NewPost = (props) => {
  console.log(props)
  const newPostElement = React.createRef();

  document.addEventListener('DOMContentLoaded', function () {
    M.textareaAutoResize(newPostElement);
  });
  const addPost = () => {
    props.state.addPost();
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.state.updateNewPostText(text)
  }

  return (
    <div className="user__new-post">
      {/* <form onSubmit={submitPrevent}> */}
      <div className="input-field col s12">
        <textarea
          ref={newPostElement}
          value={props.state.newPostText}
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
  )
}

export default NewPost;