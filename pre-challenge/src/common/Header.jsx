import styled from "styled-components";

const Header = () => {
	return (
		<Wrapper>
			<TitleBox>Wandted Pre-onboarding course</TitleBox>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	background-color: green;
`;
const TitleBox = styled.h1`
	margin: 0;
	margin-left: 1.25rem;
	padding: 0;
	font-weight: #000;
	font-size: 1.5rem;
	line-height: 3;
	color: #fff;
`;

export default Header;
