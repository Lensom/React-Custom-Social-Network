import React, { useEffect } from "react";
import "./Messages.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import M from "materialize-css";

import SendIcon from "@material-ui/icons/Send";

const Messages = ({ state }) => {
  const { dialogs, messages } = state;

  const newPostElement = React.createRef();

  let dialogsElements = dialogs.map(({ id, name, img }) => (
    <DialogItem id={id} name={name} img={img} key={id} />
  ));
  let messagesElements = messages.map(({ id, msg }) => (
    <MessageItem id={id} message={msg} key={id} />
  ));

  useEffect(() => {
    M.textareaAutoResize(newPostElement);
  });

  const addMessage = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <div className="messages">
        <ul className="dialogs collection">{dialogsElements}</ul>
        <div className="message">{messagesElements}</div>
      </div>
      <div className="message__textarea">
        <div className="input-field col s12">
          <textarea
            ref={newPostElement}
            id="textarea1"
            className="materialize-textarea"
          ></textarea>
          <label htmlFor="textarea1">Textarea</label>
          <button
            onClick={addMessage}
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
