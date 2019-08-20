import React, { useContext } from 'react';
import Message from './Message';
import MessageContext from '../state/MessageContext';
const MessageList = ({ messages }) => {
	const { currentMessage } = useContext(MessageContext);
	return (
		<div>
			<ul>
				{messages.map(message => {
					return (
						<Message
							key={message.reply_to || message.sent_at}
							text={message.message}
							messageId={message.reply_to}
						/>
					);
				})}
			</ul>
		</div>
	);
};

// axios.get(`${API_ROOT}/api/v1/sessions/1/replies`).then(res => console.log(res));
export default MessageList;
