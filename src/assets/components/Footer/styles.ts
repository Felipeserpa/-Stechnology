import styled from "styled-components";

export const Container = styled.div`
  .section-blue {
    padding-bottom: 0;
  }

  .section-container {
    width: 100%;
    margin: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  footer p {
    font-size: 2rem;
    font-weight: 600;
    color: ${(props) => props.theme.secondaryColor};
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  footer .social-links {
    padding: 0 4rem;
  }

  footer .container {
    height: 9rem;
    width: 100%;
    background-color: ${(props) => props.theme.black};
    padding: 2rem;
    text-align: center;
  }

  footer .container p {
    font-size: 1.7rem;
    font-weight: 500;
    color: ${(props) => props.theme.white};
  }

  @media (max-width: 930px) {
    footer .section-container {
      flex-direction: column;
      gap: 2rem;
    }

    footer .container {
      height: 8rem;
      width: 100%;
    }

    footer .container p {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${(props) => props.theme.white};
    }
  }
`;
