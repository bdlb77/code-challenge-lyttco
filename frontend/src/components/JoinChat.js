import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: ${props => props.theme.burgundy};
	color: ${props => props.theme.snow};
	padding: 10px 30px;
	font-size: 1.5rem;
`;
const JoinChat = props => {
	return <Button onClick={() => props.toggleChat()}>Join Chat Today</Button>;
};

export default JoinChat;
