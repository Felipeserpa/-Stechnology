
import { Container } from "./styles";

export function About() {
  return (
    <Container>
      <section id="about" className="section-blue">
        <div className="container" data-aos="fade-up">
          <h1 className="section-title text-white">Sobre Mim</h1>
          <div className="section-container">
            <article>
              <p>Olá, eu sou o Samuel.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, porro maxime sequi hic est impedit amet ut nemo. Nam excepturi eos aspernatur eaque repudiandae commodi distinctio debitis sint saepe autem!</p>
            </article>
            <picture data-aos="fade-up">
              <img src="/avatar.webp" alt="avatar.webp" />
            </picture>
          </div>
        </div>
      </section>
    </Container>
  );
}
