import React, { useContext } from 'react';
import MessageContext from '../state/MessageContext';
const Message = props => {
	const { currentMessage, toggleCurrentMessage } = useContext(MessageContext);
	return (
		<li>
			<h3>{props.text}</h3>
			<div onClick={() => toggleCurrentMessage(props.messageId)}>{props.messageId}</div>
		</li>
	);
};

export default Message;
