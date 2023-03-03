import styled from "styled-components";
import PageButton from "./PageButton";

const SideBar = () => {
	return (
		<Wrapper>
			<PageContainer>
				<PageButton name="Page A" pathUrl="/" />
				<PageButton name="Page B" pathUrl="/second" />
				<PageButton name="Page C" pathUrl="/third" />
			</PageContainer>
		</Wrapper>
	);
};

const Wrapper = styled.aside`
	height: 100vh;
	background-color: green;
`;
const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.9375rem 0.9375rem 0 0.9375rem;
`;

export default SideBar;
