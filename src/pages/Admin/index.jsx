import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  FaTachometerAlt,
  FaNewspaper,
  FaYoutube,
  FaHandshake,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";
import AdminNews from "./AdminNews";
import AdminVideos from "./AdminVideos";
import AdminSponsors from "./AdminSponsors";

const AdminContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 200px);
  background-color: var(--card-background);
`;

const Sidebar = styled.div`
  width: 250px;
  min-height: 100%;
  background-color: var(--primary-color);
  padding: 2rem 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? "250px" : "0")};
    position: fixed;
    z-index: 10;
    height: 100%;
    transition: width 0.3s ease;
    overflow: hidden;
  }
`;

const MobileToggle = styled.button`
  display: none;
  position: fixed;
  top: 80px;
  left: 20px;
  z-index: 20;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const AdminTitle = styled.h1`
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    display: block;
    padding: 0.75rem 1.5rem;
    color: var(--text-color);
    text-decoration: none;
    transition: var(--transition);
    border-left: 4px solid transparent;

    &:hover,
    &.active {
      background-color: rgba(255, 204, 0, 0.1);
      color: var(--secondary-color);
      border-left-color: var(--secondary-color);
    }
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem 1rem;
    margin-top: 20px;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.8rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-color);
    opacity: 0.8;
  }
`;

const Dashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const DashboardCard = styled.div`
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: var(--box-shadow);

  h3 {
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text-color);
  }

  small {
    display: block;
    color: var(--text-color);
    opacity: 0.7;
    margin-top: 0.5rem;
  }
`;

const UserInfo = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.2rem;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--text-color);
    opacity: 0.8;
  }
`;

const AdminDashboard = () => {
  return (
    <div>
      <PageHeader>
        <h2>Painel de Controle</h2>
        <p>Bem-vindo à área administrativa do Canal do TF</p>
      </PageHeader>

      <Dashboard>
        <DashboardCard>
          <h3>Notícias</h3>
          <p>24</p>
          <small>Total de notícias publicadas</small>
        </DashboardCard>

        <DashboardCard>
          <h3>Vídeos</h3>
          <p>36</p>
          <small>Total de vídeos cadastrados</small>
        </DashboardCard>

        <DashboardCard>
          <h3>Patrocinadores</h3>
          <p>8</p>
          <small>Patrocinadores ativos</small>
        </DashboardCard>

        <DashboardCard>
          <h3>Mensagens</h3>
          <p>12</p>
          <small>Mensagens não lidas</small>
        </DashboardCard>
      </Dashboard>

      <Link to="/admin/noticias" style={{ marginRight: "1rem" }}>
        Gerenciar Notícias
      </Link>
      <Link to="/admin/videos" style={{ marginRight: "1rem" }}>
        Gerenciar Vídeos
      </Link>
      <Link to="/admin/patrocinadores">Gerenciar Patrocinadores</Link>
    </div>
  );
};

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Obter nome do usuário do localStorage
    const storedUserName = localStorage.getItem("user_name");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebarOnMobile = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const handleLogout = () => {
    // Remover dados de autenticação
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_name");

    // Redirecionar para login
    navigate("/login");
  };

  return (
    <AdminContainer>
      <MobileToggle onClick={toggleSidebar}>
        {sidebarOpen ? "✕" : "☰"}
      </MobileToggle>

      <Sidebar isOpen={sidebarOpen}>
        <UserInfo>
          <h3>Olá, {userName || "Administrador"}</h3>
          <p>Último acesso: {new Date().toLocaleDateString()}</p>
        </UserInfo>

        <AdminTitle>Canal do TF Admin</AdminTitle>
        <MenuList>
          <MenuItem>
            <Link
              to="/admin"
              className={location.pathname === "/admin" ? "active" : ""}
              onClick={closeSidebarOnMobile}
            >
              <FaTachometerAlt /> Dashboard
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/admin/noticias"
              className={
                location.pathname.includes("/admin/noticias") ? "active" : ""
              }
              onClick={closeSidebarOnMobile}
            >
              <FaNewspaper /> Notícias
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/admin/videos"
              className={
                location.pathname.includes("/admin/videos") ? "active" : ""
              }
              onClick={closeSidebarOnMobile}
            >
              <FaYoutube /> Vídeos
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/admin/patrocinadores"
              className={
                location.pathname.includes("/admin/patrocinadores")
                  ? "active"
                  : ""
              }
              onClick={closeSidebarOnMobile}
            >
              <FaHandshake /> Patrocinadores
            </Link>
          </MenuItem>
          <MenuItem>
            <button onClick={handleLogout}>
              <FaSignOutAlt /> Sair
            </button>
          </MenuItem>
        </MenuList>
      </Sidebar>

      <Content>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/noticias/*" element={<AdminNews />} />
          <Route path="/videos/*" element={<AdminVideos />} />
          <Route path="/patrocinadores/*" element={<AdminSponsors />} />
        </Routes>
      </Content>
    </AdminContainer>
  );
};

export default Admin;
