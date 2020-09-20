import React, { useEffect } from "react";
import "./NewPost.css";
import SendIcon from "@material-ui/icons/Send";
import M from "materialize-css";

const NewPost = ({ state }) => {
  const newPostElement = React.createRef();

  useEffect(() => {
    M.textareaAutoResize(newPostElement);
  });

  const addPost = () => {
    state.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    state.updateNewPostText(text);
  };

  return (
    <div className="user__new-post">
      {/* <form onSubmit={submitPrevent}> */}
      <div className="input-field col s12">
        <textarea
          ref={newPostElement}
          value={state.newPostText}
          onChange={onPostChange}
          id="textarea1"
          className="materialize-textarea"
        />
        <label htmlFor="textarea1">Textarea</label>
      </div>
      <button
        onClick={addPost}
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Submit
        <SendIcon />
      </button>
      {/* </form> */}
    </div>
  );
};

export default NewPost;
