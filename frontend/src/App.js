import React from 'react';
import './App.css';
import Header from './components/Header';
import SessionRoom from './components/SessionRoom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
	gunmetal: '#292F36',
	burgundy: '#732427',
	grey: '#747572',
	snow: '#E0E0E0',
	lgBreak: '1300px',
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
	return (
		<ThemeProvider theme={theme}>
			<StyledApp>
				<Header />
				<Inner>
					<SessionRoom />
				</Inner>
			</StyledApp>
		</ThemeProvider>
	);
};

export default App;
