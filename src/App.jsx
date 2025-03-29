import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./styles/globalStyles";

// Pages
import Home from "./pages/Home";
import News from "./pages/News";
import Videos from "./pages/Videos";
import Sponsors from "./pages/Sponsors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NewsContent from "./pages/News";
import Admin from "./pages/Admin";
import Login from "./pages/Login";

// Components
import ScrollToTop from "./components/ScrollToTop";
import YoutubeButton from "./components/YoutubeButton";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

// Componente que verifica a rota atual para decidir se deve mostrar os botões flutuantes
const FloatingButtons = () => {
  const location = useLocation();
  
  // Não mostrar botões nas rotas de admin e login
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoginRoute = location.pathname === '/login';
  
  if (isAdminRoute || isLoginRoute) {
    return null;
  }
  
  return (
    <>
      <ScrollToTop />
      <YoutubeButton />
    </>
  );
};

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/noticias/:slug" element={<NewsContent />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/patrocinadores" element={<Sponsors />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <FloatingButtons />
      </AppContainer>
    </Router>
  );
}

export default App;
