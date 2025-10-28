import Container from './styles';
import React from 'react';
import { Helmet } from 'react-helmet-async'; // Mantenha apenas este import

// REMOVA: import { HelmetSeo } from '../../components/HelmetSeo';

export default function Presentation() {
  return (
    <Container>
      {/* 1. Use o Helmet diretamente aqui */}
      <Helmet>
        {/* TÍTULO OTIMIZADO (Meta Title) */}
        <title>
          Criação de Site Profissional | Quer Criar Site? Veja Nossos Planos
        </title>

        {/* DESCRIÇÃO OTIMIZADA (Meta Description) */}
        <meta
          name="description"
          content='Pesquisou "quero criar site para minha empresa"? Fale conosco! Desenvolvemos sites que vendem. Clique e solicite um orçamento sem compromisso.'
        />

        <meta
          name="description"
          content='Pesquisou "quero criar um Aplicativo"? Fale conosco! Desenvolvemos Aplicativos que vendem. Clique e solicite um orçamento sem compromisso.'
        />
        {/* Tags Open Graph para Redes Sociais */}
        <meta
          property="og:title"
          content="Sistemas Web: Criar o Sistema da Sua Empresa"
        />
        <meta
          property="og:description"
          content="Pare de perder clientes. Criamos  sites de empresas."
        />
        <meta property="og:url" content="https://stechnology.vercel.app/" />
        {/* Adicione outras tags (og:image, etc.) se necessário */}
      </Helmet>

      {/* 2. O seu conteúdo otimizado (H1) continua abaixo */}
      <div className="presentation container" id="inicio">
        <div>
          {/* Otimização de Conteúdo para a busca */}
          <h1>
            Quer Criar um Site Profissional?
            <span />
          </h1>
          <h2>
            Olá, somos a <span />
          </h2>
          <h2>
            Stecnlogic e temos o plano ideal.
            <span />
          </h2>

          <a href="#portfolio" type="button" className="cta">
            <button type="button">Portfólio</button>
          </a>
        </div>
      </div>
    </Container>
  );
}
