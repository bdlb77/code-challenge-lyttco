import React, { useState } from 'react';
import axios from 'axios';
import { API_ROOT, HEADERS } from '../config';
const MessageForm = props => {
	const [text, setText] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		const sessionId = localStorage.sessionId;

		axios
			.post(`${API_ROOT}/sessions/${sessionId}/messages`, {
				credentials: 'include',
				headers: {
					HEADERS,
				},
				params: {
					session_id: sessionId,
				},
				text,
			})
			.then(res => {
				console.log(res);
				setText('');
				props.fetchReplies();
			})
			.catch(({ response }) => alert(response.data.errors));
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="Message">
				<input type="text" value={text} onChange={e => setText(e.target.value)} />
			</label>
			<input type="submit" value="Send Message" />
		</form>
	);
};

export default MessageForm;
