import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact } from "react-icons/fa";
import { Container } from "./styles";

export function Skills() {
  return (
    <Container>
      <section id="skills" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">Skills</h1>
          <div className="section-container">
            <div id="skills-container">
              <p>
                <abbr title="HTML 5">
                  <i>
                    <FaHtml5 />
                  </i>
                </abbr>
              </p>
              <p>
                <abbr title="CSS 3">
                  <i>
                    <FaCss3Alt />
                  </i>
                </abbr>
              </p>
              <p>
                <abbr title="JavaScript">
                  <i>
                    <FaJs />
                  </i>
                </abbr>
              </p>
              <p>
                <abbr title="Git">
                  <i>
                    <FaGitAlt />
                  </i>
                </abbr>
              </p>
              <p>
                <abbr title="React">
                  <i>
                    <FaReact />
                  </i>
                </abbr>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
