import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 70vh;
  padding: 2rem;
  background-color: var(--background-light);
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      30deg,
      var(--primary-color) 12%,
      transparent 12.5%,
      transparent 87%,
      var(--primary-color) 87.5%,
      var(--primary-color)
    ),
    linear-gradient(
      150deg,
      var(--primary-color) 12%,
      transparent 12.5%,
      transparent 87%,
      var(--primary-color) 87.5%,
      var(--primary-color)
    ),
    linear-gradient(
      30deg,
      var(--primary-color) 12%,
      transparent 12.5%,
      transparent 87%,
      var(--primary-color) 87.5%,
      var(--primary-color)
    ),
    linear-gradient(
      150deg,
      var(--primary-color) 12%,
      transparent 12.5%,
      transparent 87%,
      var(--primary-color) 87.5%,
      var(--primary-color)
    ),
    linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.07) 25%,
      transparent 25.5%,
      transparent 75%,
      rgba(0, 0, 0, 0.07) 75%,
      rgba(0, 0, 0, 0.07)
    ),
    linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.07) 25%,
      transparent 25.5%,
      transparent 75%,
      rgba(0, 0, 0, 0.07) 75%,
      rgba(0, 0, 0, 0.07)
    );
  background-size: 80px 140px;
  background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 0 0;
  opacity: 0.07;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  margin: 0;
  color: var(--primary-color);
  text-shadow: 3px 3px 0 var(--secondary-color);

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0.5rem 0 2rem;
  color: var(--text-dark);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--text-medium);
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background-color: var(--primary-color);
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const BotafogoLogo = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: 1.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <BackgroundPattern />
      <Content>
        <BotafogoLogo>
          <img src="/img/botafogo-logo.png" alt="Botafogo Logo" />
        </BotafogoLogo>
        <Title>404</Title>
        <Subtitle>Página não encontrada</Subtitle>
        <Description>
          A página que você está procurando pode ter sido removida, renomeada ou
          está temporariamente indisponível.
        </Description>
        <HomeButton to="/">Voltar para a página inicial</HomeButton>
      </Content>
    </NotFoundContainer>
  );
};

export default NotFound;
