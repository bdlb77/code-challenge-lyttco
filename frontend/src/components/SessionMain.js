import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import axios from 'axios';
import { API_ROOT } from '../config';

const SessionMain = props => {
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		const sessionId = localStorage.sessionId;
		if (sessionId) {
			fetchReplies();
		}
	}, []);
	const fetchReplies = () => {
		axios
			.get(`${API_ROOT}/sessions/${localStorage.sessionId}/replies`, {
				credentials: 'include',
			})
			.then(res => {
				console.log(res.data);
				if (res.data) {
					setMessages([...res.data]);
				}
			});
	};
	return (
		<div>
			<MessageList messages={messages} />
			<MessageForm fetchReplies={fetchReplies} />
		</div>
	);
};

export default SessionMain;
