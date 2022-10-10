import { useLayoutEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import { Container } from "./styles";

export function Header() {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

   useLayoutEffect(() => {
     if (active) {
       document.body.style.overflow = "hidden";
     } else {
       document.body.style.overflow = "auto";
     }
   }, [active]);

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Container>
      <header className={navbar ? "header active" : "header"}>
        <nav>
          <div id="logo">
            <a href="/">
              <img src="/logo.png" alt="" style={{ width: 40 }} />
            </a>
          </div>
          <div className={active ? "nav-menu  active" : "nav-menu "}>
            <ul onClick={() => setMode(!active)}>
              <li>
                <a href="#inicio">HOME</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#portfolio">PORTFÓLIO</a>
              </li>
              <li>
                <a href="#about">SOBRE</a>
              </li>
              <li>
                <a href="#contact">CONTATO</a>
              </li>
            </ul>

            <div className="social-links" onClick={() => setMode(!active)}>
              <a href="https://github.com/samuelsilvati" target="_blank">
                <i>
                  <FaGithub />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/samuelsilvati"
                target="_blank"
              >
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
          <div
            className={active ? "hamburger active" : "hamburger"}
            id="one"
            onClick={toggleMode}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </Container>
  );
}
