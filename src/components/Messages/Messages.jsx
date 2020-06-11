import React from 'react';
import './Messages.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'
import M from 'materialize-css';

import SendIcon from '@material-ui/icons/Send';

const Messages = (props) => {

  const newPostElement = React.createRef();

  let dialogsElements = props.state.dialogs.map(e => <DialogItem id={e.id} name={e.name} />)
  let messagesElements = props.state.messages.map(e => <MessageItem id={e.id} message={e.msg} />)


  document.addEventListener('DOMContentLoaded', function () {
    M.textareaAutoResize(newPostElement);
  });

  const addMessage = () => {
    let text = newPostElement.current.value;
    alert(text)
  }


  return (
    <div>
      <div className="messages">
        <ul className="dialogs">
          {dialogsElements}
        </ul>
        <div className="message">
          {messagesElements}
        </div>
      </div>
      <div className="message__textarea">
        <div class="input-field col s12">
          <textarea ref={newPostElement} id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
          <button onClick={addMessage} class="btn waves-effect waves-light" type="submit" name="action">Submit
           <SendIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Messages;