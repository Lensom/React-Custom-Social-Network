import React from 'react';
import './../Messages.css';

const MessageItem = (props) => {
  return (
    <div className="message__item">
      {props.message}
    </div>
  )
}

export default MessageItem;