import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  margin-top: ${({ $hasHeader }) => ($hasHeader ? "80px" : "0")};
`;

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Verificar se a rota atual é administrativa ou de login
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoginRoute = location.pathname === '/login';
  
  // Mostrar o header e footer apenas se não for rota admin ou login
  const shouldShowHeaderFooter = !isAdminRoute && !isLoginRoute;
  
  return (
    <LayoutContainer>
      {shouldShowHeaderFooter && <Header />}
      <MainContent $hasHeader={shouldShowHeaderFooter}>{children}</MainContent>
      {shouldShowHeaderFooter && <Footer />}
    </LayoutContainer>
  );
};

export default Layout;
