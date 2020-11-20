import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
	margin-top: 16px;
	background: #ff9000;
	color: #312e38;
	height: 56px;
	border-radius: 10px;
	border: 0;
	padding: 0 16px;
	width: 100%;
	font-weight: 500;
	transition: background-color 0.2s;

	&:hover {
		background: ${shade(0.2, '#FF9000')};
	}
`;
