// PriceCard.js
import styled from 'styled-components';
import PricingTab from '../../components/PriceCards/PriceTab'; // Importa o componente do cartão individual

const PriceCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-items: stretch;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
interface PriceCardProps {
  planName: string;
  price: string | number;
  features: string[];
}

const PriceCard = (props: PriceCardProps) => {
  return (
    <PriceCardContainer>
      {/* Plano 1 */}
      <PricingTab
        planName="Landing Pages de Alta Conversão"
        price={597}
        features={[
          'Design Ultra-Responsivo (Mobile First)',
          'Foco em Conversão e Captura de Leads',
          'WhatsApp e Redes Sociais Integrados',
          'Estrutura Estratégica para Anúncios',
          'Hospedagem e Configuração Inclusa',
          'Ideal para campanhas e vendas rápidas',
        ]}
      />

      {/* Plano 2 */}
      <PricingTab
        popular
        planName="Gestão de Instagram & Marketing"
        price={297}
        features={[
          'Artes Profissionais para Feed e Stories',
          'Planejamento Estratégico de Conteúdo',
          'Estratégia de Crescimento e Autoridade',
          'Gestão de Engajamento',
          'Conteúdo focado em conversão',
          'Fortalecimento da presença digital',
        ]}
      />

      {/* Plano 3 */}
      <PricingTab
        planName="Gestão de Tráfego Pago"
        price={497}
        features={[
          'Facebook e Instagram Ads',
          'Campanhas de Captação de Clientes',
          'Públicos Segmentados',
          'Otimização Semanal de Campanhas',
          'Geração de Leads Qualificados',
          'Escala de alcance e conversão',
        ]}
      />

      {/* Plano 4 */}
      <PricingTab
        planName="Sites Profissionais"
        price={1000}
        features={[
          'Layout Exclusivo e Autoral',
          'Design Responsivo e Moderno',
          'Blog para Autoridade no Nicho',
          'SEO Completo para Google',
          'Integração com WhatsApp',
          'Estrutura profissional para empresas',
        ]}
      />

      {/* Plano 5 */}
      <PricingTab
        planName="Sistemas & Web Apps"
        price={1500}
        features={[
          'Arquitetura Sob Medida',
          'Dashboard Administrativo',
          'Integrações via APIs',
          'Automação de Processos',
          'Sistema Escalável',
          'Suporte e Manutenção Prioritária',
        ]}
      />

      {/* Plano 6 */}
      <PricingTab
        planName="Combo Presença Digital"
        price={1297}
        features={[
          'Landing Page Profissional',
          'Gestão Estratégica do Instagram',
          'Tráfego Pago Integrado',
          'Captação Automática de Leads',
          'Estrutura Completa de Autoridade',
          'Mais alcance, contatos e vendas',
        ]}
      />
    </PriceCardContainer>
  );
};

export default PriceCard;
