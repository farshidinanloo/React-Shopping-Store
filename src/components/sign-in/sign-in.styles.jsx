import styled from 'styled-components';

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
    flex-direction: column;
    margin: auto
	

	@media screen and (max-width: 1200px) {
        margin-bottom: 100px;
        width: 80%;
	}
`;

export const SignInTitle = styled.h2`
	margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
