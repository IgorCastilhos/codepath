import type { Phase } from '../domain/milestone';

export const curriculumPtBR: readonly Phase[] = [
  // ─── Fase 01 — Fundamentos de CS & Internet ───
  {
    id: 'phase-01',
    order: 1,
    title: 'Fundamentos de CS & Internet',
    description:
      'Como a internet funciona, sistemas operacionais, redes, Git, SDLC e pensamento computacional.',
    longDescription:
      'Esta fase constr\u00F3i a base para tudo o que vem a seguir na carreira de engenharia de software. Voc\u00EA vai entender como a internet realmente funciona \u2014 desde digitar uma URL no navegador at\u00E9 receber uma p\u00E1gina renderizada \u2014 e explorar os conceitos de sistemas operacionais que sustentam toda aplica\u00E7\u00E3o que voc\u00EA ir\u00E1 construir.\n\nAl\u00E9m da tecnologia em si, esta fase tamb\u00E9m apresenta o lado *profissional* do software: controle de vers\u00E3o com Git, o Ciclo de Desenvolvimento de Software (SDLC) e a mentalidade de resolu\u00E7\u00E3o de problemas conhecida como pensamento computacional. Dominar esses fundamentos significa que voc\u00EA nunca ficar\u00E1 perdido quando algu\u00E9m mencionar DNS, TCP ou um pull request em um code review.\n\nAo final da Fase 01, voc\u00EA ser\u00E1 capaz de rastrear uma requisi\u00E7\u00E3o de rede de ponta a ponta, navegar no terminal com confian\u00E7a, colaborar atrav\u00E9s do Git e GitHub e decompor problemas complexos em passos gerenci\u00E1veis.',
    chapters: [
      {
        id: 'ch-1-1',
        phaseId: 'phase-01',
        order: 1,
        title: 'Como a internet funciona',
        description:
          'Clientes e servidores, DNS, endereçamento IP, HTTP/HTTPS, portas, ciclo requisição/resposta, cookies, sessões e conceitos essenciais de desempenho.',
        longDescription:
          'A internet \u00E9 a espinha dorsal do software moderno. Neste cap\u00EDtulo voc\u00EA aprender\u00E1 como um navegador web se comunica com um servidor remoto por meio do Sistema de Nomes de Dom\u00EDnio (DNS), endere\u00E7os IP e o Protocolo de Transfer\u00EAncia de Hipertexto (HTTP/HTTPS). Voc\u00EA rastrear\u00E1 o ciclo de vida completo de uma requisi\u00E7\u00E3o \u2014 do momento em que pressiona Enter na barra de endere\u00E7os at\u00E9 o momento em que o HTML chega ao seu navegador.\n\nTamb\u00E9m abordamos conceitos de web com estado, como cookies e sess\u00F5es, e explicamos por que o HTTPS \u00E9 essencial para a seguran\u00E7a. Vocabul\u00E1rio de desempenho como *lat\u00EAncia*, *throughput* e *largura de banda* \u00E9 introduzido para que voc\u00EA possa raciocinar sobre p\u00E1ginas lentas e gargalos.\n\nPor fim, voc\u00EA comparar\u00E1 sites est\u00E1ticos (arquivos HTML/CSS simples servidos como est\u00E3o) com aplica\u00E7\u00F5es web din\u00E2micas que geram conte\u00FAdo sob demanda, estabelecendo a base conceitual para o desenvolvimento tanto front-end quanto back-end.',
        resources: [
          {
            id: 'ch11-r-dns',
            type: 'reading',
            title: 'Como funcionam a resolução DNS e as requisições HTTP',
            url: 'https://codepath.dev/formacao/dns-and-http',
            durationMinutes: 25,
          },
          {
            id: 'ch11-v-internet',
            type: 'video',
            title: 'A internet explicada: de pacotes a páginas',
            url: 'https://codepath.dev/formacao/internet-explained',
            durationMinutes: 35,
          },
          {
            id: 'ch11-e-http-trace',
            type: 'exercise',
            title: 'Rastreie uma requisição HTTP com o DevTools do navegador',
            url: 'https://codepath.dev/formacao/http-trace-exercise',
            durationMinutes: 40,
          },
          {
            id: 'ch11-e-static-site',
            type: 'exercise',
            title: 'Construa e publique um site estático com HTML/CSS',
            url: 'https://codepath.dev/formacao/static-site-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-1-2',
        phaseId: 'phase-01',
        order: 2,
        title: 'Sistemas Operacionais & processos',
        description:
          'O que um SO faz, kernel vs espaço do usuário, processos e threads, gerenciamento de CPU/memória/disco/IO e uso básico da CLI.',
        longDescription:
          'Todo programa que voc\u00EA escreve roda sobre um sistema operacional. Este cap\u00EDtulo desmistifica o que o SO realmente faz: gerenciar recursos de hardware, escalonar processos, lidar com aloca\u00E7\u00E3o de mem\u00F3ria e fornecer uma fronteira segura entre aplica\u00E7\u00F5es do espa\u00E7o do usu\u00E1rio e o kernel.\n\nVoc\u00EA aprender\u00E1 a diferen\u00E7a entre um *processo* e uma *thread*, entender\u00E1 como a CPU alterna entre tarefas e ver\u00E1 como a mem\u00F3ria \u00E9 organizada em stacks e heaps. No\u00E7\u00F5es b\u00E1sicas de I/O de disco e sistema de arquivos completam o cen\u00E1rio para que voc\u00EA saiba onde seus dados residem.\n\nO cap\u00EDtulo encerra com uma introdu\u00E7\u00E3o pr\u00E1tica \u00E0 interface de linha de comando (CLI) no Linux e macOS. Voc\u00EA praticar\u00E1 navega\u00E7\u00E3o em diret\u00F3rios, inspe\u00E7\u00E3o de processos em execu\u00E7\u00E3o e gerenciamento de arquivos \u2014 habilidades indispens\u00E1veis para qualquer desenvolvedor back-end ou engenheiro DevOps.',
        resources: [
          { id: 'ch12-r-os-basics', type: 'reading', title: 'Kernel, processos e gerenciamento de memória', url: 'https://codepath.dev/formacao/os-basics', durationMinutes: 25 },
          { id: 'ch12-v-os-overview', type: 'video', title: 'Curso intensivo de Sistemas Operacionais: do boot ao processo', url: 'https://codepath.dev/formacao/os-overview', durationMinutes: 30 },
          { id: 'ch12-e-cli-navigation', type: 'exercise', title: 'Domine o terminal: navegação de arquivos e permissões', url: 'https://codepath.dev/formacao/cli-navigation-exercise', durationMinutes: 35 },
          { id: 'ch12-e-process-inspect', type: 'exercise', title: 'Inspecione processos em execução com ps, top e htop', url: 'https://codepath.dev/formacao/process-inspect-exercise', durationMinutes: 30 },
        ],
      },
      {
        id: 'ch-1-3',
        phaseId: 'phase-01',
        order: 3,
        title: 'Redes & protocolos',
        description:
          'Modelo TCP/IP, TCP vs UDP, sockets, portas comuns e conceitos introdutórios de segurança de rede como TLS e certificados.',
        longDescription:
          'Redes s\u00E3o a cola que conecta todo sistema distribu\u00EDdo. Este cap\u00EDtulo mergulha al\u00E9m da camada HTTP e explora o modelo TCP/IP que governa toda a comunica\u00E7\u00E3o na internet. Voc\u00EA entender\u00E1 como os dados s\u00E3o divididos em pacotes, roteados atrav\u00E9s de redes e remontados no destino.\n\nA distin\u00E7\u00E3o entre *TCP* (entrega confi\u00E1vel e ordenada) e *UDP* (r\u00E1pido, melhor esfor\u00E7o) \u00E9 fundamental para escolher o protocolo certo para cada caso de uso \u2014 de p\u00E1ginas web a v\u00EDdeo em tempo real. Voc\u00EA tamb\u00E9m aprender\u00E1 sobre sockets, a abstra\u00E7\u00E3o de programa\u00E7\u00E3o que permite que aplica\u00E7\u00F5es enviem e recebam dados pela rede, e se familiarizar\u00E1 com portas conhecidas (80, 443, 22, 5432, etc.).\n\nPor fim, introduzimos os fundamentos de seguran\u00E7a de rede: como o TLS criptografa o tr\u00E1fego, o que os certificados digitais comprovam e como ataques de Nega\u00E7\u00E3o de Servi\u00E7o Distribu\u00EDda (DDoS) funcionam em alto n\u00EDvel. Esses conceitos preparam voc\u00EA para os cap\u00EDtulos focados em seguran\u00E7a mais adiante no curr\u00EDculo.',
        resources: [
          { id: 'ch13-r-tcp-ip', type: 'reading', title: 'O modelo TCP/IP e como os dados trafegam', url: 'https://codepath.dev/formacao/tcp-ip-model', durationMinutes: 25 },
          { id: 'ch13-v-protocols', type: 'video', title: 'TCP vs UDP e protocolos de rede visualizados', url: 'https://codepath.dev/formacao/protocols-visualized', durationMinutes: 30 },
          { id: 'ch13-e-socket-chat', type: 'exercise', title: 'Construa um chat TCP simples com sockets', url: 'https://codepath.dev/formacao/socket-chat-exercise', durationMinutes: 45 },
          { id: 'ch13-e-tls-inspect', type: 'exercise', title: 'Inspecione certificados TLS com OpenSSL', url: 'https://codepath.dev/formacao/tls-inspect-exercise', durationMinutes: 35 },
        ],
      },
      {
        id: 'ch-1-4',
        phaseId: 'phase-01',
        order: 4,
        title: 'Controle de versão com Git',
        description:
          'Repositórios, commits, branches, merges, tags, remotos, fluxo feature branch, pull requests e code review no GitHub.',
        longDescription:
          'Controle de vers\u00E3o \u00E9 a ferramenta de colabora\u00E7\u00E3o mais importante na engenharia de software. Este cap\u00EDtulo ensina Git desde o in\u00EDcio: inicializando um reposit\u00F3rio, preparando mudan\u00E7as para commit, escrevendo mensagens de commit significativas e entendendo o grafo ac\u00EDclico direcionado (DAG) que o Git constr\u00F3i internamente.\n\nVoc\u00EA dominar\u00E1 estrat\u00E9gias de branching \u2014 criando feature branches, fazendo merge de volta, resolvendo conflitos e usando tags para marcar releases. O *fluxo feature branch* \u00E9 apresentado como a forma padr\u00E3o da ind\u00FAstria para equipes colaborarem sem pisar no c\u00F3digo umas das outras.\n\nO cap\u00EDtulo tamb\u00E9m cobre reposit\u00F3rios remotos em plataformas como GitHub e GitLab. Voc\u00EA abrir\u00E1 pull requests, participar\u00E1 de code reviews e aprender\u00E1 a etiqueta que faz de voc\u00EA um membro valioso da equipe desde o primeiro dia. Ao final, voc\u00EA se sentir\u00E1 confiante para fazer push de c\u00F3digo, revisar o trabalho de outros e se recuperar de erros comuns do Git.',
        resources: [
          { id: 'ch14-r-git-fundamentals', type: 'reading', title: 'Internos do Git: commits, branches e o DAG', url: 'https://codepath.dev/formacao/git-fundamentals', durationMinutes: 30 },
          { id: 'ch14-v-git-workflow', type: 'video', title: 'Fluxo feature branch e pull requests', url: 'https://codepath.dev/formacao/git-workflow', durationMinutes: 35 },
          { id: 'ch14-e-branch-merge', type: 'exercise', title: 'Pratique branching, merging e resolução de conflitos', url: 'https://codepath.dev/formacao/branch-merge-exercise', durationMinutes: 45 },
          { id: 'ch14-e-pr-review', type: 'exercise', title: 'Abra um pull request e conduza um code review', url: 'https://codepath.dev/formacao/pr-review-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-1-5',
        phaseId: 'phase-01',
        order: 5,
        title: 'Fundamentos do ciclo de desenvolvimento de software (SDLC)',
        description:
          'Levantamento de requisitos, análise, design, desenvolvimento, testes, deploy, monitoramento e metodologias ágeis.',
        longDescription:
          'Escrever c\u00F3digo \u00E9 apenas uma parte da constru\u00E7\u00E3o de software. Este cap\u00EDtulo amplia a vis\u00E3o para mostrar o ciclo de vida completo: levantamento de requisitos, an\u00E1lise de viabilidade, design de uma solu\u00E7\u00E3o, desenvolvimento, testes de corretude, deploy em produ\u00E7\u00E3o e monitoramento de problemas ap\u00F3s o lan\u00E7amento.\n\nVoc\u00EA comparar\u00E1 abordagens tradicionais *Waterfall* \u2014 onde cada fase \u00E9 conclu\u00EDda antes da pr\u00F3xima come\u00E7ar \u2014 com metodologias *Agile* modernas que abra\u00E7am mudan\u00E7as atrav\u00E9s de itera\u00E7\u00F5es curtas. Scrum (sprints, standups, retrospectivas) e Kanban (fluxo cont\u00EDnuo, limites de WIP) s\u00E3o apresentados como os dois frameworks \u00E1geis mais populares.\n\nPor fim, voc\u00EA aprender\u00E1 a escrever *user stories* e agrup\u00E1-las em *epics*, dando a voc\u00EA uma linguagem compartilhada com product managers e designers. Entender o SDLC permite que voc\u00EA veja onde seu c\u00F3digo se encaixa no cen\u00E1rio maior e se comunique efetivamente com cada papel em uma equipe multifuncional.',
        resources: [
          { id: 'ch15-r-sdlc-phases', type: 'reading', title: 'As sete fases do ciclo de desenvolvimento de software', url: 'https://codepath.dev/formacao/sdlc-phases', durationMinutes: 20 },
          { id: 'ch15-v-agile-scrum', type: 'video', title: 'Agile, Scrum e Kanban na prática', url: 'https://codepath.dev/formacao/agile-scrum', durationMinutes: 35 },
          { id: 'ch15-e-user-stories', type: 'exercise', title: 'Escreva user stories e crie um sprint backlog', url: 'https://codepath.dev/formacao/user-stories-exercise', durationMinutes: 40 },
          { id: 'ch15-e-kanban-board', type: 'exercise', title: 'Monte um quadro Kanban e simule um sprint', url: 'https://codepath.dev/formacao/kanban-board-exercise', durationMinutes: 35 },
        ],
      },
      {
        id: 'ch-1-6',
        phaseId: 'phase-01',
        order: 6,
        title: 'Pensamento computacional e resolução de problemas',
        description:
          'Decomposição, reconhecimento de padrões, abstração, design de algoritmos e estratégias para leitura de enunciados.',
        longDescription:
          'Antes de escrever uma solu\u00E7\u00E3o, voc\u00EA precisa *entender* o problema. O pensamento computacional \u00E9 uma abordagem estruturada para a resolu\u00E7\u00E3o de problemas que todo engenheiro \u2014 independentemente de linguagem ou framework \u2014 utiliza diariamente. Ele se divide em quatro pilares: *decomposi\u00E7\u00E3o* (dividir problemas grandes em menores), *reconhecimento de padr\u00F5es* (identificar similaridades com problemas j\u00E1 resolvidos), *abstra\u00E7\u00E3o* (ignorar detalhes irrelevantes) e *design de algoritmos* (definir instru\u00E7\u00F5es passo a passo).\n\nEste cap\u00EDtulo treina voc\u00EA a ler enunciados com aten\u00E7\u00E3o, identificar entradas e sa\u00EDdas e esbo\u00E7ar um plano antes de tocar no teclado. Voc\u00EA praticar\u00E1 traduzir cen\u00E1rios do mundo real em pseudoc\u00F3digo e fluxogramas, construindo o h\u00E1bito de pensar antes de programar.\n\nTamb\u00E9m cobrimos habilidades pr\u00E1ticas como pesquisar no Stack Overflow de forma eficaz, ler documenta\u00E7\u00E3o oficial e fazer boas perguntas. Essas \u201Cmeta-habilidades\u201D aceleram o aprendizado em todas as fases seguintes e fazem de voc\u00EA um engenheiro autossuficiente, capaz de enfrentar desafios desconhecidos com confian\u00E7a.',
        resources: [
          { id: 'ch16-r-thinking', type: 'reading', title: 'Os quatro pilares do pensamento computacional', url: 'https://codepath.dev/formacao/computational-thinking', durationMinutes: 20 },
          { id: 'ch16-v-problem-solving', type: 'video', title: 'Como decompor qualquer problema de programação', url: 'https://codepath.dev/formacao/problem-solving', durationMinutes: 25 },
          { id: 'ch16-e-pseudocode', type: 'exercise', title: 'Traduza cenários do mundo real em pseudocódigo', url: 'https://codepath.dev/formacao/pseudocode-exercise', durationMinutes: 40 },
          { id: 'ch16-e-decomposition', type: 'exercise', title: 'Decomponha uma funcionalidade complexa em subproblemas', url: 'https://codepath.dev/formacao/decomposition-exercise', durationMinutes: 35 },
        ],
      },
    ],
  },

  // ─── Fase 02 — Fundamentos de Programação & DSA ───
  {
    id: 'phase-02',
    order: 2,
    title: 'Fundamentos de Programação & DSA',
    description:
      'Variáveis, POO, estruturas de dados, algoritmos, código limpo e fundamentos de testes.',
    longDescription:
      'A Fase 02 \u00E9 onde voc\u00EA constr\u00F3i a mentalidade anal\u00EDtica que separa um programador de um engenheiro. Come\u00E7ando com fundamentos de programa\u00E7\u00E3o \u2014 vari\u00E1veis, fluxo de controle, fun\u00E7\u00F5es \u2014 voc\u00EA avan\u00E7ar\u00E1 rapidamente para Programa\u00E7\u00E3o Orientada a Objetos e aprender\u00E1 a modelar dom\u00EDnios do mundo real com classes, heran\u00E7a e polimorfismo.\n\nO cora\u00E7\u00E3o desta fase s\u00E3o Estruturas de Dados e Algoritmos (DSA). Voc\u00EA implementar\u00E1 e raciocinar\u00E1 sobre arrays, listas encadeadas, pilhas, filas, \u00E1rvores e hash maps, e aprender\u00E1 a avaliar seu desempenho usando a nota\u00E7\u00E3o Big-O. Algoritmos cl\u00E1ssicos de busca e ordena\u00E7\u00E3o se tornar\u00E3o naturais atrav\u00E9s de pr\u00E1tica deliberada em plataformas como LeetCode e HackerRank.\n\nPor fim, voc\u00EA adotar\u00E1 h\u00E1bitos profissionais desde cedo: escrever c\u00F3digo limpo e leg\u00EDvel e verificar a corretude por meio de testes automatizados. O ciclo de Desenvolvimento Orientado a Testes (TDD) \u2014 Red, Green, Refactor \u2014 \u00E9 introduzido aqui e refor\u00E7ado ao longo de todo o restante do curr\u00EDculo.',
    chapters: [
      {
        id: 'ch-2-1', phaseId: 'phase-02', order: 7,
        title: 'Lógica de programação e estruturas de controle',
        description: 'Tipos primitivos, operadores, condicionais, laços, funções, escopo e introdução à recursão.',
        longDescription:
          'Todo programa \u00E9 constru\u00EDdo a partir de um pequeno conjunto de blocos fundamentais: vari\u00E1veis que armazenam dados, operadores que os transformam e estruturas de controle que decidem *qual* c\u00F3digo executa *quando*. Este cap\u00EDtulo aborda tipos de dados primitivos (inteiros, ponto flutuante, booleanos, strings, caracteres), operadores aritm\u00E9ticos e l\u00F3gicos e as instru\u00E7\u00F5es condicionais (`if`, `else if`, `switch`) que permitem ao seu c\u00F3digo tomar decis\u00F5es.\n\nLa\u00E7os (`for`, `while`, `do-while`) possibilitam a repeti\u00E7\u00E3o, e fun\u00E7\u00F5es permitem empacotar l\u00F3gica reutiliz\u00E1vel por tr\u00E1s de um nome descritivo. Voc\u00EA aprender\u00E1 sobre *escopo* \u2014 onde uma vari\u00E1vel \u00E9 vis\u00EDvel \u2014 e por que isso importa para evitar bugs. Uma introdu\u00E7\u00E3o suave \u00E0 *recurs\u00E3o* mostra como uma fun\u00E7\u00E3o pode chamar a si mesma para resolver problemas que se decomp\u00F5em naturalmente em inst\u00E2ncias menores.\n\nAo final deste cap\u00EDtulo, voc\u00EA ser\u00E1 capaz de escrever pequenos programas que aceitam entrada, a processam atrav\u00E9s de l\u00F3gica de decis\u00E3o e repeti\u00E7\u00E3o, e produzem sa\u00EDda correta \u2014 a funda\u00E7\u00E3o sobre a qual toda aplica\u00E7\u00E3o maior \u00E9 constru\u00EDda.',
        resources: [
          { id: 'ch21-r-control-flow', type: 'reading', title: 'Variáveis, tipos e fluxo de controle explicados', url: 'https://codepath.dev/formacao/control-flow', durationMinutes: 25 },
          { id: 'ch21-v-logic-loops', type: 'video', title: 'Condicionais, laços e funções em ação', url: 'https://codepath.dev/formacao/logic-loops', durationMinutes: 30 },
          { id: 'ch21-e-fizzbuzz', type: 'exercise', title: 'Resolva problemas clássicos de lógica: FizzBuzz e além', url: 'https://codepath.dev/formacao/fizzbuzz-exercise', durationMinutes: 35 },
          { id: 'ch21-e-recursion-intro', type: 'exercise', title: 'Implemente fatorial e Fibonacci com recursão', url: 'https://codepath.dev/formacao/recursion-intro-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-2-2', phaseId: 'phase-02', order: 8,
        title: 'Programação orientada a objetos (POO)',
        description: 'Classes, objetos, encapsulamento, herança, polimorfismo, composição vs herança, interfaces, classes abstratas e visão geral de SOLID.',
        longDescription:
          'A Programa\u00E7\u00E3o Orientada a Objetos \u00E9 o paradigma dominante no software corporativo. Este cap\u00EDtulo ensina voc\u00EA a modelar conceitos do mundo real como *classes* que agrupam dados (campos) e comportamento (m\u00E9todos). O *encapsulamento* oculta detalhes internos por tr\u00E1s de uma API p\u00FAblica, tornando o c\u00F3digo mais f\u00E1cil de alterar sem quebrar os consumidores.\n\nA *heran\u00E7a* permite criar classes especializadas a partir de classes gerais, enquanto o *polimorfismo* permite que uma \u00FAnica interface represente diferentes comportamentos subjacentes \u2014 a base de sistemas flex\u00EDveis e extens\u00EDveis. Voc\u00EA tamb\u00E9m aprender\u00E1 quando preferir *composi\u00E7\u00E3o em vez de heran\u00E7a* para evitar hierarquias de classes profundas e fr\u00E1geis.\n\nO cap\u00EDtulo encerra com *interfaces*, *classes abstratas* e uma vis\u00E3o geral dos princ\u00EDpios SOLID (Responsabilidade \u00DAnica, Aberto/Fechado, Substitui\u00E7\u00E3o de Liskov, Segrega\u00E7\u00E3o de Interface, Invers\u00E3o de Depend\u00EAncia). Essas diretrizes de design ser\u00E3o exploradas em profundidade na Fase 04, mas entend\u00EA-las cedo ajuda a escrever c\u00F3digo melhor desde o in\u00EDcio.',
        resources: [
          { id: 'ch22-r-oop-pillars', type: 'reading', title: 'Os quatro pilares da POO e quando usá-los', url: 'https://codepath.dev/formacao/oop-pillars', durationMinutes: 25 },
          { id: 'ch22-v-oop-practice', type: 'video', title: 'POO na prática: classes, herança e polimorfismo', url: 'https://codepath.dev/formacao/oop-practice', durationMinutes: 35 },
          { id: 'ch22-e-class-design', type: 'exercise', title: 'Projete uma hierarquia de classes para um sistema de biblioteca', url: 'https://codepath.dev/formacao/class-design-exercise', durationMinutes: 45 },
          { id: 'ch22-e-composition', type: 'exercise', title: 'Refatore herança para composição', url: 'https://codepath.dev/formacao/composition-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-2-3', phaseId: 'phase-02', order: 9,
        title: 'Estruturas de dados essenciais',
        description: 'Arrays, listas encadeadas, pilhas, filas, conjuntos, mapas/dicionários, coleções Java, arrays/maps JS e noções de Big-O.',
        longDescription:
          'Escolher a estrutura de dados certa \u00E9 frequentemente a diferen\u00E7a entre uma solu\u00E7\u00E3o que funciona e uma que funciona *bem*. Este cap\u00EDtulo apresenta as estruturas fundamentais que todo engenheiro deve conhecer: *arrays* para acesso indexado, *listas encadeadas* para inser\u00E7\u00F5es e remo\u00E7\u00F5es eficientes, *pilhas* (LIFO) e *filas* (FIFO) para gerenciar ordem, e *conjuntos* e *mapas* para buscas r\u00E1pidas.\n\nVoc\u00EA implementar\u00E1 cada estrutura do zero para entender os trade-offs \u2014 e depois aprender\u00E1 a forma idiom\u00E1tica de us\u00E1-las em Java (o Collections Framework: `ArrayList`, `LinkedList`, `HashMap`, `HashSet`) e JavaScript (`Array`, `Map`, `Set`). Padr\u00F5es de uso do mundo real, como usar uma pilha para hist\u00F3rico de desfazer ou uma fila para processamento de tarefas, tornam os conceitos concretos.\n\nO cap\u00EDtulo tamb\u00E9m introduz a *nota\u00E7\u00E3o Big-O* \u2014 a linguagem que engenheiros usam para descrever como os requisitos de tempo ou espa\u00E7o de um algoritmo crescem com o tamanho da entrada. Voc\u00EA analisar\u00E1 opera\u00E7\u00F5es comuns (acesso, busca, inser\u00E7\u00E3o, remo\u00E7\u00E3o) para cada estrutura de dados, construindo a intui\u00E7\u00E3o que guia toda decis\u00E3o de design daqui em diante.',
        resources: [
          { id: 'ch23-r-data-structures', type: 'reading', title: 'Arrays, listas, pilhas, filas e mapas comparados', url: 'https://codepath.dev/formacao/data-structures', durationMinutes: 30 },
          { id: 'ch23-v-big-o', type: 'video', title: 'Notação Big-O e desempenho de estruturas de dados', url: 'https://codepath.dev/formacao/big-o-notation', durationMinutes: 35 },
          { id: 'ch23-e-implement-stack', type: 'exercise', title: 'Implemente uma pilha e uma fila do zero', url: 'https://codepath.dev/formacao/stack-queue-exercise', durationMinutes: 50 },
          { id: 'ch23-e-hashmap', type: 'exercise', title: 'Construa um HashMap simples com tratamento de colisões', url: 'https://codepath.dev/formacao/hashmap-exercise', durationMinutes: 55 },
        ],
      },
      {
        id: 'ch-2-4', phaseId: 'phase-02', order: 10,
        title: 'Algoritmos básicos',
        description: 'Busca linear e binária, algoritmos clássicos de ordenação, recursão, divisão e conquista, introdução à programação dinâmica e prática de programação.',
        longDescription:
          'Algoritmos s\u00E3o receitas passo a passo para resolver problemas computacionais. Este cap\u00EDtulo come\u00E7a com *busca*: busca linear (simples, mas lenta) e busca bin\u00E1ria (r\u00E1pida, mas requer dados ordenados). Voc\u00EA provar\u00E1 a si mesmo por que a busca bin\u00E1ria \u00E9 O(log n) ao observar a entrada ser reduzida pela metade a cada compara\u00E7\u00E3o.\n\nEm seguida v\u00EAm os algoritmos cl\u00E1ssicos de *ordena\u00E7\u00E3o*: insertion sort e selection sort (f\u00E1ceis de entender, O(n\u00B2)), depois merge sort e quicksort (eficientes, O(n log n)). Entender a *recurs\u00E3o* profundamente \u00E9 fundamental aqui \u2014 merge sort \u00E9 o exemplo cl\u00E1ssico da estrat\u00E9gia de *divis\u00E3o e conquista*, onde um problema \u00E9 dividido, resolvido independentemente e combinado.\n\nO cap\u00EDtulo encerra com uma introdu\u00E7\u00E3o suave \u00E0 *programa\u00E7\u00E3o din\u00E2mica* (PD) \u2014 reconhecer subproblemas sobrepostos e armazenar resultados em cache para evitar trabalho redundante. Voc\u00EA praticar\u00E1 em problemas selecionados do LeetCode e HackerRank, construindo a mem\u00F3ria muscular que transforma teoria algor\u00EDtmica em habilidade pr\u00E1tica.',
        resources: [
          { id: 'ch24-r-search-sort', type: 'reading', title: 'Algoritmos de busca e ordenação explicados', url: 'https://codepath.dev/formacao/search-sort', durationMinutes: 25 },
          { id: 'ch24-v-algorithms', type: 'video', title: 'Visualizando Merge Sort, Quick Sort e busca binária', url: 'https://codepath.dev/formacao/algorithms-visualized', durationMinutes: 40 },
          { id: 'ch24-e-sorting', type: 'exercise', title: 'Implemente Merge Sort e Quick Sort do zero', url: 'https://codepath.dev/formacao/sorting-exercise', durationMinutes: 50 },
          { id: 'ch24-e-dp-intro', type: 'exercise', title: 'Resolva seus primeiros problemas de programação dinâmica', url: 'https://codepath.dev/formacao/dp-intro-exercise', durationMinutes: 55 },
        ],
      },
      {
        id: 'ch-2-5', phaseId: 'phase-02', order: 11,
        title: 'Boas práticas de código',
        description: 'Nomes significativos, funções curtas, evitar duplicação, código legível, testes manuais, logging e depuração.',
        longDescription:
          'C\u00F3digo \u00E9 lido com muito mais frequ\u00EAncia do que \u00E9 escrito. Este cap\u00EDtulo destila os princ\u00EDpios do livro *Clean Code* de Robert C. Martin em h\u00E1bitos acion\u00E1veis que voc\u00EA pode adotar imediatamente. Voc\u00EA aprender\u00E1 a escolher *nomes significativos* que revelam inten\u00E7\u00E3o, escrever *fun\u00E7\u00F5es curtas* que fazem uma \u00FAnica coisa e eliminar duplica\u00E7\u00E3o por meio de abstra\u00E7\u00E3o.\n\nLegibilidade vai al\u00E9m da formata\u00E7\u00E3o: a estrutura do seu c\u00F3digo deve contar uma hist\u00F3ria. Voc\u00EA praticar\u00E1 refatorar c\u00F3digo confuso em m\u00F3dulos limpos e autodocumentados, onde cada fun\u00E7\u00E3o se l\u00EA como uma frase. Coment\u00E1rios s\u00E3o reservados para explicar o *porqu\u00EA*, n\u00E3o o *qu\u00EA* \u2014 o pr\u00F3prio c\u00F3digo cuida do resto.\n\nO cap\u00EDtulo tamb\u00E9m introduz habilidades pr\u00E1ticas de depura\u00E7\u00E3o: usar `console.log` / `System.out.println` estrategicamente, ler stack traces, definir breakpoints em uma IDE e manter um di\u00E1rio de depura\u00E7\u00E3o. Essas t\u00E9cnicas reduzem o tempo entre \u201Cn\u00E3o est\u00E1 funcionando\u201D e \u201Cencontrei o bug\u201D de horas para minutos.',
        resources: [
          { id: 'ch25-r-clean-code', type: 'reading', title: 'Princípios de código limpo: nomes, funções e DRY', url: 'https://codepath.dev/formacao/clean-code', durationMinutes: 25 },
          { id: 'ch25-v-refactoring', type: 'video', title: 'Refatorando código confuso em módulos limpos', url: 'https://codepath.dev/formacao/refactoring', durationMinutes: 30 },
          { id: 'ch25-e-naming', type: 'exercise', title: 'Refatore uma base de código: melhore nomes e reduza funções', url: 'https://codepath.dev/formacao/naming-exercise', durationMinutes: 45 },
          { id: 'ch25-e-debugging', type: 'exercise', title: 'Encontre e corrija bugs usando breakpoints e logging', url: 'https://codepath.dev/formacao/debugging-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-2-6', phaseId: 'phase-02', order: 12,
        title: 'Fundamentos de testes automatizados',
        description: 'Testes unitários, de integração e ponta a ponta, o ciclo TDD (Red → Green → Refactor), asserções e testes de funções puras.',
        longDescription:
          'Testes manuais n\u00E3o escalam. Este cap\u00EDtulo apresenta os *testes automatizados* como a rede de seguran\u00E7a que permite alterar c\u00F3digo com confian\u00E7a. Voc\u00EA aprender\u00E1 os tr\u00EAs n\u00EDveis principais: *testes unit\u00E1rios* (fun\u00E7\u00F5es individuais), *testes de integra\u00E7\u00E3o* (m\u00F3dulos trabalhando juntos) e *testes ponta a ponta* (o sistema completo da perspectiva do usu\u00E1rio).\n\nO ciclo de *Desenvolvimento Orientado a Testes* (TDD) \u2014 **Red** (escreva um teste que falha), **Green** (escreva o c\u00F3digo m\u00EDnimo para passar), **Refactor** (melhore sem alterar o comportamento) \u2014 \u00E9 apresentado como um fluxo de trabalho disciplinado que produz c\u00F3digo bem projetado e bem testado por constru\u00E7\u00E3o. Voc\u00EA praticar\u00E1 TDD em fun\u00E7\u00F5es pequenas para internalizar o ritmo.\n\nNa pr\u00E1tica, voc\u00EA escrever\u00E1 asser\u00E7\u00F5es usando frameworks populares (JUnit para Java, Jest/Vitest para JavaScript), testar\u00E1 *fun\u00E7\u00F5es puras* (sem efeitos colaterais) como ponto de partida mais f\u00E1cil e aprender\u00E1 a organizar arquivos de teste junto ao c\u00F3digo de produ\u00E7\u00E3o. Ao final, voc\u00EA ter\u00E1 uma su\u00EDte de testes rodando a cada salvamento, capturando regress\u00F5es antes que cheguem \u00E0 produ\u00E7\u00E3o.',
        resources: [
          { id: 'ch26-r-testing-levels', type: 'reading', title: 'Testes unitários, de integração e E2E explicados', url: 'https://codepath.dev/formacao/testing-levels', durationMinutes: 20 },
          { id: 'ch26-v-tdd-cycle', type: 'video', title: 'TDD na prática: Red, Green, Refactor', url: 'https://codepath.dev/formacao/tdd-cycle', durationMinutes: 35 },
          { id: 'ch26-e-first-tests', type: 'exercise', title: 'Escreva seus primeiros testes unitários com Jest ou JUnit', url: 'https://codepath.dev/formacao/first-tests-exercise', durationMinutes: 45 },
          { id: 'ch26-e-tdd-practice', type: 'exercise', title: 'Construa uma calculadora de strings usando TDD', url: 'https://codepath.dev/formacao/tdd-practice-exercise', durationMinutes: 50 },
        ],
      },
    ],
  },

  // ─── Fase 03 — Backend Iniciante ───
  {
    id: 'phase-03',
    order: 3,
    title: 'Backend Iniciante',
    description:
      'Ecossistema Java, Node.js, APIs RESTful, PostgreSQL, autenticação e documentação de APIs.',
    longDescription:
      'A Fase 03 marca a transi\u00E7\u00E3o de resolver problemas de programa\u00E7\u00E3o isolados para construir servidores web reais que lidam com requisi\u00E7\u00F5es de clientes ao redor do mundo. Voc\u00EA trabalhar\u00E1 com dois dos ecossistemas back-end mais demandados \u2014 Java com Spring Boot e Node.js com Express/Fastify \u2014 ganhando a versatilidade para contribuir em uma ampla variedade de bases de c\u00F3digo.\n\nBancos de dados relacionais s\u00E3o a espinha dorsal da maioria das aplica\u00E7\u00F5es de neg\u00F3cios. Voc\u00EA projetar\u00E1 esquemas, escrever\u00E1 SQL e conectar\u00E1 seu servidor ao PostgreSQL usando tanto drivers de baixo n\u00EDvel quanto ORMs modernos. Autentica\u00E7\u00E3o, autoriza\u00E7\u00E3o e seguran\u00E7a web s\u00E3o integradas para que toda API que voc\u00EA construir seja segura desde o in\u00EDcio.\n\nA fase culmina em um projeto capstone: uma API REST totalmente documentada e implantada, com autentica\u00E7\u00E3o, persist\u00EAncia em banco de dados e documenta\u00E7\u00E3o Swagger/OpenAPI. Este projeto se torna a primeira pe\u00E7a importante do seu portf\u00F3lio profissional.',
    chapters: [
      {
        id: 'ch-3-1', phaseId: 'phase-03', order: 13,
        title: 'Ecossistema Java para backend',
        description: 'JDK 17+, ferramentas de build Maven e Gradle, estrutura de projeto, convenções de pacotes e introdução ao Spring Boot.',
        longDescription:
          'Java continua sendo uma das linguagens mais utilizadas no desenvolvimento back-end corporativo. Este cap\u00EDtulo coloca voc\u00EA em produtividade no ecossistema Java rapidamente: instalando o JDK 17+, entendendo a diferen\u00E7a entre JDK e JRE e navegando pela estrutura padr\u00E3o de projeto (`src/main/java`, `src/test/java`).\n\nFerramentas de build s\u00E3o essenciais para gerenciar depend\u00EAncias e automatizar tarefas. Voc\u00EA aprender\u00E1 *Maven* (baseado em XML, conven\u00E7\u00E3o sobre configura\u00E7\u00E3o) e *Gradle* (DSL Groovy/Kotlin, flex\u00EDvel e r\u00E1pido), focando em declarar depend\u00EAncias, executar builds e rodar testes pela linha de comando.\n\nO cap\u00EDtulo conclui com uma introdu\u00E7\u00E3o ao *Spring Boot* \u2014 o framework padr\u00E3o de fato para aplica\u00E7\u00F5es web Java. Voc\u00EA criar\u00E1 um endpoint REST m\u00EDnimo \"Hello World\", entender\u00E1 a autoconfigura\u00E7\u00E3o e ver\u00E1 como a inje\u00E7\u00E3o de depend\u00EAncias do Spring funciona. Isso prepara o terreno para os cap\u00EDtulos de back-end mais aprofundados que se seguem.',
        resources: [
          { id: 'ch31-r-java-setup', type: 'reading', title: 'Configurando JDK 17+, Maven e Gradle', url: 'https://codepath.dev/formacao/java-setup', durationMinutes: 25 },
          { id: 'ch31-v-spring-boot', type: 'video', title: 'Sua primeira aplicação Spring Boot', url: 'https://codepath.dev/formacao/spring-boot-intro', durationMinutes: 35 },
          { id: 'ch31-e-maven-project', type: 'exercise', title: 'Crie um projeto Maven e adicione dependências', url: 'https://codepath.dev/formacao/maven-project-exercise', durationMinutes: 40 },
          { id: 'ch31-e-spring-hello', type: 'exercise', title: 'Construa um endpoint REST Hello World com Spring Boot', url: 'https://codepath.dev/formacao/spring-hello-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-3-2', phaseId: 'phase-03', order: 14,
        title: 'Ecossistema Node.js para backend',
        description: 'Runtime Node.js, npm/yarn, nvm, Express.js e Fastify, middlewares, rotas, controllers e organização de projeto.',
        longDescription:
          'Node.js permite usar JavaScript no servidor, e seu modelo de I/O n\u00E3o bloqueante o torna uma escolha popular para aplica\u00E7\u00F5es em tempo real e com muitas chamadas de API. Este cap\u00EDtulo apresenta o runtime Node.js, os gerenciadores de pacotes `npm` e `yarn`, e o `nvm` para gerenciar m\u00FAltiplas vers\u00F5es do Node em uma \u00FAnica m\u00E1quina.\n\nVoc\u00EA construir\u00E1 seu primeiro servidor HTTP com *Express.js* \u2014 o framework Node.js mais amplamente adotado \u2014 aprendendo sobre cadeias de middleware, handlers de rota e o ciclo de vida requisi\u00E7\u00E3o/resposta. O *Fastify* \u00E9 apresentado como uma alternativa de alta performance, e voc\u00EA comparar\u00E1 os dois para entender quando cada um se destaca.\n\nA organiza\u00E7\u00E3o do projeto importa conforme sua base de c\u00F3digo cresce. Voc\u00EA adotar\u00E1 uma estrutura em camadas *controllers \u2192 services \u2192 repositories*, separar\u00E1 defini\u00E7\u00F5es de rota da l\u00F3gica de neg\u00F3cios e configurar\u00E1 vari\u00E1veis de ambiente com `dotenv`. Esses padr\u00F5es mant\u00EAm projetos Node.js manuten\u00EDveis muito al\u00E9m da fase de prot\u00F3tipo.',
        resources: [
          { id: 'ch32-r-node-setup', type: 'reading', title: 'Node.js, npm, nvm e inicialização de projeto', url: 'https://codepath.dev/formacao/node-setup', durationMinutes: 20 },
          { id: 'ch32-v-express', type: 'video', title: 'Construindo APIs REST com Express.js', url: 'https://codepath.dev/formacao/express-intro', durationMinutes: 35 },
          { id: 'ch32-e-express-api', type: 'exercise', title: 'Crie uma API CRUD com Express.js e middlewares', url: 'https://codepath.dev/formacao/express-api-exercise', durationMinutes: 50 },
          { id: 'ch32-e-project-structure', type: 'exercise', title: 'Organize um projeto Node.js em camadas', url: 'https://codepath.dev/formacao/project-structure-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-3-3', phaseId: 'phase-03', order: 15,
        title: 'HTTP aplicado a APIs RESTful',
        description: 'Métodos HTTP, códigos de status, princípios REST incluindo recursos, representação, idempotência e statelessness.',
        longDescription:
          'REST (Representational State Transfer) \u00E9 o estilo arquitetural por tr\u00E1s da grande maioria das APIs web. Este cap\u00EDtulo aprofunda o protocolo HTTP: m\u00E9todos (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`), c\u00F3digos de status (`2xx` para sucesso, `4xx` para erros do cliente, `5xx` para erros do servidor), cabe\u00E7alhos e negocia\u00E7\u00E3o de conte\u00FAdo.\n\nVoc\u00EA aprender\u00E1 as restri\u00E7\u00F5es centrais do REST: *recursos* identificados por URIs, *representa\u00E7\u00F5es* em JSON ou XML, *statelessness* (cada requisi\u00E7\u00E3o carrega toda a informa\u00E7\u00E3o que o servidor precisa) e *idempot\u00EAncia* (repetir a mesma requisi\u00E7\u00E3o produz o mesmo resultado). Entender essas restri\u00E7\u00F5es permite projetar APIs previs\u00EDveis, cache\u00E1veis e f\u00E1ceis de consumir.\n\nPadr\u00F5es pr\u00E1ticos completam o cap\u00EDtulo: pagina\u00E7\u00E3o, filtragem, ordena\u00E7\u00E3o, formatos de resposta de erro e o uso de cabe\u00E7alhos `Location` para recursos criados. Ao final, voc\u00EA ser\u00E1 capaz de projetar uma API RESTful que outros desenvolvedores adoram integrar.',
        resources: [
          { id: 'ch33-r-rest-principles', type: 'reading', title: 'Restrições REST, métodos HTTP e códigos de status', url: 'https://codepath.dev/formacao/rest-principles', durationMinutes: 25 },
          { id: 'ch33-v-rest-design', type: 'video', title: 'Projetando APIs RESTful que desenvolvedores adoram', url: 'https://codepath.dev/formacao/rest-design', durationMinutes: 30 },
          { id: 'ch33-e-rest-endpoints', type: 'exercise', title: 'Projete e teste endpoints RESTful com Postman', url: 'https://codepath.dev/formacao/rest-endpoints-exercise', durationMinutes: 45 },
          { id: 'ch33-e-status-codes', type: 'exercise', title: 'Trate erros com elegância usando códigos de status corretos', url: 'https://codepath.dev/formacao/status-codes-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-3-4', phaseId: 'phase-03', order: 16,
        title: 'Bancos de dados relacionais com PostgreSQL',
        description: 'Modelo relacional, tabelas, chaves primárias e estrangeiras, normalização e consultas SQL essenciais.',
        longDescription:
          'A maioria dos dados de neg\u00F3cios reside em bancos de dados relacionais, e o PostgreSQL \u00E9 o padr\u00E3o ouro no mundo open-source. Este cap\u00EDtulo apresenta o *modelo relacional*: tabelas com linhas e colunas, chaves prim\u00E1rias que identificam registros de forma \u00FAnica e chaves estrangeiras que imp\u00F5em relacionamentos entre tabelas.\n\nA *normaliza\u00E7\u00E3o* (1NF, 2NF, 3NF) ensina como estruturar dados para minimizar redund\u00E2ncia e prevenir anomalias durante inser\u00E7\u00F5es, atualiza\u00E7\u00F5es e exclus\u00F5es. Voc\u00EA projetar\u00E1 esquemas para dom\u00EDnios realistas \u2014 produtos de e-commerce, contas de usu\u00E1rios, hist\u00F3ricos de pedidos \u2014 e ver\u00E1 como um esquema bem normalizado simplifica as consultas.\n\nNo lado do SQL, voc\u00EA dominar\u00E1 `SELECT` (com `WHERE`, `ORDER BY`, `LIMIT`), `INSERT`, `UPDATE`, `DELETE` e opera\u00E7\u00F5es de `JOIN` (`INNER`, `LEFT`, `RIGHT`). Fun\u00E7\u00F5es de agrega\u00E7\u00E3o (`COUNT`, `SUM`, `AVG`, `GROUP BY`, `HAVING`) permitem responder perguntas de neg\u00F3cios diretamente do banco de dados. Ao final, voc\u00EA estar\u00E1 confort\u00E1vel escrevendo consultas complexas e projetando esquemas do zero.',
        resources: [
          { id: 'ch34-r-relational-model', type: 'reading', title: 'Tabelas, chaves, normalização e design relacional', url: 'https://codepath.dev/formacao/relational-model', durationMinutes: 30 },
          { id: 'ch34-v-sql-essentials', type: 'video', title: 'SQL essencial: SELECT, JOIN e agregações', url: 'https://codepath.dev/formacao/sql-essentials', durationMinutes: 40 },
          { id: 'ch34-e-schema-design', type: 'exercise', title: 'Projete um esquema normalizado para um domínio de e-commerce', url: 'https://codepath.dev/formacao/schema-design-exercise', durationMinutes: 50 },
          { id: 'ch34-e-sql-queries', type: 'exercise', title: 'Escreva consultas SQL complexas com JOINs e agregações', url: 'https://codepath.dev/formacao/sql-queries-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-3-5', phaseId: 'phase-03', order: 17,
        title: 'Integração backend + banco de dados',
        description: 'Conectando PostgreSQL a Java (JDBC/JPA/Hibernate) e Node.js (pg/Prisma/TypeORM), ORMs, migrações, seeds e transações.',
        longDescription:
          'Uma API REST s\u00F3 \u00E9 \u00FAtil se ela persiste dados. Este cap\u00EDtulo ensina como conectar sua aplica\u00E7\u00E3o back-end ao PostgreSQL usando os ecossistemas Java e Node.js. No lado Java, voc\u00EA progredir\u00E1 de conex\u00F5es *JDBC* puras para *JPA* com *Hibernate*, aprendendo como o Mapeamento Objeto-Relacional (ORM) traduz entre classes e tabelas.\n\nEm Node.js, voc\u00EA usar\u00E1 o driver de baixo n\u00EDvel `pg` para SQL direto e depois avan\u00E7ar\u00E1 para *Prisma* e *TypeORM* como alternativas modernas de ORM. Voc\u00EA comparar\u00E1 o \"padr\u00E3o repository\" em ambos os ecossistemas e aprender\u00E1 quando SQL puro supera um ORM.\n\n*Migra\u00E7\u00F5es* versionam seu esquema de banco de dados junto ao c\u00F3digo para que todo ambiente \u2014 desenvolvimento, staging, produ\u00E7\u00E3o \u2014 permane\u00E7a sincronizado. *Seeds* populam dados iniciais ou de teste. *Transa\u00E7\u00F5es* garantem que um grupo de opera\u00E7\u00F5es ou todas tenham sucesso ou todas fa\u00E7am rollback, prevenindo corrup\u00E7\u00E3o de dados. Essas tr\u00EAs pr\u00E1ticas s\u00E3o inegoci\u00E1veis em aplica\u00E7\u00F5es de n\u00EDvel de produ\u00E7\u00E3o.',
        resources: [
          { id: 'ch35-r-orm-basics', type: 'reading', title: 'Conceitos de ORM: JDBC, JPA, Prisma e TypeORM', url: 'https://codepath.dev/formacao/orm-basics', durationMinutes: 25 },
          { id: 'ch35-v-db-integration', type: 'video', title: 'Conectando Spring Boot e Express ao PostgreSQL', url: 'https://codepath.dev/formacao/db-integration', durationMinutes: 40 },
          { id: 'ch35-e-migrations', type: 'exercise', title: 'Crie migrações e seeds para um app de tarefas', url: 'https://codepath.dev/formacao/migrations-exercise', durationMinutes: 50 },
          { id: 'ch35-e-transactions', type: 'exercise', title: 'Implemente transações para uma funcionalidade de transferência', url: 'https://codepath.dev/formacao/transactions-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-3-6', phaseId: 'phase-03', order: 18,
        title: 'Autenticação, autorização e segurança web básica',
        description: 'Auth vs authz, tokens JWT, sessões, OAuth2, XSS, CSRF, SQL injection e hashing de senhas.',
        longDescription:
          'Seguran\u00E7a n\u00E3o \u00E9 uma funcionalidade que se adiciona no final \u2014 ela deve fazer parte de cada camada da sua aplica\u00E7\u00E3o. Este cap\u00EDtulo distingue claramente *autentica\u00E7\u00E3o* (provar quem voc\u00EA \u00E9) de *autoriza\u00E7\u00E3o* (o que voc\u00EA tem permiss\u00E3o para fazer) e apresenta m\u00FAltiplas estrat\u00E9gias para cada uma.\n\nVoc\u00EA implementar\u00E1 autentica\u00E7\u00E3o baseada em *JWT* (JSON Web Token) \u2014 emitindo tokens no login, validando-os em cada requisi\u00E7\u00E3o e tratando fluxos de refresh. A autentica\u00E7\u00E3o baseada em sess\u00E3o \u00E9 comparada para que voc\u00EA entenda os trade-offs. O *OAuth2* \u00E9 introduzido para cen\u00E1rios de login social (Google, GitHub) onde sua aplica\u00E7\u00E3o delega a verifica\u00E7\u00E3o de identidade a um provedor confi\u00E1vel.\n\nNo lado defensivo, voc\u00EA aprender\u00E1 a prevenir as vulnerabilidades do OWASP Top-10 relevantes para APIs: *Cross-Site Scripting (XSS)*, *Cross-Site Request Forgery (CSRF)* e *SQL Injection*. Hashing de senhas com bcrypt, valida\u00E7\u00E3o de entrada e cabe\u00E7alhos HTTP seguros completam o cap\u00EDtulo, garantindo que as APIs que voc\u00EA constr\u00F3i resistam a ataques do mundo real.',
        resources: [
          { id: 'ch36-r-auth-basics', type: 'reading', title: 'Autenticação vs autorização: JWT, sessões, OAuth2', url: 'https://codepath.dev/formacao/auth-basics', durationMinutes: 25 },
          { id: 'ch36-v-web-security', type: 'video', title: 'Segurança web: XSS, CSRF, SQL Injection e defesas', url: 'https://codepath.dev/formacao/web-security', durationMinutes: 40 },
          { id: 'ch36-e-jwt-auth', type: 'exercise', title: 'Implemente autenticação JWT com refresh tokens', url: 'https://codepath.dev/formacao/jwt-auth-exercise', durationMinutes: 60 },
          { id: 'ch36-e-security-audit', type: 'exercise', title: 'Audite e corrija vulnerabilidades de segurança em uma API', url: 'https://codepath.dev/formacao/security-audit-exercise', durationMinutes: 50 },
        ],
      },
      {
        id: 'ch-3-7', phaseId: 'phase-03', order: 19,
        title: 'Construindo e documentando APIs',
        description: 'Convenções de nomenclatura RESTful, documentação OpenAPI/Swagger, versionamento de API e gerenciamento de breaking changes.',
        longDescription:
          'Uma API \u00E9 um produto, e como qualquer produto ela precisa de documenta\u00E7\u00E3o clara e um plano de evolu\u00E7\u00E3o. Este cap\u00EDtulo cobre conven\u00E7\u00F5es de nomenclatura RESTful \u2014 substantivos no plural para cole\u00E7\u00F5es (`/users`), recursos aninhados (`/users/:id/orders`) e uso consistente de m\u00E9todos HTTP \u2014 para que seus endpoints sejam intuitivos para os consumidores.\n\nO *OpenAPI* (anteriormente Swagger) \u00E9 o padr\u00E3o da ind\u00FAstria para descrever APIs REST em formato leg\u00EDvel por m\u00E1quina. Voc\u00EA escrever\u00E1 uma especifica\u00E7\u00E3o OpenAPI, gerar\u00E1 documenta\u00E7\u00E3o interativa com Swagger UI e produzir\u00E1 SDKs de cliente automaticamente. A especifica\u00E7\u00E3o se torna um contrato entre as equipes de front-end e back-end, reduzindo o atrito de integra\u00E7\u00E3o.\n\nEstrat\u00E9gias de *versionamento* de API (caminho URI `/v1/`, baseado em cabe\u00E7alho, par\u00E2metro de query) e t\u00E9cnicas para gerenciar *breaking changes* (avisos de deprecia\u00E7\u00E3o, cabe\u00E7alhos de sunset, guias de migra\u00E7\u00E3o) fecham o cap\u00EDtulo. Essas pr\u00E1ticas garantem que sua API possa evoluir sem quebrar consumidores existentes \u2014 uma habilidade cr\u00EDtica em ambientes de produ\u00E7\u00E3o.',
        resources: [
          { id: 'ch37-r-api-design', type: 'reading', title: 'Nomenclatura RESTful, versionamento e breaking changes', url: 'https://codepath.dev/formacao/api-design', durationMinutes: 20 },
          { id: 'ch37-v-openapi', type: 'video', title: 'Documentando APIs com OpenAPI e Swagger UI', url: 'https://codepath.dev/formacao/openapi-swagger', durationMinutes: 30 },
          { id: 'ch37-e-swagger-spec', type: 'exercise', title: 'Escreva uma spec OpenAPI e gere documentação Swagger', url: 'https://codepath.dev/formacao/swagger-spec-exercise', durationMinutes: 45 },
          { id: 'ch37-e-versioning', type: 'exercise', title: 'Adicione versionamento e depreciação de API ao seu servidor', url: 'https://codepath.dev/formacao/versioning-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-3-8', phaseId: 'phase-03', order: 20,
        title: 'Projeto prático de backend iniciante',
        description: 'Construa uma API completa (sistema de tarefas, blog ou e-commerce) com auth, PostgreSQL, docs Swagger e deploy no Railway ou Render.',
        longDescription:
          'Teoria s\u00F3 se torna habilidade atrav\u00E9s da pr\u00E1tica. Este cap\u00EDtulo capstone desafia voc\u00EA a construir uma *API REST completa* do zero \u2014 escolhendo um dom\u00EDnio (gerenciamento de tarefas, blog ou e-commerce simples) e aplicando tudo o que aprendeu na Fase 03.\n\nSeu projeto deve incluir: registro e login de usu\u00E1rios com autentica\u00E7\u00E3o JWT, opera\u00E7\u00F5es CRUD persistidas no PostgreSQL, valida\u00E7\u00E3o de entrada e tratamento adequado de erros, e documenta\u00E7\u00E3o interativa Swagger gerada a partir de uma spec OpenAPI. O c\u00F3digo deve seguir a arquitetura em camadas (controllers \u2192 services \u2192 repositories) e incluir testes automatizados significativos.\n\nO passo final \u00E9 o *deploy*. Voc\u00EA containerizar\u00E1 sua aplica\u00E7\u00E3o (ou usar\u00E1 os build packs nativos da plataforma), far\u00E1 push para o *Railway* ou *Render*, configurar\u00E1 vari\u00E1veis de ambiente para produ\u00E7\u00E3o e verificar\u00E1 a API ao vivo com Postman ou curl. O projeto implantado, completo com um README polido, se torna a primeira pe\u00E7a \u00E2ncora do seu portf\u00F3lio profissional.',
        resources: [
          { id: 'ch38-r-project-planning', type: 'reading', title: 'Planejando um projeto de API completo: escopo e arquitetura', url: 'https://codepath.dev/formacao/project-planning', durationMinutes: 20 },
          { id: 'ch38-v-project-walkthrough', type: 'video', title: 'Construindo e fazendo deploy de uma API REST completa', url: 'https://codepath.dev/formacao/project-walkthrough', durationMinutes: 45 },
          { id: 'ch38-e-build-api', type: 'exercise', title: 'Construa uma API de gerenciador de tarefas com auth e PostgreSQL', url: 'https://codepath.dev/formacao/build-api-exercise', durationMinutes: 60 },
          { id: 'ch38-e-deploy', type: 'exercise', title: 'Faça o deploy da sua API no Railway ou Render', url: 'https://codepath.dev/formacao/deploy-exercise', durationMinutes: 45 },
        ],
      },
    ],
  },

  // ─── Fase 04 — Backend Avançado & Engenharia de Software ───
  {
    id: 'phase-04',
    order: 4,
    title: 'Backend Avançado & Engenharia de Software',
    description:
      'TDD, Clean Architecture, DDD, caching, Docker, CI/CD, segurança, system design e habilidades de carreira.',
    longDescription:
      'A Fase 04 transforma voc\u00EA de um programador que sabe construir funcionalidades em um engenheiro de software que projeta sistemas. Voc\u00EA aprofundar\u00E1 sua disciplina de testes com TDD avan\u00E7ado, aplicar\u00E1 princ\u00EDpios SOLID rigorosamente e aprender\u00E1 padr\u00F5es arquiteturais \u2014 Clean Architecture e Domain-Driven Design \u2014 que mant\u00EAm grandes bases de c\u00F3digo manuten\u00EDveis ao longo dos anos.\n\nNo lado de infraestrutura, voc\u00EA otimizar\u00E1 bancos de dados com \u00EDndices e planos de consulta, implementar\u00E1 caching com Redis, containerizar\u00E1 aplica\u00E7\u00F5es com Docker e automatizar\u00E1 pipelines de build-test-deploy com CI/CD. Seguran\u00E7a e conformidade (LGPD/GDPR) garantem que seus sistemas sejam confi\u00E1veis.\n\nA fase encerra com *system design* \u2014 racioc\u00EDnio sobre mon\u00F3litos vs microsservi\u00E7os, filas de mensagens e alta disponibilidade \u2014 e *habilidades de carreira* profissionais como escrever ADRs, apresentar post-mortems e construir um portf\u00F3lio. Ao final da Fase 04, voc\u00EA estar\u00E1 preparado para contribuir como engenheiro de n\u00EDvel pleno e continuar crescendo rumo a posi\u00E7\u00F5es seniores.',
    chapters: [
      {
        id: 'ch-4-1', phaseId: 'phase-04', order: 21,
        title: 'Testes avançados e TDD na prática',
        description: 'Testes unitários, de integração, contrato, e2e e carga, TDD com mocks/fakes/stubs, a pirâmide de testes e métricas de cobertura úteis.',
        longDescription:
          'Na Fase 02 voc\u00EA aprendeu o b\u00E1sico de TDD. Agora voc\u00EA vai mais fundo. Este cap\u00EDtulo expande seu vocabul\u00E1rio de testes para incluir *testes de contrato* (verificando acordos de API entre servi\u00E7os), *testes ponta a ponta* (simulando fluxos reais de usu\u00E1rio) e *testes de carga* (medindo desempenho sob estresse). Cada n\u00EDvel captura uma classe diferente de bugs.\n\nVoc\u00EA dominar\u00E1 *test doubles* \u2014 mocks, fakes e stubs \u2014 entendendo quando cada um \u00E9 apropriado. Mocks verificam intera\u00E7\u00F5es (\u201Cesse m\u00E9todo foi chamado?\u201D), stubs fornecem respostas pr\u00E9-definidas e fakes s\u00E3o implementa\u00E7\u00F5es leves de depend\u00EAncias complexas (como um banco de dados em mem\u00F3ria). Usados corretamente, test doubles mant\u00EAm seus testes r\u00E1pidos e focados.\n\nA *pir\u00E2mide de testes* guia quantos testes escrever em cada n\u00EDvel: muitos testes unit\u00E1rios, menos testes de integra\u00E7\u00E3o e um punhado de testes e2e. Voc\u00EA tamb\u00E9m aprender\u00E1 a interpretar *cobertura de c\u00F3digo* criticamente \u2014 100% de cobertura n\u00E3o significa zero bugs, mas cobertura direcionada em l\u00F3gica de neg\u00F3cios complexa reduz dramaticamente o risco de regress\u00E3o.',
        resources: [
          { id: 'ch41-r-advanced-testing', type: 'reading', title: 'A pirâmide de testes, mocks, stubs e fakes', url: 'https://codepath.dev/formacao/advanced-testing', durationMinutes: 25 },
          { id: 'ch41-v-tdd-advanced', type: 'video', title: 'TDD avançado: testes de contrato e testes de carga', url: 'https://codepath.dev/formacao/tdd-advanced', durationMinutes: 40 },
          { id: 'ch41-e-mocks-stubs', type: 'exercise', title: 'Refatore testes para usar mocks, stubs e fakes', url: 'https://codepath.dev/formacao/mocks-stubs-exercise', durationMinutes: 50 },
          { id: 'ch41-e-load-test', type: 'exercise', title: 'Escreva testes de carga com k6 ou Artillery', url: 'https://codepath.dev/formacao/load-test-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-4-2', phaseId: 'phase-04', order: 22,
        title: 'Clean Code e princípios SOLID avançados',
        description: 'Aprofundamento nos princípios SOLID, DRY/KISS/YAGNI, refatoração guiada por testes, redução de acoplamento e aumento de coesão.',
        longDescription:
          'SOLID n\u00E3o \u00E9 apenas uma sigla para memorizar \u2014 \u00E9 um conjunto de princ\u00EDpios de design que, quando internalizados, mudam fundamentalmente como voc\u00EA estrutura c\u00F3digo. Este cap\u00EDtulo revisita cada princ\u00EDpio em profundidade: *Responsabilidade \u00DAnica* (um motivo para mudar), *Aberto/Fechado* (aberto para extens\u00E3o, fechado para modifica\u00E7\u00E3o), *Substitui\u00E7\u00E3o de Liskov* (subtipos devem ser substitu\u00EDveis), *Segrega\u00E7\u00E3o de Interface* (nenhum cliente deve depender de m\u00E9todos que n\u00E3o usa) e *Invers\u00E3o de Depend\u00EAncia* (dependa de abstra\u00E7\u00F5es, n\u00E3o de concre\u00E7\u00F5es).\n\nPrinc\u00EDpios complementares \u2014 *DRY* (Don\u0027t Repeat Yourself), *KISS* (Keep It Simple, Stupid) e *YAGNI* (You Aren\u0027t Gonna Need It) \u2014 protegem contra engenharia excessiva. Voc\u00EA aprender\u00E1 a reconhecer quando a abstra\u00E7\u00E3o ajuda e quando prejudica, usando bases de c\u00F3digo reais como estudos de caso.\n\nA *refatora\u00E7\u00E3o guiada por testes* une tudo: como voc\u00EA escreveu testes primeiro, pode reestruturar c\u00F3digo com confian\u00E7a para reduzir acoplamento e aumentar coes\u00E3o. O resultado \u00E9 software f\u00E1cil de entender, f\u00E1cil de testar e f\u00E1cil de mudar \u2014 as marcas da engenharia profissional.',
        resources: [
          { id: 'ch42-r-solid-deep', type: 'reading', title: 'Princípios SOLID em profundidade com exemplos reais', url: 'https://codepath.dev/formacao/solid-deep', durationMinutes: 30 },
          { id: 'ch42-v-refactoring-solid', type: 'video', title: 'Refatorando rumo ao SOLID: antes e depois', url: 'https://codepath.dev/formacao/refactoring-solid', durationMinutes: 35 },
          { id: 'ch42-e-solid-refactor', type: 'exercise', title: 'Identifique e corrija violações de SOLID em uma base de código', url: 'https://codepath.dev/formacao/solid-refactor-exercise', durationMinutes: 50 },
          { id: 'ch42-e-coupling', type: 'exercise', title: 'Reduza acoplamento e aumente coesão com DI', url: 'https://codepath.dev/formacao/coupling-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-4-3', phaseId: 'phase-04', order: 23,
        title: 'Clean Architecture',
        description: 'Camadas (entidades, casos de uso, interfaces), separação domínio/aplicação/infraestrutura e implementação em Java e Node.js.',
        longDescription:
          'Clean Architecture, popularizada por Robert C. Martin, organiza o c\u00F3digo em camadas conc\u00EAntricas onde *depend\u00EAncias sempre apontam para dentro* \u2014 da infraestrutura em dire\u00E7\u00E3o ao dom\u00EDnio. A camada mais interna cont\u00E9m *entidades* (objetos de neg\u00F3cio puros), cercada por *casos de uso* (regras de neg\u00F3cio espec\u00EDficas da aplica\u00E7\u00E3o), depois *adaptadores de interface* (controllers, gateways), e finalmente *frameworks e drivers* (Express, Spring, bancos de dados).\n\nEste cap\u00EDtulo ensina a separar seu projeto em diret\u00F3rios `domain`, `application` e `infrastructure`. O dom\u00EDnio n\u00E3o sabe nada sobre HTTP ou bancos de dados; os casos de uso orquestram a l\u00F3gica de dom\u00EDnio; e a camada de infraestrutura cont\u00E9m implementa\u00E7\u00F5es espec\u00EDficas de framework que podem ser trocadas sem tocar nas regras de neg\u00F3cio.\n\nVoc\u00EA implementar\u00E1 Clean Architecture tanto em Java (Spring Boot) quanto em Node.js (Express, Fastify ou NestJS), aprendendo a definir fronteiras com interfaces e conectar camadas atrav\u00E9s de *adaptadores*. A recompensa \u00E9 enorme: sua l\u00F3gica central se torna agn\u00F3stica de framework, trivialmente test\u00E1vel e resiliente a mudan\u00E7as de tecnologia \u2014 a arquitetura que escala de startup a enterprise.',
        resources: [
          { id: 'ch43-r-clean-arch', type: 'reading', title: 'Clean Architecture: camadas, fronteiras e adaptadores', url: 'https://codepath.dev/formacao/clean-architecture', durationMinutes: 30 },
          { id: 'ch43-v-clean-arch-impl', type: 'video', title: 'Implementando Clean Architecture em Java e Node.js', url: 'https://codepath.dev/formacao/clean-arch-implementation', durationMinutes: 45 },
          { id: 'ch43-e-layers', type: 'exercise', title: 'Reestruture uma aplicação monolítica em camadas de Clean Architecture', url: 'https://codepath.dev/formacao/layers-exercise', durationMinutes: 60 },
          { id: 'ch43-e-adapters', type: 'exercise', title: 'Troque banco de dados e framework usando adaptadores', url: 'https://codepath.dev/formacao/adapters-exercise', durationMinutes: 50 },
        ],
      },
      {
        id: 'ch-4-4', phaseId: 'phase-04', order: 24,
        title: 'Domain-Driven Design (DDD)',
        description: 'Linguagem ubíqua, contextos delimitados, entidades, value objects, agregados, repositórios e mapeamento de contextos.',
        longDescription:
          'Domain-Driven Design \u00E9 uma metodologia para lidar com dom\u00EDnios de neg\u00F3cios complexos, colocando o *modelo de dom\u00EDnio* no centro da sua arquitetura. Este cap\u00EDtulo introduz a *linguagem ub\u00EDqua* \u2014 um vocabul\u00E1rio compartilhado entre desenvolvedores e especialistas de dom\u00EDnio que elimina erros de tradu\u00E7\u00E3o e garante que o c\u00F3digo reflita com precis\u00E3o as regras de neg\u00F3cio.\n\n*Contextos delimitados* dividem um grande sistema em modelos menores e coesos. Dentro de um contexto, voc\u00EA trabalhar\u00E1 com *entidades* (objetos com identidade), *value objects* (imut\u00E1veis, sem identidade), *agregados* (fronteiras de consist\u00EAncia) e *reposit\u00F3rios* (abstra\u00E7\u00F5es sobre acesso a dados). Cada conceito \u00E9 ilustrado com exemplos concretos de dom\u00EDnios como e-commerce, sa\u00FAde e log\u00EDstica.\n\nO *mapeamento de contextos* mostra como contextos delimitados interagem: shared kernel, customer-supplier, camada anticorrup\u00E7\u00E3o e mais. Voc\u00EA tamb\u00E9m ver\u00E1 como o DDD se complementa com Clean Architecture \u2014 o DDD fornece o design *estrat\u00E9gico* (como modelar o dom\u00EDnio) enquanto Clean Architecture fornece o design *estrutural* (como organizar o c\u00F3digo). Juntos, produzem sistemas alinhados ao neg\u00F3cio e tecnicamente s\u00F3lidos.',
        resources: [
          { id: 'ch44-r-ddd-concepts', type: 'reading', title: 'Blocos de construção do DDD: entidades, value objects, agregados', url: 'https://codepath.dev/formacao/ddd-concepts', durationMinutes: 30 },
          { id: 'ch44-v-ddd-practice', type: 'video', title: 'Domain-Driven Design na prática com contextos delimitados', url: 'https://codepath.dev/formacao/ddd-practice', durationMinutes: 40 },
          { id: 'ch44-e-domain-model', type: 'exercise', title: 'Modele um domínio de e-commerce com padrões DDD', url: 'https://codepath.dev/formacao/domain-model-exercise', durationMinutes: 55 },
          { id: 'ch44-e-context-map', type: 'exercise', title: 'Desenhe um mapa de contextos e defina contextos delimitados', url: 'https://codepath.dev/formacao/context-map-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-4-5', phaseId: 'phase-04', order: 25,
        title: 'Banco de dados avançado & performance',
        description: 'Índices, planos de execução, otimização de consultas, transações, níveis de isolamento, locking, deadlocks e introdução a NoSQL.',
        longDescription:
          'Conforme sua aplica\u00E7\u00E3o escala, o desempenho do banco de dados se torna o gargalo. Este cap\u00EDtulo ensina a analisar *planos de execu\u00E7\u00E3o* (`EXPLAIN ANALYZE` no PostgreSQL) e entender como o planejador de consultas decide entre sequential scans, index scans e hash joins. Voc\u00EA criar\u00E1 *\u00EDndices* estrategicamente \u2014 B-tree, GIN, parciais \u2014 e medir\u00E1 a diferen\u00E7a antes e depois.\n\n*N\u00EDveis de isolamento de transa\u00E7\u00E3o* (Read Uncommitted, Read Committed, Repeatable Read, Serializable) controlam o que transa\u00E7\u00F5es concorrentes podem ver. Voc\u00EA aprender\u00E1 sobre *locking* (n\u00EDvel de linha, n\u00EDvel de tabela, advisory) e como diagnosticar e prevenir *deadlocks*. Esses conceitos s\u00E3o essenciais para qualquer aplica\u00E7\u00E3o com escritas concorrentes.\n\nO cap\u00EDtulo encerra com uma introdu\u00E7\u00E3o a bancos de dados *NoSQL*: *MongoDB* para armazenamento de documentos e *Redis* para caching chave-valor. Voc\u00EA aprender\u00E1 quando um banco relacional \u00E9 a ferramenta certa e quando uma solu\u00E7\u00E3o NoSQL se encaixa melhor, dando a voc\u00EA o vocabul\u00E1rio para tomar decis\u00F5es informadas na camada de dados.',
        resources: [
          { id: 'ch45-r-db-performance', type: 'reading', title: 'Índices, planos de consulta e otimização no PostgreSQL', url: 'https://codepath.dev/formacao/db-performance', durationMinutes: 30 },
          { id: 'ch45-v-transactions', type: 'video', title: 'Transações, níveis de isolamento e prevenção de deadlocks', url: 'https://codepath.dev/formacao/transactions-deep', durationMinutes: 40 },
          { id: 'ch45-e-query-optimize', type: 'exercise', title: 'Otimize consultas lentas com EXPLAIN ANALYZE e índices', url: 'https://codepath.dev/formacao/query-optimize-exercise', durationMinutes: 50 },
          { id: 'ch45-e-nosql-intro', type: 'exercise', title: 'Armazene e consulte dados no MongoDB e Redis', url: 'https://codepath.dev/formacao/nosql-intro-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-4-6', phaseId: 'phase-04', order: 26,
        title: 'Caching & escalabilidade',
        description: 'Cache local vs distribuído, estratégias de invalidação, Redis/Memcached, rate limiting, escalabilidade horizontal e balanceadores de carga.',
        longDescription:
          'Caching \u00E9 a otimiza\u00E7\u00E3o de desempenho mais impactante em sistemas distribu\u00EDdos. Este cap\u00EDtulo distingue *caches locais* (em processo, n\u00F3 \u00FAnico) de *caches distribu\u00EDdos* (compartilhados entre n\u00F3s, ex.: Redis, Memcached) e explica quando cada um \u00E9 apropriado.\n\nO problema mais dif\u00EDcil em caching \u00E9 a *invalida\u00E7\u00E3o* \u2014 saber quando descartar dados obsoletos. Voc\u00EA aprender\u00E1 estrat\u00E9gias como *time-to-live (TTL)*, *write-through* (escrever no cache e no banco simultaneamente), *write-behind* (escrever no cache primeiro, no banco de forma ass\u00EDncrona) e *cache-aside* (a aplica\u00E7\u00E3o gerencia o cache explicitamente). Cada estrat\u00E9gia tem trade-offs em consist\u00EAncia, lat\u00EAncia e complexidade.\n\nPadr\u00F5es de escalabilidade completam o cap\u00EDtulo: *rate limiting* protege sua API contra abuso, *escalabilidade horizontal* adiciona mais inst\u00E2ncias de servidor em vez de hardware mais potente, e *balanceadores de carga* distribuem tr\u00E1fego entre essas inst\u00E2ncias. Voc\u00EA configurar\u00E1 Nginx como proxy reverso e ver\u00E1 como combinar caching com escalabilidade horizontal permite que uma aplica\u00E7\u00E3o modesta atenda milh\u00F5es de requisi\u00E7\u00F5es.',
        resources: [
          { id: 'ch46-r-caching', type: 'reading', title: 'Estratégias de cache: TTL, write-through e cache-aside', url: 'https://codepath.dev/formacao/caching-strategies', durationMinutes: 25 },
          { id: 'ch46-v-scalability', type: 'video', title: 'Escalabilidade horizontal, balanceadores de carga e rate limiting', url: 'https://codepath.dev/formacao/scalability', durationMinutes: 35 },
          { id: 'ch46-e-redis-cache', type: 'exercise', title: 'Adicione cache Redis a uma API existente', url: 'https://codepath.dev/formacao/redis-cache-exercise', durationMinutes: 50 },
          { id: 'ch46-e-rate-limit', type: 'exercise', title: 'Implemente rate limiting e balanceamento de carga com Nginx', url: 'https://codepath.dev/formacao/rate-limit-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-4-7', phaseId: 'phase-04', order: 27,
        title: 'Docker & containerização',
        description: 'Imagens, containers, Dockerfile, docker-compose, containerização de Java/Node.js com PostgreSQL e multi-stage builds.',
        longDescription:
          'Containers resolvem o problema \u201Cfunciona na minha m\u00E1quina\u201D ao empacotar uma aplica\u00E7\u00E3o com tudo que ela precisa para rodar \u2014 c\u00F3digo, runtime, bibliotecas e configura\u00E7\u00E3o \u2014 em uma unidade port\u00E1til e reproduz\u00EDvel. Este cap\u00EDtulo ensina Docker do zero: imagens vs containers, o sistema de arquivos baseado em camadas e as instru\u00E7\u00F5es do `Dockerfile` (`FROM`, `COPY`, `RUN`, `CMD`, `EXPOSE`).\n\nVoc\u00EA containerizar\u00E1 tanto uma aplica\u00E7\u00E3o Java Spring Boot quanto uma aplica\u00E7\u00E3o Node.js Express, cada uma conectada a um banco PostgreSQL, usando `docker-compose` para orquestrar configura\u00E7\u00F5es multi-container. Vari\u00E1veis de ambiente, montagem de volumes para dados persistentes e networking entre containers s\u00E3o cobertos em detalhe.\n\n*Multi-stage builds* reduzem drasticamente o tamanho da imagem ao separar o ambiente de build do ambiente de runtime \u2014 sua imagem final cont\u00E9m apenas o artefato compilado e uma base m\u00EDnima. Ao final deste cap\u00EDtulo, voc\u00EA ser\u00E1 capaz de executar `docker-compose up` em qualquer projeto e ter uma stack completamente funcional em segundos, independentemente do sistema operacional do host.',
        resources: [
          { id: 'ch47-r-docker-basics', type: 'reading', title: 'Conceitos de Docker: imagens, containers e camadas', url: 'https://codepath.dev/formacao/docker-basics', durationMinutes: 25 },
          { id: 'ch47-v-docker-compose', type: 'video', title: 'Containerizando aplicações com Docker e docker-compose', url: 'https://codepath.dev/formacao/docker-compose', durationMinutes: 40 },
          { id: 'ch47-e-containerize', type: 'exercise', title: 'Containerize uma aplicação Java ou Node.js com PostgreSQL', url: 'https://codepath.dev/formacao/containerize-exercise', durationMinutes: 50 },
          { id: 'ch47-e-multistage', type: 'exercise', title: 'Otimize o tamanho da imagem com multi-stage builds', url: 'https://codepath.dev/formacao/multistage-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-4-8', phaseId: 'phase-04', order: 28,
        title: 'Cloud, CI/CD e DevOps básico',
        description: 'Computação em nuvem (IaaS/PaaS/FaaS), visão geral de AWS/GCP/Azure, pipelines CI/CD, automação, observabilidade e health checks.',
        longDescription:
          'Software moderno \u00E9 implantado na nuvem, e pipelines CI/CD garantem que cada mudan\u00E7a chegue \u00E0 produ\u00E7\u00E3o de forma segura e r\u00E1pida. Este cap\u00EDtulo come\u00E7a com fundamentos de computa\u00E7\u00E3o em nuvem: *IaaS* (m\u00E1quinas virtuais), *PaaS* (plataformas gerenciadas como Heroku, Railway) e *FaaS* (fun\u00E7\u00F5es serverless como AWS Lambda). Voc\u00EA entender\u00E1 os trade-offs e saber\u00E1 qual modelo se encaixa em cada projeto.\n\nEm seguida, voc\u00EA construir\u00E1 um *pipeline CI/CD* usando GitHub Actions (ou GitLab CI). O pipeline automatiza: linting e an\u00E1lise est\u00E1tica em cada push, execu\u00E7\u00E3o da su\u00EDte completa de testes, build de uma imagem Docker e deploy em um ambiente de staging ou produ\u00E7\u00E3o. Voc\u00EA aprender\u00E1 sobre secrets de ambiente, estrat\u00E9gias de deploy (rolling, blue-green) e procedimentos de rollback.\n\nO cap\u00EDtulo encerra com *observabilidade*: logging estruturado (logs JSON com IDs de correla\u00E7\u00E3o), endpoints de health check (`/health`, `/ready`) e uma introdu\u00E7\u00E3o a m\u00E9tricas e alertas. Essas pr\u00E1ticas permitem que voc\u00EA *saiba* que sua aplica\u00E7\u00E3o est\u00E1 saud\u00E1vel em vez de *torcer* para que esteja \u2014 a linha divis\u00F3ria entre projetos amadores e sistemas de n\u00EDvel de produ\u00E7\u00E3o.',
        resources: [
          { id: 'ch48-r-cloud-intro', type: 'reading', title: 'Computação em nuvem: IaaS, PaaS, FaaS comparados', url: 'https://codepath.dev/formacao/cloud-intro', durationMinutes: 25 },
          { id: 'ch48-v-cicd', type: 'video', title: 'Construindo pipelines CI/CD com GitHub Actions', url: 'https://codepath.dev/formacao/cicd-pipelines', durationMinutes: 40 },
          { id: 'ch48-e-pipeline', type: 'exercise', title: 'Crie um pipeline CI/CD que compila, testa e faz deploy', url: 'https://codepath.dev/formacao/pipeline-exercise', durationMinutes: 55 },
          { id: 'ch48-e-observability', type: 'exercise', title: 'Adicione health checks e logging estruturado à sua API', url: 'https://codepath.dev/formacao/observability-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-4-9', phaseId: 'phase-04', order: 29,
        title: 'Segurança, privacidade e conformidade',
        description: 'Codificação segura, revisão de segurança de endpoints, proteção de dados (LGPD/GDPR), criptografia em repouso e em trânsito e gerenciamento de segredos.',
        longDescription:
          'Construir software seguro \u00E9 uma responsabilidade, n\u00E3o uma reflex\u00E3o tardia. Este cap\u00EDtulo vai al\u00E9m dos fundamentos de vulnerabilidades web cobertos na Fase 03 e apresenta uma *postura de seguran\u00E7a hol\u00EDstica*: diretrizes de codifica\u00E7\u00E3o segura, modelagem de amea\u00E7as e revis\u00F5es sistem\u00E1ticas de seguran\u00E7a de endpoints que capturam vulnerabilidades antes de chegarem \u00E0 produ\u00E7\u00E3o.\n\nRegulamenta\u00E7\u00F5es de *prote\u00E7\u00E3o de dados* \u2014 a LGPD do Brasil e o GDPR da Europa \u2014 imp\u00F5em obriga\u00E7\u00F5es legais sobre como voc\u00EA coleta, armazena e processa dados pessoais. Voc\u00EA aprender\u00E1 os requisitos-chave: base legal para processamento, minimiza\u00E7\u00E3o de dados, consentimento do usu\u00E1rio, direito ao esquecimento e notifica\u00E7\u00E3o de viola\u00E7\u00E3o. Esses conceitos s\u00E3o ilustrados com itens pr\u00E1ticos de checklist que voc\u00EA pode aplicar a qualquer projeto.\n\n*Criptografia em repouso* (n\u00EDvel de banco de dados, n\u00EDvel de disco) e *criptografia em tr\u00E2nsito* (TLS em todos os lugares) protegem dados contra acesso n\u00E3o autorizado. *Gerenciamento de segredos* \u2014 armazenar chaves de API, credenciais de banco de dados e tokens fora do c\u00F3digo-fonte usando ferramentas como vari\u00E1veis de ambiente, HashiCorp Vault ou gerenciadores de segredos nativos da nuvem \u2014 previne o incidente de seguran\u00E7a mais comum: credenciais vazadas em um reposit\u00F3rio Git.',
        resources: [
          { id: 'ch49-r-secure-coding', type: 'reading', title: 'Codificação segura, LGPD/GDPR e práticas de criptografia', url: 'https://codepath.dev/formacao/secure-coding', durationMinutes: 30 },
          { id: 'ch49-v-security-review', type: 'video', title: 'Conduzindo uma revisão de segurança de endpoints', url: 'https://codepath.dev/formacao/security-review', durationMinutes: 35 },
          { id: 'ch49-e-threat-model', type: 'exercise', title: 'Crie um modelo de ameaças e checklist de segurança', url: 'https://codepath.dev/formacao/threat-model-exercise', durationMinutes: 50 },
          { id: 'ch49-e-secret-mgmt', type: 'exercise', title: 'Implemente gerenciamento de segredos com variáveis de ambiente', url: 'https://codepath.dev/formacao/secret-mgmt-exercise', durationMinutes: 40 },
        ],
      },
      {
        id: 'ch-4-10', phaseId: 'phase-04', order: 30,
        title: 'System Design & arquitetura para escala',
        description: 'Monólito vs microsserviços, filas, mensageria, arquitetura orientada a eventos, alta disponibilidade, tolerância a falhas e diagramas C4/UML.',
        longDescription:
          'System design \u00E9 a arte de tomar decis\u00F5es arquiteturais que permitem a um sistema crescer em tr\u00E1fego, volume de dados e tamanho da equipe. Este cap\u00EDtulo come\u00E7a com o trade-off *mon\u00F3lito vs microsservi\u00E7os*: mon\u00F3litos s\u00E3o mais simples de desenvolver e implantar, enquanto microsservi\u00E7os oferecem escalabilidade e deploy independentes \u2014 mas ao custo da complexidade de sistemas distribu\u00EDdos.\n\n*Filas de mensagens* (RabbitMQ, Amazon SQS) e *arquiteturas orientadas a eventos* (Kafka, event sourcing) desacoplam produtores de consumidores, possibilitando processamento ass\u00EDncrono e resili\u00EAncia. Voc\u00EA aprender\u00E1 padr\u00F5es como *publish/subscribe*, *dead-letter queues* e *consumidores idempotentes* que tornam sistemas orientados a eventos confi\u00E1veis.\n\n*Alta disponibilidade* (redund\u00E2ncia, failover, health checks) e *toler\u00E2ncia a falhas* (circuit breakers, retries com backoff exponencial, degrada\u00E7\u00E3o graceful) garantem que seu sistema continue operando quando as coisas d\u00E3o errado \u2014 e elas v\u00E3o. O cap\u00EDtulo encerra com *diagrama\u00E7\u00E3o arquitetural* usando C4 e UML, dando a voc\u00EA uma linguagem visual para comunicar o design do sistema para stakeholders t\u00E9cnicos e n\u00E3o-t\u00E9cnicos.',
        resources: [
          { id: 'ch410-r-system-design', type: 'reading', title: 'Monólitos, microsserviços, filas e design orientado a eventos', url: 'https://codepath.dev/formacao/system-design', durationMinutes: 30 },
          { id: 'ch410-v-architecture', type: 'video', title: 'Projetando para escala: alta disponibilidade e tolerância a falhas', url: 'https://codepath.dev/formacao/architecture-scale', durationMinutes: 45 },
          { id: 'ch410-e-design-exercise', type: 'exercise', title: 'Projete um sistema escalável de encurtador de URLs', url: 'https://codepath.dev/formacao/design-exercise', durationMinutes: 60 },
          { id: 'ch410-e-c4-diagram', type: 'exercise', title: 'Desenhe diagramas C4 para uma arquitetura existente', url: 'https://codepath.dev/formacao/c4-diagram-exercise', durationMinutes: 45 },
        ],
      },
      {
        id: 'ch-4-11', phaseId: 'phase-04', order: 31,
        title: 'Habilidades de carreira e portfólio',
        description: 'Documentação de projeto (README/ADRs), portfólio profissional, estudos de caso, post-mortems e soft skills.',
        longDescription:
          'Excel\u00EAncia t\u00E9cnica sozinha n\u00E3o constr\u00F3i uma carreira \u2014 voc\u00EA tamb\u00E9m precisa comunicar, colaborar e apresentar seu trabalho de forma eficaz. Este cap\u00EDtulo foca nos *artefatos profissionais* que destacam voc\u00EA: um README polido que explica o que seu projeto faz, como execut\u00E1-lo e as decis\u00F5es arquiteturais por tr\u00E1s dele. *Architecture Decision Records* (ADRs) capturam o *porqu\u00EA* por tr\u00E1s de escolhas importantes para que futuros membros da equipe entendam o racioc\u00EDnio.\n\nSeu *portf\u00F3lio* \u00E9 seu curr\u00EDculo em a\u00E7\u00E3o. Voc\u00EA aprender\u00E1 a selecionar projetos que demonstrem amplitude e profundidade, escrever *estudos de caso* que contem a hist\u00F3ria de um projeto (problema \u2192 abordagem \u2192 resultado) e conduzir *post-mortems* que analisem honestamente falhas e extraiam li\u00E7\u00F5es. Esses artefatos mostram aos empregadores que voc\u00EA sabe pensar criticamente e aprender continuamente.\n\nPor fim, o cap\u00EDtulo aborda *soft skills* que multiplicam seu impacto t\u00E9cnico: comunica\u00E7\u00E3o escrita e verbal clara, dar e receber feedback construtivamente, trabalho em equipe eficaz em squads multifuncionais e t\u00E9cnicas de gerenciamento de tempo (Pomodoro, time-boxing) que previnem burnout. Um grande engenheiro escreve \u00F3timo c\u00F3digo *e* eleva toda a equipe ao seu redor.',
        resources: [
          { id: 'ch411-r-portfolio', type: 'reading', title: 'Construindo um portfólio de desenvolvedor: README, ADRs e estudos de caso', url: 'https://codepath.dev/formacao/portfolio', durationMinutes: 25 },
          { id: 'ch411-v-career', type: 'video', title: 'Habilidades de carreira: comunicação, feedback e trabalho em equipe', url: 'https://codepath.dev/formacao/career-skills', durationMinutes: 30 },
          { id: 'ch411-e-readme-adr', type: 'exercise', title: 'Escreva um README profissional e um ADR para seu projeto', url: 'https://codepath.dev/formacao/readme-adr-exercise', durationMinutes: 45 },
          { id: 'ch411-e-case-study', type: 'exercise', title: 'Escreva um estudo de caso e post-mortem de um projeto anterior', url: 'https://codepath.dev/formacao/case-study-exercise', durationMinutes: 40 },
        ],
      },
    ],
  },
] as const;
