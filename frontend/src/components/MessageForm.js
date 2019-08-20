import React, { useState } from 'react';
import axios from 'axios';
import { API_ROOT, HEADERS } from '../config';
const MessageForm = props => {
	const [text, setText] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		axios
			.post(`${API_ROOT}/sessions/1/messages`, {
				headers: {
					HEADERS,
				},
				params: {
					session_id: 1,
				},
				message: { text },
			})
			.then(res => {
				console.log(res);
				setText('');
			})
			.catch(error => alert(error));
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
