import { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { Container } from "./styles";

export function Header() {
  const [active, setMode] = useState(false);
  const toggleMode = () => {
    setMode(!active);
  };

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
      <header id="navbar" className={navbar ? "navbar active" : "navbar"}>
        <nav>
          <div id="logo">
            <a href="/">
              <img src="/favicon.png" alt="" style={{ width: 40 }} />
            </a>
          </div>
          <div className={active ? "nav-menu  active" : "nav-menu "} id="two">
            <ul>
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

            <div className="social-links">
              <a href="https://github.com/samuelsilvati" target="_blank">
                <i>
                  <AiFillGithub />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/samuelsilvati"
                target="_blank"
              >
                <i>
                  <AiFillLinkedin />
                </i>
              </a>
              <a href="mailto:samuel7silva@outlook.com" target="_blank">
                <i>
                  <AiFillMail />
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
