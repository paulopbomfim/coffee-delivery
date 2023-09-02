import { styled } from "styled-components";


export const HomeContainer = styled.main`

`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 4rem 3rem;



  padding: 6rem 0;

  img {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;

  }
`;

export const HeroTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    color: ${(prop) => prop.theme.title};
  }

  span {
    font-size: 1.25rem;
    color: ${(prop) => prop.theme.subtitle};
  }
`;

export const BenefitsContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;


  display: grid;
  grid-template-columns: 20rem 20rem;
  grid-template-rows: 5rem 5rem;

  &:nth-child(1)  {
      background-color: ${(prop) => prop.theme["brand-primary-dark"]};
  }

  span {
    display: flex;
    gap: 1rem;
    align-items: center;

    i {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(prop) => prop.theme.background};
      
      &.cart {
        background-color: ${(prop) => prop.theme["brand-primary-dark"]};
      }
      &.package{
        background-color: ${(prop) => prop.theme.text};
      }
      &.timer{
        background-color: ${(prop) => prop.theme["brand-primary"]};
      }
      &.coffee{
        background-color: ${(prop) => prop.theme["brand-secondary"]};
      }
    }

  }
`;

export const ListSection = styled.section`
  h2 {
    font-size: 2rem;
    color: ${(prop) => prop.theme.subtitle};
  }
`;