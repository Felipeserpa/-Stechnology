import styled from 'styled-components';

const Container = styled.div`
  .card {
    display: flex;
    height: 32rem;
    margin: 0 1rem 3rem 1rem;
    background-image: ${(props) => props.theme.linearGradient};
    transition: 0.6s ease-in-out;
    justify-content: space-between;
    @media (max-width: 930px) {
      margin: 0 1rem 2rem 1rem;
      flex-direction: column;
      height: max-content;
    }
  }
  .image-container {
    display: flex;
    flex-wrap: nowrap; /* Impede que as imagens quebrem linha */
    overflow-x: auto; /* Ativa scroll horizontal se precisar */
    gap: 1rem; /* Espaço entre as imagens */
    padding: 1rem;
    scroll-behavior: smooth; /* Scroll suave */
  }

  .image-container img {
    flex-shrink: 0;
    width: 310px; /* Aumentei a largura */
    height: 230px; /* Altura definida */
    border-radius: 12px;
    object-fit: cover; /* Garante que a imagem preencha sem distorcer */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  .card-description {
    display: flex;
    justify-items: start;
    align-items: start;
    justify-content: start;
    height: 100%;
    width: 100%;
    flex-direction: column;
    padding: 2rem;
  }

  .card-image {
    padding: 8cqb;
    width: 100%;
    height: 100%;
  }
  #img {
    width: 376px;
  }
  #img1 {
    width: 200px;
  }

  .card:hover {
    transform: scale(1.02);
    background-color: ${(props) => props.theme.transparent};
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 32px;
    margin-top: 32px;
  }

  .project-card {
    background: #ffffff;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .project-image img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  .project-content {
    padding: 20px;
    flex: 1;
    text-align: center;
  }

  .project-content h3 {
    margin-bottom: 12px;
    font-size: 18px;
    color: #222;
  }

  .project-content p {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
  }

  .project-button {
    display: block;
    margin: 0 20px 20px;
    padding: 12px;
    border-radius: 10px;
    background: #007bff;
    color: #fff;
    text-align: center;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  .project-button:hover {
    background: #0056b3;
  }
  .project-button:active {
    transform: translateY(0);
  }
`;

export default Container;
