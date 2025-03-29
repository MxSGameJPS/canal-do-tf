// Dados mockados para o carrossel de destaque
export const featuredSlides = [
  {
    id: 1,
    title: "Botafogo vence o Vasco em clássico emocionante",
    excerpt:
      "Com gols de Tiquinho Soares e Eduardo, Botafogo vence clássico e se mantém na liderança do Brasileirão.",
    image: "https://source.unsplash.com/random/1200x600/?soccer",
    category: "Jogos",
    link: "/noticias/botafogo-vence-vasco-classico",
  },
  {
    id: 2,
    title:
      "Análise: A evolução tática do Botafogo sob o comando de Artur Jorge",
    excerpt:
      "O treinador português tem implementado um estilo de jogo que tem dado resultados expressivos para o Glorioso.",
    image: "https://source.unsplash.com/random/1200x600/?coach",
    category: "Análises",
    link: "/noticias/analise-evolucao-tatica-botafogo",
  },
  {
    id: 3,
    title: "Botafogo anuncia três reforços para a temporada",
    excerpt:
      "O clube carioca anunciou a contratação de três novos jogadores para fortalecer o elenco na disputa da Libertadores.",
    image: "https://source.unsplash.com/random/1200x600/?football",
    category: "Contratações",
    link: "/noticias/botafogo-anuncia-tres-reforcos",
  },
];

// Notícias para o carousel principal
export const noticiasCarousel = [
  {
    id: 1,
    title: "Fifa suspende transfer ban do Botafogo após pagamento ao Guaraní",
    excerpt:
      "O Botafogo resolveu a dívida com o Guaraní-PAR pela contratação de Segovinha, e a Fifa suspendeu o transfer ban nesta sexta (28/03). O clube está liberado para registrar novos jogadores.",
    date: "2025-03-28",
    image:
      "https://s2-ge.glbimg.com/vSQjtxvwINlWQKjMqc16NnGplRM=/0x0:7270x4850/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/L/a/5S8bzpRFiA1B5NrPuz9Q/gettyimages-2182505117.jpg",
    category: "Notícias",
    link: "/noticias/1",
  },
  {
    id: 2,
    title: "Botafogo estreia com maratona de 9 jogos em 28 dias em abril",
    excerpt:
      "Após um mês de preparação, o Botafogo enfrenta três jogos da Libertadores e seis do Brasileirão a partir de 30/03 contra o Palmeiras, no Allianz Parque.",
    date: "2025-03-19",
    image:
      "https://s2-ge.glbimg.com/17AQ1OGnPGc5AEtnNOKBxaa1rFY=/0x0:799x533/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/x/h/rDpwaoRN21EU4FD5YAVw/54395587033-8abebb23f3-c.jpg",
    category: "Jogos",
    link: "/noticias/2",
  },
  {
    id: 3,
    title: "Botafogo acerta renovação com John até 2028",
    excerpt:
      "O goleiro John, destaque na Libertadores 2024, renovou com o Botafogo até 2028, com valorização salarial e nova multa rescisória ajustada.",
    date: "2025-03-14",
    image:
      "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0307%2Fr1460994_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg",
    category: "Contratações",
    link: "/noticias/3",
  },
  {
    id: 4,
    title: "Botafogo e Gregore definem cláusula de venda obrigatória",
    excerpt:
      "O volante Gregore terá que ser vendido em caso de proposta acima de 8 milhões de dólares do exterior na janela de meio de ano, conforme novo contrato.",
    date: "2025-03-21",
    image:
      "https://s2-ge.glbimg.com/YrE1UNqRLUBM_roRsr2VJfO0LHY=/0x0:3000x2000/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/m/p/O7erQBQDqtnXNbPEcA6g/gettyimages-2188916439.jpg",
    category: "Contratações",
    link: "/noticias/4",
  },
  {
    id: 5,
    title: "Botafogo sofre transfer ban por dívida com Guaraní",
    excerpt:
      "A Fifa aplicou um transfer ban ao Botafogo em 27/03 devido a uma dívida com o Guaraní na contratação de Segovinha. O clube quitou o valor e aguardava regularização.",
    date: "2025-03-27",
    image:
      "https://s2-oglobo.glbimg.com/iV6w4DJgOzQhUIh9OH1AYqQQZK4=/0x0:3543x2362/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/c/z/UGSRlkSV2XBdf6Bgkaog/103846606-matias-segovia-botafogo-x-coritiba-bragantino-pelo-campeonato-brasileiro-no-estadio-ni.jpg",
    category: "Notícias",
    link: "/noticias/5",
  },
];

