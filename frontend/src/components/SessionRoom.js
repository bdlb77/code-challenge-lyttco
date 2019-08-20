import React, { useState } from 'react';
import styled from 'styled-components';
import SessionMain from './SessionMain';
import MessageDetails from './MessageDetails';
import { MessageProvider } from '../state/MessageContext';

const RoomStyles = styled.div`
	display: grid;
	grid-template-columns: minmax(300px, 1fr) 1fr;
	grid-column-gap: 20px;
`;
const SessionRoom = props => {
	const [currentMessage, setCurrentMessage] = useState(null);

	const toggleCurrentMessage = id => {
		setCurrentMessage(id);
	};

	return (
		<MessageProvider value={{ currentMessage, toggleCurrentMessage }}>
			<RoomStyles>
				<SessionMain />
				<MessageDetails />
			</RoomStyles>
		</MessageProvider>
	);
};

export default SessionRoom;
