import { Cards } from "./Cards/Cards";
import { Container } from "./styles";

export function Portfolio() {
  return (
    <Container>
      <section id="portfolio" className="section-grey">
        <div className="container">
          <h1 className="section-title text-blue">
            Portfólio
          </h1>
          <div className="section-container">
            <Cards />
          </div>
        </div>
      </section>
    </Container>
  );
}
