import React, { useContext } from 'react';
import styled from 'styled-components';
import MessageContext from '../state/MessageContext';

const MessageStyles = styled.li`
	list-style: none;
	h5 {
		cursor: pointer;
		width: 30%;
		font-weight: lighter;
	}
`;
const Message = props => {
	const { toggleCurrentMessage } = useContext(MessageContext);
	return (
		<MessageStyles>
			<h3>{props.text}</h3>
			<h5 onClick={() => toggleCurrentMessage(props.messageId)}>{props.messageId}</h5>
		</MessageStyles>
	);
};

export default Message;
