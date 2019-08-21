import React from 'react';
import Message from './Message';
import styled from 'styled-components';

const StyledList = styled.ul`
	margin-top: 0;
	height: 600px;
	overflow-y: auto;
	background-color: ${props => props.theme.burgundy};
	color: ${props => props.theme.snow};
	box-shadow: ${props => props.theme.bs};
`;
const MessageList = ({ messages }) => {
	return (
		<StyledList>
			{messages.map(message => {
				return (
					<Message
						key={message.reply_to || message.sent_at}
						text={message.message}
						messageId={message.reply_to}
					/>
				);
			})}
		</StyledList>
	);
};

// axios.get(`${API_ROOT}/api/v1/sessions/1/replies`).then(res => console.log(res));
export default MessageList;
