import styled from "styled-components";

export const Container = styled.div`
  .card {
    columns: 2 35rem;
    height: max-content;
    margin: 0 1rem 3rem 1rem;
    background-image: ${(props) => props.theme.linearGradient};
    transition: 0.6s ease-in-out;
    @media (max-width: 930px) {
      margin: 0 1rem 2rem 1rem;
    }
  }

  .card-description {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 2rem;
  }

  .card-description h1 {
    font-size: 3.5rem;
    padding: 2rem 0;
    color: ${(props) => props.theme.secondaryColor};
  }
  .link {
    padding-top: 1rem;
  }
  .link a {
    font-size: 1.6rem;
    color: ${(props) => props.theme.white};
    font-weight: bold;
  }

  .link a:hover {
    color: ${(props) => props.theme.secondaryColorHover};
    transition: 0.3s;
  }

  .card-image {
    padding: 1rem;
    height: 36rem;
  }

  .card:hover {
    transform: scale(1.02);
    background-color: ${(props) => props.theme.transparent};
  }
`;
