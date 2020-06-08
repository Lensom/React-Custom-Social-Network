import React from 'react';
import './Messages.css';
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'


const Messages = () => {

  let dialogs = [
    { id: '1', name: 'Alexey' },
    { id: '2', name: 'Nastya' },
    { id: '3', name: 'Vadim' },
    { id: '4', name: 'Alcoholic' }
  ]

  let dialogsElements = dialogs.map(e => <DialogItem id={e.id} name={e.name} />)

  let messages = [
    { id: '1', msg: "Hi it's u?" },
    { id: '2', msg: "Hello it's u?" },
    { id: '3', msg: "Bye it's u?" }
  ]

  let messagesElements = messages.map(e => <MessageItem id={e.id} message={e.msg} />)

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