import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { noticiasCompletas } from "../../services/mockData";
import {
  FaCalendarAlt,
  FaTag,
  FaArrowLeft,
  FaShare,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const NewsDetailContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const NewsContent = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: 0.1s;

  &:hover {
    color: var(--secondary-color);
    background-color: var(--primary-color);
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const NewsHeader = styled.div`
  margin-bottom: 2rem;
  opacity: 0;
  animation: slideInUp 0.8s ease forwards;
  animation-delay: 0.2s;
`;

const NewsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
  line-height: 1.2;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100px;
    height: 3px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 150px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-medium);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.3s;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1));
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const NewsBody = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-medium);
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.4s;

  p {
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ShareSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: var(--background-light);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.5s;

  p {
    margin: 0;
    font-weight: 600;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

const RelatedNews = styled.div`
  margin-top: 3rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  animation-delay: 0.6s;
`;

const RelatedTitle = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: var(--text-dark);
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const RelatedList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const RelatedItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--text-dark);
  transition: all 0.3s ease;
  background-color: var(--secondary-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    h4 {
      color: var(--primary-color);
    }
  }
`;

const RelatedImage = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${RelatedItem}:hover & img {
    transform: scale(1.08);
  }
`;

const RelatedContent = styled.div`
  padding: 1rem;
`;

const RelatedCategory = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const RelatedDate = styled.span`
  display: block;
  font-size: 0.75rem;
  color: var(--text-medium);
  margin-bottom: 0.5rem;
`;

const RelatedItemTitle = styled.h4`
  font-size: 1rem;
  line-height: 1.4;
  transition: color 0.3s ease;
  margin-bottom: 0;
`;

const formatDate = (dateString) => {
  const parts = dateString.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

const NewsDetail = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Busca a notícia pelo ID
    const idNumber = parseInt(id);
    const noticiaEncontrada = noticiasCompletas.find(
      (noticia) => noticia.id === idNumber
    );

    if (noticiaEncontrada) {
      setNoticia(noticiaEncontrada);

      // Busca notícias relacionadas (mesma categoria ou diferentes da atual)
      const relacionadas = noticiasCompletas
        .filter((n) => n.id !== idNumber)
        .slice(0, 3); // Limita a 3 notícias relacionadas

      setRelatedNews(relacionadas);
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <NewsDetailContainer>
        <NewsContent>
          <p>Carregando...</p>
        </NewsContent>
      </NewsDetailContainer>
    );
  }

  if (!noticia) {
    return (
      <NewsDetailContainer>
        <NewsContent>
          <BackLink to="/noticias">
            <FaArrowLeft /> Voltar para Notícias
          </BackLink>
          <h2>Notícia não encontrada</h2>
          <p>A notícia que você está procurando não está disponível.</p>
        </NewsContent>
      </NewsDetailContainer>
    );
  }

  // Quebra o conteúdo em parágrafos para melhor exibição
  const paragrafos = noticia.conteudo.split(". ").map((parag, index, array) => {
    // Adiciona o ponto final de volta, exceto no último parágrafo se já tiver pontuação
    const texto =
      index === array.length - 1 && parag.endsWith("!") ? parag : `${parag}.`;

    return <p key={index}>{texto}</p>;
  });

  // URLs para compartilhamento
  const currentUrl = window.location.href;
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(noticia.titulo)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${noticia.titulo} - ${currentUrl}`
    )}`,
  };

  return (
    <NewsDetailContainer>
      <NewsContent>
        <BackLink to="/noticias">
          <FaArrowLeft /> Voltar para Notícias
        </BackLink>

        <NewsHeader>
          <NewsTitle>{noticia.titulo}</NewsTitle>
          <MetaInfo>
            <MetaItem>
              <FaCalendarAlt />
              {formatDate(noticia.data)}
            </MetaItem>
            <MetaItem>
              <FaTag />
              {noticia.categoria}
            </MetaItem>
          </MetaInfo>
        </NewsHeader>

        <HeroImage>
          <img src={noticia.imagem} alt={noticia.titulo} />
        </HeroImage>

        <NewsBody>{paragrafos}</NewsBody>

        <ShareSection>
          <p>
            <FaShare /> Compartilhar:
          </p>
          <ShareButtons>
            <ShareButton
              href={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              bgColor="#3b5998"
            >
              <FaFacebook />
            </ShareButton>
            <ShareButton
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              bgColor="#1da1f2"
            >
              <FaTwitter />
            </ShareButton>
            <ShareButton
              href={shareUrls.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              bgColor="#25D366"
            >
              <FaWhatsapp />
            </ShareButton>
          </ShareButtons>
        </ShareSection>

        <RelatedNews>
          <RelatedTitle>Notícias relacionadas</RelatedTitle>
          <RelatedList>
            {relatedNews.map((relatedItem) => (
              <RelatedItem
                key={relatedItem.id}
                to={`/noticias/${relatedItem.id}`}
              >
                <RelatedImage>
                  <img src={relatedItem.imagem} alt={relatedItem.titulo} />
                </RelatedImage>
                <RelatedContent>
                  <RelatedCategory>{relatedItem.categoria}</RelatedCategory>
                  <RelatedDate>{formatDate(relatedItem.data)}</RelatedDate>
                  <RelatedItemTitle>{relatedItem.titulo}</RelatedItemTitle>
                </RelatedContent>
              </RelatedItem>
            ))}
          </RelatedList>
        </RelatedNews>
      </NewsContent>
    </NewsDetailContainer>
  );
};

export default NewsDetail;
