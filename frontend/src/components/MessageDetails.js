import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MessageContext from '../state/MessageContext';
import { API_ROOT } from '../config';

const MessageDetailStyles = styled.div`
	background-color: ${props => props.theme.gunmetal};
	color: ${props => props.theme.snow};
	padding-left: 1rem;
`;
const MessageDetails = props => {
	const { currentMessage } = useContext(MessageContext);
	const [messageDetails, setMessageDetails] = useState({});
	useEffect(() => {
		const sessionId = localStorage.sessionId;
		if (currentMessage) {
			fetchMessage(sessionId);
		}
	}, [currentMessage]);

	const fetchMessage = sessionId => {
		axios
			.get(`${API_ROOT}/sessions/${sessionId}/messages/${currentMessage || localStorage.getItem('id')}`)
			.then(res => {
				const { identifier, detected_language, time_stamp } = { ...res.data.message };
				setMessageDetails({ identifier, time_stamp, detected_language });
				localStorage.setItem('id', currentMessage);
			})
			.catch(error => alert(error));
	};

	const { identifier, detected_language, time_stamp } = messageDetails;
	return (
		<MessageDetailStyles>
			<h1>Replied Message Identifier:</h1>
			<h1>{identifier}</h1>
			<h4>Detected language: </h4>
			<h4>{detected_language}</h4>
			<p>Time Stamp: </p>
			<p>{time_stamp}</p>
		</MessageDetailStyles>
	);
};

export default MessageDetails;
