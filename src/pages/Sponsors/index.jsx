import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { sponsors } from "../../services/mockData";

const SponsorsContainer = styled.div`
  padding: 3rem 0;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SponsorsContent = styled.div`
  width: 100%;
  flex: 1;
`;

const PageTitle = styled.h1`
  position: relative;
  margin-bottom: 1rem;
  margin-top: 2.5rem;
  padding-bottom: 1rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
  }
`;

const PageDescription = styled.p`
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 800px;
`;

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SponsorCard = styled.div`
  background-color: #000000;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const SponsorLogo = styled.div`
  height: 200px;
  overflow: hidden;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const SponsorContent = styled.div`
  padding: 1.5rem;
`;

const SponsorName = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

const SponsorDescription = styled.p`
  color: var(--text-light);
  margin-bottom: 1.5rem;
`;

const SponsorLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: var(--text-color);

  &:after {
    content: "→";
    margin-left: 5px;
    transition: var(--transition);
  }

  &:hover:after {
    margin-left: 10px;
  }
`;

const BecomePartner = styled.div`
  background-color: var(--text-color);
  padding: 3rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
  margin-bottom: 3rem;
`;

const PartnerTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1.5rem;
`;

const PartnerText = styled.p`
  color: var(--primary-color);
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0.75rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);

  &:hover {
    background-color: #333;
    transform: translateY(-3px);
  }
`;

const Sponsors = () => {
  return (
    <SponsorsContainer>
      <SponsorsContent className="container">
        <PageTitle>Patrocinadores</PageTitle>
        <PageDescription>
          Conheça as marcas e empresas que apoiam o Canal do TF e tornam
          possível o nosso trabalho de trazer o melhor conteúdo sobre o
          Botafogo.
        </PageDescription>

        <SponsorsGrid>
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id}>
              <SponsorLogo>
                <img src={sponsor.logo} alt={sponsor.name} />
              </SponsorLogo>

              <SponsorContent>
                <SponsorName>{sponsor.name}</SponsorName>
                <SponsorDescription>{sponsor.description}</SponsorDescription>
                <SponsorLink
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar site
                </SponsorLink>
              </SponsorContent>
            </SponsorCard>
          ))}
        </SponsorsGrid>

        <BecomePartner>
          <PartnerTitle>Torne-se um Patrocinador</PartnerTitle>
          <PartnerText>
            Está interessado em se tornar um patrocinador do Canal do TF? Temos
            diferentes pacotes de patrocínio que podem se adequar às
            necessidades da sua marca. Entre em contato conosco para conhecer as
            oportunidades disponíveis e como podemos trabalhar juntos.
          </PartnerText>
          <CtaButton to="/contato">Entre em Contato</CtaButton>
        </BecomePartner>
      </SponsorsContent>
    </SponsorsContainer>
  );
};

export default Sponsors;
