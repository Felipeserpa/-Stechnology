import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Container from './styles';

export default function Footer() {
  return (
    <Container>
      <footer className="container section-blue">
        <div className="section-container">
          <p>Desenvolvido por Samuel</p>
          <div className="social-links">
            <a
              href="https://github.com/samuelsilvati"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/samuelsilvati"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:samuel7silva@outlook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}
