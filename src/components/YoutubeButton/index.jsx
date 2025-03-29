import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaYoutube, FaChevronRight } from "react-icons/fa";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(255, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: ${(props) => (props.$visible === "true" ? "40px" : "-100px")};
  left: 40px;
  z-index: 999;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  width: 300px;

  @media (max-width: 768px) {
    bottom: ${(props) => (props.$visible === "true" ? "100px" : "-100px")};
    left: 20px;
  }
`;

const YoutubeIconButton = styled.a`
  width: 60px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: scale(1.1);
  }
`;

const YoutubeText = styled.div`
  background-color: #ff0000;
  width: 100%;
  color: white;
  border-radius: 30px;
  padding: 0.6rem 1rem 0.6rem 3rem;
  margin-left: 10px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  span {
    white-space: nowrap;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    padding-right: 1.2rem;

    svg {
      transform: translateX(3px);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 10px;
  height: 20px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 10px;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const YoutubeButton = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      // Mostrar o botão depois de rolar 300px
      if (window.scrollY > 300 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    // Mostrar o botão após 5 segundos automaticamente
    const timer = setTimeout(() => {
      if (!dismissed) {
        setVisible(true);
      }
    }, 5000);

    window.addEventListener("scroll", checkScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", checkScroll);
    };
  }, [dismissed]);

  const handleDismiss = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    setVisible(false);
  };

  return (
    <ButtonContainer $visible={visible ? "true" : "false"}>
      <YoutubeIconButton
        href="https://www.youtube.com/@CanaldoTFoficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube />
      </YoutubeIconButton>

      <YoutubeText
        as="a"
        href="https://www.youtube.com/@CanaldoTFoficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Assista novos vídeos</span>
        <FaChevronRight />
      </YoutubeText>

      <CloseButton onClick={handleDismiss}>✕</CloseButton>
    </ButtonContainer>
  );
};

export default YoutubeButton;
