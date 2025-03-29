import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Componente para proteger rotas administrativas.
 * Verifica se o usuário está autenticado, caso contrário redireciona para a página de login.
 */
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se existe token no localStorage
    const authToken = localStorage.getItem('auth_token');
    
    // Em um cenário real, aqui faríamos uma verificação do token com o backend
    // Para demonstração, apenas verificamos se o token existe
    if (authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    
    setIsLoading(false);
  }, []);

  // Exibir algum indicador de carregamento enquanto verifica autenticação
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  // Redirecionar para login se não estiver autenticado
  if (!isAuthenticated) {
    // Salvar a localização atual para retornar após o login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Se estiver autenticado, renderizar o conteúdo da rota
  return children;
};

export default ProtectedRoute; 