// Notícias completas do carousel para renderizar na página individual
export const noticiasCompletas = [
  {
    id: 1,
    titulo: "Fifa suspende transfer ban do Botafogo após pagamento ao Guaraní",
    data: "2025-03-28",
    imagem:
      "https://s2-ge.glbimg.com/vSQjtxvwINlWQKjMqc16NnGplRM=/0x0:7270x4850/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/L/a/5S8bzpRFiA1B5NrPuz9Q/gettyimages-2182505117.jpg",
    categoria: "Notícias",
    conteudo:
      "O Botafogo deu um passo importante para regularizar sua situação no mercado de transferências. Nesta sexta-feira, 28 de março de 2025, a Fifa confirmou a suspensão do transfer ban imposto ao clube devido a uma dívida com o Guaraní, do Paraguai, referente à contratação do jovem Segovinha. O Alvinegro, que havia sido punido temporariamente por três janelas de transferências no dia anterior, agiu rápido e quitou os valores pendentes, enviando os comprovantes tanto ao clube paraguaio quanto à entidade máxima do futebol. Com isso, o Botafogo está liberado para registrar novos jogadores já na próxima janela, prevista para junho. A resolução do caso é um alívio para a torcida e para a diretoria, que planeja reforçar o elenco para a disputa do Brasileirão e da Libertadores. O técnico Renato Paiva, que assumiu recentemente, já pode começar a pensar em nomes para fortalecer o time que estreia contra o Palmeiras no dia 30. Fica a lição: organização fora de campo é tão importante quanto o desempenho dentro das quatro linhas!",
  },
  {
    id: 2,
    titulo: "Botafogo estreia com maratona de 9 jogos em 28 dias em abril",
    data: "2025-03-19",
    imagem:
      "https://s2-ge.glbimg.com/17AQ1OGnPGc5AEtnNOKBxaa1rFY=/0x0:799x533/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/x/h/rDpwaoRN21EU4FD5YAVw/54395587033-8abebb23f3-c.jpg",
    categoria: "Jogos",
    conteudo:
      "O Botafogo está de volta à ativa, e o retorno não será nada tranquilo. Após um mês de preparação forçada por causa da eliminação precoce no Carioca, o Alvinegro encara uma verdadeira maratona em abril: serão nove jogos em apenas 28 dias, misturando Brasileirão e Libertadores. Tudo começa no dia 30 de março, quando o time enfrenta o Palmeiras, atual vice-campeão brasileiro, no Allianz Parque, às 16h. Depois disso, é um jogo atrás do outro: no dia 2 de abril, o desafio é fora de casa contra a Universidad de Chile, pela Libertadores, às 21h30. A sequência inclui ainda confrontos duríssimos como Estudiantes-ARG e Carabobo-VEN na competição continental, além de rivais de peso no campeonato nacional. O técnico Renato Paiva aproveitou o período sem jogos oficiais para ajustar o elenco, que já mostrou potencial no jogo-treino contra o Cruzeiro (3 a 3). A torcida está ansiosa para ver como o time vai se sair sob o comando do novo treinador, mas uma coisa é certa: abril vai testar o fôlego e a qualidade do Fogão. Será que o atual campeão da Libertadores aguenta o tranco?",
  },
  {
    id: 3,
    titulo: "Botafogo acerta renovação com John até 2028",
    data: "2025-03-14",
    imagem:
      "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0307%2Fr1460994_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg",
    categoria: "Contratações",
    conteudo:
      "A torcida do Botafogo pode comemorar: o goleiro John, um dos grandes nomes da conquista da Libertadores 2024, assinou um novo contrato com o clube até 2028. A renovação, anunciada no dia 14 de março de 2025, é uma valorização merecida para o camisa 1, que foi eleito o melhor goleiro tanto do Brasileirão quanto da competição continental no ano passado. Com 58 jogos pelo Alvinegro desde sua chegada em janeiro de 2024, John se firmou como titular absoluto após a saída de Lucas Perri e se tornou um pilar defensivo do time. O novo acordo inclui um aumento salarial e uma multa rescisória ajustada, que deve dificultar qualquer assédio de clubes europeus ou asiáticos. As conversas entre o Botafogo e o estafe do jogador começaram no início do mês e foram concluídas rapidamente, mostrando o desejo mútuo de continuar essa parceria vitoriosa. John, que já levantou dois troféus com o Fogão, agora foca na preparação para a temporada 2025, que começa com o duelo contra o Palmeiras no dia 30. Com ele no gol, a nação alvinegra tem motivos de sobra pra confiar em mais conquistas!",
  },
  {
    id: 4,
    titulo: "Botafogo e Gregore definem cláusula de venda obrigatória",
    data: "2025-03-21",
    imagem:
      "https://s2-ge.glbimg.com/YrE1UNqRLUBM_roRsr2VJfO0LHY=/0x0:3000x2000/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/m/p/O7erQBQDqtnXNbPEcA6g/gettyimages-2188916439.jpg",
    categoria: "Contratações",
    conteudo:
      "O Botafogo avançou nas negociações com Gregore e definiu um novo contrato que traz segurança ao clube e ao jogador. No dia 21 de março de 2025, foi anunciado que o volante, titular absoluto nos títulos de 2024, terá uma cláusula de venda obrigatória caso receba uma proposta superior a 8 milhões de dólares (cerca de R$ 46 milhões) do exterior na janela de meio de ano. A medida é uma forma de proteger o Alvinegro, que recusou ofertas do Atlético-MG e do Al-Rayyan no início do ano, mas também de valorizar o camisa 26, que terá um aumento salarial. Gregore, com 62 jogos, três gols e duas assistências pelo Fogão, é peça-chave no meio-campo de Renato Paiva. As conversas entre o empresário Paulo Pitombeira, John Textor e o diretor Alessandro Brito foram intensas, mas o acordo foi selado com sucesso. O volante, que já admitiu ter recebido propostas 'tentadoras', optou por ficar no 'clube maravilhoso', como ele mesmo chamou o Botafogo. Agora, o foco é na estreia contra o Palmeiras, mas a torcida já fica de olho no mercado de junho: será que Gregore fica ou vira mais um negócio milionário do Fogão?",
  },
  {
    id: 5,
    titulo: "Botafogo sofre transfer ban por dívida com Guaraní",
    data: "2025-03-27",
    imagem:
      "https://s2-oglobo.glbimg.com/iV6w4DJgOzQhUIh9OH1AYqQQZK4=/0x0:3543x2362/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/c/z/UGSRlkSV2XBdf6Bgkaog/103846606-matias-segovia-botafogo-x-coritiba-bragantino-pelo-campeonato-brasileiro-no-estadio-ni.jpg",
    categoria: "Notícias",
    conteudo:
      "O Botafogo passou por um susto às vésperas da estreia no Brasileirão 2025. Na quinta-feira, 27 de março, a Fifa aplicou um transfer ban ao clube por uma dívida com o Guaraní, do Paraguai, relacionada à contratação de Segovinha. A punição, que proibia o Alvinegro de registrar novos jogadores por três janelas de transferências, pegou a torcida de surpresa e gerou preocupação na diretoria. No entanto, o clube agiu rápido: no mesmo dia, quitou os valores pendentes e enviou os comprovantes ao Guaraní e à Fifa, aguardando a suspensão do banimento, que acabou confirmada no dia seguinte. O caso expôs a importância de uma gestão financeira eficiente, algo que o Botafogo vem tentando aprimorar desde a chegada da SAF de John Textor. Apesar do transtorno, o episódio teve um final feliz, e o Fogão chega liberado para a temporada, começando com o duelo contra o Palmeiras no dia 30. Segovinha, o pivô da confusão, agora tem a chance de justificar o investimento em campo. Que esse seja o último susto antes de uma campanha vitoriosa!",
  },
];

