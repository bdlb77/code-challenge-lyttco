import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_ROOT, HEADERS } from '../config';

const Form = styled.form`
	height: 40%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	input[type='submit'] {
		background-color: ${props => props.theme.burgundy};
		color: ${props => props.theme.snow};
		padding: 10px 30px;
		font-size: 1.5rem;
	}
	label input {
		max-height: 40px;
		max-width: 300px;
		background: transparent;
		border: 2px solid ${props => props.theme.burgundy};
		font-size: 24px;
	}
`;
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
		<Form onSubmit={handleSubmit}>
			<label htmlFor="Message">
				<input type="text" value={text} onChange={e => setText(e.target.value)} />
			</label>
			<input type="submit" value="Send Message" />
		</Form>
	);
};

export default MessageForm;
