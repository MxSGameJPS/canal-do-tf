import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AboutContainer = styled.div`
  padding: 3rem 0;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  position: relative;
  margin-bottom: 1rem;
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

const PageDescription = styled.p`
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 800px;
`;

const AboutSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--primary-color);
`;
const SectionTitle2 = styled.h2`
  margin-bottom: 1.5rem;
`;


const AboutContent = styled.div`
  width: 100%;
  flex: 1;
`;

const AboutContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }

  @media (max-width: 768px) {
    grid-row: 1;
    margin-bottom: 1.5rem;
  }
`;

const MissionSection = styled.div`
  background-color: var(--text-color);
  padding: 3rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin-bottom: 4rem;
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const MissionCard = styled.div`
  text-align: center;

  h3 {
    margin: 1.5rem 0 1rem;
  }

  p {
    color: var(--primary-color);
    line-height: 1.6;
  }
`;

const MissionIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 2rem;
`;

const StatSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: var(--text-color);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  text-align: center;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatTitle = styled.div`
  font-size: 1.1rem;
  color: var(--primary-color);
`;

const CtaSection = styled.div`
  background-color: var(--primary-color);
  padding: 3rem;
  border-radius: var(--border-radius);
  color: var(--text-color);
  text-align: center;
`;

const CtaTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const CtaText = styled.p`
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

