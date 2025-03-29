import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaYoutube, FaCalendarAlt, FaEye, FaClock } from "react-icons/fa";

const VideoGalleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background-color: ${(props) =>
    props.$active === "true"
      ? "var(--primary-color)"
      : "var(--secondary-color)"};
  color: ${(props) =>
    props.$active === "true"
      ? "var(--secondary-color)"
      : "var(--primary-color)"};
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: capitalize;

  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    transform: translateY(-2px);
  }
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const VideoCard = styled.div`
  background-color: var(--text-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${VideoCard}:hover & img {
    transform: scale(1.05);
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${VideoCard}:hover & {
    opacity: 1;
  }

  svg {
    font-size: 3rem;
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
`;

const Duration = styled.span`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
`;

const VideoContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 1rem;
  color: var(--text-dark);

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const VideoMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-medium);
  margin: 0 auto;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-right: 2.3rem;
  /* svg {
    margin-right: 0rem;
  } */
`;

const ViewAllButton = styled.button`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 2rem auto 0;

  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }
`;

const VideoGallery = ({ videos, showFilter = true, showViewMore = true }) => {
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [activeFilter, setActiveFilter] = useState("todos");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Extrair categorias únicas dos vídeos
    const uniqueCategories = [
      ...new Set(videos.map((video) => video.category)),
    ];
    setCategories(uniqueCategories);

    // Inicialmente, mostrar todos os vídeos
    setFilteredVideos(videos);
  }, [videos]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);

    if (category === "todos") {
      setFilteredVideos(videos);
    } else {
      const filtered = videos.filter((video) => video.category === category);
      setFilteredVideos(filtered);
    }
  };

  const openYoutubeVideo = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <VideoGalleryContainer>
      {showFilter && (
        <FilterContainer>
          <FilterButton
            $active={(activeFilter === "todos").toString()}
            onClick={() => handleFilterClick("todos")}
          >
            Todos
          </FilterButton>

          {categories.map((category) => (
            <FilterButton
              key={category}
              $active={(activeFilter === category).toString()}
              onClick={() => handleFilterClick(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
      )}

      <VideosGrid>
        {filteredVideos.map((video) => (
          <VideoCard key={video.id}>
            <VideoThumbnail onClick={() => openYoutubeVideo(video.id)}>
              <img src={video.thumbnail} alt={video.title} />
              <PlayOverlay>
                <FaYoutube />
              </PlayOverlay>
              <Duration>
                <FaClock /> {video.duration}
              </Duration>
            </VideoThumbnail>

            <VideoContent>
              <VideoTitle>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {video.title}
                </a>
              </VideoTitle>

              <VideoMeta>
                <MetaItem>
                  <FaCalendarAlt /> {video.publishedAt}
                </MetaItem>

                <MetaItem>
                  <FaEye /> {video.views}
                </MetaItem>
              </VideoMeta>
            </VideoContent>
          </VideoCard>
        ))}
      </VideosGrid>

      {showViewMore && (
        <ViewAllButton onClick={() => (window.location.href = "/videos")}>
          Ver mais vídeos
        </ViewAllButton>
      )}
    </VideoGalleryContainer>
  );
};

export default VideoGallery;
