import styled from 'styled-components';

const Container = styled.div`
  /* ... (O seu CSS para .presentation e .presentation::after permanece o mesmo) ... */
  .presentation {
    height: 100vh;
    background-image: url(/onur-binay-_yC2htzMYnI-unsplash.webp);
    background-size: cover;
    background-position: top center;
    position: relative;
    z-index: 1;
    @media (max-width: 930px) {
      height: 90vh;
    }
  }

  .presentation::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.black};
    opacity: 0.5;
    z-index: -1;
  }

  .presentation div {
    padding-top: 9.7rem;
    @media (max-width: 930px) {
      padding-top: 20px;
    }
  }

  /* ------------------------------------------- */
  /* AJUSTE DOS TÍTULOS (H1 e H2) PARA O SEO */
  /* ------------------------------------------- */

  .presentation h1,
  .presentation h2 {
    /* Aplica estilos base para ambos */
    display: block;
    width: fit-content;
    position: relative;
    color: ${(props) => props.theme.transparent};
    animation: text_reveal 0.5s ease forwards; /* Use a animação de revelação */
    margin-bottom: 0.5rem; /* Espaçamento entre os títulos */
  }

  /* Estilo principal para a frase de solução (H1) */
  .presentation h1 {
    font-size: 5rem;
    font-weight: 900; /* Dê mais peso para o título de SEO */
    color: aliceblue; /* Cor inicial visível para a animação */
    animation-delay: 0.5s; /* Começa antes */

    /* Garante que o span da animação continue funcional */
    & span {
      background-color: #9c5000;
      animation-delay: 0.3s;
    }
  }

  /* Estilo secundário para o branding (H2) */
  .presentation h2 {
    font-size: 3rem; /* Menor que o H1 */
    font-weight: 400;
    color: aliceblue;
    animation-delay: 1.5s; /* Começa depois do H1 */

    /* Garante que o span da animação continue funcional */
    & span {
      background-color: #01394e; /* Use outra cor para o box se desejar */
      animation-delay: 1.3s;
    }
  }

  /* Remova os seletores nth-child específicos, a menos que queira um timing complexo: */
  /* .presentation h1:nth-child(1), .presentation h1:nth-child(2), etc. 
     Isso simplifica o CSS após a mudança da estrutura H1/H2. */

  /* O span ainda faz parte do H1/H2 e usa a animação de caixa */
  .presentation h1 span,
  .presentation h2 span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    animation: text_reveal_box 1s ease;
    background-color: #9c5000;
  }

  /* ------------------------------------------- */
  /* AJUSTE DO BOTÃO (CTA) */
  /* ------------------------------------------- */

  .presentation button {
    display: inline-block;
    padding: 1rem 4.7rem;
    color: ${(props) => props.theme.secondaryColor || 'aliceblue'};
    background-color: ${(props) => props.theme.transparent};
    border: 0.2rem solid ${(props) => props.theme.secondaryColor || 'aliceblue'};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-top: 2rem;
    transition: 0.6s;
    cursor: pointer;
    text-decoration: none; /* Garante que o link não tenha sublinhado */
  }

  .presentation button:hover {
    color: #01394e; /* Cor do texto no hover */
    font-weight: 700;
    background-color: ${(props) => props.theme.secondaryColor || 'aliceblue'};
  }

  /* keyframes ============================================== */
  /* Simplifiquei o keyframe de nome para usar o mesmo de revelação, 
     a menos que você precise de um efeito visual específico para a marca. */
  @keyframes text_reveal {
    100% {
      color: aliceblue;
    }
  }

  @keyframes text_reveal_box {
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
`;

export default Container;
