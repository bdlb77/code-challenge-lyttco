import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SessionMain from './SessionMain';
import MessageDetails from './MessageDetails';
import { MessageProvider } from '../state/MessageContext';

const RoomStyles = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	grid-column-gap: 20px;
`;
const SessionRoom = props => {
	const [currentMessage, setCurrentMessage] = useState(null);

	useEffect(() => {
		setCurrentMessage(localStorage.getItem('id'));
	}, []);

	const toggleCurrentMessage = id => {
		setCurrentMessage(id);
	};

	return (
		<MessageProvider value={{ currentMessage, toggleCurrentMessage }}>
			<RoomStyles>
				<SessionMain />
				<MessageDetails isJoinedChat={props.isJoinedChat} />
			</RoomStyles>
		</MessageProvider>
	);
};

export default SessionRoom;
