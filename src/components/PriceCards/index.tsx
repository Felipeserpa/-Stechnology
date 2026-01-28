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
      {/* Plano Gratuito */}
      {/* Plano 1 */}
      <PricingTab
        planName="Landing Pages de Alta Conversão"
        price={600}
        features={[
          'Design Ultra-Responsivo (Mobile First)',
          'Foco em Captura de Leads e Vendas',
          'Botão de WhatsApp e Redes Integrados',
          'Hospedagem e Configuração Inclusa',
        ]}
      />

      {/* Plano 2 - O Popular */}
      <PricingTab
        popular
        planName="Sites  Profissionais"
        price={850}
        features={[
          'Layout Exclusivo e Autoral',
          'Gestão Dinâmica de Projetos',
          'Blog para Autoridade no Nicho',
          'Otimização Completa para o Google',
        ]}
      />

      {/* Plano 3 */}
      <PricingTab
        planName="Sistemas & Web Apps"
        price={1500} // Ou "1.500+" para valorizar seu tempo
        features={[
          'Arquitetura de Software Sob Medida',
          'Integrações via APIs Avançadas',
          'Dashboard Administrativo',
          'Suporte e Manutenção Prioritária',
        ]}
      />
    </PriceCardContainer>
  );
};

export default PriceCard;
