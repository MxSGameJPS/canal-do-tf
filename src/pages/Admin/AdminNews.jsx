import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { recentNews } from "../../services/mockData";

const AdminNewsContainer = styled.div`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
`;

const Th = styled.th`
  text-align: left;
  padding: 1.2rem 1rem;
  background-color: rgba(255, 204, 0, 0.1);
  color: var(--secondary-color);
  font-weight: 600;
  border-bottom: 1px solid var(--border-color);
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-color);
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  background-color: ${props => {
    if (props.$type === "edit") return "var(--accent-color)";
    if (props.$type === "delete") return "var(--danger-color)";
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

const TruncatedText = styled.div`
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

// Lista de notícias
const NewsList = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    // Em um cenário real, aqui faríamos uma chamada à API
    setNews(recentNews);
  }, []);
  
  const handleDelete = (id) => {
    // Em um cenário real, aqui faríamos uma chamada à API para deletar
    if (window.confirm('Tem certeza que deseja excluir esta notícia?')) {
      setNews(news.filter(item => item.id !== id));
    }
  };
  
  return (
    <AdminNewsContainer>
      <PageHeader>
        <h2>Gerenciar Notícias</h2>
        <AddButton to="/admin/noticias/adicionar">
          + Nova Notícia
        </AddButton>
      </PageHeader>
      
      {news.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <Th>Título</Th>
              <Th>Categoria</Th>
              <Th>Data</Th>
              <Th>Status</Th>
              <Th>Ações</Th>
            </tr>
          </thead>
          <tbody>
            {news.map(item => (
              <tr key={item.id}>
                <Td>
                  <TruncatedText>{item.title}</TruncatedText>
                </Td>
                <Td>{item.category}</Td>
                <Td>{item.date}</Td>
                <Td>Publicado</Td>
                <Td>
                  <ActionButtons>
                    <ActionButton 
                      as={Link} 
                      to={`/admin/noticias/editar/${item.id}`}
                      $type="edit"
                    >
                      Editar
                    </ActionButton>
                    <ActionButton 
                      $type="delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Excluir
                    </ActionButton>
                  </ActionButtons>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <EmptyState>
          <h3>Nenhuma notícia encontrada</h3>
          <p>Comece adicionando sua primeira notícia!</p>
          <AddButton to="/admin/noticias/adicionar">
            + Nova Notícia
          </AddButton>
        </EmptyState>
      )}
    </AdminNewsContainer>
  );
};

// Formulário para adicionar/editar notícias
const NewsForm = ({ isEditing = false }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    image: '',
    excerpt: '',
    content: '',
  });
  
  useEffect(() => {
    if (isEditing) {
      // Em um cenário real, aqui faríamos uma chamada à API para buscar os dados
      // Simulando a edição da primeira notícia
      const newsToEdit = recentNews[0];
      setFormData({
        title: newsToEdit.title,
        category: newsToEdit.category,
        date: newsToEdit.date,
        image: newsToEdit.image,
        excerpt: newsToEdit.excerpt,
        content: newsToEdit.content || '',
      });
    }
  }, [isEditing]);
  
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
    console.log('Formulário enviado:', formData);
    alert(isEditing ? 'Notícia atualizada com sucesso!' : 'Notícia adicionada com sucesso!');
    navigate('/admin/noticias');
  };
  
  return (
    <AdminNewsContainer>
      <PageHeader>
        <h2>{isEditing ? 'Editar Notícia' : 'Adicionar Notícia'}</h2>
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
            <Label htmlFor="date">Data</Label>
            <Input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="image">URL da Imagem</Label>
            <Input 
              type="text" 
              id="image" 
              name="image" 
              value={formData.image} 
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="excerpt">Resumo</Label>
            <TextArea 
              id="excerpt" 
              name="excerpt" 
              value={formData.excerpt} 
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="content">Conteúdo</Label>
            <TextArea 
              id="content" 
              name="content" 
              value={formData.content} 
              onChange={handleChange}
              required
              style={{ minHeight: "300px" }}
            />
          </FormGroup>
          
          <ButtonGroup>
            <SubmitButton type="submit">
              {isEditing ? 'Atualizar Notícia' : 'Adicionar Notícia'}
            </SubmitButton>
            <CancelButton to="/admin/noticias">
              Cancelar
            </CancelButton>
          </ButtonGroup>
        </form>
      </FormContainer>
    </AdminNewsContainer>
  );
};

// Componente principal
const AdminNews = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsList />} />
      <Route path="/adicionar" element={<NewsForm isEditing={false} />} />
      <Route path="/editar/:id" element={<NewsForm isEditing={true} />} />
    </Routes>
  );
};

export default AdminNews; 