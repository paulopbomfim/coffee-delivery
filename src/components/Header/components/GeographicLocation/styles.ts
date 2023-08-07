import styled from "styled-components";


export const GeographicLocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${props => props.theme["brand-secondary-light"]};
  color: ${props => props.theme["brand-secondary"]};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;

  span {
    color: ${props => props.theme["brand-secondary-dark"]};
  }
`;