// Dados mockados para as notícias recentes
export const recentNews = [
  {
    id: 1,
    title: "Fifa suspende transfer ban do Botafogo após pagamento ao Guaraní",
    excerpt:
      "O Botafogo resolveu a dívida com o Guaraní-PAR pela contratação de Segovinha, e a Fifa suspendeu o transfer ban nesta sexta (28/03). O clube está liberado para registrar novos jogadores.",
    content:
      "O Botafogo deu um passo importante para regularizar sua situação no mercado de transferências. Nesta sexta-feira, 28 de março de 2025, a Fifa confirmou a suspensão do transfer ban imposto ao clube devido a uma dívida com o Guaraní, do Paraguai, referente à contratação do jovem Segovinha. O Alvinegro, que havia sido punido temporariamente por três janelas de transferências no dia anterior, agiu rápido e quitou os valores pendentes, enviando os comprovantes tanto ao clube paraguaio quanto à entidade máxima do futebol. Com isso, o Botafogo está liberado para registrar novos jogadores já na próxima janela, prevista para junho. A resolução do caso é um alívio para a torcida e para a diretoria, que planeja reforçar o elenco para a disputa do Brasileirão e da Libertadores. O técnico Renato Paiva, que assumiu recentemente, já pode começar a pensar em nomes para fortalecer o time que estreia contra o Palmeiras no dia 30. Fica a lição: organização fora de campo é tão importante quanto o desempenho dentro das quatro linhas!",
    image: "https://s2-ge.glbimg.com/vSQjtxvwINlWQKjMqc16NnGplRM=/0x0:7270x4850/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/L/a/5S8bzpRFiA1B5NrPuz9Q/gettyimages-2182505117.jpg",
    category: "Notícias",
    author: "Roberto Silva",
    publishedAt: "2025-03-28",
    views: 3458,
    featured: true,
  },
  {
    id: 2,
    title: "Botafogo estreia com maratona de 9 jogos em 28 dias em abril",
    excerpt:
      "Após um mês de preparação, o Botafogo enfrenta três jogos da Libertadores e seis do Brasileirão a partir de 30/03 contra o Palmeiras, no Allianz Parque.",
    content:
      "O Botafogo está de volta à ativa, e o retorno não será nada tranquilo. Após um mês de preparação forçada por causa da eliminação precoce no Carioca, o Alvinegro encara uma verdadeira maratona em abril: serão nove jogos em apenas 28 dias, misturando Brasileirão e Libertadores. Tudo começa no dia 30 de março, quando o time enfrenta o Palmeiras, atual vice-campeão brasileiro, no Allianz Parque, às 16h. Depois disso, é um jogo atrás do outro: no dia 2 de abril, o desafio é fora de casa contra a Universidad de Chile, pela Libertadores, às 21h30. A sequência inclui ainda confrontos duríssimos como Estudiantes-ARG e Carabobo-VEN na competição continental, além de rivais de peso no campeonato nacional. O técnico Renato Paiva aproveitou o período sem jogos oficiais para ajustar o elenco, que já mostrou potencial no jogo-treino contra o Cruzeiro (3 a 3). A torcida está ansiosa para ver como o time vai se sair sob o comando do novo treinador, mas uma coisa é certa: abril vai testar o fôlego e a qualidade do Fogão. Será que o atual campeão da Libertadores aguenta o tranco?",
    image: "https://s2-ge.glbimg.com/17AQ1OGnPGc5AEtnNOKBxaa1rFY=/0x0:799x533/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/x/h/rDpwaoRN21EU4FD5YAVw/54395587033-8abebb23f3-c.jpg",
    category: "Jogos",
    author: "Carlos Mendes",
    publishedAt: "2025-03-19",
    views: 2854,
    featured: true,
  },
  {
    id: 3,
    title: "Botafogo acerta renovação com John até 2028",
    excerpt:
      "O goleiro John, destaque na Libertadores 2024, renovou com o Botafogo até 2028, com valorização salarial e nova multa rescisória ajustada.",
    content:
      "A torcida do Botafogo pode comemorar: o goleiro John, um dos grandes nomes da conquista da Libertadores 2024, assinou um novo contrato com o clube até 2028. A renovação, anunciada no dia 14 de março de 2025, é uma valorização merecida para o camisa 1, que foi eleito o melhor goleiro tanto do Brasileirão quanto da competição continental no ano passado. Com 58 jogos pelo Alvinegro desde sua chegada em janeiro de 2024, John se firmou como titular absoluto após a saída de Lucas Perri e se tornou um pilar defensivo do time. O novo acordo inclui um aumento salarial e uma multa rescisória ajustada, que deve dificultar qualquer assédio de clubes europeus ou asiáticos. As conversas entre o Botafogo e o estafe do jogador começaram no início do mês e foram concluídas rapidamente, mostrando o desejo mútuo de continuar essa parceria vitoriosa. John, que já levantou dois troféus com o Fogão, agora foca na preparação para a temporada 2025, que começa com o duelo contra o Palmeiras no dia 30. Com ele no gol, a nação alvinegra tem motivos de sobra pra confiar em mais conquistas!",
    image: "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0307%2Fr1460994_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg",
    category: "Contratações",
    author: "André Campos",
    publishedAt: "2025-03-14",
    views: 3876,
    featured: false,
  },
  {
    id: 4,
    title: "Botafogo e Gregore definem cláusula de venda obrigatória",
    excerpt:
      "O volante Gregore terá que ser vendido em caso de proposta acima de 8 milhões de dólares do exterior na janela de meio de ano, conforme novo contrato.",
    content:
      "O Botafogo avançou nas negociações com Gregore e definiu um novo contrato que traz segurança ao clube e ao jogador. No dia 21 de março de 2025, foi anunciado que o volante, titular absoluto nos títulos de 2024, terá uma cláusula de venda obrigatória caso receba uma proposta superior a 8 milhões de dólares (cerca de R$ 46 milhões) do exterior na janela de meio de ano. A medida é uma forma de proteger o Alvinegro, que recusou ofertas do Atlético-MG e do Al-Rayyan no início do ano, mas também de valorizar o camisa 26, que terá um aumento salarial. Gregore, com 62 jogos, três gols e duas assistências pelo Fogão, é peça-chave no meio-campo de Renato Paiva. As conversas entre o empresário Paulo Pitombeira, John Textor e o diretor Alessandro Brito foram intensas, mas o acordo foi selado com sucesso. O volante, que já admitiu ter recebido propostas 'tentadoras', optou por ficar no 'clube maravilhoso', como ele mesmo chamou o Botafogo. Agora, o foco é na estreia contra o Palmeiras, mas a torcida já fica de olho no mercado de junho: será que Gregore fica ou vira mais um negócio milionário do Fogão?",
    image: "https://s2-ge.glbimg.com/YrE1UNqRLUBM_roRsr2VJfO0LHY=/0x0:3000x2000/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/m/p/O7erQBQDqtnXNbPEcA6g/gettyimages-2188916439.jpg",
    category: "Contratações",
    author: "Mariana Costa",
    publishedAt: "2025-03-21",
    views: 4267,
    featured: false,
  },
  {
    id: 5,
    title: "Botafogo sofre transfer ban por dívida com Guaraní",
    excerpt:
      "A Fifa aplicou um transfer ban ao Botafogo em 27/03 devido a uma dívida com o Guaraní na contratação de Segovinha. O clube quitou o valor e aguardava regularização.",
    content:
      "O Botafogo passou por um susto às vésperas da estreia no Brasileirão 2025. Na quinta-feira, 27 de março, a Fifa aplicou um transfer ban ao clube por uma dívida com o Guaraní, do Paraguai, relacionada à contratação de Segovinha. A punição, que proibia o Alvinegro de registrar novos jogadores por três janelas de transferências, pegou a torcida de surpresa e gerou preocupação na diretoria. No entanto, o clube agiu rápido: no mesmo dia, quitou os valores pendentes e enviou os comprovantes ao Guaraní e à Fifa, aguardando a suspensão do banimento, que acabou confirmada no dia seguinte. O caso expôs a importância de uma gestão financeira eficiente, algo que o Botafogo vem tentando aprimorar desde a chegada da SAF de John Textor. Apesar do transtorno, o episódio teve um final feliz, e o Fogão chega liberado para a temporada, começando com o duelo contra o Palmeiras no dia 30. Segovinha, o pivô da confusão, agora tem a chance de justificar o investimento em campo. Que esse seja o último susto antes de uma campanha vitoriosa!",
    image: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/03/27/53049139420_68c63bfa69_3k-s1jg44e4wyet.jpg",
    category: "Notícias",
    author: "Roberto Silva",
    publishedAt: "2025-03-27",
    views: 2289,
    featured: false,
  },
];

