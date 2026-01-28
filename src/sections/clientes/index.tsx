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
  url?: string;
}

/* =======================
   DADOS DOS PROJETOS
======================= */
const projectsInfo: ProjectInfo[] = [
  {
    repo: 'LandPage-Marcello-adv',
    title: 'Landing Page Jurídica',
    description:
      'Landing page desenvolvida para escritório de advocacia, focada em conversão e contato via WhatsApp.',
    image: '/marcelo adv.png',
    url: 'https://marcellorodrigoadv.com.br/',
  },
  {
    repo: 'LandPage-SegPlan',
    title: ' SegPlan Laudos e Avaliações',
    description:
      'Página institucional criada para captação de leads na área de Inspeção Predial, Fiscalização de Obras e Laudos Técnicos realizados por engenheiros especializados.',
    image: '/segplan.png',
    url: 'https://segplan.seg.br/',
  },
  {
    repo: 'front-Barber',
    title: 'Sistema para Barbearia',
    description:
      'Sistema web para agendamento de horários, gerenciamento de clientes e serviços.',
    image: '/Rb.jpg',
    url: 'https://reservabarbearia.vercel.app/',
  },
  {
    repo: 'Api_barber',
    title: 'API Barbearia',
    description:
      'API REST em Node.js para controle de usuários, serviços e agendamentos.',
  },
  {
    repo: 'Quantico',
    title: 'Site Quântico',
    description:
      'A Quantico Sinalização é uma empresa dedicada à excelência em fornecer soluções de sinalização para empresas e organizações de todos os tamanhos.',
    image: '/quantico.jpg',
    url: 'https://novquantico.vercel.app/',
  },
];

/* =======================
   COMPONENTE
======================= */
export default function Cliente() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await axios.get<Repo[]>(
          'https://api.github.com/users/felipeserpa/repos'
        );
        setRepos(response.data);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      } finally {
        setLoading(false);
      }
    }

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

          <h1 className="section-title text-blue" style={{ marginTop: 48 }}>
            Projetos Recentes
          </h1>

          <div className="projects-grid">
            {projectsInfo.map((project) => {
              const repo = repos.find(
                (r) => r.name.toLowerCase() === project.repo.toLowerCase()
              );

              if (!repo) return null;

              return (
                <article className="project-card" key={repo.id}>
                  {project.image && (
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                  )}

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <a
                    href={project.url ?? repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: project.image ? 'auto' : '10px',
                      width: '100%',
                      padding: '7px 12px',

                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',

                      borderRadius: '8px',
                      textDecoration: 'none',

                      fontSize: '13px',
                      fontWeight: 600,

                      color: '#ffffff',
                      background: project.url
                        ? 'linear-gradient(135deg, #28a745, #1e7e34)'
                        : 'linear-gradient(135deg, #24292e, #000000)',

                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = project.url
                        ? '0 5px 12px rgba(40, 167, 69, 0.35)'
                        : '0 5px 12px rgba(36, 41, 46, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {project.url ? 'Visitar Site' : 'Ver no GitHub'}
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}
