import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: var(--text-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ThumbnailContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #f0f0f0;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: var(--transition);
    z-index: 1;
  }

  ${Card}:hover &:before {
    opacity: 1;
  }
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 18px solid var(--text-color);
    margin-left: 5px;
  }

  ${Card}:hover & {
    background-color: #ff0000; /* YouTube Red */
  }
`;

const VideoContent = styled.div`
  padding: 1.25rem;
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
`;

const VideoMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-light);
  font-size: 0.85rem;
`;

const Duration = styled.span`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
`;

const VideoCard = ({ video, onClick }) => {
  const { id, title, thumbnail, publishedAt, duration, views } = video;

  return (
    <Card onClick={() => onClick(id)}>
      <ThumbnailContainer>
        <Thumbnail src={thumbnail} alt={title} />
        <PlayButton />
        <Duration>{duration}</Duration>
      </ThumbnailContainer>

      <VideoContent>
        <VideoTitle>{title}</VideoTitle>
        <VideoMeta>
          <span>{publishedAt}</span>
          <span>{views} visualizações</span>
        </VideoMeta>
      </VideoContent>
    </Card>
  );
};

export default VideoCard;
