import { Container } from "./styles";


export function Loading() {
  return (
    <Container>
      <div className="screen">
        <div id="loading">
          <div className="circle"></div>
        </div>
      </div>
    </Container>
  );
}

