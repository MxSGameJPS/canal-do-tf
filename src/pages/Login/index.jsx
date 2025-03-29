import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AnimatedPage from '../../components/AnimatedPage';
import { FaLock, FaUser, FaSignInAlt } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
  background-color: var(--bg-color);
`;

const LoginCard = styled.div`
  background-color: var(--primary-color);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 450px;
  padding: 2.5rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-color);
    opacity: 0.8;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  padding-left: 3rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-color);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-color);
  opacity: 0.7;
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const ErrorMessage = styled.div`
  color: var(--danger-color);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: var(--text-color);
  opacity: 0.7;
  font-size: 0.9rem;
`;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Limpar mensagem de erro quando o usuário começa a digitar
    if (error) setError('');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simular validação de credenciais
    setTimeout(() => {
      // Credenciais hardcoded para demonstração
      // Em um cenário real, isso seria verificado no servidor
      if (formData.username === 'admin' && formData.password === 'admin123') {
        // Simulando salvamento do token de autenticação
        localStorage.setItem('auth_token', 'fake_jwt_token');
        localStorage.setItem('user_name', formData.username);
        
        // Redirecionar para a área de administração
        navigate('/admin');
      } else {
        setError('Usuário ou senha inválidos. Tente novamente.');
      }
      setLoading(false);
    }, 1000);
  };
  
  return (
    <AnimatedPage>
      <LoginContainer>
        <LoginCard className="animate-on-mount">
          <LoginHeader>
            <h1>Área Administrativa</h1>
            <p>Digite suas credenciais para acessar</p>
          </LoginHeader>
          
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <Input 
                type="text" 
                name="username" 
                placeholder="Nome de usuário" 
                value={formData.username}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <Input 
                type="password" 
                name="password" 
                placeholder="Senha" 
                value={formData.password}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            {error && <ErrorMessage>{error}</ErrorMessage>}
            
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Carregando...' : (
                <>
                  <FaSignInAlt /> Entrar
                </>
              )}
            </SubmitButton>
          </Form>
          
          <Footer>
            <p>© 2023 Canal do TF - Todos os direitos reservados</p>
          </Footer>
        </LoginCard>
      </LoginContainer>
    </AnimatedPage>
  );
};

export default Login; 