// Dados mockados para os vídeos recentes
export const recentVideos = [
  {
    id: "JnMGRdIExuU",
    title: "COMEÇOU A TEMPORADA 2025 DO BOTAFOGO COM MARATONA - CANAL DO TF",
    thumbnail: "https://img.youtube.com/vi/JnMGRdIExuU/maxresdefault.jpg",
    category: "Notícias",
    publishedAt: "19/03/2025",
    duration: "12:35",
    views: "15.674 visualizações",
    description:
      "Começou a temporada 2025 do Botafogo com uma maratona de jogos. Confira as análises e expectativas para os próximos desafios do Glorioso.",
  },
  {
    id: "G7LM3OQ5UFg",
    title:
      "FOGÃO NA LIBERTA E NO BRASILEIRÃO: TUDO SOBRE A MARATONA DE JOGOS DO BOTAFOGO - CANAL DO TF",
    thumbnail: "https://img.youtube.com/vi/G7LM3OQ5UFg/maxresdefault.jpg",
    category: "Análises",
    publishedAt: "20/03/2025",
    duration: "14:20",
    views: "13.482 visualizações",
    description:
      "Análise completa sobre a participação do Botafogo na Libertadores e no Brasileirão. Como o time vai encarar essa maratona de jogos?",
  },
  {
    id: "jVSoRV1Nryw",
    title:
      "TRANSFER BAN NO BOTAFOGO? ENTENDA O QUE PODE ACONTECER - CANAL DO TF",
    thumbnail: "https://img.youtube.com/vi/jVSoRV1Nryw/maxresdefault.jpg",
    category: "Notícias",
    publishedAt: "27/03/2025",
    duration: "16:45",
    views: "22.319 visualizações",
    description:
      "Entenda o que é o transfer ban, por que o Botafogo está sob risco e quais as possíveis consequências para o clube nesta temporada.",
  },
  {
    id: "RfN8SoY8Opw",
    title:
      "BOTAFOGO LIVRE DO TRANSFER BAN: O QUE MUDA NO PLANEJAMENTO? - CANAL DO TF",
    thumbnail: "https://img.youtube.com/vi/RfN8SoY8Opw/maxresdefault.jpg",
    category: "Notícias",
    publishedAt: "28/03/2025",
    duration: "13:10",
    views: "18.965 visualizações",
    description:
      "Botafogo está livre do transfer ban! Saiba o que muda no planejamento do clube para a temporada e quais reforços podem chegar.",
  },
];

