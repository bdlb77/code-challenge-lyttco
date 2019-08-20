import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyles = styled.header``;
const Logo = styled.h1`
	font-size: 4rem;
	margin-left: 2rem;
	position: relative;
	z-index: 2;
	transform: skew(-7deg);
	a {
		padding: 0.5rem 1rem;
		background: ${props => props.theme.burgundy};
		color: ${props => props.theme.snow};
		text-transform: none;
		text-decoration: none;
	}
`;
const Header = props => {
	return (
		<HeaderStyles>
			<Logo>
				<a>Logo</a>
			</Logo>
		</HeaderStyles>
	);
};

export default Header;
