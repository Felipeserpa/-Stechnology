import styled from "styled-components";

export const Container = styled.div`
  #skills-container {
    max-width: 1100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 3rem;
    @media (max-width: 930px) {
      gap: 1rem;
    }
  }

  #skills-container p{
    font-size: 10rem;
    color: ${(props) => props.theme.secondaryColor};
    cursor: pointer;
    transition: 0.6s ease-in-out;
    @media (max-width: 930px) {
      font-size: 6rem;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;
