import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  animation: fadeIn 0.5s ease-out forwards;
  width: 100%;
  height: 100%;
`;

const AnimatedPage = ({ children }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    // Adiciona a classe de animação quando o componente monta
    const elements = pageRef.current.querySelectorAll(".animate-on-mount");

    elements.forEach((element, index) => {
      // Adiciona um delay baseado no índice para criar um efeito cascata
      setTimeout(() => {
        element.classList.add("fade-in");
      }, index * 100);
    });

    // Configura observador de interseção para animações ao rolar
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quando o elemento entra na viewport
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            // Desativa a observação após animar
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // Usa a viewport como área de referência
        threshold: 0.1, // Anima quando pelo menos 10% do elemento está visível
        rootMargin: "0px 0px -50px 0px", // Pequena margem para antecipar a animação
      }
    );

    // Observa todos os elementos com classe animate-on-scroll
    const scrollElements =
      pageRef.current.querySelectorAll(".animate-on-scroll");
    scrollElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Limpeza do observador quando o componente desmonta
      scrollElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return <PageContainer ref={pageRef}>{children}</PageContainer>;
};

export default AnimatedPage;
