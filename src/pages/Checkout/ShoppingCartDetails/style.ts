import styled, {DefaultTheme} from "styled-components";

export const CartDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	background-color: ${({theme}) => theme["background-card"]};
	margin-top: 1rem;
	padding: 2.5rem;
	border-radius: 6px 44px 6px 44px;
`;

export const ItemsList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	gap: 1.5rem;
	max-height: 420px;
	min-width: 348px;
	overflow-x: hidden;
	overflow-y: auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme["text"]};
        border-radius: 20px;
		width: 5px;
    }
`;

export const Item = styled.li`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 3rem;
	padding: 0 0.5rem 1.5rem 0.5rem;
    border-bottom: 1px solid ${({theme}) => theme["base-button"]};
`;

export const ItemInfoSection = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1.25rem;
	
	
	
	& img {
		max-width: 64px;
		max-height: 64px;
	}
	
`;

export const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.5rem;
	
	& span {
		font-size: 1rem;
		line-height: 1.3;
        color: ${({theme}) => theme["subtitle"]}
	}
	
	& button {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.5rem;
		text-transform: uppercase;
		border: none;
		background-color: ${({theme}) => theme["base-button"]};
		border-radius: 6px;
		transition: background-color 0.2s ease-in-out;
		cursor: pointer;
		
		& span {
			color: ${({theme}) => theme["text"]};
			line-height: 0;
			font-size: 0.75rem;
			
		}
		
		&:hover {
			background-color: ${({theme}) => theme["base-button-hover"]};
		}
		
		& i {
            color: ${({theme}) => theme["brand-secondary"]};
			line-height: 0;
		}	
	}	
`;

export const TotalSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	
	& div {
		display: flex;
		justify-content: space-between;
		
		& span {
			font-size: 0.875rem;
		}
		
		& strong {
			font-size: 1.25rem;
		}
	}
`;

interface ShippingProps{
	theme: DefaultTheme
	freeShipping?: boolean
}
export const Shipping = styled.span.attrs<{ freeShipping: boolean }>
(( { freeShipping }) => ({
	freeShipping,
}))`
	color: ${({theme, freeShipping}: ShippingProps) => freeShipping && theme["success"]}
`;

export const SubmitButton = styled.button`
	padding: 0.75rem 0;
	background-color: ${({theme}) => theme["brand-primary"]};
	border: none;
	border-radius: 6px;
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;
	font-size: 0.875rem;
	line-height: 1;
	text-transform: uppercase;
	color: ${({theme}) => theme["white"]};
	
	&:hover {
		background-color: ${({theme}) => theme["brand-primary-dark"]};
		
	}
`;