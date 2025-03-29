import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { recentVideos } from "../../services/mockData";
import { FaYoutube } from "react-icons/fa";

const AdminVideosContainer = styled.div`
  width: 100%;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h2 {
    font-size: 1.8rem;
    color: var(--secondary-color);
  }
`;

const AddButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const VideosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const VideoCard = styled.div`
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  opacity: 0.8;
  transition: var(--transition);
  
  ${VideoCard}:hover & {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const VideoInfo = styled.div`
  padding: 1rem;
`;

const VideoTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const VideoMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-color);
  opacity: 0.7;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 0.4rem 0.1rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  background-color: ${props => {
    if (props.$type === "edit") return "var(--accent-color)";
    if (props.$type === "delete") return "var(--danger-color)";
    if (props.$type === "view") return "#333";
    return "var(--secondary-color)";
  }};
  color: white;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const FormContainer = styled.div`
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SubmitButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CancelButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--text-color);
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
  
  h3 {
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-color);
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }
`;

const PreviewThumbnail = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 300px;
  
  img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
`;

// Lista de vídeos
const VideosList = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    // Em um cenário real, aqui faríamos uma chamada à API
    setVideos(recentVideos);
  }, []);
  
  const handleDelete = (id) => {
    // Em um cenário real, aqui faríamos uma chamada à API para deletar
    if (window.confirm('Tem certeza que deseja excluir este vídeo?')) {
      setVideos(videos.filter(item => item.id !== id));
    }
  };
  
  const openYoutubeVideo = (id) => {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
  };
  
  return (
    <AdminVideosContainer>
      <PageHeader>
        <h2>Gerenciar Vídeos</h2>
        <AddButton to="/admin/videos/adicionar">
          + Novo Vídeo
        </AddButton>
      </PageHeader>
      
      {videos.length > 0 ? (
        <VideosGrid>
          {videos.map(video => (
            <VideoCard key={video.id}>
              <VideoThumbnail onClick={() => openYoutubeVideo(video.id)}>
                <img src={video.thumbnail} alt={video.title} />
                <PlayIcon>
                  <FaYoutube />
                </PlayIcon>
              </VideoThumbnail>
              <VideoInfo>
                <VideoTitle>{video.title}</VideoTitle>
                <VideoMeta>
                  <span>{video.publishedAt}</span>
                  <span>{video.views}</span>
                </VideoMeta>
                <ActionButtons>
                  <ActionButton 
                    $type="view"
                    onClick={() => openYoutubeVideo(video.id)}
                  >
                    Ver
                  </ActionButton>
                  <ActionButton 
                    as={Link} 
                    to={`/admin/videos/editar/${video.id}`}
                    $type="edit"
                  >
                    Editar
                  </ActionButton>
                  <ActionButton 
                    $type="delete"
                    onClick={() => handleDelete(video.id)}
                  >
                    Excluir
                  </ActionButton>
                </ActionButtons>
              </VideoInfo>
            </VideoCard>
          ))}
        </VideosGrid>
      ) : (
        <EmptyState>
          <h3>Nenhum vídeo encontrado</h3>
          <p>Comece adicionando seu primeiro vídeo!</p>
          <AddButton to="/admin/videos/adicionar">
            + Novo Vídeo
          </AddButton>
        </EmptyState>
      )}
    </AdminVideosContainer>
  );
};

