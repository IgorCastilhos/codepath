import type { Milestone } from '../domain/milestone';

export const curriculumPtBR: readonly Milestone[] = [
  {
    id: 'cs-fundamentals',
    order: 1,
    title: 'Fundamentos de CS & Internet',
    description:
      'Como a internet funciona, conceitos básicos de SO e controle de versão. A base que todo desenvolvedor deve ter antes de escrever uma única linha de código.',
    longDescription: `Antes de escrever código, um desenvolvedor precisa entender o ambiente em que seu código é executado.

Esta fase cobre a infraestrutura invisível por trás de toda aplicação: como os dados trafegam pela internet via DNS, HTTP e TCP/IP; como um sistema operacional gerencia processos, memória e o sistema de arquivos; e como o Git dá a cada mudança uma identidade permanente e rastreável.

Esses tópicos são frequentemente pulados por iniciantes com pressa de escrever funcionalidades. Esse atalho cria lacunas — desenvolvedores que não conseguem ler uma aba de rede, não conseguem navegar em um servidor e entram em pânico quando um merge dá errado. Esta fase fecha essas lacunas antes que elas se formem.

Ao final, você deve ser capaz de explicar o que acontece entre digitar uma URL e ver uma página web, gerenciar um diretório de projeto inteiramente pela linha de comando, e manter um histórico Git limpo com branches e merges.`,
    resources: [
      {
        id: 'cs-r-how-internet-works',
        type: 'reading',
        title: 'Como DNS, HTTP/HTTPS e TCP/IP realmente funcionam',
        url: 'https://example.com/formacao/cs/internet',
        durationMinutes: 25,
      },
      {
        id: 'cs-r-os-and-cli',
        type: 'reading',
        title: 'Básico de SO: sistemas de arquivos, comandos do terminal, processos e threads',
        url: 'https://example.com/formacao/cs/os-cli',
        durationMinutes: 20,
      },
      {
        id: 'cs-r-git-concepts',
        type: 'reading',
        title: 'Conceitos de Git: repositórios, commits, branches e merging',
        url: 'https://example.com/formacao/cs/git',
        durationMinutes: 18,
      },
      {
        id: 'cs-v-internet-crash-course',
        type: 'video',
        title: 'Crash Course Ciência da Computação: A Internet',
        url: 'https://example.com/formacao/cs/internet-video',
        durationMinutes: 12,
      },
      {
        id: 'cs-v-linux-terminal',
        type: 'video',
        title: 'Curso Intensivo de Terminal Linux para Iniciantes',
        url: 'https://example.com/formacao/cs/terminal-video',
        durationMinutes: 35,
      },
      {
        id: 'cs-v-git-github',
        type: 'video',
        title: 'Git e GitHub para Iniciantes — Curso Intensivo',
        url: 'https://example.com/formacao/cs/git-video',
        durationMinutes: 30,
      },
      {
        id: 'cs-e-devtools-http',
        type: 'exercise',
        title: 'Mapear requisições HTTP de três sites usando DevTools do navegador',
        url: 'https://example.com/formacao/cs/devtools-exercise',
        durationMinutes: 30,
      },
      {
        id: 'cs-e-cli-project',
        type: 'exercise',
        title: 'Construir uma estrutura completa de diretórios usando apenas o CLI',
        url: 'https://example.com/formacao/cs/cli-exercise',
        durationMinutes: 25,
      },
      {
        id: 'cs-e-git-branches',
        type: 'exercise',
        title: 'Criar um repo, fazer commit, criar branch feature/setup e merge na main',
        url: 'https://example.com/formacao/cs/git-exercise',
        durationMinutes: 40,
      },
    ],
  },
  {
    id: 'programming-dsa',
    order: 2,
    title: 'Fundamentos de Programação & DSA',
    description:
      'Variáveis, análise de complexidade, estruturas de dados e algoritmos. A mentalidade analítica necessária para resolver problemas de forma eficiente e sustentável.',
    longDescription: `Esta fase constrói a mentalidade analítica necessária para resolver problemas de forma eficiente, mantendo um olhar rigoroso sobre eficiência algorítmica.

A maioria dos desenvolvedores aprende sintaxe. Esta fase ensina você a *pensar*. Você irá dos construtos básicos da sua linguagem escolhida — variáveis, fluxo de controle, funções — passando por análise de complexidade, estruturas de dados e finalmente os algoritmos que operam sobre elas.

Big O não é um exercício acadêmico. É a linguagem que engenheiros usam para avaliar trade-offs. Saber que sua solução é O(n²) quando uma alternativa O(n log n) existe é a diferença entre software que escala e software que degrada silenciosamente.

Ao final, você deve ser capaz de escolher entre um array, uma tabela hash e uma árvore baseado em padrões de acesso — não intuição — e implementar um algoritmo de travessia de grafos a partir de um arquivo em branco.`,
    resources: [
      {
        id: 'dsa-r-basic-constructs',
        type: 'reading',
        title: 'Variáveis, tipos de dados, estruturas de controle, funções e escopo',
        url: 'https://example.com/formacao/dsa/constructs',
        durationMinutes: 30,
      },
      {
        id: 'dsa-r-big-o',
        type: 'reading',
        title: 'Complexidade de tempo e espaço — O(1) a O(n²) com exemplos resolvidos',
        url: 'https://example.com/formacao/dsa/big-o',
        durationMinutes: 22,
      },
      {
        id: 'dsa-r-core-structures',
        type: 'reading',
        title: 'Arrays, listas encadeadas, pilhas, filas e tabelas hash',
        url: 'https://example.com/formacao/dsa/core-structures',
        durationMinutes: 28,
      },
      {
        id: 'dsa-r-advanced-structures',
        type: 'reading',
        title: 'Árvores, grafos, algoritmos de ordenação, BFS e DFS',
        url: 'https://example.com/formacao/dsa/advanced-structures',
        durationMinutes: 35,
      },
      {
        id: 'dsa-v-language-course',
        type: 'video',
        title: 'Curso Completo de Java (ou TypeScript para Iniciantes)',
        url: 'https://example.com/formacao/dsa/language-video',
        durationMinutes: 60,
      },
      {
        id: 'dsa-v-big-o-course',
        type: 'video',
        title: 'Notação Big O — Curso Completo',
        url: 'https://example.com/formacao/dsa/big-o-video',
        durationMinutes: 45,
      },
      {
        id: 'dsa-v-ds-visualized',
        type: 'video',
        title: 'Estruturas de Dados Visualizadas (com animações de alocação de memória)',
        url: 'https://example.com/formacao/dsa/ds-visualized-video',
        durationMinutes: 40,
      },
      {
        id: 'dsa-v-algorithms-freecodecamp',
        type: 'video',
        title: 'Algoritmos & Estruturas de Dados — FreeCodeCamp',
        url: 'https://example.com/formacao/dsa/algorithms-video',
        durationMinutes: 90,
      },
      {
        id: 'dsa-e-word-count',
        type: 'exercise',
        title: 'Escrever um programa de contagem de palavras com sanitização de entrada',
        url: 'https://example.com/formacao/dsa/word-count',
        durationMinutes: 30,
      },
      {
        id: 'dsa-e-big-o-analysis',
        type: 'exercise',
        title: 'Justificar matematicamente a complexidade Big O de três trechos de código',
        url: 'https://example.com/formacao/dsa/big-o-analysis',
        durationMinutes: 25,
      },
      {
        id: 'dsa-e-stack-queue',
        type: 'exercise',
        title: 'Implementar uma Pilha e uma Fila do zero — sem estruturas de bibliotecas prontas',
        url: 'https://example.com/formacao/dsa/stack-queue',
        durationMinutes: 50,
      },
      {
        id: 'dsa-e-bfs-maze',
        type: 'exercise',
        title: 'Resolver um labirinto com BFS, separando a consulta (caminho) do comando (movimento)',
        url: 'https://example.com/formacao/dsa/bfs-maze',
        durationMinutes: 60,
      },
    ],
  },
  {
    id: 'backend-beginner',
    order: 3,
    title: 'Backend Iniciante',
    description:
      'Bancos de dados relacionais, APIs RESTful e segurança web. A transição para construir servidores web e lidar com dados reais.',
    longDescription: `Esta fase faz a transição para a construção de servidores web, focando em dados relacionais e design de API.

Todo backend em produção se apoia em três fundamentos: um banco de dados relacional com um esquema bem pensado, uma API HTTP que respeita as restrições REST, e um baseline de práticas de segurança que mantém usuários e dados seguros.

Você vai projetar um esquema PostgreSQL normalizado, construir uma API CRUD em Node.js (Express) ou Java (Spring Boot), e depois deliberadamente atacar sua própria aplicação — tentando SQL injection, examinando headers — antes de corrigir cada vulnerabilidade que encontrar.

O exercício do croquete é intencional: modele uma entidade do domínio como ela realmente *é*, não como uma coleção de partes vagamente relacionadas. Essa disciplina de modelagem precisa é levada para cada esquema de banco de dados que você projetará.`,
    resources: [
      {
        id: 'be-r-sql',
        type: 'reading',
        title: 'Álgebra relacional, SQL (SELECT/INSERT/UPDATE/DELETE/JOINs), normalização 1NF–3NF',
        url: 'https://example.com/formacao/backend/sql',
        durationMinutes: 30,
      },
      {
        id: 'be-r-rest',
        type: 'reading',
        title: 'Restrições REST, métodos HTTP, formatação JSON, statelessness',
        url: 'https://example.com/formacao/backend/rest',
        durationMinutes: 20,
      },
      {
        id: 'be-r-security',
        type: 'reading',
        title: 'OWASP Top 10, CORS, hashing vs. criptografia, SQL injection, XSS',
        url: 'https://example.com/formacao/backend/security',
        durationMinutes: 25,
      },
      {
        id: 'be-v-postgres',
        type: 'video',
        title: 'Curso Intensivo de PostgreSQL',
        url: 'https://example.com/formacao/backend/postgres-video',
        durationMinutes: 40,
      },
      {
        id: 'be-v-rest-api',
        type: 'video',
        title: 'Conceitos e Exemplos de API REST',
        url: 'https://example.com/formacao/backend/rest-video',
        durationMinutes: 20,
      },
      {
        id: 'be-v-security',
        type: 'video',
        title: 'Fundamentos de Segurança Web',
        url: 'https://example.com/formacao/backend/security-video',
        durationMinutes: 30,
      },
      {
        id: 'be-e-db-schema',
        type: 'exercise',
        title: 'Projetar um esquema normalizado para uma academia digital — Alunos, Cursos, Matrículas',
        url: 'https://example.com/formacao/backend/db-schema',
        durationMinutes: 45,
      },
      {
        id: 'be-e-crud-api',
        type: 'exercise',
        title: 'Construir uma API CRUD (Node/Express ou Spring Boot) para um sistema de inventário; validar todas as entradas na fronteira',
        url: 'https://example.com/formacao/backend/crud-api',
        durationMinutes: 90,
      },
      {
        id: 'be-e-security',
        type: 'exercise',
        title: 'Implementar hashing bcrypt para registro de usuários; atacar e corrigir SQL injection com queries parametrizadas',
        url: 'https://example.com/formacao/backend/security-exercise',
        durationMinutes: 60,
      },
    ],
  },
  {
    id: 'backend-advanced',
    order: 4,
    title: 'Backend Avançado',
    description:
      'TDD, Clean Architecture, DDD, caching e CI/CD. Transformando um programador em Engenheiro de Software.',
    longDescription: `Esta fase transforma um programador em Engenheiro de Software, focando em manutenibilidade, testes e design de sistemas.

Escrever código que funciona é o mínimo. Escrever código que pode ser testado, refatorado e entendido por um colega seis meses depois é o trabalho real.

Você vai reconstruir uma API existente test-first (Red-Green-Refactor), depois refatorá-la para seguir Clean Architecture — isolando a lógica de negócio do framework e do banco de dados completamente. DDD dá a você o vocabulário para modelar domínios complexos com precisão. Redis e message brokers ensinam a projetar sistemas que permanecem rápidos sob carga. Docker e CI/CD fecham o ciclo do código ao artefato implantado e testado.

Ao final, você deve ser capaz de abrir um codebase e imediatamente identificar onde a lógica de domínio vive, como está a cobertura de testes, e o que vai quebrar quando os requisitos mudarem. Esse é o padrão.`,
    resources: [
      {
        id: 'adv-r-tdd',
        type: 'reading',
        title: 'Ciclo Red-Green-Refactor, testes unitários, testes de integração e mocking',
        url: 'https://example.com/formacao/advanced/tdd',
        durationMinutes: 25,
      },
      {
        id: 'adv-r-solid-clean',
        type: 'reading',
        title: 'Os 5 princípios SOLID, Injeção de Dependência, camadas da Clean Architecture',
        url: 'https://example.com/formacao/advanced/solid-clean',
        durationMinutes: 30,
      },
      {
        id: 'adv-r-ddd',
        type: 'reading',
        title: 'DDD: Linguagem Ubíqua, Bounded Contexts, Aggregates, Entidades vs. Value Objects',
        url: 'https://example.com/formacao/advanced/ddd',
        durationMinutes: 28,
      },
      {
        id: 'adv-r-caching-queues',
        type: 'reading',
        title: 'Redis, estratégias de cache em memória, processamento assíncrono, RabbitMQ e Kafka',
        url: 'https://example.com/formacao/advanced/caching-queues',
        durationMinutes: 25,
      },
      {
        id: 'adv-r-docker-cicd',
        type: 'reading',
        title: 'Imagens Docker, containers, docker-compose, GitHub Actions / GitLab CI',
        url: 'https://example.com/formacao/advanced/docker-cicd',
        durationMinutes: 22,
      },
      {
        id: 'adv-v-tdd',
        type: 'video',
        title: 'TDD em Java / Node.js',
        url: 'https://example.com/formacao/advanced/tdd-video',
        durationMinutes: 45,
      },
      {
        id: 'adv-v-clean-architecture',
        type: 'video',
        title: 'Uncle Bob — Aulas de Clean Architecture',
        url: 'https://example.com/formacao/advanced/clean-arch-video',
        durationMinutes: 60,
      },
      {
        id: 'adv-v-ddd',
        type: 'video',
        title: 'Fundamentos de Domain-Driven Design',
        url: 'https://example.com/formacao/advanced/ddd-video',
        durationMinutes: 50,
      },
      {
        id: 'adv-v-caching-queues',
        type: 'video',
        title: 'Design de Sistemas: Caching & Filas de Mensagens Explicados',
        url: 'https://example.com/formacao/advanced/caching-video',
        durationMinutes: 35,
      },
      {
        id: 'adv-v-docker',
        type: 'video',
        title: 'Docker em 100 Segundos + tutorial completo de Docker',
        url: 'https://example.com/formacao/advanced/docker-video',
        durationMinutes: 25,
      },
      {
        id: 'adv-e-tdd-rebuild',
        type: 'exercise',
        title: 'Reconstruir a API da Fase 3 test-first; atingir ≥ 85% de cobertura com exceções tipadas',
        url: 'https://example.com/formacao/advanced/tdd-exercise',
        durationMinutes: 120,
      },
      {
        id: 'adv-e-clean-arch',
        type: 'exercise',
        title: 'Refatorar a API para Clean Architecture — lógica de negócio totalmente isolada do framework e BD',
        url: 'https://example.com/formacao/advanced/clean-arch-exercise',
        durationMinutes: 90,
      },
      {
        id: 'adv-e-ddd',
        type: 'exercise',
        title: 'Mapear um domínio de triagem de leads: definir linguagem ubíqua, aggregate roots e bounded contexts',
        url: 'https://example.com/formacao/advanced/ddd-exercise',
        durationMinutes: 60,
      },
      {
        id: 'adv-e-redis',
        type: 'exercise',
        title: 'Introduzir Redis para cachear queries de leitura de alta frequência, separadas das escritas transacionais',
        url: 'https://example.com/formacao/advanced/redis-exercise',
        durationMinutes: 45,
      },
      {
        id: 'adv-e-docker-cicd',
        type: 'exercise',
        title: 'Escrever um Dockerfile + docker-compose (app + PostgreSQL) e um pipeline CI que roda testes no push',
        url: 'https://example.com/formacao/advanced/docker-exercise',
        durationMinutes: 60,
      },
    ],
  },
];
