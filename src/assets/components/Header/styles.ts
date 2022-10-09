import styled from "styled-components";

export const Container = styled.div`
  header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    z-index: 2;
    @media (max-width: 930px) {
      padding: 10px 0;
    }
  }

  nav {
    max-width: 1200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 2;
    transition: all 0.3s ease-in-out;
    @media (max-width: 930px) {
      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
    }
  }

  nav .nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    @media (max-width: 930px) {
      position: fixed;
      right: -100%;
      top: 0;
      padding: 30px 0 86px;
      flex-direction: column;
      background-color: #012333;
      width: 100%;
      text-align: center;
      opacity: 0.8;
      transition: 0.4s;
      z-index: 2;
    }
  }

  nav ul {
    list-style: none;
    font-size: 1.7rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav ul a {
    color: ${(props) => props.theme.secondaryColor};
    padding: 1rem 1.5rem;
    transition: 0.4s;
  }

  nav ul a:hover {
    color: ${(props) => props.theme.secondaryColorHover};
  }
`;
