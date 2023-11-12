import { styled } from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 256px;
  align-items: center;
  padding: 20px 24px;
  justify-content: space-between;
  background-color: ${props => props.theme["background-card"]};
  border-radius: 6px 36px 6px 36px;
  position: relative;
  
  img {
  	position: absolute;
	top: -30px;
  }
`;

export const CategoriesSection = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 8px;
  margin-top: 66px;
`;

export const CategoriesTag = styled.span`
  padding: 4px 8px;
  border-radius: 50px;
  background-color: ${props => props.theme["brand-primary-light"]};
  color: ${props => props.theme["brand-primary-dark"]};
  font-weight: bold;
  text-transform: uppercase;
  line-height: 0.9;
  font-size: 0.7rem;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin: 20px 0 33px;
`;

export const ShoppingContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Currency = styled.span`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  
  strong {
    font-size: 24px;
    font-family: "Baloo 2", sans-serif;
  }
`;

export const CartContainer = styled.div`
	display: flex;
	gap: 8px;
  	align-items: center;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  button {
	border: none;
	background-color: ${(props) => props.theme["base-button"]};
	padding: 8px;
	line-height: 0;
	cursor: pointer;
	color: ${(props) => props.theme["brand-secondary"]}
  }
  
  button:first-of-type{
	border-radius: 6px 0 0 6px;
  }
  
  button:last-of-type{
	border-radius: 0 6px 6px 0;
  }
  
  span {
	line-height: 1;
	padding: 8px 0;
	margin: 0;
	gap: 0;
	background-color: ${(props) => props.theme["base-button"]};
  }
`;

export const ShoppingCartButtonContainer = styled.div`
	line-height: 0;
  	padding: 6px;
  	border-radius: 6px;
  	background-color: ${(props) => props.theme["brand-secondary-dark"]};
  	color: ${(props) => {
		return props.theme["background-card"];
	}};
  	cursor: pointer;
  	transition: background-color 0.2s ease-in-out;
  &:hover {
	background-color: ${(props) => props.theme["brand-secondary"]};
  }
`;