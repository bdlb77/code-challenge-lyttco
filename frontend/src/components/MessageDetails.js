import React, { useContext, useEffect, useState } from 'react';
import MessageContext from '../state/MessageContext';
import axios from 'axios';
import { API_ROOT } from '../config';
const MessageDetails = () => {
	const { currentMessage } = useContext(MessageContext);
	const [messageDetails, setMessageDetails] = useState({});
	useEffect(() => {
		axios.get(`${API_ROOT}/sessions/1/messages/${currentMessage || localStorage.getItem('id')}`).then(res => {
			const { identifier, detected_language, time_stamp } = { ...res.data.message };
			setMessageDetails({ identifier, time_stamp, detected_language });
			localStorage.setItem('id', currentMessage);
		});
	}, [currentMessage]);
	const { identifier, detected_language, time_stamp } = messageDetails;
	return (
		<div>
			<h1>ID! {identifier}</h1>
			<h4>Language! {detected_language}</h4>
			<p>Time! {time_stamp}</p>
		</div>
	);
};

export default MessageDetails;
