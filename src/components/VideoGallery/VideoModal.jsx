import React, { useEffect } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background-color: var(--text-color);
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 900px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border: none;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: white;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const VideoInfo = styled.div`
  padding: 1.5rem;
`;

const VideoTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const VideoMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const VideoDescription = styled.p`
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const VideoModal = ({ video, onClose }) => {
  const { id, title, description, publishedAt, views } = video;

  useEffect(() => {
    // Desabilitar scroll do body quando o modal estiver aberto
    document.body.style.overflow = "hidden";

    // Função de limpeza
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    // Fechar modal com a tecla ESC
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={onClose} />

        <VideoContainer>
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&enablejsapi=0`}
            title={title}
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>

        <VideoInfo>
          <VideoTitle>{title}</VideoTitle>

          <VideoMeta>
            <span>Publicado em {publishedAt}</span>
            <span>{views} visualizações</span>
          </VideoMeta>

          <VideoDescription>{description}</VideoDescription>
        </VideoInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;
