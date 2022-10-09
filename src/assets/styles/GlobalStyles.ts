import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: 10px;
  font-family: "Montserrat", sans-serif;
  scroll-behavior: smooth;
  background-color: #011c28;
}

a {
  text-decoration: none;
}

img,
a {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

p{
  font-size: 1.7rem;
  margin-top: 5px;
  line-height: 2.3rem;
  font-weight: 400;
  letter-spacing: 0.05rem;
  color: #cacaca;
  text-decoration: none;
}

/* Navigation ============================================== */
.social-links {
  font-size: 2.8rem;
  display: flex;
  gap: 1.5rem;
}

.social-links a {
  font-size: 3rem;
  color: #9c5000;
  transition: 0.6s;
}

.social-links a:hover {
  color: #ff8605;
}

/* Container ============================================== */

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-container {
  max-width: 1100px;
}

.section-blue {
  padding-bottom: 100px;
  background-image: linear-gradient(60deg, #01394e 0%, hsl(200, 97%, 10%) 100%);
}

.section-gray {
  padding-bottom: 100px;
  background-color: #cacaca;
}

.section-title {
  padding: 100px;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
}

.text-white {
  color: aliceblue;
}

.text-blue {
  color: #01394e;
}


`;
