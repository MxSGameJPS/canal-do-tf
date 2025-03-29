import React, { useState, useEffect } from "react";
import styled from "styled-components";
import VideoGallery from "../../components/VideoGallery";
import { recentVideos } from "../../services/mockData";
import AnimatedPage from "../../components/AnimatedPage";
import { FaYoutube } from "react-icons/fa";

const VideosContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const VideosHeader = styled.div`
  background-color: var(--primary-color);
  padding: 4rem 0;
  color: var(--secondary-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/img/bg-pattern.jpg") center/cover;
    opacity: 0.1;
    z-index: 1;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 2.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const VideosContent = styled.div`
  padding: 3rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const AnimatedSection = styled.div`
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SubscribeSection = styled.div`
  background-color: var(--text-color);
  padding: 3rem 1rem;
  margin-top: 3rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -30px;
    right: -30px;
    width: 150px;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: -40px;
    width: 200px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 50%;
  }
`;

const SubscribeTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 2px;
    background-color: var(--primary-color);
  }
`;

const SubscribeText = styled.p`
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  color: var(--primary-color);
`;

const YoutubeButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
  color: white;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  width: 300px;
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
`;

const Videos = () => {
  const [animatedElements, setAnimatedElements] = useState([]);

  useEffect(() => {
    // Animação ao carregar a página
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observar todos os elementos que devem ser animados
    const elements = document.querySelectorAll(".animate");
    setAnimatedElements(elements);
    elements.forEach((el) => observer.observe(el));

    return () => {
      if (animatedElements.length > 0) {
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [animatedElements.length]);

  return (
    <AnimatedPage>
      <VideosContainer>
        <VideosHeader>
          <HeaderContent>
            <Title>Nossos Vídeos</Title>
            <Description>
              Confira todos os vídeos do Canal do TF sobre o Botafogo, com
              análises táticas, notícias sobre Transfer Ban, estreias no
              Brasileirão, Libertadores e muito mais para você ficar por dentro
              de tudo.
            </Description>
          </HeaderContent>
        </VideosHeader>

        <VideosContent>
          <AnimatedSection className="animate">
            <VideoGallery
              videos={recentVideos}
              showFilter={true}
              showViewMore={false}
            />
          </AnimatedSection>

          <AnimatedSection className="animate">
            <SubscribeSection>
              <SubscribeTitle>Inscreva-se no Canal</SubscribeTitle>
              <SubscribeText>
                Não perca nenhum vídeo novo! Inscreva-se no nosso canal do
                YouTube para receber notificações sempre que publicarmos
                conteúdo novo.
              </SubscribeText>
              <YoutubeButton
                href="https://www.youtube.com/@CANALDOTF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube /> Inscrever-se agora
              </YoutubeButton>
            </SubscribeSection>
          </AnimatedSection>
        </VideosContent>
      </VideosContainer>
    </AnimatedPage>
  );
};

export default Videos;