// Formulário para adicionar/editar vídeos
const VideoForm = ({ isEditing = false }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    youtubeId: '',
    duration: '',
    publishedAt: new Date().toISOString().split('T')[0],
    description: '',
  });
  
  const [thumbnail, setThumbnail] = useState('');
  
  useEffect(() => {
    if (isEditing) {
      // Em um cenário real, aqui faríamos uma chamada à API para buscar os dados
      // Simulando a edição do primeiro vídeo
      const videoToEdit = recentVideos[0];
      setFormData({
        title: videoToEdit.title,
        category: videoToEdit.category,
        youtubeId: videoToEdit.id,
        duration: videoToEdit.duration,
        publishedAt: videoToEdit.publishedAt,
        description: videoToEdit.description || '',
      });
      setThumbnail(videoToEdit.thumbnail);
    }
  }, [isEditing]);
  
  useEffect(() => {
    // Atualizar a thumbnail quando o ID do YouTube mudar
    if (formData.youtubeId) {
      setThumbnail(`https://img.youtube.com/vi/${formData.youtubeId}/maxresdefault.jpg`);
    }
  }, [formData.youtubeId]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Em um cenário real, aqui faríamos uma chamada à API para salvar os dados
    console.log('Formulário enviado:', { ...formData, thumbnail });
    alert(isEditing ? 'Vídeo atualizado com sucesso!' : 'Vídeo adicionado com sucesso!');
    navigate('/admin/videos');
  };
  
  // Extrair o ID do YouTube a partir de uma URL completa
  const extractYoutubeId = () => {
    const url = prompt('Cole a URL completa do vídeo do YouTube:');
    if (!url) return;
    
    let id = '';
    // Padrão para URLs no formato https://www.youtube.com/watch?v=ID
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[7].length === 11) {
      id = match[7];
      setFormData({
        ...formData,
        youtubeId: id
      });
    } else {
      alert('URL inválida. Por favor, verifique e tente novamente.');
    }
  };
  
  return (
    <AdminVideosContainer>
      <PageHeader>
        <h2>{isEditing ? 'Editar Vídeo' : 'Adicionar Vídeo'}</h2>
      </PageHeader>
      
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Título</Label>
            <Input 
              type="text" 
              id="title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="category">Categoria</Label>
            <Select 
              id="category" 
              name="category" 
              value={formData.category} 
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              <option value="Jogos">Jogos</option>
              <option value="Análises">Análises</option>
              <option value="Contratações">Contratações</option>
              <option value="Entrevistas">Entrevistas</option>
              <option value="Novidades">Novidades</option>
              <option value="Bastidores">Bastidores</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="youtubeId">ID do YouTube</Label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Input 
                type="text" 
                id="youtubeId" 
                name="youtubeId" 
                value={formData.youtubeId} 
                onChange={handleChange}
                placeholder="Ex: dQw4w9WgXcQ"
                required
                style={{ flex: 1 }}
              />
              <button 
                type="button" 
                onClick={extractYoutubeId}
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--border-radius)',
                  padding: '0 1rem',
                  cursor: 'pointer'
                }}
              >
                Extrair da URL
              </button>
            </div>
            {thumbnail && (
              <PreviewThumbnail>
                <img src={thumbnail} alt="Thumbnail do vídeo" />
              </PreviewThumbnail>
            )}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="duration">Duração</Label>
            <Input 
              type="text" 
              id="duration" 
              name="duration" 
              value={formData.duration} 
              onChange={handleChange}
              placeholder="Ex: 10:30"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="publishedAt">Data de Publicação</Label>
            <Input 
              type="date" 
              id="publishedAt" 
              name="publishedAt" 
              value={formData.publishedAt} 
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="description">Descrição</Label>
            <TextArea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <ButtonGroup>
            <SubmitButton type="submit">
              {isEditing ? 'Atualizar Vídeo' : 'Adicionar Vídeo'}
            </SubmitButton>
            <CancelButton to="/admin/videos">
              Cancelar
            </CancelButton>
          </ButtonGroup>
        </form>
      </FormContainer>
    </AdminVideosContainer>
  );
};

// Componente principal
const AdminVideos = () => {
  return (
    <Routes>
      <Route path="/" element={<VideosList />} />
      <Route path="/adicionar" element={<VideoForm isEditing={false} />} />
      <Route path="/editar/:id" element={<VideoForm isEditing={true} />} />
    </Routes>
  );
};

export default AdminVideos; 