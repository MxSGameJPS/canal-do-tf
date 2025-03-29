import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaTag } from "react-icons/fa";

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  text-decoration: none;
  color: inherit;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.05);
    }

    h3 {
      color: var(--primary-color);
    }
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const CardCategory = styled.span`
  position: absolute;
  top: 85%;
  right: 10px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.3rem 0.7rem;
  border-radius: 50px;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--text-medium);
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.3rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-medium);
  line-height: 1.4;
  transition: color 0.3s ease;
`;

const CardExcerpt = styled.p`
  font-size: 0.9rem;
  color: var(--text-medium);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-top: auto;
  display: flex;
  align-items: center;

  &::after {
    content: "→";
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  ${CardContainer}:hover &::after {
    transform: translateX(5px);
  }
`;

const NewsCard = ({ news }) => {
  return (
    <CardContainer to={news.link || `/noticias/${news.id}`}>
      <CardImage>
        <img src={news.image} alt={news.title} />
        <CardCategory>{news.category}</CardCategory>
      </CardImage>
      <CardContent>
        <CardMeta>
          <MetaItem>
            <FaCalendarAlt /> {news.date}
          </MetaItem>
          <MetaItem>
            <FaTag /> {news.category}
          </MetaItem>
        </CardMeta>
        <CardTitle>{news.title}</CardTitle>
        <CardExcerpt>{news.excerpt}</CardExcerpt>
        <ReadMore>Ler mais</ReadMore>
      </CardContent>
    </CardContainer>
  );
};

export default NewsCard;
