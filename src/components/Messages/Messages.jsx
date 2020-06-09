import React from 'react';
import './Messages.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'


const Messages = (props) => {


  let dialogsElements = props.state.dialogs.map(e => <DialogItem id={e.id} name={e.name} />)
  let messagesElements = props.state.messages.map(e => <MessageItem id={e.id} message={e.msg} />)

  return (
    <div className="messages">
      <ul className="dialogs">
        {dialogsElements}
      </ul>
      <div className="message">
        {messagesElements}
      </div>
    </div>
  )
}

export default Messages;