const CtaButton = styled(Link)`
  display: inline-block;
  background-color: var(--text-color);
  color: var(--primary-color);
  padding: 0.75rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);

  &:hover {
    background-color: #000000FF;
    transform: translateY(-3px);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutContent className="container">
        <PageTitle>Sobre o Canal do TF</PageTitle>
        <PageDescription>
          Conheça a história, missão e valores por trás do Canal do TF, o seu
          portal de informações sobre o Botafogo.
        </PageDescription>

        <AboutSection>
          <AboutContentGrid>
            <AboutText>
              <SectionTitle>Nossa História</SectionTitle>
              <p>
                O "Canal do TF" é o principal ponto de encontro para os
                torcedores do Botafogo de Futebol e Regatas na internet.
                Comandado pelo jornalista Thiago Franklin, o canal no YouTube
                entrega três vídeos diários com notícias, análises e bastidores
                do Glorioso, oferecendo um noticiário completo e apaixonado
                sobre o clube. Com mais de uma década de experiência cobrindo o
                Botafogo, Thiago traz credibilidade e proximidade à nação
                alvinegra, seja no YouTube, no Instagram ou em suas lives,
                sempre com o objetivo de informar e engajar os fãs.
              </p>
              <p>
                Thiago Franklin é um botafoguense raiz, nascido e criado em
                Volta Redonda, Rio de Janeiro. Radialista desde 2002 e criador
                de conteúdo desde 2009, ele transformou sua paixão pelo Fogão em
                uma missão: levar informação de qualidade aos torcedores. Além
                do "Canal do TF", Thiago é conhecido por sua autenticidade e
                dedicação, seja como comentarista na TV Ideal ou como voz ativa
                nas redes sociais.
              </p>
              <p>
                Seu e-mail para parcerias, tf@canaldotf.com, reflete seu
                compromisso em conectar o Botafogo a marcas e projetos que
                valorizem o clube. No "Canal do TF", você encontra o verdadeiro
                Thiago Franklin: um jornalista sério, um torcedor fervoroso e,
                acima de tudo, um defensor do maior clube do mundo, o Botafogo.
              </p>
            </AboutText>

            <AboutImage>
              <img
                src="https://scontent.fcxj5-1.fna.fbcdn.net/v/t51.75761-15/470952729_18289729627210586_7788412110139128423_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XPfM8kiswvgQ7kNvgGaEAm3&_nc_oc=Adl8p2FcxFr42VVK0B7-tmlxW9MguAD8_TVofNnKWSpMwWR9q_c_KmRQHtyAPbbRuy2gRc1ck-xuRr0s5pumU5Eg&_nc_zt=23&_nc_ht=scontent.fcxj5-1.fna&_nc_gid=8fEarI0IPfZPMmPDelDjTg&oh=00_AYFtAgFyJZJzhzyE0VesYeVM9BaXWjXqOhQ4QHY5H7FgQA&oe=67EDA040"
                alt="Canal do TF"
              />
            </AboutImage>
          </AboutContentGrid>
        </AboutSection>

        <MissionSection>
          <SectionTitle style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            Missão, Visão e Valores
          </SectionTitle>

          <MissionGrid>
            <MissionCard>
              <MissionIcon>
                <i className="fas fa-bullseye"></i>
              </MissionIcon>
              <h3>Missão</h3>
              <p>
                Fornecer conteúdo de qualidade sobre o Botafogo, levando
                informação precisa e análises aprofundadas para todos os
                torcedores alvinegros.
              </p>
            </MissionCard>

            <MissionCard>
              <MissionIcon>
                <i className="fas fa-eye"></i>
              </MissionIcon>
              <h3>Visão</h3>
              <p>
                Ser o principal canal de comunicação e informação sobre o
                Botafogo, reconhecido pela excelência e compromisso com a
                verdade.
              </p>
            </MissionCard>

            <MissionCard>
              <MissionIcon>
                <i className="fas fa-heart"></i>
              </MissionIcon>
              <h3>Valores</h3>
              <p>
                Transparência, ética, paixão pelo Botafogo, compromisso com a
                verdade, respeito aos torcedores e dedicação ao clube.
              </p>
            </MissionCard>
          </MissionGrid>
        </MissionSection>

        <StatSection>
          <StatCard>
            <StatNumber>240K+</StatNumber>
            <StatTitle>Inscritos no YouTube</StatTitle>
          </StatCard>

          <StatCard>
            <StatNumber>5k+</StatNumber>
            <StatTitle>Vídeos Publicados</StatTitle>
          </StatCard>

          <StatCard>
            <StatNumber>110K+</StatNumber>
            <StatTitle>Seguidores no Instagram</StatTitle>
          </StatCard>

          <StatCard>
            <StatNumber>12+</StatNumber>
            <StatTitle>Anos de História</StatTitle>
          </StatCard>
        </StatSection>

        <AboutSection>
          <AboutContentGrid>
            <AboutImage>
              <img
                src="https://scontent.fcxj5-1.fna.fbcdn.net/v/t51.75761-15/471531849_18289369453210586_2050278678440897721_n.jpg?stp=dst-jpegr_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=tnAI0Juot_YQ7kNvgEFWPRY&_nc_oc=AdlctUtRH8MgUUw_RC7vkACCeAcSvwQWRmz56ZNlbJ3xYzhX_VMb7KcBcTZeiEYAL6v3T3goyI4zOf2z5-HI3lDK&_nc_zt=23&se=-1&_nc_ht=scontent.fcxj5-1.fna&_nc_gid=RAL7uTJB4X44-W1gqm56qg&oh=00_AYG29dwLXrt3xd9YbLPHzpuJXucVuDf0ddpg1Nw1Fy3XFg&oe=67EDD10A"
                alt="Quem é o TF"
              />
            </AboutImage>

            <AboutText>
              <SectionTitle2>Quem é o TF</SectionTitle2>
              <p>
                Thiago Franklin, mais conhecido no universo alvinegro como "TF",
                é uma figura marcante entre os torcedores do Botafogo. Nascido e
                criado em Volta Redonda, no interior do Rio de Janeiro, Thiago
                carrega consigo 32 anos de uma paixão inabalável pelo clube de
                General Severiano. Seu coração, como ele mesmo diz, pulsa preto
                e branco desde o primeiro segundo de vida, uma herança que
                transcende gerações e que ele faz questão de compartilhar com o
                mundo.
              </p>
              <p>
                A trajetória de Thiago no jornalismo esportivo começou cedo. Aos
                18 anos, em 2002, ele deu os primeiros passos como radialista,
                uma profissão que abriu portas para que ele pudesse viver e
                respirar o esporte que tanto ama. Anos depois, em 2009, Thiago
                lançou o TF News, um blog dedicado exclusivamente ao Botafogo,
                onde passou a publicar conteúdos exclusivos, análises e notícias
                que rapidamente conquistaram a atenção da torcida. Sua dedicação
                e proximidade com os bastidores do clube o tornaram uma
                referência para os alvinegros.
              </p>
              <p>
                Thiago Franklin é mais do que um jornalista ou blogueiro; ele é
                um símbolo da paixão botafoguense. Com seu trabalho incansável,
                ele ilumina histórias, conecta torcedores e mantém viva a chama
                de um dos clubes mais tradicionais do futebol brasileiro. Para
                os alvinegros, "TF" é sinônimo de dedicação, amor e, acima de
                tudo, Botafogo.
              </p>
            </AboutText>
          </AboutContentGrid>
        </AboutSection>

        <CtaSection>
          <CtaTitle>Junte-se à Comunidade</CtaTitle>
          <CtaText>
            Faça parte da comunidade do Canal do TF e receba as melhores
            análises, notícias e conteúdos exclusivos sobre o Botafogo.
            Inscreva-se no nosso canal do YouTube, siga-nos nas redes sociais e
            participe das discussões.
          </CtaText>
          <CtaButton to="/contato">Entre em Contato</CtaButton>
        </CtaSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
