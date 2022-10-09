import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Container } from "./styles";
export function Footer() {
  return (
    <Container>
      <footer className="container section-blue">
        <div className="section-container">
          <p>Desenvolvido por Samuel</p>
          <div className="social-links">
            <a href="https://github.com/samuelsilvati" target="_blank">
              <i>
                <FaGithub />
              </i>
            </a>
            <a href="https://www.linkedin.com/in/samuelsilvati" target="_blank">
              <i>
                <FaLinkedin />
              </i>
            </a>
            <a href="mailto:samuel7silva@outlook.com" target="_blank">
              <i>
                <FaEnvelope />
              </i>
            </a>
          </div>
        </div>
        <div className="container">
          <p>
            Este Portifólio foi Desenvolvido com Vite - React - Styled
            Components - Prismic
          </p>
        </div>
      </footer>
    </Container>
  );
}
