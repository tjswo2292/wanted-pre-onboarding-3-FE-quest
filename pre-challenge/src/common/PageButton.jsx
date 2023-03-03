import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageButton = ({ name, pathUrl }) => {
	const navigate = useNavigate();

	const movePage = (pathUrl) => {
		navigate(`${pathUrl}`);
	};

	return <Button onClick={() => movePage(pathUrl)}>{name}</Button>;
};

const Button = styled.button`
	margin-bottom: 20px;
	font-size: 1.5rem;
	cursor: pointer;

	&:last-child {
		margin-bottom: 0;
	}
`;

export default PageButton;
