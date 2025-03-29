import React, { useState } from "react";
import styled from "styled-components";
import NewsCard from "../../components/NewsCard";
import { recentNews } from "../../services/mockData";
import AnimatedPage from "../../components/AnimatedPage";

const NewsContainer = styled.div`
  padding: 3rem 0;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NewsContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  flex: 1;
`;

const PageTitle = styled.h1`
  position: relative;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
  padding-bottom: 1rem;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: var(--primary-color);
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const FilterButton = styled.button`
  background-color: ${(props) =>
    props.$active === "true" ? "var(--primary-color)" : "transparent"};
  color: ${(props) =>
    props.$active === "true" ? "var(--secondary-color)" : "var(--text-color)"};
  border: 1px solid
    ${(props) => (props.$active === "true" ? "var(--primary-color)" : "#ddd")};
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: ${(props) =>
      props.$active === "true" ? "var(--primary-color)" : "#f5f5f5"};
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: var(--border-radius);

  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  font-size: 1.2rem;
  color: var(--text-light);
`;

const News = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    { label: "Todos", value: "all" },
    { label: "Notícias", value: "Notícias" },
    { label: "Jogos", value: "Jogos" },
    { label: "Contratações", value: "Contratações" },
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(6);
  };

  // Filtrar notícias com base na categoria ativa e termo de busca
  const filteredNews = recentNews.filter((news) => {
    const categoryMatch =
      activeFilter === "all" || news.category === activeFilter;
    const searchMatch =
      searchTerm === "" ||
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  // Exibir apenas o número de notícias visíveis
  const visibleNews = filteredNews.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <AnimatedPage>
      <NewsContainer>
        <NewsContent>
          <PageTitle className="animate-on-mount">Últimas Notícias</PageTitle>

          {/* Filtros de categoria */}
          <FilterContainer className="animate-on-mount">
            {categories.map((category) => (
              <FilterButton
                key={category.value}
                $active={(activeFilter === category.value).toString()}
                onClick={() => handleFilterChange(category.value)}
              >
                {category.label}
              </FilterButton>
            ))}
          </FilterContainer>

          {/* Busca */}
          <SearchContainer className="animate-on-mount">
            <SearchInput
              type="text"
              placeholder="Buscar notícias..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </SearchContainer>

          {/* Lista de notícias */}
          <div className="animate-on-mount">
            {visibleNews.length > 0 ? (
              <NewsGrid>
                {visibleNews.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </NewsGrid>
            ) : (
              <NoResults>
                Nenhuma notícia encontrada para os filtros selecionados.
              </NoResults>
            )}

            {/* Botão Carregar Mais */}
            {visibleCount < filteredNews.length && (
              <LoadMoreButton onClick={loadMore}>
                Carregar mais notícias
              </LoadMoreButton>
            )}
          </div>
        </NewsContent>
      </NewsContainer>
    </AnimatedPage>
  );
};

export default News;
