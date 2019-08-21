import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
	background-color: ${props => props.theme.gunmetal};
`;
const Logo = styled.h1`
	margin: 0;
	padding-top: 2rem;
	font-size: 4rem;
	padding-left: 2rem;
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
				<a href="/">Logo</a>
			</Logo>
		</HeaderStyles>
	);
};

export default Header;
