/*
 * DADOS DO ROTEIRO — edite este arquivo para mudar o itinerário.
 * A página (index.html + app.js) só lê window.ITINERARIO e desenha tudo.
 *
 * tags aceitas (aparecem como selos e nos filtros):
 *   pt       -> atividade/material em português
 *   natal    -> mercado de Natal, luzes, programa natalino
 *   reserva  -> precisa reservar/comprar antes
 *   compras  -> compras
 *   familia  -> tempo em família / descanso
 *
 * comer: lista { nome, tipo, onde } com sugestões de onde comer no dia.
 *
 * imagens: lista de nomes de arquivo do Wikimedia Commons (testados em ordem;
 * se nenhum carregar, a página mostra uma capa ilustrada no lugar).
 */
window.ITINERARIO = {
  meta: {
    titulo: "Natal na Holanda",
    subtitulo: "Roteiro de viagem — 16 a 27 de dezembro de 2026",
    base: "Voorburg",
    pessoas: 4,
    atualizado: "2026-10-23"
  },

  voos: {
    ida: [
      { data: "2026-12-15", de: "GRU 21:45 (T3)", para: "LIS 10:35 (T1)", obs: "Conexão de 7h35 em Lisboa. A imigração do espaço Schengen é feita em Lisboa." },
      { data: "2026-12-16", de: "LIS 18:10 (T1)", para: "AMS 22:20", obs: "Chegada em Schiphol como voo Schengen: sem fila de passaporte na Holanda." }
    ],
    volta: [
      { data: "2026-12-27", de: "AMS 13:40", para: "LIS 15:50 (T1)", obs: "Conexão de 20h40 em Lisboa (pernoite)." },
      { data: "2026-12-28", de: "LIS 12:30 (T1)", para: "GRU 19:55 (T3)", obs: "Saída do espaço Schengen em Lisboa." }
    ]
  },

  dias: [
    {
      id: "d16", data: "2026-12-16", cidade: "Schiphol → Voorburg",
      titulo: "Chegada",
      resumo: "Pouso em Amsterdã às 22:20, encontro no aeroporto e ida para casa em Voorburg.",
      tags: ["familia"],
      capa: "aviao",
      imagens: [],
      deslocamento: "Schiphol → Voorburg: cerca de 40 min de carro (sem trânsito, à noite).",
      programa: [
                { hora: "22:20", titulo: "Pouso em Amsterdã", texto: "Como o voo vem de Lisboa (Schengen), não há controle de passaporte em Amsterdã. As malas costumam levar de 30 a 40 minutos." },
        { hora: "23:00", titulo: "Encontro no Schiphol Plaza", texto: "Depois de pegar as malas, seguir as placas de saída (Exit / Uitgang). O ponto de encontro é o saguão Schiphol Plaza. Carro estacionado no P1, ao lado do terminal." },
        { hora: "23:45", titulo: "Em casa", texto: "Lanche leve e cama. A Holanda está 4 horas à frente do Brasil: no relógio do corpo ainda são 19h45." }
      ],
      dicas: [
        "Deixar um casaco na bagagem de mão: a noite de chegada fica entre 2 e 5 °C.",
        "Ter um chip de dados (eSIM) europeu ativado antes do embarque ajuda a falar com a família assim que pousar. Em casa há Wi-Fi."
      ]
    },

    {
      id: "d17", data: "2026-12-17", cidade: "Leiden · Leidschendam",
      titulo: "Leiden e compras",
      resumo: "Manhã livre para o fuso e almoço em casa. À tarde, Leiden ainda com luz do dia e seu mercado de Natal nostálgico; no fim do dia, compras no maior shopping do país, a 10 min de casa.",
      tags: ["compras", "natal", "familia"],
      imagens: ["Kort_Rapenburg_Leiden.jpg"],
      deslocamento: "Voorburg → Leiden: ~20 min · Leiden → Mall: ~20 min · Mall → casa: ~10 min.",
      programa: [
        { hora: "manhã", titulo: "Acordar sem despertador", texto: "Café da manhã demorado em casa. Primeiro dia é para acertar o fuso." },
        { hora: "12:00", titulo: "Almoço em casa", tags: ["familia"] },
        { hora: "13:15", titulo: "Saída para Leiden", texto: "Saindo cedo dá para ver a cidade com luz do dia: o sol se põe por volta das 16h30." },
        { hora: "13:45", titulo: "Passeio por Leiden", texto: "Rapenburg, o canal mais bonito da cidade, a universidade de 1575, a Burcht (fortaleza no alto do morro, com vista dos telhados) e as ruelas do centro histórico." },
        { hora: "15:30", titulo: "Leiden: Nostalgische Kerstmarkt", texto: "Mercado de Natal na Hooglandse Kerkgracht, ao lado da Hooglandse Kerk. Em 2026 acontece de 11 a 13 e de 17 a 20 de dezembro. Horário de 2026 a confirmar (em 2025 ia das 12h às 17h; na sexta 11/12/2026 está anunciado até as 21h). Às 16h30 as luzes do centro se acendem.", tags: ["natal"], link: { rotulo: "Leiden International Centre", url: "https://www.leideninternationalcentre.nl/living-here/events/2783016429/nostalgic-leiden-christmas-market" } },
        { hora: "17:15", titulo: "Westfield Mall of the Netherlands", texto: "Leidschendam, colado a Voorburg, no caminho de volta. Mais de 200 lojas, praça de alimentação e área de restaurantes, aberto até as 20h. Bom para casacos, luvas, botas e lembrancinhas.", tags: ["compras"], link: { rotulo: "Horários", url: "https://denhaag.com/nl/westfield-mall-of-the-netherlands" } },
        { hora: "19:00", titulo: "Jantar no shopping e volta para casa" }
      ],
      comer: [
        { nome: "Café De Vergulde Kruik", tipo: "bar tradicional holandês com vitrais do séc. XIX, bom para um café ou chocolate quente", onde: "Haarlemmerstraat 22, Leiden" },
        { nome: "Barracas do mercado de Natal", tipo: "chocolate quente, glühwein e doces", onde: "Hooglandse Kerkgracht, Leiden" },
        { nome: "Restaurantes do Mall", tipo: "jantar, várias cozinhas", onde: "Westfield Mall of the Netherlands" }
      ],
      dicas: [
        "Aproveitar o mercado do shopping para comprar itens não perecíveis da ceia: dia 24 os mercados fecham cedo e ficam lotados.",
        "Na quinta (17) é dia de 'koopavond' em muitas cidades: lojas de rua abertas até mais tarde."
      ],
      confirmar: ["Horário do mercado de Natal de Leiden no dia 17/12."]
    },

    {
      id: "d18", data: "2026-12-18", cidade: "Haia (Den Haag)",
      titulo: "Haia, a cidade da paz e da justiça",
      resumo: "Tribunal Penal Internacional, Palácio da Paz com audioguia em português, um passeio pelo centro para compras e o Binnenhof, e à noite o Royal Christmas Fair.",
      tags: ["pt", "natal", "compras"],
      imagens: ["Den_Haag_-_Vredespaleis_-_International_Court_of_Justice_-_Front_Gate.jpg"],
      deslocamento: "De carro ou tram a partir de Voorburg (~20 min). Para o centro, o tram é mais fácil que estacionar.",
      programa: [
        { hora: "10:00", titulo: "Tribunal Penal Internacional (TPI/ICC)", texto: "As audiências costumam ser abertas ao público, sem inscrição prévia, para maiores de 16 anos. Levar documento com foto físico (passaporte). Antes de ir, olhar o calendário de audiências: em meados de dezembro pode haver recesso. Oude Waalsdorperweg 10.", link: { rotulo: "Visitar o TPI", url: "https://www.icc-cpi.int/visit" } },
        { hora: "12:00", titulo: "Palácio da Paz — Centro de Visitantes", texto: "Sede da Corte Internacional de Justiça (ONU) e da Corte Permanente de Arbitragem. Entrada gratuita, exposição e filme de 30–45 min com audiotour em 10 idiomas, incluindo português. Inverno: quarta a domingo, 12h–16h. Do lado de fora, a Chama da Paz e as pedras doadas pelos países.", tags: ["pt"], link: { rotulo: "Horários", url: "https://denhaag.com/nl/het-vredespaleis-visitors-centre" } },
        { hora: "13:30", titulo: "Almoço no centro", texto: "Região do Plein e do Hofkwartier." },
        { hora: "14:30", titulo: "Centro de Haia: compras e Binnenhof", texto: "O Binnenhof, sede histórica do Parlamento à beira do lago Hofvijver, está em reforma: a torre-mirante ao lado da obra mostra o conjunto do alto. Depois, compras pela Haagse Passage (galeria coberta do século XIX), pelas ruas Noordeinde, Hoogstraat e Prinsestraat no Hofkwartier, e pela loja de departamentos De Bijenkorf.", tags: ["compras"] },
        { hora: "16:30", titulo: "Royal Christmas Fair", texto: "Mercado de Natal no Lange Voorhout, de 3 a 23 de dezembro de 2026, todos os dias das 12h às 21h. Entrada livre: chalés, fogueiras, glühwein, coral.", tags: ["natal"], link: { rotulo: "Royal Christmas Fair", url: "https://denhaag.com/nl/agenda/royal-christmas-fair" } },
        { hora: "19:00", titulo: "Jantar no centro e volta para casa" }
      ],
      comer: [
        { nome: "Restaurantes da Prinsestraat e da Molenstraat", tipo: "almoço em ruas antigas, muitas opções", onde: "Hofkwartier, centro" },
        { nome: "Haagsche Broeder", tipo: "cervejaria artesanal dentro de uma antiga igreja escondida", onde: "Hofkwartier" },
        { nome: "Royal Christmas High Tea no Hotel Des Indes", tipo: "chá da tarde de Natal, no hotel histórico ao lado do mercado (reservar)", onde: "Lange Voorhout" },
        { nome: "Plein", tipo: "praça com vários cafés e restaurantes para o jantar", onde: "ao lado do Binnenhof" }
      ],
      dicas: [
        "Para o Palácio por dentro (não só o centro de visitantes) existem visitas guiadas em alguns fins de semana, em inglês ou holandês, com ingresso só pelo site do Palácio (€16,50 em 2025/26). Vale olhar o site no início de dezembro.",
        "Sexta-feira é dia movimentado no comércio do centro; as lojas costumam abrir até 18h ou mais."
      ],
      confirmar: ["Calendário de audiências do TPI para 18/12."]
    },

    {
      id: "d19", data: "2026-12-19", cidade: "Amsterdã",
      titulo: "Amsterdã: canais e museu",
      resumo: "Free tour com guia que fala português, a tarde no Museu Van Gogh (guia multimídia em português) ou no NEMO, e passeio de barco com audioguia em português ao anoitecer.",
      tags: ["pt", "reserva"],
      imagens: ["Amsterdam_Canals_-_July_2006.jpg"],
      deslocamento: "Trem é a melhor opção: Voorburg/Den Haag → Amsterdam Centraal em ~1h. Estacionar no centro de Amsterdã é caro e difícil.",
      programa: [
        { hora: "10:30", titulo: "Free tour por Amsterdam em português", texto: "Pela Civitatis, cerca de 2 horas com guia que fala português, terminando no Mercado das Flores. Não tem preço fixo: paga-se uma gorjeta ao guia no fim.", tags: ["pt", "reserva"], link: { rotulo: "Reservar (Civitatis)", url: "https://www.civitatis.com/br/amsterdam/free-tour-amsterdam/" } },
        { hora: "12:45", titulo: "Almoço", texto: "Panquecas holandesas ou um sanduíche na região do Spui e das Negen Straatjes." },
        { hora: "14:30", titulo: "Museu Van Gogh", texto: "A maior coleção de Van Gogh do mundo, na Museumplein. Entrada só com horário marcado (vendas abrem até 60 dias antes). O guia multimídia em português é escolhido na compra do ingresso. Reservar umas 2 horas.", tags: ["pt", "reserva"], link: { rotulo: "Ingressos", url: "https://www.vangoghmuseum.nl/" } },
        { hora: "14:30", titulo: "Alternativa: NEMO Science Museum", texto: "Museu de ciências interativo no prédio verde em forma de navio, perto da Estação Central. Também tem ingresso com horário. Os textos das exposições não têm versão em português; a experiência é mais de mexer e experimentar.", tags: ["reserva"], link: { rotulo: "NEMO", url: "https://www.nemosciencemuseum.nl/en/visit" } },
        { hora: "16:45", titulo: "Barco pelos canais com audioguia em português", texto: "A LOVERS tem saídas perto do Rijksmuseum (ao lado do Van Gogh) e em frente à Estação Central, 1 hora, com audioguia GPS em português. Às 16h30 escurece: os canais aparecem com as luzes de Natal acesas.", tags: ["pt", "reserva"], link: { rotulo: "LOVERS Canal Cruises", url: "https://www.lovers.nl/" } },
        { hora: "18:15", titulo: "Jantar" },
        { hora: "20:00", titulo: "Trem de volta" }
      ],
      comer: [
        { nome: "The Pancake Bakery", tipo: "panquecas holandesas doces e salgadas, num armazém antigo à beira do canal", onde: "Prinsengracht 191" },
        { nome: "Café do Museu Van Gogh", tipo: "lanche durante a visita", onde: "dentro do museu" },
        { nome: "Restaurantes da Leidseplein", tipo: "jantar perto do fim do passeio de barco, muitas opções", onde: "a 10 min a pé da Museumplein" }
      ],
      dicas: [
        "Sábado é o dia mais cheio em Amsterdã. Se preferirem calma, trocar este dia com o domingo (20) e fazer Zaanse Schans no sábado.",
        "O free tour pede no mínimo de participantes; se não fechar grupo em português, a Civitatis oferece alternativa."
      ]
    },

    {
      id: "d20", data: "2026-12-20", cidade: "Zaanse Schans · Zaandam",
      titulo: "Moinhos, queijos e tamancos em Zaanse Schans",
      resumo: "Um percurso a pé pela vila histórica de casas de madeira verdes: museu e chocolate, a queijaria com degustação, a oficina de tamancos e três moinhos que abrem no inverno. Depois, almoço de panqueca e IKEA.",
      tags: ["familia", "compras"],
      imagens: ["Z.Schans.JPG"],
      deslocamento: "Voorburg → Zaanse Schans: ~1h de carro. Estacionamento pago ao lado do Zaans Museum, no começo da vila. IKEA Zaandam fica a ~10 min.",
      programa: [
        { hora: "09:45", titulo: "Chegada e Zaans Museum", texto: "Começar pelo museu, ao lado do estacionamento: história da região e a Verkade Experience, com as máquinas antigas da fábrica de chocolate e biscoitos Verkade. Aberto todos os dias das 10h às 17h. O Ticket Zaanse Schans dá entrada nos museus e nos moinhos abertos no dia. Passear pela vila em si é livre em 2026 (a cobrança de entrada foi adiada para abril de 2027).", link: { rotulo: "Horários do dia", url: "https://www.dezaanseschans.nl/en/plan-your-visit/opening-hours/" } },
        { hora: "10:45", titulo: "Queijaria Catharina Hoeve", texto: "Fazenda de queijos com loja, atendentes em trajes típicos e degustação de queijos holandeses (Gouda, com ervas, defumado). Bom lugar para comprar queijo para a ceia de Natal." },
        { hora: "11:15", titulo: "Oficina de tamancos", texto: "Demonstração de como um tamanco de madeira é feito à máquina em poucos minutos, e uma sala com tamancos antigos e de noiva. Na mesma rua, a padaria-museu e um antiquário." },
        { hora: "11:45", titulo: "Rota dos moinhos pela beira do rio Zaan", texto: "Três moinhos costumam abrir no inverno: De Kat, o único moinho de vento do mundo que ainda mói pigmentos para tinta; Het Jonge Schaap, serraria movida a vento, com demonstração e filme; e De Bonte Hen, que prensa óleo de linhaça. Dá para subir na varanda dos moinhos e ver as pás de perto. Conferir no calendário do site quais estarão abertos no dia 20." },
        { hora: "12:45", titulo: "Lojinha Albert Heijn e oficina de estanho", texto: "No caminho de volta: a réplica da primeira mercearia Albert Heijn (hoje a maior rede de supermercados do país) e a oficina de peças de estanho." },
        { hora: "13:15", titulo: "Almoço de panqueca", texto: "Panquecas holandesas no De Kraai, dentro da vila.", tags: ["familia"] },
        { hora: "14:45", titulo: "IKEA Zaandam", texto: "Uma volta pela seção de Natal e, se der fome, o café sueco.", tags: ["compras"] },
        { hora: "16:30", titulo: "Volta para casa e noite tranquila", texto: "A semana seguinte é a mais puxada da viagem.", tags: ["familia"] }
      ],
      comer: [
        { nome: "De Kraai", tipo: "panquecas holandesas", onde: "dentro da Zaanse Schans" },
        { nome: "Degustação na Catharina Hoeve", tipo: "queijos, de graça na loja", onde: "Zaanse Schans" },
        { nome: "Restaurante da IKEA", tipo: "almôndegas suecas, lanche barato", onde: "IKEA Zaandam" }
      ],
      dicas: [
        "Chegar cedo: depois das 11h começam a chegar os ônibus de excursão.",
        "No inverno a tanoaria e a casa do pescador ficam fechadas, e a casa do tecelão só abre nos fins de semana (dia 20 é domingo).",
        "Vento frio na beira do rio Zaan: gorro e luvas."
      ],
      confirmar: ["Quais moinhos abrem no domingo 20/12."]
    },

    {
      id: "d21", data: "2026-12-21", cidade: "Utrecht · Haarzuilens",
      titulo: "Utrecht, Castelo De Haar e as Noites Luminosas",
      resumo: "De manhã o centro de Utrecht; à tarde o maior castelo da Holanda decorado para o Natal; e, sem sair de lá, o espetáculo de luz e projeções no parque do castelo ao anoitecer.",
      tags: ["natal", "reserva"],
      imagens: ["DeHaarOverzicht.jpg", "DomTorenUtrechtNederland.jpg"],
      deslocamento: "Voorburg → Utrecht centro: ~50 min · Utrecht → Castelo De Haar: ~20 min · Castelo → casa: ~50 min.",
      programa: [
        { hora: "10:15", titulo: "Centro de Utrecht", texto: "Estacionar numa garagem do centro. Oudegracht, o canal com cais e adegas na altura da água, a Domtoren (torre de igreja mais alta do país), a Domplein e as lojas decoradas para o Natal." },
        { hora: "12:30", titulo: "Almoço em Utrecht" },
        { hora: "14:00", titulo: "Castelo De Haar", texto: "Aberto todos os dias; nas férias escolares (19/12/2026 a 3/1/2027) abre das 10h às 17h, última entrada às 16h15. Funciona com horário marcado: comprar online o horário das 14h30. São uns 20 min a pé do estacionamento até o castelo. Nos últimos anos o castelo ganhou decoração de Natal em dezembro (datas de 2026 a confirmar).", tags: ["reserva", "natal"], link: { rotulo: "Horários e ingressos", url: "https://www.kasteeldehaar.nl/plan-je-bezoek/praktische-informatie/praktische-informatieopeningstijden/" } },
        { hora: "16:15", titulo: "Jardins e café quente", texto: "Volta pelos jardins até o pôr do sol e uma pausa no Restaurant Laverie, que fica aberto até as 17h." },
        { hora: "17:30", titulo: "De Lumineuze Nachten", texto: "Caminhada noturna de 2,2 km (60–90 min) pelo parque iluminado, com projeções no castelo e trilha sonora. De 4/12/2026 a 3/1/2027. Adulto €24,50. O estacionamento do evento é na Parkweg 5 (€12 comprado antes). No meio do caminho há um terraço de inverno com bebidas quentes e lanches.", tags: ["natal", "reserva"], link: { rotulo: "Informações e ingressos", url: "https://delumineuzenachten.nl/praktisch" } },
        { hora: "19:15", titulo: "Volta para casa", texto: "Jantar em casa e arrumar as malas para a Bélgica." }
      ],
      comer: [
        { nome: "Winkel van Sinkel", tipo: "café-restaurante numa antiga loja de departamentos do séc. XIX", onde: "Oudegracht, Utrecht" },
        { nome: "Restaurants ao longo da Oudegracht", tipo: "terraços nas adegas à beira d'água", onde: "centro de Utrecht" },
        { nome: "Restaurant Laverie", tipo: "café e lanches, 10h–17h", onde: "propriedade do Castelo De Haar" },
        { nome: "Terraço de inverno", tipo: "bebidas quentes e petiscos no meio da caminhada", onde: "Lumineuze Nachten" }
      ],
      dicas: [
        "Perguntar na entrada do castelo se dá para deixar o carro no mesmo lugar até o espetáculo da noite, ou se é preciso mudar para o estacionamento da Parkweg 5.",
        "As Noites Luminosas são ao ar livre: botas impermeáveis e roupa bem quente."
      ],
      confirmar: ["Decoração de Natal do castelo em 2026 (Kerstkasteel).", "Estacionamento do castelo x estacionamento do evento noturno."]
    },

    {
      id: "d22", data: "2026-12-22", cidade: "Bruges (Bélgica)",
      titulo: "Bruges e o Winter Glow",
      resumo: "A cidade medieval mais bonita da Bélgica no auge do Natal: passeio com áudio em português, canais e o mercado de Natal na praça Markt à noite. Pernoite em Bruges.",
      tags: ["natal", "pt", "reserva"],
      imagens: ["Brugge_grote_markt.jpg", "Brugge_Groenerei_R01.jpg"],
      deslocamento: "Voorburg → Bruges: ~2h30 de carro (passando por Antuérpia). Carro com placa holandesa já é registrado automaticamente nas zonas de baixa emissão de Flandres.",
      programa: [
        { hora: "08:30", titulo: "Saída de Voorburg" },
        { hora: "11:00", titulo: "Chegada e malas no hotel", texto: "A cidade indica o estacionamento Centrum-Station, na entrada do centro histórico, para quem vem de carro.", tags: ["reserva"] },
        { hora: "12:00", titulo: "Almoço" },
        { hora: "13:30", titulo: "Tour panorâmico de minibus", texto: "50 minutos saindo da Markt, com comentários gravados em português. Bom jeito de ver a cidade toda sem cansar.", tags: ["pt"], link: { rotulo: "Civitatis (PT)", url: "https://www.civitatis.com/br/bruges/onibus-turistico-bruges/" } },
        { hora: "15:00", titulo: "A pé pelo centro", texto: "Burg, Rozenhoedkaai (o cartão-postal dos canais), Begijnhof e uma chocolataria. Passeio de barco pelos canais se estiver operando no inverno." },
        { hora: "17:00", titulo: "Mercado de Natal e Winter Glow", texto: "Na Markt e na Simon Stevinplein, de 20/11/2026 a 3/1/2027, entrada livre. Dom–qui das 11h às 22h. O Winter Glow inclui trilha de luzes pela cidade.", tags: ["natal"], link: { rotulo: "Visit Bruges", url: "https://www.visitbruges.be/en/winter-glow" } },
        { hora: "19:30", titulo: "Jantar e noite em Bruges" }
      ],
      comer: [
        { nome: "Bierbrasserie Cambrinus", tipo: "cozinha belga e centenas de cervejas", onde: "Philipstockstraat, perto da Markt" },
        { nome: "Barracas do mercado de Natal", tipo: "waffles, batata frita belga, chocolate quente e glühwein", onde: "Markt e Simon Stevinplein" }
      ],
      dicas: [
        "Reservar hotel dentro do centro histórico com estacionamento, ou perto da estação.",
        "Para um tour a pé guiado só em português, a Civitatis tem tour privado (preço por grupo)."
      ]
    },

    {
      id: "d23", data: "2026-12-23", cidade: "Bruxelas (Bélgica) · Eindhoven",
      titulo: "Bruxelas, chocolates, Smurfs e parada em Eindhoven",
      resumo: "Uma volta curta pela Grand-Place e pelas lojas de chocolate, o museu dos quadrinhos com a sala do Peyo, criador dos Smurfs, e saída no meio da tarde para jantar em Eindhoven e chegar cedo em casa.",
      tags: ["compras"],
      imagens: ["Grand-Place,_Brussels_-_panorama,_June_2018.jpg"],
      deslocamento: "Bruges → Bruxelas: ~1h15 · Bruxelas → Eindhoven: ~1h30 · Eindhoven → Voorburg: ~1h40.",
      programa: [
        { hora: "09:30", titulo: "Saída de Bruges", texto: "Estacionar numa garagem do centro de Bruxelas (Grand-Place/Central)." },
        { hora: "11:00", titulo: "Volta pela Grand-Place", texto: "A praça central de Bruxelas, patrimônio da UNESCO, cercada pelas casas das antigas corporações de ofício e pela Prefeitura gótica. Uns 45 minutos a pé, incluindo o Manneken Pis, a 5 minutos da praça, que costuma ganhar roupa de Natal." },
        { hora: "11:45", titulo: "Lojas de chocolate", texto: "Na Galeries Royales Saint-Hubert, galeria coberta do século XIX ao lado da Grand-Place, ficam várias chocolatarias, entre elas a loja original da Neuhaus, criadora do bombom belga (praliné). Bom lugar para comprar chocolate para levar ao Brasil.", tags: ["compras"] },
        { hora: "12:30", titulo: "Almoço belga", texto: "Moules-frites, e waffle de sobremesa." },
        { hora: "13:45", titulo: "Centro Belga dos Quadrinhos (Comics Art Museum)", texto: "Prédio art nouveau de Victor Horta, Rue des Sables 20, a 10 min a pé da Grand-Place. Exposição permanente dedicada ao Peyo e aos Smurfs. Ter–dom 10h–18h (fecha 25/12 e 1/1).", link: { rotulo: "Site do museu", url: "https://www.comicscenter.net/en/home" } },
        { hora: "15:00", titulo: "Mural dos Smurfs", texto: "O teto pintado com os Smurfs perto da saída da Estação Central, parte da Rota dos Quadrinhos. Fica no caminho de volta para o carro." },
        { hora: "15:30", titulo: "Estrada para Eindhoven (~1h30)" },
        { hora: "17:00", titulo: "Eindhoven: passeio e jantar", texto: "Cidade do design e da tecnologia, nascida em torno da Philips. Uma volta pela praça 18 Septemberplein e jantar na Kleine Berg, rua de restaurantes no centro." },
        { hora: "19:00", titulo: "Volta para casa (~1h40)", texto: "Chegada por volta das 20h45." }
      ],
      comer: [
        { nome: "Chez Léon", tipo: "moules-frites desde o século XIX, clássico turístico", onde: "Rue des Bouchers, ao lado da Galeries Royales Saint-Hubert" },
        { nome: "Maison Dandoy", tipo: "waffles e biscoitos speculoos", onde: "perto da Grand-Place, Bruxelas" },
        { nome: "Brasserie Bellevue", tipo: "brasserie francesa informal", onde: "Kleine Berg, Eindhoven" },
        { nome: "Lucie Cocina", tipo: "tapas espanholas", onde: "Kleine Berg, Eindhoven" }
      ],
      dicas: [
        "Zona de baixa emissão (LEZ) de Bruxelas: carro com placa holandesa não precisa se registrar, mas precisa cumprir a norma. Conferir o carro no simulador do lez.brussels antes da viagem.",
        "Chocolate belga aguenta bem a viagem de volta: comprar no dia 23 e guardar em lugar fresco até o dia 27.",
        "Dia longo de estrada: se o cansaço bater, pular Eindhoven e voltar direto de Bruxelas (~2h)."
      ],
      confirmar: ["Norma Euro do carro para a LEZ de Bruxelas.", "Reserva para o jantar em Eindhoven (antevéspera de Natal)."]
    },

    {
      id: "d24", data: "2026-12-24", cidade: "Voorburg",
      titulo: "Véspera de Natal: ceia em casa",
      resumo: "Manhã tranquila, últimas compras cedo, um passeio opcional por Voorburg, preparar a ceia juntos e a ligação de vídeo com a família no Brasil.",
      tags: ["familia", "natal"],
      capa: "vela",
      imagens: [],
      deslocamento: "Tudo perto de casa.",
      programa: [
        { hora: "manhã", titulo: "Dormir depois de dois dias de estrada" },
        { hora: "10:00", titulo: "Supermercado cedo", texto: "Em 24/12 as lojas fecham mais cedo (no máximo às 19h por lei; muitos mercados antes disso) e as filas são longas." },
        { hora: "11:30", titulo: "Opção · Passeio por Voorburg", texto: "Caminhada pelo centro antigo, perto de casa: a Herenstraat, rua principal com lojas e cafés decorados para o Natal, a Oude Kerk e as margens do canal Vliet. No caminho fica o Hofwijck, a casa de campo do século XVII do poeta Constantijn Huygens, hoje museu. Voorburg é uma das cidades mais antigas da Holanda, com origem na cidade romana Forum Hadriani.", tags: ["familia", "natal"] },
        { hora: "tarde", titulo: "Cozinhar juntos", texto: "Ceia brasileira com o que der para encontrar aqui. A tarde escurece às 16h30: velas e música de Natal." },
        { hora: "21:00", titulo: "Ceia de Natal", texto: "No Brasil são 17h (4 horas a menos): bom horário para chamada de vídeo com a família antes de começarem a ceia de lá.", tags: ["familia"] }
      ],
      comer: [
        { nome: "Cafés da Herenstraat", tipo: "café com appeltaart (torta de maçã holandesa) no passeio", onde: "centro de Voorburg" }
      ],
      dicas: [
        "Se sobrar energia de manhã: Delft fica a 15 min, com a praça Markt e as lojas de louça azul (fecham cedo neste dia).",
        "No dia 24 as lojas e cafés da Herenstraat também fecham mais cedo; o Hofwijck pode estar fechado no feriado, mas o jardim e a fachada já valem a parada.",
        "Para quem quiser missa: muitas igrejas têm 'kerstnachtdienst' na noite do dia 24."
      ]
    },

    {
      id: "d25", data: "2026-12-25", cidade: "Voorburg · Scheveningen",
      titulo: "Natal em família",
      resumo: "Quase tudo fecha no dia 25. Café da manhã longo, presentes, e o passeio que os holandeses fazem no Natal: caminhar na praia.",
      tags: ["familia"],
      imagens: ["Kurhaus,_Scheveningen,_The_Hague_(34537500743).jpg"],
      deslocamento: "Voorburg → Scheveningen: ~20 min.",
      programa: [
        { hora: "10:00", titulo: "Café da manhã de Natal e presentes", tags: ["familia"] },
        { hora: "14:00", titulo: "Caminhada na praia de Scheveningen", texto: "O Kurhaus, o píer e o Mar do Norte no inverno. Alguns cafés de praia abrem no feriado." },
        { hora: "17:00", titulo: "Tarde em casa", texto: "Fotos da viagem, filme de Natal, jogos. Dia sem agenda." }
      ],
      comer: [
        { nome: "Cafés de praia (strandpaviljoens)", tipo: "chocolate quente olhando o mar; alguns abrem no feriado", onde: "praia de Scheveningen" }
      ],
      dicas: ["Museus, lojas e quase todos os restaurantes fecham no dia 25: não planejar nada que dependa de horário."]
    },

    {
      id: "d26", data: "2026-12-26", cidade: "Roterdã",
      titulo: "Roterdã no segundo dia de Natal",
      resumo: "Na Holanda, 26/12 é feriado (Tweede Kerstdag), mas o comércio abre. Arquitetura moderna, o Markthal e o jantar de despedida.",
      tags: ["familia"],
      imagens: ["Rotterdam_Cube_House_street_view.jpg"],
      deslocamento: "Voorburg → Roterdã: ~30 min de carro ou trem.",
      programa: [
        { hora: "11:00", titulo: "Markthal", texto: "O mercado coberto em forma de arco, com teto pintado gigante e dezenas de bancas de comida. No centro, as lojas abriram até as 18h no 26/12 de 2025.", link: { rotulo: "Horários Roterdã", url: "https://rotterdam.info/en/visit/guide/opening-hours-rotterdam-city-center" } },
        { hora: "12:30", titulo: "Casas-cubo (Kubuswoningen)", texto: "Ao lado do Markthal. Uma delas, a Kijk-Kubus, é aberta para visita." },
        { hora: "14:00", titulo: "Oude Haven, Witte Huis e Erasmusbrug", texto: "Caminhada até a ponte Erasmus, cartão-postal da cidade." },
        { hora: "16:00", titulo: "Euromast (se reaberta)", texto: "A torre de 185 m fechou em janeiro de 2026 para reforma. Verificar se já reabriu antes de incluir.", link: { rotulo: "Euromast", url: "https://euromast.nl/" } },
        { hora: "18:30", titulo: "Jantar de despedida", texto: "Reservar com antecedência: no feriado os restaurantes lotam.", tags: ["reserva", "familia"] }
      ],
      comer: [
        { nome: "Bancas do Markthal", tipo: "almoço de mercado: peixe, queijos, comida do mundo todo", onde: "Markthal" },
        { nome: "Restaurante do Hotel New York", tipo: "jantar de despedida no antigo prédio da companhia de navios Holland-America Line, de frente para o rio (reservar)", onde: "Wilhelminapier, do outro lado da ponte Erasmus" }
      ],
      dicas: ["Plano B para este dia: Kinderdijk, os 19 moinhos patrimônio da UNESCO, a ~45 min de casa."],
      confirmar: ["Horários do Markthal e das lojas em 26/12/2026.", "Reabertura da Euromast."]
    },

    {
      id: "d27", data: "2026-12-27", cidade: "Voorburg → Schiphol",
      titulo: "Despedida",
      resumo: "Último café da manhã juntos e aeroporto. O voo para Lisboa sai às 13:40.",
      tags: ["familia"],
      capa: "aviao",
      imagens: [],
      deslocamento: "Voorburg → Schiphol: ~40 min (domingo de manhã, trânsito leve).",
      programa: [
        { hora: "08:30", titulo: "Café da manhã e malas" },
        { hora: "10:15", titulo: "Saída para Schiphol", texto: "Chegar por volta das 11h: o voo é Schengen (sem passaporte em Amsterdã), mas o despacho de malas no fim de dezembro pode demorar." },
        { hora: "13:40", titulo: "Voo para Lisboa", texto: "Pouso às 15:50. Conexão de 20h40: pernoite em Lisboa e o voo para São Paulo às 12:30 do dia 28, chegando em Guarulhos às 19:55." }
      ],
      dicas: [
        "Confirmar com a TAP se as malas vão despachadas direto até Guarulhos. Se sim, levar na mão uma muda de roupa para a noite em Lisboa.",
        "Reservar hotel perto do aeroporto de Lisboa para a noite do dia 27."
      ]
    }
  ],

  reservas: [
    { id: "r1", item: "Ingressos com horário do Castelo De Haar (21/12, 10h)", quando: "Assim que abrirem as vendas de dezembro", url: "https://onlineticket.kasteeldehaar.nl/", dia: "d21" },
    { id: "r2", item: "De Lumineuze Nachten + estacionamento (21/12, ~17h30)", quando: "Novembro (horários da noite esgotam)", url: "https://delumineuzenachten.nl/praktisch", dia: "d21" },
    { id: "r3", item: "Hotel em Bruges com estacionamento (22/12, 1 noite)", quando: "Já — semana de Natal", url: "https://www.visitbruges.be/en/winter-glow", dia: "d22" },
    { id: "r4", item: "Free tour em português em Amsterdã (19/12)", quando: "Novembro", url: "https://www.civitatis.com/br/amsterdam/free-tour-amsterdam/", dia: "d19" },
    { id: "r12", item: "Museu Van Gogh com guia multimídia em português (19/12, 14h30)", quando: "Já — vendas abrem 60 dias antes", url: "https://www.vangoghmuseum.nl/", dia: "d19" },
    { id: "r5", item: "Barco com audioguia em português em Amsterdã (19/12, ~16h45)", quando: "Início de dezembro", url: "https://www.lovers.nl/", dia: "d19" },
    { id: "r7", item: "Tour de minibus com áudio em português em Bruges (22/12)", quando: "Dezembro", url: "https://www.civitatis.com/br/bruges/onibus-turistico-bruges/", dia: "d22" },
    { id: "r13", item: "Jantar em Eindhoven na volta de Bruxelas (23/12, ~17h30)", quando: "Início de dezembro", url: "", dia: "d23" },
    { id: "r8", item: "Restaurante do jantar de despedida (26/12)", quando: "Início de dezembro", url: "", dia: "d26" },
    { id: "r9", item: "Hotel perto do aeroporto de Lisboa (27/12, 1 noite)", quando: "Novembro", url: "", dia: "d27" },
    { id: "r10", item: "Conferir o carro no simulador da LEZ de Bruxelas", quando: "Antes de 23/12", url: "https://lez.brussels/mytax/en/registration", dia: "d23" },
    { id: "r11", item: "Ver calendário de audiências do TPI para 18/12", quando: "Semana anterior", url: "https://www.icc-cpi.int/visit", dia: "d18" }
  ],

  emPortugues: [
    { titulo: "Audiotour do Palácio da Paz", texto: "Gratuito, em português, no centro de visitantes.", dia: "d18" },
    { titulo: "Free tour Amsterdam (Civitatis)", texto: "Guia que fala português, ~2h.", dia: "d19", url: "https://www.civitatis.com/br/amsterdam/free-tour-amsterdam/" },
    { titulo: "Museu Van Gogh", texto: "Guia multimídia em português, escolhido na compra do ingresso.", dia: "d19", url: "https://www.vangoghmuseum.nl/" },
    { titulo: "Barco nos canais com audioguia", texto: "LOVERS: audioguia GPS em português.", dia: "d19", url: "https://www.lovers.nl/" },
    { titulo: "Minibus panorâmico de Bruges", texto: "Comentários gravados em português, 50 min.", dia: "d22", url: "https://www.civitatis.com/br/bruges/onibus-turistico-bruges/" },
    { titulo: "Para ler antes, em português", texto: "Wikipédia: Palácio da Paz, Tribunal Penal Internacional, Castelo De Haar, Bruges, Grand-Place, Peyo.", url: "https://pt.wikipedia.org/w/index.php?search=Pal%C3%A1cio+da+Paz" }
  ],

  praticas: [
    { titulo: "Fuso e luz", texto: "A Holanda fica 4 horas à frente de Brasília em dezembro. O sol nasce perto das 8h45 e se põe perto das 16h30." },
    { titulo: "Clima", texto: "Dias de 2 a 7 °C, vento e garoa frequentes. Casaco impermeável, gorro, luvas e sapato fechado que aguente chuva." },
    { titulo: "Entrada na Europa", texto: "A entrada no espaço Schengen acontece em Lisboa, com o registro biométrico do EES (foto e digitais). A autorização ETIAS ainda não tinha data confirmada nas fontes consultadas: checar em novembro no site oficial da UE.", url: "https://travel-europe.europa.eu/etias_en" },
    { titulo: "Trem e transporte", texto: "Nos trens e trams holandeses dá para passar o cartão de crédito/débito por aproximação na catraca (OVpay). Funciona também com cartão brasileiro com pagamento por aproximação." },
    { titulo: "Bélgica de carro", texto: "Placas holandesas não precisam registro nas zonas de baixa emissão de Flandres e Bruxelas, mas o carro precisa cumprir a norma." },
    { titulo: "Feriados", texto: "24/12 lojas fecham cedo · 25/12 quase tudo fechado · 26/12 feriado, mas muito comércio abre." }
  ],

  extras: [
    { titulo: "Delft", texto: "A 15 min de casa. Cabe na manhã do dia 24." },
    { titulo: "Mauritshuis", texto: "A 'Moça com Brinco de Pérola', ao lado do Binnenhof. Cabe no dia 18 se o TPI não tiver audiência." },
    { titulo: "Kinderdijk", texto: "Os 19 moinhos patrimônio da UNESCO, a ~45 min. Alternativa para o dia 26." }
  ],

  fontes: [
    { rotulo: "Castelo De Haar — horários", url: "https://www.kasteeldehaar.nl/plan-je-bezoek/praktische-informatie/praktische-informatieopeningstijden/" },
    { rotulo: "De Lumineuze Nachten", url: "https://delumineuzenachten.nl/praktisch" },
    { rotulo: "Royal Christmas Fair Den Haag", url: "https://denhaag.com/nl/agenda/royal-christmas-fair" },
    { rotulo: "Vredespaleis Visitors Centre", url: "https://denhaag.com/nl/het-vredespaleis-visitors-centre" },
    { rotulo: "Peace Palace Library (idiomas do audiotour)", url: "https://peacepalacelibrary.nl/library-tours" },
    { rotulo: "TPI — visitas", url: "https://www.icc-cpi.int/visit" },
    { rotulo: "Mercado de Natal de Bruges 2026", url: "https://ultimatechristmasmarkets.com/belgium/bruges-christmas-market/" },
    { rotulo: "Museu Van Gogh — ingresso e guia em português", url: "https://www.musement.com/uk/amsterda/bilhete-para-o-museu-van-gogh-651/" },
    { rotulo: "NEMO — visita", url: "https://www.nemosciencemuseum.nl/en/visit" },
    { rotulo: "Zaanse Schans no inverno (DagjeWeg)", url: "https://www.dagjeweg.nl/nieuwsredactie/25253/In-de-winter-naar-de-Zaanse-Schans%3F-Dit-is-waarom%21" },
    { rotulo: "Restaurantes em Eindhoven (Bart's Boekje)", url: "https://www.bartsboekje.com/en/restaurants-eindhoven/" },
    { rotulo: "24 horas em Haia (denhaag.com)", url: "https://denhaag.com/en/tips-for-you/24-hours-the-hague" },
    { rotulo: "Mercado de Natal de Leiden 2026", url: "https://www.leideninternationalcentre.nl/living-here/events/2783016429/nostalgic-leiden-christmas-market" },
    { rotulo: "Zaanse Schans — entrada adiada para 2027", url: "https://www.rodi.nl/zaanstad/gemeentenieuws/480185/gemeente-zaanstad-stelt-entreeticket-zaanse-schans-jaar-uit" },
    { rotulo: "Comics Art Museum — Peyo", url: "https://www.nomadotravel.app/en/attractions/belgian-comic-strip-center" },
    { rotulo: "LEZ Bruxelas — placas holandesas", url: "https://lez.brussels/mytax/en/registration" },
    { rotulo: "Férias escolares 2026–27 (ANWB)", url: "https://www.anwb.nl/vakantie/kerstvakantie" },
    { rotulo: "Imagens: Wikimedia Commons", url: "https://commons.wikimedia.org/" }
  ]
};
