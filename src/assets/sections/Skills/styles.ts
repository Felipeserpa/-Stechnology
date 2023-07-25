import styled from 'styled-components';

const Container = styled.div`
  #skills-container {
    max-width: 1100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5rem;
    padding: 3rem;
    @media (max-width: 930px) {
      gap: 2.5rem;
    }
  }

  #skills-container .skill-card {
    text-align: center;
    transition: 0.5s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  #skills-container .skill-card h2 {
    color: aliceblue;
    font-size: 2rem;
    font-weight: 500;
    padding-bottom: 1rem;
  }

  #skills-container .icon {
    font-size: 9rem;
    color: ${(props) => props.theme.secondaryColor};

    @media (max-width: 930px) {
      font-size: 6rem;
    }
  }
`;

export default Container;
