import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props) =>
    props.$scrolled === "true" ? "var(--primary-color)" : "transparent"};
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$scrolled === "true" ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  padding: ${(props) => (props.$scrolled === "true" ? "0.5rem 0" : "1rem 0")};
  backdrop-filter: ${(props) =>
    props.$scrolled === "true" ? "blur(5px)" : "none"};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      ${(props) => (props.$scrolled === "true" ? 0.95 : 0.7)}
    );
    z-index: -1;
    transition: all 0.3s ease;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--secondary-color);
  text-decoration: none;
  z-index: 1001;

  img {
    width: 100px;
    height: 100px;
    transition: all 0.3s ease;
    transform: ${(props) =>
      props.$scrolled === "true" ? "scale(0.9)" : "scale(1)"};
  }

  h1 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--text-color);
    text-decoration: none;
    z-index: 1001;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${(props) => (props["data-isopen"] === "true" ? "0" : "-100%")};
    width: 70%;
    max-width: 300px;
    height: 100%;
    background-color: var(--primary-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const NavItem = styled(Link)`
  color: var(--secondary-color);
  text-decoration: none;
  margin: 0 1rem;
  font-weight: 500;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 0;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary-color);
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    color: var(--secondary-color);

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--secondary-color);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const SocialIcon = styled.a`
  color: var(--secondary-color);
  font-size: 1.2rem;
  margin-left: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props["data-isopen"] === "true" ? "1" : "0")};
  visibility: ${(props) =>
    props["data-isopen"] === "true" ? "visible" : "hidden"};
  transition: all 0.3s ease;
  z-index: 999;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fechar o menu ao mudar de página
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <HeaderContainer $scrolled={scrolled ? "true" : "false"}>
      <HeaderContent>
        <Logo to="/" $scrolled={scrolled ? "true" : "false"}>
          <img src="/img/logo.jpg" alt="Canal do TF" />
          <h1>Canal do TF</h1>
        </Logo>

        <MobileMenuToggle onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuToggle>

        <Overlay data-isopen={isOpen ? "true" : "false"} onClick={toggleMenu} />

        <NavMenu data-isopen={isOpen ? "true" : "false"}>
          <NavItem to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </NavItem>
          <NavItem
            to="/noticias"
            className={location.pathname.includes("/noticias") ? "active" : ""}
          >
            Notícias
          </NavItem>
          <NavItem
            to="/videos"
            className={location.pathname === "/videos" ? "active" : ""}
          >
            Vídeos
          </NavItem>
          <NavItem
            to="/patrocinadores"
            className={location.pathname === "/patrocinadores" ? "active" : ""}
          >
            Patrocinadores
          </NavItem>
          <NavItem
            to="/sobre"
            className={location.pathname === "/sobre" ? "active" : ""}
          >
            Sobre
          </NavItem>
          <NavItem
            to="/contato"
            className={location.pathname === "/contato" ? "active" : ""}
          >
            Contato
          </NavItem>

          <SocialIcons>
            <SocialIcon
              href="https://www.youtube.com/@CANALDOTF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/canaldotf/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/canaldotf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </SocialIcon>
          </SocialIcons>
        </NavMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
