import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import { noticiasCarousel } from "../../services/mockData";
import AnimatedPage from "../../components/AnimatedPage";

const HomeContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const HeroBanner = styled.div`
  height: 70vh;
  width: 100%;
  position: relative;
  background-image: url("/img/BannerTF.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
`;

const HeroContent = styled.div`
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(Link)`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1.1rem;
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Section = styled.section`
  padding: 4rem 0;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  color: var(--secondary-color);

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: var(--secondary-color);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CarouselSection = styled(Section)`
  background: url("/img/fundo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/img/pattern-bg.png");
    background-size: cover;
    opacity: 0.05;
    z-index: 0;
  }
`;

const VideoSection = styled(Section)`
  background-color: rgba(13, 17, 23, 0.8);
`;

const FeaturedVideo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;
  min-width: 300px;

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
`;

const VideoContent = styled.div`
  flex: 1;
  min-width: 300px;
`;

const VideoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--text-color);
`;

const VideoDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  opacity: 0.9;
`;

const CallToAction = styled(Link)`
  display: inline-block;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Home = () => {
  return (
    <AnimatedPage>
      <HomeContainer>
        {/* Banner Hero */}
        <HeroBanner className="animate-on-mount">
          <HeroContent>
            <HeroTitle>Canal do TF</HeroTitle>
            <HeroSubtitle>
              TRÊS VÍDEOS POR DIA FALANDO SOBRE O MAIOR CLUBE DO MUNDO:
              BOTAFOGO DE FUTEBOL E REGATAS.
            </HeroSubtitle>
            <HeroButton to="/noticias">Ver Últimas Notícias</HeroButton>
          </HeroContent>
        </HeroBanner>

        {/* Seção de Notícias Recentes */}
        <CarouselSection className="animate-on-scroll">
          <Section>
            <SectionTitle className="animate-on-scroll">
              Últimas Notícias
            </SectionTitle>

            <Carousel data={noticiasCarousel} />
          </Section>
        </CarouselSection>

        {/* Seção de Vídeo em Destaque */}
        <VideoSection>
          <SectionTitle className="animate-on-scroll">
            Vídeo em Destaque
          </SectionTitle>
          <FeaturedVideo className="animate-on-scroll">
            <VideoWrapper>
              <iframe
                src="https://www.youtube.com/embed/2X2yDhlqndA?si=26xJh-NVht12-45Z"
                title="Canal do TF Video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoWrapper>
            <VideoContent>
              <VideoTitle>
                QUAL PROVÁVEL BOTAFOGO PARA AMANHÃ? | TUDO SOBRE O INÍCIO DO
                BRASILEIRÃO 2025! SAIBA ONDE ASSISTIR
              </VideoTitle>
              <VideoDescription>
                Qual provável Botafogo para amanhã? Tudo sobre o início do
                Brasileirão 2025! Saiba onde assistir
              </VideoDescription>
              <CallToAction to="/videos">Ver Mais Vídeos</CallToAction>
            </VideoContent>
          </FeaturedVideo>
        </VideoSection>
      </HomeContainer>
    </AnimatedPage>
  );
};

export default Home;
