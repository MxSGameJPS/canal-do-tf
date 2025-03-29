import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit, FaLink } from "react-icons/fa";

const AdminSponsorsContainer = styled.div`
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

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SponsorCard = styled.div`
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SponsorLogo = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  background-color: ${props => props.$featured ? 'var(--secondary-color)' : 'rgba(255, 255, 255, 0.03)'};
  position: relative;
  
  img {
    max-width: 100%;
    max-height: 120px;
    object-fit: contain;
  }
  
  .featured-badge {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background-color: var(--accent-color);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 3px;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

const SponsorInfo = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SponsorName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--text-color);
`;

const SponsorType = styled.div`
  font-size: 0.85rem;
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 0.5rem;
`;

const SponsorWebsite = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.85rem;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--secondary-color);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 0.5rem 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 0.8rem;
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
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  
  label {
    cursor: pointer;
    color: var(--text-color);
    display: flex;
    align-items: center;
    font-weight: 400;
  }
`;

const PreviewImage = styled.div`
  margin-top: 1rem;
  
  img {
    max-width: 200px;
    max-height: 80px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
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

// Dados fictícios de patrocinadores
const mockSponsors = [
  {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
    website: "https://nike.com",
    type: "Principal",
    description: "Fornecedora oficial de material esportivo",
    featured: true,
    active: true
  },
  {
    id: 2,
    name: "Mastercard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png",
    website: "https://mastercard.com",
    type: "Ouro",
    description: "Parceiro de pagamentos oficial",
    featured: false,
    active: true
  },
  {
    id: 3,
    name: "Emirates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png",
    website: "https://emirates.com",
    type: "Principal",
    description: "Patrocinador principal - frente da camisa",
    featured: true,
    active: true
  },
  {
    id: 4,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
    website: "https://adidas.com",
    type: "Fornecedor",
    description: "Ex-fornecedor de material esportivo",
    featured: false,
    active: false
  }
];

// Lista de patrocinadores
const SponsorsList = () => {
  const [sponsors, setSponsors] = useState([]);
  
  useEffect(() => {
    // Em um cenário real, aqui faríamos uma chamada à API
    setSponsors(mockSponsors);
  }, []);
  
  const handleDelete = (id) => {
    // Em um cenário real, aqui faríamos uma chamada à API para deletar
    if (window.confirm('Tem certeza que deseja excluir este patrocinador?')) {
      setSponsors(sponsors.filter(item => item.id !== id));
    }
  };
  
  const openWebsite = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <AdminSponsorsContainer>
      <PageHeader>
        <h2>Gerenciar Patrocinadores</h2>
        <AddButton to="/admin/sponsors/adicionar">
          + Novo Patrocinador
        </AddButton>
      </PageHeader>
      
      {sponsors.length > 0 ? (
        <SponsorsGrid>
          {sponsors.map(sponsor => (
            <SponsorCard key={sponsor.id}>
              <SponsorLogo $featured={sponsor.featured}>
                <img src={sponsor.logo} alt={sponsor.name} />
                {sponsor.featured && <div className="featured-badge">Destaque</div>}
              </SponsorLogo>
              <SponsorInfo>
                <SponsorName>{sponsor.name}</SponsorName>
                <SponsorType>
                  {sponsor.type} {!sponsor.active && "(Inativo)"}
                </SponsorType>
                <SponsorWebsite href={sponsor.website} target="_blank" rel="noopener noreferrer">
                  <FaLink /> Visitar site
                </SponsorWebsite>
                <ActionButtons>
                  <ActionButton 
                    as={Link} 
                    to={`/admin/sponsors/editar/${sponsor.id}`}
                    $type="edit"
                  >
                    <FaEdit /> Editar
                  </ActionButton>
                  <ActionButton 
                    $type="delete"
                    onClick={() => handleDelete(sponsor.id)}
                  >
                    <FaTrash /> Excluir
                  </ActionButton>
                </ActionButtons>
              </SponsorInfo>
            </SponsorCard>
          ))}
        </SponsorsGrid>
      ) : (
        <EmptyState>
          <h3>Nenhum patrocinador encontrado</h3>
          <p>Comece adicionando seu primeiro patrocinador!</p>
          <AddButton to="/admin/sponsors/adicionar">
            + Novo Patrocinador
          </AddButton>
        </EmptyState>
      )}
    </AdminSponsorsContainer>
  );
};

// Formulário para adicionar/editar patrocinadores
const SponsorForm = ({ isEditing = false }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    website: 'https://',
    type: '',
    description: '',
    featured: false,
    active: true
  });
  
  useEffect(() => {
    if (isEditing) {
      // Em um cenário real, aqui faríamos uma chamada à API para buscar os dados
      // Simulando a edição do primeiro patrocinador
      const sponsorToEdit = mockSponsors[0];
      setFormData({
        name: sponsorToEdit.name,
        logo: sponsorToEdit.logo,
        website: sponsorToEdit.website,
        type: sponsorToEdit.type,
        description: sponsorToEdit.description,
        featured: sponsorToEdit.featured,
        active: sponsorToEdit.active
      });
    }
  }, [isEditing]);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Em um cenário real, aqui faríamos uma chamada à API para salvar os dados
    console.log('Formulário enviado:', formData);
    alert(isEditing ? 'Patrocinador atualizado com sucesso!' : 'Patrocinador adicionado com sucesso!');
    navigate('/admin/sponsors');
  };
  
  return (
    <AdminSponsorsContainer>
      <PageHeader>
        <h2>{isEditing ? 'Editar Patrocinador' : 'Adicionar Patrocinador'}</h2>
      </PageHeader>
      
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Nome</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="logo">URL do Logo</Label>
            <Input 
              type="url" 
              id="logo" 
              name="logo" 
              value={formData.logo} 
              onChange={handleChange}
              placeholder="https://example.com/logo.png"
              required
            />
            {formData.logo && (
              <PreviewImage>
                <img src={formData.logo} alt="Logo preview" />
              </PreviewImage>
            )}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="website">Website</Label>
            <Input 
              type="url" 
              id="website" 
              name="website" 
              value={formData.website} 
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="type">Tipo de Patrocínio</Label>
            <Select 
              id="type" 
              name="type" 
              value={formData.type} 
              onChange={handleChange}
              required
            >
              <option value="">Selecione um tipo</option>
              <option value="Principal">Principal</option>
              <option value="Ouro">Ouro</option>
              <option value="Prata">Prata</option>
              <option value="Bronze">Bronze</option>
              <option value="Fornecedor">Fornecedor</option>
              <option value="Apoiador">Apoiador</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="description">Descrição</Label>
            <TextArea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Checkbox>
              <input 
                type="checkbox" 
                id="featured" 
                name="featured" 
                checked={formData.featured} 
                onChange={handleChange}
              />
              <label htmlFor="featured">
                Destacar na página inicial e de patrocinadores
              </label>
            </Checkbox>
          </FormGroup>
          
          <FormGroup>
            <Checkbox>
              <input 
                type="checkbox" 
                id="active" 
                name="active" 
                checked={formData.active} 
                onChange={handleChange}
              />
              <label htmlFor="active">
                Patrocinador ativo
              </label>
            </Checkbox>
          </FormGroup>
          
          <ButtonGroup>
            <SubmitButton type="submit">
              {isEditing ? 'Atualizar Patrocinador' : 'Adicionar Patrocinador'}
            </SubmitButton>
            <CancelButton to="/admin/sponsors">
              Cancelar
            </CancelButton>
          </ButtonGroup>
        </form>
      </FormContainer>
    </AdminSponsorsContainer>
  );
};

// Componente principal
const AdminSponsors = () => {
  return (
    <Routes>
      <Route path="/" element={<SponsorsList />} />
      <Route path="/adicionar" element={<SponsorForm isEditing={false} />} />
      <Route path="/editar/:id" element={<SponsorForm isEditing={true} />} />
    </Routes>
  );
};

export default AdminSponsors; 