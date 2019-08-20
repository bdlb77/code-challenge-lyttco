import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { API_ROOT } from './config';
import './App.css';
import Header from './components/Header';
import SessionRoom from './components/SessionRoom';
import JoinChat from './components/JoinChat';

const theme = {
	gunmetal: '#292F36',
	burgundy: '#732427',
	grey: '#747572',
	snow: '#E0E0E0',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
	lgBreak: '1300px',
};

createGlobalStyle` 
  html{
    box-sizing: border-box;
    font-size: 8px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 2;
  }
  a{
    text-decoration: none;
    color: ${theme.burgundy};
  }
`;
const StyledApp = styled.main`
	color: ${props => props.theme.gunmetal};
	background: ${props => props.theme.snow};
`;

const Inner = styled.div`
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem;
	min-height: 80vh;
`;
const App = () => {
	const [isJoinedChat, setIsJoinedChat] = useState(null);

	useEffect(() => {
		localStorage.chatJoined ? setIsJoinedChat(localStorage.chatJoined) : setIsJoinedChat(false);
	}, []);

	// if isJoinedChat changed.. reset state
	useEffect(() => {
		localStorage.setItem('chatJoined', isJoinedChat);
	}, [isJoinedChat]);

	const toggleChat = () => {
		const sessionId = localStorage.sessionId;
		if (!sessionId) {
			fetchSession();
		}
		setIsJoinedChat(!isJoinedChat);
	};

	const fetchSession = async () => {
		try {
			const res = await axios.post(`${API_ROOT}/sessions`);
			console.log(res);
			localStorage.setItem('sessionId', res.data.session.id);
		} catch (error) {
			alert(error);
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<StyledApp>
				<Header />
				<Inner>
					{isJoinedChat && <SessionRoom />}
					{!isJoinedChat && <JoinChat toggleChat={toggleChat} />}
				</Inner>
			</StyledApp>
		</ThemeProvider>
	);
};

export default App;
