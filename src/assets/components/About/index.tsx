
import { getAboutMe } from "../../../helpers/prismic/posts";
import { Container } from "./styles";

export function About() {
  const paragraph = getAboutMe();
  return (
    <Container>
      <section id="about" className="section-blue">
        <div className="container">
          <h1 className="section-title text-white">Sobre Mim</h1>
          <div className="section-container">
            <article>
              <p>Olá, eu sou o Samuel.</p>
              <p>{paragraph?.about_me_text}</p>
            </article>
            <picture>
              <img src="/avatar.webp" alt="avatar.webp" />
            </picture>
          </div>
        </div>
      </section>
    </Container>
  );
}