// Dados mockados para a página de patrocinadores
export const sponsors = [
  {
    id: 1,
    name: "Aposente Facil",
    logo: "https://static.wixstatic.com/media/78d6a9_20141c56978e42c384e94a198fcf7f49~mv2.png/v1/fill/w_517,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo.png",
    description: "SE APOSENTAR NÃO PRECISA SER COMPLICADO",
    website: "https://ojkmarketing.wixsite.com/aposente-facil",
  },
  {
    id: 2,
    name: "Vbet",
    logo: "https://static.botafogo.com.br/upload/noticia/ad826f83604344eea8bc130c013b00ab.jpeg",
    description: "Casa de aposta patrocinadora do Botafogo",
    website: "https://www.vbet.bet.br/",
  },
  {
    id: 3,
    name: "GoCase",
    logo: "https://cdn.gocase.com.br/.nuxt/dist/client/img/logo-birth.e283944.webp",
    description:
      "Confira as Melhores Capinhas, Mochilas, Carteiras, Necessaires, Estojos, Lancheiras e outras",
    website: "https://www.gocase.com.br",
  },
];

// Patrocinadores
export const mockSponsors = [
  {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png",
    website: "https://nike.com",
    type: "Principal",
    description: "Fornecedora oficial de material esportivo",
    featured: true,
    active: true,
  },
  {
    id: 2,
    name: "Mastercard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png",
    website: "https://mastercard.com",
    type: "Ouro",
    description: "Parceiro de pagamentos oficial",
    featured: false,
    active: true,
  },
  {
    id: 3,
    name: "Emirates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/1200px-Emirates_logo.svg.png",
    website: "https://emirates.com",
    type: "Principal",
    description: "Patrocinador principal - frente da camisa",
    featured: true,
    active: true,
  },
  {
    id: 4,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png",
    website: "https://adidas.com",
    type: "Fornecedor",
    description: "Ex-fornecedor de material esportivo",
    featured: false,
    active: false,
  },
  {
    id: 5,
    name: "Coca-Cola",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png",
    website: "https://coca-cola.com",
    type: "Ouro",
    description: "Bebida oficial do time",
    featured: true,
    active: true,
  },
  {
    id: 6,
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png",
    website: "https://bmw.com",
    type: "Prata",
    description: "Parceiro automotivo oficial",
    featured: false,
    active: true,
  },
  {
    id: 7,
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png",
    website: "https://samsung.com",
    type: "Prata",
    description: "Parceiro de tecnologia",
    featured: false,
    active: true,
  },
];
