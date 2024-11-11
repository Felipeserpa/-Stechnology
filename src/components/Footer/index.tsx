import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Container from './styles';

export default function Footer() {
  return (
    <Container>
      <footer className="container section-blue">
        <div className="section-container">
          <p>Desenvolvido por @Stechnology</p>
          <div className="social-links">
            <a href="" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="l" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </Container>
  );
}