import { Container } from "./styles";

export function Presentation() {
  return (
    <Container>
      <div className="presentation container" id="inicio">
        <div>
          <h1>
            Olá,<span></span>
          </h1>
          <h1>
            eu sou o<span></span>
          </h1>
          <h1>
            Samuel<span></span>
          </h1>
          <a href="#portfolio" type="button" className="cta">
            <button>Portfólio</button>
          </a>
        </div>
      </div>
    </Container>
  );
}
