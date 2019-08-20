import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import axios from 'axios';
import { API_ROOT } from '../config';

const SessionMain = props => {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		axios.get(`${API_ROOT}/sessions/1/replies`).then(res => {
			console.log(res.data);
			if (res.data) {
				setMessages([...res.data]);
			}
		});
	}, []);
	return (
		<div>
			<MessageList messages={messages} />
			<MessageForm messages={messages} />
		</div>
	);
};

export default SessionMain;
