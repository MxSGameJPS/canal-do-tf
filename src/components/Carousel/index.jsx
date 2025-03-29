import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin-bottom: 3rem;
  height: 600px;
  max-width: 1200px;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
  transform: translateX(-${(props) => props["data-currentslide"] * 100}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;

  ${Slide}:hover & {
    transform: scale(1.05);
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.4),
    transparent
  );
  padding: 3rem 2rem 2rem;
  color: white;
`;

const SlideContent = styled.div`
  position: relative;
  z-index: 1;
`;

const SlideDate = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const SlideCategory = styled.span`
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 50px;
  margin-left: 0rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 200px;
  text-align: center;
`;

const SlideTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SlideDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 1.5rem;
  max-width: 700px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 0.9rem;
    display: none;
  }
`;

const SlideButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;

  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 85%;
  display: flex;
  margin: 25px auto;
  gap: 0.5rem;
  z-index: 5;
`;

const ControlButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1.2rem;

  &:hover {
    background-color: var(--primary-color);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 40%;
  display: flex;
  margin: 0 auto;
  gap: 0.5rem;
  z-index: 5;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) =>
    props["data-active"] === "true"
      ? "var(--primary-color)"
      : "rgba(255, 255, 255, 0.5)"};
  border: none;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${(props) =>
      props["data-active"] === "true"
        ? "var(--primary-color)"
        : "rgba(255, 255, 255, 0.8)"};
    transform: scale(1.2);
  }
`;

// Formatador de datas no estilo brasileiro
const formatDate = (dateString) => {
  if (!dateString) return "";
  const parts = dateString.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }, [data.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoplay(false);

    // Reinicia o autoplay após 5 segundos de inatividade
    setTimeout(() => {
      setAutoplay(true);
    }, 5000);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, nextSlide]);

  // Pausar autoplay quando o usuário passar o mouse sobre o carrossel
  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <CarouselContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <SlideContainer data-currentslide={currentSlide}>
        {data.map((slide, index) => (
          <Slide key={index}>
            <SlideImg src={slide.image} alt={slide.title} />
            <SlideOverlay>
              <SlideContent>
                {slide.date && (
                  <SlideDate>
                    <FaCalendarAlt />
                    {formatDate(slide.date)}
                  </SlideDate>
                )}
                <SlideCategory>{slide.category}</SlideCategory>
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideDescription>{slide.excerpt}</SlideDescription>
                <SlideButton to={slide.link}>Leia mais</SlideButton>
              </SlideContent>
            </SlideOverlay>
          </Slide>
        ))}
      </SlideContainer>

      <Controls>
        <ControlButton onClick={prevSlide} aria-label="Slide anterior">
          &#8592;
        </ControlButton>
        <ControlButton onClick={nextSlide} aria-label="Próximo slide">
          &#8594;
        </ControlButton>
      </Controls>

      <Indicators>
        {data.map((_, index) => (
          <Indicator
            key={index}
            data-active={(currentSlide === index).toString()}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

export default Carousel;
