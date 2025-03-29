import React from "react";
import styled from "styled-components";
import { mockSponsors } from "../../services/mockData";

// Tipos de banners disponíveis
export const BANNER_TYPES = {
  FULL_WIDTH: "full-width", // Banner horizontal de largura total
  SIDEBAR: "sidebar", // Banner vertical para sidebar
  BETWEEN_CONTENT: "between", // Banner entre conteúdos
  STICKY: "sticky", // Banner que permanece fixo ao rolar
  SMALL: "small", // Banner pequeno
};

// Container principal que se adapta ao tipo de banner
const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.$bg ? props.$bg : "rgba(0, 0, 0, 0.05)"};
  border-radius: ${(props) =>
    props.$type === BANNER_TYPES.FULL_WIDTH ? "0" : "var(--border-radius)"};
  overflow: hidden;
  margin: ${(props) => {
    switch (props.$type) {
      case BANNER_TYPES.FULL_WIDTH:
        return "2rem 0";
      case BANNER_TYPES.BETWEEN_CONTENT:
        return "1.5rem 0";
      case BANNER_TYPES.SIDEBAR:
        return "0 0 1.5rem 0";
      case BANNER_TYPES.SMALL:
        return "1rem 0";
      default:
        return "1rem 0";
    }
  }};
  width: ${(props) => {
    switch (props.$type) {
      case BANNER_TYPES.FULL_WIDTH:
        return "100%";
      case BANNER_TYPES.SIDEBAR:
        return "100%";
      case BANNER_TYPES.SMALL:
        return "300px";
      default:
        return "100%";
    }
  }};
  height: ${(props) => {
    switch (props.$type) {
      case BANNER_TYPES.FULL_WIDTH:
        return "120px";
      case BANNER_TYPES.SIDEBAR:
        return "400px";
      case BANNER_TYPES.STICKY:
        return "250px";
      case BANNER_TYPES.SMALL:
        return "250px";
      default:
        return "90px";
    }
  }};
  position: ${(props) =>
    props.$type === BANNER_TYPES.STICKY ? "sticky" : "relative"};
  top: ${(props) => (props.$type === BANNER_TYPES.STICKY ? "100px" : "auto")};
  box-shadow: var(--box-shadow);
  transition: var(--transition);

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transform: ${(props) =>
      props.$type !== BANNER_TYPES.STICKY ? "translateY(-2px)" : "none"};
  }

  @media (max-width: 768px) {
    height: ${(props) => {
      switch (props.$type) {
        case BANNER_TYPES.FULL_WIDTH:
          return "100px";
        case BANNER_TYPES.SIDEBAR:
          return "200px";
        default:
          return "90px";
      }
    }};
    margin: ${(props) =>
      props.$type === BANNER_TYPES.SIDEBAR ? "1rem 0" : props.$margin};
    width: 100%;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;

  img {
    max-width: 90%;
    max-height: 80%;
    object-fit: contain;
  }

  .sponsor-name {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: var(--text-color);
    opacity: 0.7;
  }
`;

const AdLabel = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.5rem;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
`;

const BannerLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

// Função auxiliar para selecionar um patrocinador aleatório ou específico para o banner
const selectSponsor = (id) => {
  if (!mockSponsors) return null;

  if (id) {
    return mockSponsors.find((sponsor) => sponsor.id === id);
  }

  // Filtrar apenas patrocinadores ativos
  const activeSponsors = mockSponsors.filter((sponsor) => sponsor.active);
  if (activeSponsors.length === 0) return null;

  // Priorizar patrocinadores em destaque
  const featuredSponsors = activeSponsors.filter((sponsor) => sponsor.featured);

  if (featuredSponsors.length > 0) {
    return featuredSponsors[
      Math.floor(Math.random() * featuredSponsors.length)
    ];
  }

  return activeSponsors[Math.floor(Math.random() * activeSponsors.length)];
};

/**
 * Componente de banner publicitário
 * @param {Object} props - Propriedades do componente
 * @param {string} props.type - Tipo de banner (BANNER_TYPES)
 * @param {number} props.sponsorId - ID específico do patrocinador (opcional)
 * @param {string} props.backgroundColor - Cor de fundo personalizada (opcional)
 */
const AdBanner = ({
  type = BANNER_TYPES.BETWEEN_CONTENT,
  sponsorId,
  backgroundColor,
}) => {
  const sponsor = selectSponsor(sponsorId);

  if (!sponsor) return null;

  return (
    <BannerContainer $type={type} $bg={backgroundColor}>
      <BannerLink
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Patrocinador: ${sponsor.name}`}
      >
        <BannerContent>
          <img src={sponsor.logo} alt={sponsor.name} />
          {type === BANNER_TYPES.SIDEBAR && (
            <span className="sponsor-name">{sponsor.name}</span>
          )}
          <AdLabel>Publicidade</AdLabel>
        </BannerContent>
      </BannerLink>
    </BannerContainer>
  );
};

export default AdBanner;
