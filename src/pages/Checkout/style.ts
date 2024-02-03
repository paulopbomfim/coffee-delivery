import styled from "styled-components";

export const CheckoutMain = styled.main`
  	display: flex;
  	align-items: flex-start;
  	justify-content: space-between;
  	padding: 0 1rem;
	margin-top: 2.5rem;
	gap: 2rem;
`;

export const FormContainer = styled.form``;

export const PaymentMethodContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	background-color: ${({theme}) => theme["background-card"]};
	padding: 2.5rem;
	margin-top: 0.75rem;
`;

export const RadiosInput = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 0.75rem;
`;

export const PaymentMethodRadio = styled.label`
	display: flex;
	gap: 0.75rem;
	align-items: center;
	justify-content: flex-start;
	padding: 1rem;
	max-width: 250px;
	width: 100%;
	background-color: ${({theme}) => theme["base-button"]};
	line-height: 1;
	text-transform: uppercase;
	border-radius: 6px;
	transition: all 0.2s ease-in-out;
	border: 2px solid ${({theme}) => theme["base-button"]};
	cursor: pointer;
	
	&:hover {
        background-color: ${({theme}) => theme["base-button-hover"]};
        border: 2px solid ${({theme}) => theme["base-button-hover"]};
		color: ${({theme}) => theme["title"]};
		font-weight: 700;
	}
	
	&:has(input:checked) {
        background-color: ${({theme}) => theme["brand-secondary-light"]};
        border: 2px solid ${({theme}) => theme["brand-secondary"]};
		color: ${({theme}) => theme["brand-secondary-dark"]};
		font-weight: 700;
	}
	
	& input {
		display: none;
	}
`;

export const RadioInputInfoContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	
	& div {
		display: flex;
		flex-direction: column;
		line-height: 1.3;
	}
`;

export const CurrencyDollarIcon = styled.div`
	color: ${({theme}) => theme["brand-secondary"]};
`;

export const RadioIcon = styled.div`
	color: ${({theme}) => theme["brand-secondary"]};
`;

export const TextInputsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 1rem;
	padding: 2.5rem;
	background-color: ${({theme}) => theme["background-card"]};
	border-radius: 6px;
`;

export const TextInputsInfoContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: flex-start;
	
	
	& div {
		display: flex;
		flex-direction: column;
	}
	
	& strong {
		font-size: 1rem;
		line-height: 1.3;
	}
`;

export const MapPinIcon = styled.div`
	color: ${({ theme }) => theme["brand-primary-dark"]};
`;