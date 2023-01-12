import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Container } from './styles';
export function Footer() {
  return (
    <Container>
      <footer className="container section-blue">
        <div className="section-container">
          <p>Desenvolvido por Samuel</p>
          <div className="social-links">
            <a href="https://github.com/samuelsilvati" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/samuelsilvati" target="_blank">
              <FaLinkedin />
            </a>
            <a href="mailto:samuel7silva@outlook.com" target="_blank">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
