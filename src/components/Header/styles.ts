import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  a {
    line-height: 0;
    &:focus {
      box-shadow: none;
    }
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  a {
    line-height: 0;
    background: ${props => props.theme["brand-primary-light"]};
    color: ${props => props.theme["brand-primary-dark"]};
    padding: 0.5rem;
    border-radius: 6px;
    position: relative;
    transition: color 0.2s, background 0.2s;

    &:hover {
      background: ${props => props.theme["brand-primary-dark"]};
      color: ${props => props.theme["white"]};
    }

    span {
      position: absolute;
      font-size: 0.75rem;
      line-height: 130%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1.2rem;
      width: 1.2rem;
      top: -0.6rem;
      right: -0.6rem;
      padding: 0.25rem;
      background: ${props => props.theme["brand-primary-dark"]};
      color: ${props => props.theme["white"]};
      border-radius: 50%;

      transition: color 0.2s, background 0.2s;

    }

    &:hover span {
      background: ${props => props.theme["brand-primary-light"]};
      color: ${props => props.theme["brand-primary-dark"]};
    }

  }

  button {
    line-height: 0;
    background: transparent;
    border: 2px solid ${props => props.theme["brand-primary-dark"]};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    box-sizing: unset;
    color: ${props => props.theme["brand-primary-dark"]};
    transition: all 0.2s;
    
    &:focus {
      box-shadow: none;
      outline: none;
    }

    &:hover {
      background: ${props => props.theme["brand-primary-dark"]};
      border: 2px solid transparent;
      color: ${props => props.theme["white"]};
    }

  }
  .dark {
    background: ${props => props.theme["brand-primary-dark"]};
    border: 2px solid transparent;
    color: ${props => props.theme["white"]};

    &:hover {
      background: transparent;
      border: 2px solid ${props => props.theme["brand-primary-dark"]};
      color: ${props => props.theme["brand-primary-dark"]};
    }
  }
`;

