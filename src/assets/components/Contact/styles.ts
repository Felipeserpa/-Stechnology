import styled from "styled-components";

export const Container = styled.section`
  .section-container {
    padding: 0 30px 100px;
    display: flex;
    flex-direction: column;
    margin-top: 8rem;
    gap: 1rem;
  }

  h3 {
    padding: 2rem;
    color: #01394e;
    font-size: 2rem;
    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  #contact a {
    color: #01394e;
    font-size: 2.5rem;
    &:hover {
      color: #9c5000;
    }
    @media (max-width: 930px) {
      font-size: 1.9rem;
    }
  }

  #contact a i {
    padding-right: 10px;
  }

  @media (max-width: 930px) {
    #contact h1 {
      padding: 60px 0 50px 0;
    }
  }
`;
