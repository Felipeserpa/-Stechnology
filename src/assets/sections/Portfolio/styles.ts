import styled from 'styled-components';

const Container = styled.div`
  .card {
    display: flex;
    height: 32rem;
    margin: 0 1rem 3rem 1rem;
    background-image: ${(props) => props.theme.linearGradient};
    transition: 0.6s ease-in-out;
    @media (max-width: 930px) {
      margin: 0 1rem 2rem 1rem;
      flex-direction: column;
      height: max-content;
    }
  }

  .slug {
    display: none;
  }

  .card-description {
    display: flex;
    /* justify-items: start; */
    align-items: start;
    justify-content: start;
    height: 100%;
    width: 100%;
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
    width: 100%;
    height: 100%;
  }

  .card:hover {
    transform: scale(1.02);
    background-color: ${(props) => props.theme.transparent};
  }
`;

export default Container;
