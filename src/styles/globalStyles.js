import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #0d1117;
    --secondary-color: #ffcc00;
    --text-color: #e6e6e6;
    --accent-color: #3498db;
    --danger-color: #e74c3c;
    --success-color: #2ecc71;
    --background-color: #0d1117;
    --card-background: #161b22;
    --card-hover: #21262d;
    --border-color: #30363d;
    --transition: all 0.3s ease;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --max-width: 1200px;
    --background-light: #f5f5f5;
    --background-dark: #1a1a1a;
    --text-light: #fff;
    --text-dark: #1a1a1a;
    --text-medium: #333;
    --container-width: 1200px;
    --header-height: 70px;
    --footer-height: auto;
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 5rem;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
    transition: var(--transition);
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 100%;
    outline: 0;
    border: 0;
  }

  button {
    cursor: pointer;
    transition: var(--transition);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  /* Animações */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }

  .fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .slideInLeft {
    animation: slideInLeft 0.8s ease forwards;
  }

  .slideInRight {
    animation: slideInRight 0.8s ease forwards;
  }

  .slideInUp {
    animation: slideInUp 0.8s ease forwards;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .bounce {
    animation: bounce 2s infinite;
  }

  /* Utilidades de animação */
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-500 { animation-delay: 0.5s; }
  .delay-600 { animation-delay: 0.6s; }
  .delay-700 { animation-delay: 0.7s; }
  .delay-800 { animation-delay: 0.8s; }
  .delay-900 { animation-delay: 0.9s; }
  .delay-1000 { animation-delay: 1s; }

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Animações globais */
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  /* Classes de utilidade para animações */
  .slide-left {
    animation: slideInFromLeft 0.5s ease-out forwards;
  }
  
  .slide-right {
    animation: slideInFromRight 0.5s ease-out forwards;
  }
  
  /* Para elementos que aparecem com delay */
  .delay-1 {
    animation-delay: 0.1s;
  }
  
  .delay-2 {
    animation-delay: 0.2s;
  }
  
  .delay-3 {
    animation-delay: 0.3s;
  }
  
  .delay-4 {
    animation-delay: 0.4s;
  }
  
  .delay-5 {
    animation-delay: 0.5s;
  }

  /* Animações para elementos com scroll detection */
  .animate-on-mount {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .animate-on-mount.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }
  
  .animate-on-scroll.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default GlobalStyle;
