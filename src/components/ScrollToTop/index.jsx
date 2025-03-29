import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 25px;
  z-index: 1000;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  opacity: ${(props) => (props.$visible === "true" ? 1 : 0)};
  transform: ${(props) =>
    props.$visible === "true" ? "scale(1)" : "scale(0.8)"};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #333;
    transform: ${(props) =>
      props.$visible === "true" ? "scale(1.1)" : "scale(0.8)"};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 15px;
    width: 40px;
    height: 40px;
  }
`;

const ArrowUp = styled.span`
  width: 12px;
  height: 12px;
  border-style: solid;
  border-width: 0 3px 3px 0;
  transform: rotate(-135deg);
  display: inline-block;
  margin-top: 4px;
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Verificar a posição de rolagem e mostrar/ocultar o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para rolar até o topo da página suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      onClick={scrollToTop}
      $visible={visible ? "true" : "false"}
      aria-label="Voltar ao topo"
    >
      <ArrowUp />
    </ScrollButton>
  );
};

export default ScrollToTop;
