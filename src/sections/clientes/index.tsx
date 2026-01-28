import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Cards from '../../components/Cards/Cards';
import Container from './styles';

/* =======================
   TIPOS
======================= */
interface Repo {
  id: number;
  name: string;
  html_url: string;
}

interface ProjectInfo {
  repo: string;
  title: string;
  description: string;
  image?: string;
}

/* =======================
   DADOS DOS PROJETOS
   (VOCÊ CONTROLA TUDO AQUI)
======================= */
const projectsInfo: ProjectInfo[] = [
  {
    repo: 'LandPage-Marcello-adv',
    title: 'Landing Page Jurídica',
    description:
      'Landing page desenvolvida para escritório de advocacia, focada em conversão de clientes e contato direto via WhatsApp.',
    image: '/projects/landpage-marcello.png',
  },
  {
    repo: 'LandPage-SegPlan',
    title: 'Landing Page Plano de Saúde',
    description:
      'Página institucional criada para captação de leads na área de planos de saúde.',
    image: '/projects/segplan.png',
  },
  {
    repo: 'front-Barber',
    title: 'Sistema para Barbearia',
    description:
      'Sistema web para agendamento de horários, gerenciamento de clientes e serviços de barbearia.',
    image: '/projects/barber.png',
  },
  {
    repo: 'Api_barber',
    title: 'API Barbearia',
    description:
      'API REST desenvolvida em Node.js para controle de usuários, serviços e agendamentos.',
  },
  {
    repo: 'Quantico',
    title: 'Projeto Quântico',
    description:
      'Projeto experimental focado em layout moderno, animações e performance.',
  },
];

/* =======================
   COMPONENTE
======================= */
export default function Cliente() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get<Repo[]>(
          'https://api.github.com/users/felipeserpa/repos'
        );
        setRepos(response.data);
      } catch (error) {
        console.error('Erro ao buscar repositórios do GitHub:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Carregando projetos...</p>;

  return (
    <Container>
      <section className="section-grey" id="cliente">
        <div className="container">
          <h1 className="section-title text-blue">Clientes</h1>

          {/* Cards estáticos */}
          <Cards />

          <h1 className="section-title text-blue" style={{ marginTop: '40px' }}>
            Projetos Recentes
          </h1>

          <div
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {projectsInfo.map((project) => {
              const repo = repos.find(
                (r) => r.name.toLowerCase() === project.repo.toLowerCase()
              );

              if (!repo) return null;

              return (
                <div
                  key={repo.id}
                  className="project-card"
                  style={{
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    background: '#fff',
                  }}
                >
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        borderRadius: '8px',
                        marginBottom: '12px',
                      }}
                    />
                  )}

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
