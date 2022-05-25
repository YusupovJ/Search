import styled from "styled-components";

export const Search = styled.div`
	border-bottom: 2px solid #fff;
	margin: 0px 0px 20px 0px;
	padding: 10px 0px 20px 0px;
	color: white;
	h1 {
		letter-spacing: 5px;
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
		text-transform: uppercase;
		font-size: 30px;
	}
	.search__input {
		color: inherit;
		margin: 10px 0px 0px 0px;
		border: 1px solid white;
		width: 100%;
		padding: 10px 15px;
		background-color: transparent;
		font-size: 20px;
	}
`;
export const Main = styled.main`
	text-align: center;
	.card__name {
		margin: 0px 0px 20px 0px;
		text-align: center;
		color: white;
		font-size: 40px;
		font-family: monospace;
		span {
			margin: 0px 5px 0px 0px;
			color: #d3cdcd;
		}
	}
	.content__defined {
		text-align: center;
		color: white;
		font-size: 40px;
		font-family: monospace;
	}
	.loading {
		width: 200px;
		height: 200px;
		margin: 60px 0px 0px 0px;
	}
`;
