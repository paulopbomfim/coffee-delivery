import styled from "styled-components";

export const AddressContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 0.75rem;
  
	label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
	 	& span {
			transform: translate(0.5rem, 1.8rem);
			transition: transform 0.2s ease-in-out;
	  	}
		&:has(input:focus), &:has(input:valid) {
	  		span {
				transform: translate(0.5rem, 0);
	  		}
		}
	}
  
	input {
	  background-color: ${prop => prop.theme["base-button"]};
	  border: none;
	  color: ${prop => prop.theme["text"]};
	  width: 100%;
	  padding: 0.3rem 0.5rem;
	  font-size: 1.3rem;
	  border-radius: 0.3rem;
	}
`;

export const ZipCodeLabel = styled.label`
	grid-column: 1 / 2;
  	grid-row: 1 / 2;
`;

export const StreetLabel = styled.label`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`;

export const NumberLabel = styled.label`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  
  
  
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export const ComplementLabel = styled.label`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
		
  & div {
    display: flex;
    align-items: center;
	
  	& span:last-child {
      font-size: 0.8rem;
      color: ${prop => prop.theme["text"]};
	  padding: 0.8rem 0.5rem;
      font-weight: 400;
      margin-top: 0.3rem;
	  line-height: 0.8;
	}
  }
`;

export const NeighborhoodLabel = styled.label`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
`;
export const CityLabel = styled.label`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`;

export const StateLabel = styled.label`
  grid-column: 3 / 4;
  grid-row: 4 / 5;
`;