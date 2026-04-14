import type { Milestone } from '../domain/milestone';

export const curriculum: readonly Milestone[] = [
  {
    id: 'cs-fundamentals',
    order: 1,
    title: 'CS & Internet Fundamentals',
    description:
      'How the internet works, OS basics, and version control. The foundation every developer must stand on before writing a single line of code.',
    longDescription: `Before writing code, a developer must understand the environment in which their code runs.

This phase covers the invisible infrastructure beneath every application: how data travels across the internet via DNS, HTTP, and TCP/IP; how an operating system manages processes, memory, and the file system; and how Git gives every change a permanent, traceable identity.

These topics are often skipped by beginners in a rush to write features. That shortcut creates gaps — developers who cannot read a network tab, cannot navigate a server, and panic when a merge goes wrong. This phase closes those gaps before they form.

By the end you should be able to explain what happens between typing a URL and seeing a webpage, manage a project directory entirely from the command line, and maintain a clean Git history with branches and merges.`,
    resources: [
      {
        id: 'cs-r-how-internet-works',
        type: 'reading',
        title: 'How DNS, HTTP/HTTPS, and TCP/IP actually work',
        url: 'https://example.com/formacao/cs/internet',
        durationMinutes: 25,
      },
      {
        id: 'cs-r-os-and-cli',
        type: 'reading',
        title: 'OS basics: file systems, terminal commands, processes & threads',
        url: 'https://example.com/formacao/cs/os-cli',
        durationMinutes: 20,
      },
      {
        id: 'cs-r-git-concepts',
        type: 'reading',
        title: 'Git concepts: repositories, commits, branches, and merging',
        url: 'https://example.com/formacao/cs/git',
        durationMinutes: 18,
      },
      {
        id: 'cs-v-internet-crash-course',
        type: 'video',
        title: 'Crash Course Computer Science: The Internet',
        url: 'https://example.com/formacao/cs/internet-video',
        durationMinutes: 12,
      },
      {
        id: 'cs-v-linux-terminal',
        type: 'video',
        title: 'Linux Terminal Crash Course for Beginners',
        url: 'https://example.com/formacao/cs/terminal-video',
        durationMinutes: 35,
      },
      {
        id: 'cs-v-git-github',
        type: 'video',
        title: 'Git and GitHub for Beginners — Crash Course',
        url: 'https://example.com/formacao/cs/git-video',
        durationMinutes: 30,
      },
      {
        id: 'cs-e-devtools-http',
        type: 'exercise',
        title: 'Map HTTP requests from three sites using browser DevTools',
        url: 'https://example.com/formacao/cs/devtools-exercise',
        durationMinutes: 30,
      },
      {
        id: 'cs-e-cli-project',
        type: 'exercise',
        title: 'Build a full project directory structure using only the CLI',
        url: 'https://example.com/formacao/cs/cli-exercise',
        durationMinutes: 25,
      },
      {
        id: 'cs-e-git-branches',
        type: 'exercise',
        title: 'Create a repo, commit, branch feature/setup, and merge to main',
        url: 'https://example.com/formacao/cs/git-exercise',
        durationMinutes: 40,
      },
    ],
  },
  {
    id: 'programming-dsa',
    order: 2,
    title: 'Programming Foundations & DSA',
    description:
      'Variables, complexity analysis, data structures and algorithms. The analytical mindset required for efficient, maintainable problem-solving.',
    longDescription: `This phase builds the analytical mindset required for efficient problem-solving, maintaining a strict eye on algorithmic efficiency.

Most developers learn syntax. This phase teaches you to *think*. You will move from the basic constructs of your chosen language — variables, control flow, functions — through complexity analysis into data structures and finally into the algorithms that operate on them.

Big O is not an academic exercise. It is the language engineers use to evaluate trade-offs. Knowing that your solution is O(n²) when an O(n log n) alternative exists is the difference between software that scales and software that silently degrades.

By the end you should be able to choose between an array, a hash table, and a tree based on access patterns — not intuition — and implement a graph traversal algorithm from a blank file.`,
    resources: [
      {
        id: 'dsa-r-basic-constructs',
        type: 'reading',
        title: 'Variables, data types, control structures, functions and scope',
        url: 'https://example.com/formacao/dsa/constructs',
        durationMinutes: 30,
      },
      {
        id: 'dsa-r-big-o',
        type: 'reading',
        title: 'Time & space complexity — O(1) to O(n²) with worked examples',
        url: 'https://example.com/formacao/dsa/big-o',
        durationMinutes: 22,
      },
      {
        id: 'dsa-r-core-structures',
        type: 'reading',
        title: 'Arrays, linked lists, stacks, queues and hash tables',
        url: 'https://example.com/formacao/dsa/core-structures',
        durationMinutes: 28,
      },
      {
        id: 'dsa-r-advanced-structures',
        type: 'reading',
        title: 'Trees, graphs, sorting algorithms, BFS and DFS',
        url: 'https://example.com/formacao/dsa/advanced-structures',
        durationMinutes: 35,
      },
      {
        id: 'dsa-v-language-course',
        type: 'video',
        title: 'Java Full Course (or TypeScript for Beginners)',
        url: 'https://example.com/formacao/dsa/language-video',
        durationMinutes: 60,
      },
      {
        id: 'dsa-v-big-o-course',
        type: 'video',
        title: 'Big O Notation — Full Course',
        url: 'https://example.com/formacao/dsa/big-o-video',
        durationMinutes: 45,
      },
      {
        id: 'dsa-v-ds-visualized',
        type: 'video',
        title: 'Data Structures Visualized (with memory allocation animations)',
        url: 'https://example.com/formacao/dsa/ds-visualized-video',
        durationMinutes: 40,
      },
      {
        id: 'dsa-v-algorithms-freecodecamp',
        type: 'video',
        title: 'Algorithms & Data Structures — FreeCodeCamp',
        url: 'https://example.com/formacao/dsa/algorithms-video',
        durationMinutes: 90,
      },
      {
        id: 'dsa-e-word-count',
        type: 'exercise',
        title: 'Write a word-count program with input sanitization against basic vulnerabilities',
        url: 'https://example.com/formacao/dsa/word-count',
        durationMinutes: 30,
      },
      {
        id: 'dsa-e-big-o-analysis',
        type: 'exercise',
        title: 'Mathematically justify the Big O complexity of three code snippets',
        url: 'https://example.com/formacao/dsa/big-o-analysis',
        durationMinutes: 25,
      },
      {
        id: 'dsa-e-stack-queue',
        type: 'exercise',
        title: 'Implement a Stack and a Queue from scratch — no built-in library structures',
        url: 'https://example.com/formacao/dsa/stack-queue',
        durationMinutes: 50,
      },
      {
        id: 'dsa-e-bfs-maze',
        type: 'exercise',
        title: 'Solve a maze with BFS, separating the query (path) from the command (movement)',
        url: 'https://example.com/formacao/dsa/bfs-maze',
        durationMinutes: 60,
      },
    ],
  },
  {
    id: 'backend-beginner',
    order: 3,
    title: 'Backend Beginner',
    description:
      'Relational databases, RESTful APIs, and web security. Transitioning into building web servers and handling real data.',
    longDescription: `This phase transitions you into building web servers, focusing on relational data and API design.

Every production backend rests on three foundations: a relational database with a well-reasoned schema, an HTTP API that respects REST constraints, and a baseline of security practices that keeps users and data safe.

You will design a normalized PostgreSQL schema, build a CRUD API in Node.js (Express) or Java (Spring Boot), and then deliberately attack your own application — attempting SQL injection, examining headers — before fixing every vulnerability you find.

The croquete exercise is intentional: model a domain entity as what it actually *is*, not as a collection of loosely related parts. That discipline of accurate modeling carries into every database schema you will ever design.`,
    resources: [
      {
        id: 'be-r-sql',
        type: 'reading',
        title: 'Relational algebra, SQL (SELECT/INSERT/UPDATE/DELETE/JOINs), normalization 1NF–3NF',
        url: 'https://example.com/formacao/backend/sql',
        durationMinutes: 30,
      },
      {
        id: 'be-r-rest',
        type: 'reading',
        title: 'REST constraints, HTTP methods, JSON formatting, statelessness',
        url: 'https://example.com/formacao/backend/rest',
        durationMinutes: 20,
      },
      {
        id: 'be-r-security',
        type: 'reading',
        title: 'OWASP Top 10, CORS, hashing vs. encryption, SQL injection, XSS',
        url: 'https://example.com/formacao/backend/security',
        durationMinutes: 25,
      },
      {
        id: 'be-v-postgres',
        type: 'video',
        title: 'PostgreSQL Crash Course',
        url: 'https://example.com/formacao/backend/postgres-video',
        durationMinutes: 40,
      },
      {
        id: 'be-v-rest-api',
        type: 'video',
        title: 'REST API Concepts and Examples',
        url: 'https://example.com/formacao/backend/rest-video',
        durationMinutes: 20,
      },
      {
        id: 'be-v-security',
        type: 'video',
        title: 'Web Security Fundamentals',
        url: 'https://example.com/formacao/backend/security-video',
        durationMinutes: 30,
      },
      {
        id: 'be-e-db-schema',
        type: 'exercise',
        title: 'Design a normalized schema for a digital academy — Students, Courses, Enrollments',
        url: 'https://example.com/formacao/backend/db-schema',
        durationMinutes: 45,
      },
      {
        id: 'be-e-crud-api',
        type: 'exercise',
        title: 'Build a CRUD API (Node/Express or Spring Boot) for an inventory system; validate all inputs at the boundary',
        url: 'https://example.com/formacao/backend/crud-api',
        durationMinutes: 90,
      },
      {
        id: 'be-e-security',
        type: 'exercise',
        title: 'Implement bcrypt hashing for user registration; attack then fix SQL injection with parameterized queries',
        url: 'https://example.com/formacao/backend/security-exercise',
        durationMinutes: 60,
      },
    ],
  },
  {
    id: 'backend-advanced',
    order: 4,
    title: 'Backend Advanced',
    description:
      'TDD, Clean Architecture, DDD, caching, and CI/CD. Transforming a coder into a Software Engineer.',
    longDescription: `This phase transforms a coder into a Software Engineer, focusing on maintainability, testing, and system design.

Writing code that works is the entry bar. Writing code that can be tested, refactored, and understood by a colleague six months from now is the actual job.

You will rebuild an existing API test-first (Red-Green-Refactor), then refactor it to follow Clean Architecture — isolating business logic from the framework and the database entirely. DDD gives you the vocabulary to model complex domains accurately. Redis and message brokers teach you to design systems that stay fast under load. Docker and CI/CD close the loop from code to deployed, tested artifact.

By the end you should be able to open a codebase and immediately identify where the domain logic lives, what the test coverage looks like, and what will break when requirements change. That is the standard.`,
    resources: [
      {
        id: 'adv-r-tdd',
        type: 'reading',
        title: 'Red-Green-Refactor cycle, unit testing, integration testing, and mocking',
        url: 'https://example.com/formacao/advanced/tdd',
        durationMinutes: 25,
      },
      {
        id: 'adv-r-solid-clean',
        type: 'reading',
        title: 'The 5 SOLID principles, Dependency Injection, Clean Architecture layers',
        url: 'https://example.com/formacao/advanced/solid-clean',
        durationMinutes: 30,
      },
      {
        id: 'adv-r-ddd',
        type: 'reading',
        title: 'DDD: Ubiquitous Language, Bounded Contexts, Aggregates, Entities vs. Value Objects',
        url: 'https://example.com/formacao/advanced/ddd',
        durationMinutes: 28,
      },
      {
        id: 'adv-r-caching-queues',
        type: 'reading',
        title: 'Redis, in-memory caching strategies, async processing, RabbitMQ and Kafka',
        url: 'https://example.com/formacao/advanced/caching-queues',
        durationMinutes: 25,
      },
      {
        id: 'adv-r-docker-cicd',
        type: 'reading',
        title: 'Docker images, containers, docker-compose, GitHub Actions / GitLab CI',
        url: 'https://example.com/formacao/advanced/docker-cicd',
        durationMinutes: 22,
      },
      {
        id: 'adv-v-tdd',
        type: 'video',
        title: 'TDD in Java / Node.js',
        url: 'https://example.com/formacao/advanced/tdd-video',
        durationMinutes: 45,
      },
      {
        id: 'adv-v-clean-architecture',
        type: 'video',
        title: 'Uncle Bob — Clean Architecture Lectures',
        url: 'https://example.com/formacao/advanced/clean-arch-video',
        durationMinutes: 60,
      },
      {
        id: 'adv-v-ddd',
        type: 'video',
        title: 'Domain-Driven Design Fundamentals',
        url: 'https://example.com/formacao/advanced/ddd-video',
        durationMinutes: 50,
      },
      {
        id: 'adv-v-caching-queues',
        type: 'video',
        title: 'System Design: Caching & Message Queues Explained',
        url: 'https://example.com/formacao/advanced/caching-video',
        durationMinutes: 35,
      },
      {
        id: 'adv-v-docker',
        type: 'video',
        title: 'Docker in 100 Seconds + comprehensive Docker tutorial',
        url: 'https://example.com/formacao/advanced/docker-video',
        durationMinutes: 25,
      },
      {
        id: 'adv-e-tdd-rebuild',
        type: 'exercise',
        title: 'Rebuild the Phase 3 API test-first; achieve ≥ 85% coverage with typed exceptions',
        url: 'https://example.com/formacao/advanced/tdd-exercise',
        durationMinutes: 120,
      },
      {
        id: 'adv-e-clean-arch',
        type: 'exercise',
        title: 'Refactor the API to Clean Architecture — business logic fully isolated from framework and DB',
        url: 'https://example.com/formacao/advanced/clean-arch-exercise',
        durationMinutes: 90,
      },
      {
        id: 'adv-e-ddd',
        type: 'exercise',
        title: 'Map a lead-triaging domain: define ubiquitous language, aggregate roots, and bounded contexts',
        url: 'https://example.com/formacao/advanced/ddd-exercise',
        durationMinutes: 60,
      },
      {
        id: 'adv-e-redis',
        type: 'exercise',
        title: 'Introduce Redis to cache high-frequency read-only queries, separated from transactional writes',
        url: 'https://example.com/formacao/advanced/redis-exercise',
        durationMinutes: 45,
      },
      {
        id: 'adv-e-docker-cicd',
        type: 'exercise',
        title: 'Write a Dockerfile + docker-compose (app + PostgreSQL) and a CI pipeline that runs tests on push',
        url: 'https://example.com/formacao/advanced/docker-exercise',
        durationMinutes: 60,
      },
    ],
  },
];
