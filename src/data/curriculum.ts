import type { Phase } from '../domain/milestone';

export const curriculum: readonly Phase[] = [
  // ─── Phase 01 — CS & Internet Fundamentals ───
  {
    id: 'phase-01',
    order: 1,
    title: 'CS & Internet Fundamentals',
    description:
      'How the internet works, operating systems, networking, Git, SDLC, and computational thinking.',
    longDescription:
      'This phase lays the groundwork for everything that follows in a software engineering career. You will understand how the internet actually works — from typing a URL in a browser to receiving a rendered page — and explore the operating-system concepts that underpin every application you will ever build.\n\nBeyond raw technology, this phase also introduces the *professional* side of software: version control with Git, the Software Development Lifecycle, and the problem-solving mindset known as computational thinking. Mastering these fundamentals means you will never be lost when someone mentions DNS, TCP, or a pull request in a code review.\n\nBy the end of Phase 01 you will be able to trace a network request end-to-end, navigate a terminal with confidence, collaborate through Git and GitHub, and break down complex problems into manageable steps.',
    chapters: [
      {
        id: 'ch-1-1',
        phaseId: 'phase-01',
        order: 1,
        title: 'How the Internet Works',
        description:
          'Clients and servers, DNS, IP addressing, HTTP/HTTPS, ports, request/response cycle, cookies, sessions, and core performance concepts.',
        longDescription:
          'The internet is the backbone of modern software. In this chapter you will learn how a web browser communicates with a remote server through the Domain Name System (DNS), IP addresses, and the HyperText Transfer Protocol (HTTP/HTTPS). You will trace the full lifecycle of a request — from the moment you press Enter in the address bar to the moment the HTML arrives in your browser.\n\nWe also cover stateful web concepts such as cookies and sessions, and explain why HTTPS is essential for security. Performance vocabulary like *latency*, *throughput*, and *bandwidth* is introduced so you can reason about slow pages and bottlenecks.\n\nFinally, you will compare static websites (plain HTML/CSS files served as-is) with dynamic web applications that generate content on the fly, laying the conceptual foundation for both front-end and back-end development.',
        resources: [
          {
            id: 'ch11-r-dns',
            type: 'reading',
            title: 'How DNS Resolution and HTTP Requests Work',
            url: 'https://codepath.dev/formacao/dns-and-http',
            durationMinutes: 25,
          },
          {
            id: 'ch11-v-internet',
            type: 'video',
            title: 'The Internet Explained: From Packets to Pages',
            url: 'https://codepath.dev/formacao/internet-explained',
            durationMinutes: 35,
          },
          {
            id: 'ch11-e-http-trace',
            type: 'exercise',
            title: 'Trace an HTTP Request with Browser DevTools',
            url: 'https://codepath.dev/formacao/http-trace-exercise',
            durationMinutes: 40,
          },
          {
            id: 'ch11-e-static-site',
            type: 'exercise',
            title: 'Build and Deploy a Static HTML/CSS Site',
            url: 'https://codepath.dev/formacao/static-site-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-1-2',
        phaseId: 'phase-01',
        order: 2,
        title: 'Operating Systems & Processes',
        description:
          'What an OS does, kernel vs user space, processes and threads, CPU/memory/disk/IO management, and basic CLI usage.',
        longDescription:
          'Every program you write runs on top of an operating system. This chapter demystifies what the OS actually does: managing hardware resources, scheduling processes, handling memory allocation, and providing a secure boundary between user-space applications and the kernel.\n\nYou will learn the difference between a *process* and a *thread*, understand how the CPU switches between tasks, and see how memory is organized into stacks and heaps. Disk I/O and file-system basics round out the picture so you know where your data lives.\n\nThe chapter closes with a hands-on introduction to the command-line interface (CLI) on Linux and macOS. You will practice navigating directories, inspecting running processes, and managing files — skills that are indispensable for any back-end developer or DevOps engineer.',
        resources: [
          {
            id: 'ch12-r-os-basics',
            type: 'reading',
            title: 'Kernel, Processes, and Memory Management',
            url: 'https://codepath.dev/formacao/os-basics',
            durationMinutes: 25,
          },
          {
            id: 'ch12-v-os-overview',
            type: 'video',
            title: 'Operating Systems Crash Course: From Boot to Process',
            url: 'https://codepath.dev/formacao/os-overview',
            durationMinutes: 30,
          },
          {
            id: 'ch12-e-cli-navigation',
            type: 'exercise',
            title: 'Master the Terminal: File Navigation and Permissions',
            url: 'https://codepath.dev/formacao/cli-navigation-exercise',
            durationMinutes: 35,
          },
          {
            id: 'ch12-e-process-inspect',
            type: 'exercise',
            title: 'Inspect Running Processes with ps, top, and htop',
            url: 'https://codepath.dev/formacao/process-inspect-exercise',
            durationMinutes: 30,
          },
        ],
      },
      {
        id: 'ch-1-3',
        phaseId: 'phase-01',
        order: 3,
        title: 'Networks & Protocols',
        description:
          'TCP/IP model, TCP vs UDP, sockets, common ports, and introductory network security concepts like TLS and certificates.',
        longDescription:
          'Networking is the glue that connects every distributed system. This chapter dives deeper than the HTTP layer and explores the TCP/IP model that governs all internet communication. You will understand how data is split into packets, routed across networks, and reassembled at the destination.\n\nThe distinction between *TCP* (reliable, ordered delivery) and *UDP* (fast, best-effort delivery) is fundamental to choosing the right protocol for a given use case — from web pages to real-time video. You will also learn about sockets, the programming abstraction that lets applications send and receive data over a network, and become familiar with well-known ports (80, 443, 22, 5432, etc.).\n\nFinally, we introduce network-security essentials: how TLS encrypts traffic, what digital certificates prove, and how Distributed Denial-of-Service (DDoS) attacks work at a high level. These concepts prepare you for the security-focused chapters later in the curriculum.',
        resources: [
          {
            id: 'ch13-r-tcp-ip',
            type: 'reading',
            title: 'The TCP/IP Model and How Data Travels',
            url: 'https://codepath.dev/formacao/tcp-ip-model',
            durationMinutes: 25,
          },
          {
            id: 'ch13-v-protocols',
            type: 'video',
            title: 'TCP vs UDP and Network Protocols Visualized',
            url: 'https://codepath.dev/formacao/protocols-visualized',
            durationMinutes: 30,
          },
          {
            id: 'ch13-e-socket-chat',
            type: 'exercise',
            title: 'Build a Simple TCP Chat with Sockets',
            url: 'https://codepath.dev/formacao/socket-chat-exercise',
            durationMinutes: 45,
          },
          {
            id: 'ch13-e-tls-inspect',
            type: 'exercise',
            title: 'Inspect TLS Certificates with OpenSSL',
            url: 'https://codepath.dev/formacao/tls-inspect-exercise',
            durationMinutes: 35,
          },
        ],
      },
      {
        id: 'ch-1-4',
        phaseId: 'phase-01',
        order: 4,
        title: 'Version Control with Git',
        description:
          'Repositories, commits, branches, merges, tags, remotes, feature branch flow, pull requests, and code review on GitHub.',
        longDescription:
          "Version control is the single most important collaboration tool in software engineering. This chapter teaches Git from the ground up: initializing a repository, staging changes, writing meaningful commit messages, and understanding the directed acyclic graph (DAG) that Git builds under the hood.\n\nYou will master branching strategies — creating feature branches, merging them back, resolving conflicts, and using tags to mark releases. The *feature branch workflow* is presented as the industry-standard way teams collaborate without stepping on each other's code.\n\nThe chapter also covers remote repositories on platforms like GitHub and GitLab. You will open pull requests, participate in code reviews, and learn etiquette that makes you a valued team member from day one. By the end you will feel confident pushing code, reviewing others' work, and recovering from common Git mistakes.",
        resources: [
          {
            id: 'ch14-r-git-fundamentals',
            type: 'reading',
            title: 'Git Internals: Commits, Branches, and the DAG',
            url: 'https://codepath.dev/formacao/git-fundamentals',
            durationMinutes: 30,
          },
          {
            id: 'ch14-v-git-workflow',
            type: 'video',
            title: 'Feature Branch Workflow and Pull Requests',
            url: 'https://codepath.dev/formacao/git-workflow',
            durationMinutes: 35,
          },
          {
            id: 'ch14-e-branch-merge',
            type: 'exercise',
            title: 'Practice Branching, Merging, and Conflict Resolution',
            url: 'https://codepath.dev/formacao/branch-merge-exercise',
            durationMinutes: 45,
          },
          {
            id: 'ch14-e-pr-review',
            type: 'exercise',
            title: 'Open a Pull Request and Conduct a Code Review',
            url: 'https://codepath.dev/formacao/pr-review-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-1-5',
        phaseId: 'phase-01',
        order: 5,
        title: 'Software Development Lifecycle (SDLC)',
        description:
          'Requirements gathering, analysis, design, development, testing, deployment, monitoring, and agile methodologies.',
        longDescription:
          'Writing code is only one piece of building software. This chapter zooms out to show the full lifecycle: gathering requirements, analyzing feasibility, designing a solution, developing it, testing for correctness, deploying to production, and monitoring for issues after launch.\n\nYou will compare traditional *Waterfall* approaches — where each phase completes before the next begins — with modern *Agile* methodologies that embrace change through short iterations. Scrum (sprints, standups, retrospectives) and Kanban (continuous flow, WIP limits) are introduced as the two most popular agile frameworks.\n\nFinally, you will learn how to write *user stories* and group them into *epics*, giving you a shared language with product managers and designers. Understanding the SDLC lets you see where your code fits in the bigger picture and communicate effectively with every role on a cross-functional team.',
        resources: [
          {
            id: 'ch15-r-sdlc-phases',
            type: 'reading',
            title: 'The Seven Phases of the Software Development Lifecycle',
            url: 'https://codepath.dev/formacao/sdlc-phases',
            durationMinutes: 20,
          },
          {
            id: 'ch15-v-agile-scrum',
            type: 'video',
            title: 'Agile, Scrum, and Kanban in Practice',
            url: 'https://codepath.dev/formacao/agile-scrum',
            durationMinutes: 35,
          },
          {
            id: 'ch15-e-user-stories',
            type: 'exercise',
            title: 'Write User Stories and Create a Sprint Backlog',
            url: 'https://codepath.dev/formacao/user-stories-exercise',
            durationMinutes: 40,
          },
          {
            id: 'ch15-e-kanban-board',
            type: 'exercise',
            title: 'Set Up a Kanban Board and Simulate a Sprint',
            url: 'https://codepath.dev/formacao/kanban-board-exercise',
            durationMinutes: 35,
          },
        ],
      },
      {
        id: 'ch-1-6',
        phaseId: 'phase-01',
        order: 6,
        title: 'Computational Thinking & Problem Solving',
        description:
          'Decomposition, pattern recognition, abstraction, algorithm design, and strategies for reading problem statements.',
        longDescription:
          'Before you can write a solution, you need to *understand* the problem. Computational thinking is a structured approach to problem-solving that every engineer — regardless of language or framework — relies on daily. It breaks down into four pillars: *decomposition* (splitting big problems into smaller ones), *pattern recognition* (spotting similarities to problems you have already solved), *abstraction* (ignoring irrelevant details), and *algorithm design* (defining step-by-step instructions).\n\nThis chapter trains you to read problem statements carefully, identify inputs and outputs, and sketch a plan before touching the keyboard. You will practice translating real-world scenarios into pseudocode and flowcharts, building the habit of thinking before coding.\n\nWe also cover practical skills like searching Stack Overflow effectively, reading official documentation, and asking good questions. These "meta-skills" accelerate learning in every subsequent phase and make you a self-sufficient engineer who can tackle unfamiliar challenges with confidence.',
        resources: [
          {
            id: 'ch16-r-thinking',
            type: 'reading',
            title: 'The Four Pillars of Computational Thinking',
            url: 'https://codepath.dev/formacao/computational-thinking',
            durationMinutes: 20,
          },
          {
            id: 'ch16-v-problem-solving',
            type: 'video',
            title: 'How to Break Down Any Programming Problem',
            url: 'https://codepath.dev/formacao/problem-solving',
            durationMinutes: 25,
          },
          {
            id: 'ch16-e-pseudocode',
            type: 'exercise',
            title: 'Translate Real-World Scenarios into Pseudocode',
            url: 'https://codepath.dev/formacao/pseudocode-exercise',
            durationMinutes: 40,
          },
          {
            id: 'ch16-e-decomposition',
            type: 'exercise',
            title: 'Decompose a Complex Feature into Sub-Problems',
            url: 'https://codepath.dev/formacao/decomposition-exercise',
            durationMinutes: 35,
          },
        ],
      },
    ],
  },

  // ─── Phase 02 — Programming Foundations & DSA ───
  {
    id: 'phase-02',
    order: 2,
    title: 'Programming Foundations & DSA',
    description:
      'Variables, OOP, data structures, algorithms, clean code, and testing fundamentals.',
    longDescription:
      'Phase 02 is where you build the analytical mindset that separates a coder from an engineer. Starting with programming fundamentals — variables, control flow, functions — you will quickly move into Object-Oriented Programming and learn how to model real-world domains with classes, inheritance, and polymorphism.\n\nThe heart of this phase is Data Structures and Algorithms (DSA). You will implement and reason about arrays, linked lists, stacks, queues, trees, and hash maps, and learn to evaluate their performance using Big-O notation. Classic algorithms for searching and sorting become second nature through deliberate practice on platforms like LeetCode and HackerRank.\n\nFinally, you will adopt professional habits early: writing clean, readable code and verifying correctness through automated tests. The Test-Driven Development (TDD) cycle — Red, Green, Refactor — is introduced here and reinforced throughout the rest of the curriculum.',
    chapters: [
      {
        id: 'ch-2-1',
        phaseId: 'phase-02',
        order: 7,
        title: 'Programming Logic & Control Structures',
        description:
          'Primitive types, operators, conditionals, loops, functions, scope, and an introduction to recursion.',
        longDescription:
          'Every program is built from a small set of building blocks: variables that hold data, operators that transform it, and control structures that decide *which* code runs *when*. This chapter covers primitive data types (integers, floats, booleans, strings, characters), arithmetic and logical operators, and the conditional statements (`if`, `else if`, `switch`) that let your code make decisions.\n\nLoops (`for`, `while`, `do-while`) enable repetition, and functions let you package reusable logic behind a descriptive name. You will learn about *scope* — where a variable is visible — and why it matters for avoiding bugs. A gentle introduction to *recursion* shows how a function can call itself to solve problems that naturally decompose into smaller instances.\n\nBy the end of this chapter you will be able to write small programs that accept input, process it through branching and looping logic, and produce correct output — the foundation upon which every larger application is built.',
        resources: [
          {
            id: 'ch21-r-control-flow',
            type: 'reading',
            title: 'Variables, Types, and Control Flow Explained',
            url: 'https://codepath.dev/formacao/control-flow',
            durationMinutes: 25,
          },
          {
            id: 'ch21-v-logic-loops',
            type: 'video',
            title: 'Conditionals, Loops, and Functions in Action',
            url: 'https://codepath.dev/formacao/logic-loops',
            durationMinutes: 30,
          },
          {
            id: 'ch21-e-fizzbuzz',
            type: 'exercise',
            title: 'Solve Classic Logic Problems: FizzBuzz and Beyond',
            url: 'https://codepath.dev/formacao/fizzbuzz-exercise',
            durationMinutes: 35,
          },
          {
            id: 'ch21-e-recursion-intro',
            type: 'exercise',
            title: 'Implement Factorial and Fibonacci with Recursion',
            url: 'https://codepath.dev/formacao/recursion-intro-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-2-2',
        phaseId: 'phase-02',
        order: 8,
        title: 'Object-Oriented Programming (OOP)',
        description:
          'Classes, objects, encapsulation, inheritance, polymorphism, composition vs inheritance, interfaces, abstract classes, and SOLID overview.',
        longDescription:
          'Object-Oriented Programming is the dominant paradigm in enterprise software. This chapter teaches you to model real-world concepts as *classes* that bundle data (fields) and behavior (methods) together. *Encapsulation* hides internal details behind a public API, making code easier to change without breaking consumers.\n\n*Inheritance* lets you create specialized classes from general ones, while *polymorphism* allows a single interface to represent different underlying behaviors — the foundation of flexible, extensible systems. You will also learn when to prefer *composition over inheritance* to avoid deep, fragile class hierarchies.\n\nThe chapter closes with *interfaces*, *abstract classes*, and a high-level overview of the SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion). These design guidelines will be explored in depth in Phase 04, but understanding them early helps you write better code from the start.',
        resources: [
          {
            id: 'ch22-r-oop-pillars',
            type: 'reading',
            title: 'The Four Pillars of OOP and When to Use Them',
            url: 'https://codepath.dev/formacao/oop-pillars',
            durationMinutes: 25,
          },
          {
            id: 'ch22-v-oop-practice',
            type: 'video',
            title: 'OOP in Practice: Classes, Inheritance, and Polymorphism',
            url: 'https://codepath.dev/formacao/oop-practice',
            durationMinutes: 35,
          },
          {
            id: 'ch22-e-class-design',
            type: 'exercise',
            title: 'Design a Class Hierarchy for a Library System',
            url: 'https://codepath.dev/formacao/class-design-exercise',
            durationMinutes: 45,
          },
          {
            id: 'ch22-e-composition',
            type: 'exercise',
            title: 'Refactor Inheritance to Composition',
            url: 'https://codepath.dev/formacao/composition-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-2-3',
        phaseId: 'phase-02',
        order: 9,
        title: 'Essential Data Structures',
        description:
          'Arrays, linked lists, stacks, queues, sets, maps/dictionaries, Java collections, JS arrays/maps, and Big-O basics.',
        longDescription:
          "Choosing the right data structure is often the difference between a solution that works and one that works *well*. This chapter introduces the foundational structures every engineer must know: *arrays* for indexed access, *linked lists* for efficient insertions and deletions, *stacks* (LIFO) and *queues* (FIFO) for managing order, and *sets* and *maps* for fast lookups.\n\nYou will implement each structure from scratch to understand the trade-offs — then learn the idiomatic way to use them in Java (the Collections Framework: `ArrayList`, `LinkedList`, `HashMap`, `HashSet`) and JavaScript (`Array`, `Map`, `Set`). Real-world usage patterns like using a stack for undo history or a queue for task processing make the concepts concrete.\n\nThe chapter also introduces *Big-O notation* — the language engineers use to describe how an algorithm's time or space requirements grow with input size. You will analyze common operations (access, search, insert, delete) for each data structure, building intuition that guides every design decision going forward.",
        resources: [
          {
            id: 'ch23-r-data-structures',
            type: 'reading',
            title: 'Arrays, Lists, Stacks, Queues, and Maps Compared',
            url: 'https://codepath.dev/formacao/data-structures',
            durationMinutes: 30,
          },
          {
            id: 'ch23-v-big-o',
            type: 'video',
            title: 'Big-O Notation and Data Structure Performance',
            url: 'https://codepath.dev/formacao/big-o-notation',
            durationMinutes: 35,
          },
          {
            id: 'ch23-e-implement-stack',
            type: 'exercise',
            title: 'Implement a Stack and Queue from Scratch',
            url: 'https://codepath.dev/formacao/stack-queue-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch23-e-hashmap',
            type: 'exercise',
            title: 'Build a Simple HashMap with Collision Handling',
            url: 'https://codepath.dev/formacao/hashmap-exercise',
            durationMinutes: 55,
          },
        ],
      },
      {
        id: 'ch-2-4',
        phaseId: 'phase-02',
        order: 10,
        title: 'Basic Algorithms',
        description:
          'Linear and binary search, classic sorting algorithms, recursion, divide and conquer, intro to dynamic programming, and coding practice.',
        longDescription:
          'Algorithms are step-by-step recipes for solving computational problems. This chapter starts with *searching*: linear search (simple but slow) and binary search (fast but requires sorted data). You will prove to yourself why binary search is O(log n) by watching the input halve with each comparison.\n\nNext come the classic *sorting* algorithms: insertion sort and selection sort (easy to understand, O(n\u00B2)), then merge sort and quicksort (efficient, O(n log n)). Understanding *recursion* deeply is critical here — merge sort is the textbook example of the *divide and conquer* strategy, where a problem is split, solved independently, and combined.\n\nThe chapter wraps up with a gentle introduction to *dynamic programming* (DP) — recognizing overlapping subproblems and caching results to avoid redundant work. You will practice on curated problems from LeetCode and HackerRank, building the muscle memory that transforms algorithmic theory into practical skill.',
        resources: [
          {
            id: 'ch24-r-search-sort',
            type: 'reading',
            title: 'Searching and Sorting Algorithms Explained',
            url: 'https://codepath.dev/formacao/search-sort',
            durationMinutes: 25,
          },
          {
            id: 'ch24-v-algorithms',
            type: 'video',
            title: 'Visualizing Merge Sort, Quick Sort, and Binary Search',
            url: 'https://codepath.dev/formacao/algorithms-visualized',
            durationMinutes: 40,
          },
          {
            id: 'ch24-e-sorting',
            type: 'exercise',
            title: 'Implement Merge Sort and Quick Sort from Scratch',
            url: 'https://codepath.dev/formacao/sorting-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch24-e-dp-intro',
            type: 'exercise',
            title: 'Solve Your First Dynamic Programming Problems',
            url: 'https://codepath.dev/formacao/dp-intro-exercise',
            durationMinutes: 55,
          },
        ],
      },
      {
        id: 'ch-2-5',
        phaseId: 'phase-02',
        order: 11,
        title: 'Clean Code Practices',
        description:
          'Meaningful names, short functions, avoiding duplication, readable code, manual testing, logging, and debugging.',
        longDescription:
          "Code is read far more often than it is written. This chapter distills the principles from Robert C. Martin's *Clean Code* into actionable habits you can adopt immediately. You will learn to choose *meaningful names* that reveal intent, write *short functions* that do one thing, and eliminate duplication through abstraction.\n\nReadability goes beyond formatting: the structure of your code should tell a story. You will practice refactoring messy code into clean, self-documenting modules where each function reads like a sentence. Comments are reserved for explaining *why*, not *what* — the code itself handles the rest.\n\nThe chapter also introduces practical debugging skills: using `console.log` / `System.out.println` strategically, reading stack traces, setting breakpoints in an IDE, and keeping a debugging journal. These techniques reduce the time between \"it doesn't work\" and \"I found the bug\" from hours to minutes.",
        resources: [
          {
            id: 'ch25-r-clean-code',
            type: 'reading',
            title: 'Clean Code Principles: Names, Functions, and DRY',
            url: 'https://codepath.dev/formacao/clean-code',
            durationMinutes: 25,
          },
          {
            id: 'ch25-v-refactoring',
            type: 'video',
            title: 'Refactoring Messy Code into Clean Modules',
            url: 'https://codepath.dev/formacao/refactoring',
            durationMinutes: 30,
          },
          {
            id: 'ch25-e-naming',
            type: 'exercise',
            title: 'Refactor a Codebase: Improve Names and Reduce Functions',
            url: 'https://codepath.dev/formacao/naming-exercise',
            durationMinutes: 45,
          },
          {
            id: 'ch25-e-debugging',
            type: 'exercise',
            title: 'Find and Fix Bugs Using Breakpoints and Logging',
            url: 'https://codepath.dev/formacao/debugging-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-2-6',
        phaseId: 'phase-02',
        order: 12,
        title: 'Automated Testing Fundamentals',
        description:
          'Unit, integration, and end-to-end tests, the TDD cycle (Red \u2192 Green \u2192 Refactor), assertions, and testing pure functions.',
        longDescription:
          "Manual testing does not scale. This chapter introduces *automated testing* as the safety net that lets you change code with confidence. You will learn the three main levels: *unit tests* (individual functions), *integration tests* (modules working together), and *end-to-end tests* (the full system from a user's perspective).\n\nThe *Test-Driven Development* (TDD) cycle — **Red** (write a failing test), **Green** (write the minimum code to pass), **Refactor** (improve without changing behavior) — is presented as a disciplined workflow that produces well-designed, well-tested code by construction. You will practice TDD on small functions to internalize the rhythm.\n\nPractically, you will write assertions using popular frameworks (JUnit for Java, Jest/Vitest for JavaScript), test *pure functions* (no side effects) as the easiest starting point, and learn to organize test files alongside production code. By the end you will have a test suite running on every save, catching regressions before they reach production.",
        resources: [
          {
            id: 'ch26-r-testing-levels',
            type: 'reading',
            title: 'Unit, Integration, and E2E Testing Explained',
            url: 'https://codepath.dev/formacao/testing-levels',
            durationMinutes: 20,
          },
          {
            id: 'ch26-v-tdd-cycle',
            type: 'video',
            title: 'TDD in Practice: Red, Green, Refactor',
            url: 'https://codepath.dev/formacao/tdd-cycle',
            durationMinutes: 35,
          },
          {
            id: 'ch26-e-first-tests',
            type: 'exercise',
            title: 'Write Your First Unit Tests with Jest or JUnit',
            url: 'https://codepath.dev/formacao/first-tests-exercise',
            durationMinutes: 45,
          },
          {
            id: 'ch26-e-tdd-practice',
            type: 'exercise',
            title: 'Build a String Calculator Using TDD',
            url: 'https://codepath.dev/formacao/tdd-practice-exercise',
            durationMinutes: 50,
          },
        ],
      },
    ],
  },

  // ─── Phase 03 — Backend Beginner ───
  {
    id: 'phase-03',
    order: 3,
    title: 'Backend Beginner',
    description:
      'Java ecosystem, Node.js, RESTful APIs, PostgreSQL, authentication, and API documentation.',
    longDescription:
      "Phase 03 marks the transition from solving isolated programming problems to building real web servers that handle requests from clients around the world. You will work with two of the most in-demand back-end ecosystems — Java with Spring Boot and Node.js with Express/Fastify — gaining the versatility to contribute to a wide range of codebases.\n\nRelational databases are the backbone of most business applications. You will design schemas, write SQL, and connect your server to PostgreSQL using both low-level drivers and modern ORMs. Authentication, authorization, and web security are woven in so that every API you build is secure from the start.\n\nThe phase culminates in a capstone project: a fully documented, deployed REST API with authentication, database persistence, and Swagger/OpenAPI documentation. This project becomes the first major piece in your professional portfolio.",
    chapters: [
      {
        id: 'ch-3-1',
        phaseId: 'phase-03',
        order: 13,
        title: 'Java Ecosystem for Backend',
        description:
          'JDK 17+, Maven and Gradle build tools, project structure, package conventions, and an introduction to Spring Boot.',
        longDescription:
          "Java remains one of the most widely used languages in enterprise back-end development. This chapter gets you productive in the Java ecosystem quickly: installing JDK 17+, understanding the difference between the JDK and JRE, and navigating the standard project structure (`src/main/java`, `src/test/java`).\n\nBuild tools are essential for managing dependencies and automating tasks. You will learn *Maven* (XML-based, convention-over-configuration) and *Gradle* (Groovy/Kotlin DSL, flexible and fast), focusing on declaring dependencies, running builds, and executing tests from the command line.\n\nThe chapter concludes with an introduction to *Spring Boot* — the de facto framework for Java web applications. You will create a minimal \"Hello World\" REST endpoint, understand auto-configuration, and see how Spring's dependency injection works. This sets the stage for the deeper back-end chapters that follow.",
        resources: [
          {
            id: 'ch31-r-java-setup',
            type: 'reading',
            title: 'Setting Up JDK 17+, Maven, and Gradle',
            url: 'https://codepath.dev/formacao/java-setup',
            durationMinutes: 25,
          },
          {
            id: 'ch31-v-spring-boot',
            type: 'video',
            title: 'Your First Spring Boot Application',
            url: 'https://codepath.dev/formacao/spring-boot-intro',
            durationMinutes: 35,
          },
          {
            id: 'ch31-e-maven-project',
            type: 'exercise',
            title: 'Create a Maven Project and Add Dependencies',
            url: 'https://codepath.dev/formacao/maven-project-exercise',
            durationMinutes: 40,
          },
          {
            id: 'ch31-e-spring-hello',
            type: 'exercise',
            title: 'Build a Hello World REST Endpoint with Spring Boot',
            url: 'https://codepath.dev/formacao/spring-hello-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-3-2',
        phaseId: 'phase-03',
        order: 14,
        title: 'Node.js Ecosystem for Backend',
        description:
          'Node.js runtime, npm/yarn, nvm, Express.js and Fastify, middlewares, routes, controllers, and project organization.',
        longDescription:
          'Node.js lets you use JavaScript on the server, and its non-blocking I/O model makes it a popular choice for real-time and API-heavy applications. This chapter introduces the Node.js runtime, the `npm` and `yarn` package managers, and `nvm` for managing multiple Node versions on a single machine.\n\nYou will build your first HTTP server with *Express.js* — the most widely adopted Node.js framework — learning about middleware chains, route handlers, and the request/response lifecycle. *Fastify* is introduced as a high-performance alternative, and you will compare the two to understand when each shines.\n\nProject organization matters as your codebase grows. You will adopt a *controllers \u2192 services \u2192 repositories* layered structure, separate route definitions from business logic, and configure environment variables with `dotenv`. These patterns keep Node.js projects maintainable well beyond the prototype stage.',
        resources: [
          {
            id: 'ch32-r-node-setup',
            type: 'reading',
            title: 'Node.js, npm, nvm, and Project Initialization',
            url: 'https://codepath.dev/formacao/node-setup',
            durationMinutes: 20,
          },
          {
            id: 'ch32-v-express',
            type: 'video',
            title: 'Building REST APIs with Express.js',
            url: 'https://codepath.dev/formacao/express-intro',
            durationMinutes: 35,
          },
          {
            id: 'ch32-e-express-api',
            type: 'exercise',
            title: 'Create a CRUD API with Express.js and Middlewares',
            url: 'https://codepath.dev/formacao/express-api-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch32-e-project-structure',
            type: 'exercise',
            title: 'Organize a Node.js Project into Layers',
            url: 'https://codepath.dev/formacao/project-structure-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-3-3',
        phaseId: 'phase-03',
        order: 15,
        title: 'HTTP & RESTful APIs',
        description:
          'HTTP methods, status codes, REST principles including resources, representation, idempotency, and statelessness.',
        longDescription:
          'REST (Representational State Transfer) is the architectural style behind the vast majority of web APIs. This chapter goes deep on the HTTP protocol: methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`), status codes (`2xx` for success, `4xx` for client errors, `5xx` for server errors), headers, and content negotiation.\n\nYou will learn the core REST constraints: *resources* identified by URIs, *representations* in JSON or XML, *statelessness* (each request carries all the information the server needs), and *idempotency* (repeating the same request produces the same result). Understanding these constraints lets you design APIs that are predictable, cacheable, and easy to consume.\n\nPractical patterns round out the chapter: pagination, filtering, sorting, error response formats, and the use of `Location` headers for created resources. By the end you will be able to design a RESTful API that other developers love to integrate with.',
        resources: [
          {
            id: 'ch33-r-rest-principles',
            type: 'reading',
            title: 'REST Constraints, HTTP Methods, and Status Codes',
            url: 'https://codepath.dev/formacao/rest-principles',
            durationMinutes: 25,
          },
          {
            id: 'ch33-v-rest-design',
            type: 'video',
            title: 'Designing RESTful APIs That Developers Love',
            url: 'https://codepath.dev/formacao/rest-design',
            durationMinutes: 30,
          },
          {
            id: 'ch33-e-rest-endpoints',
            type: 'exercise',
            title: 'Design and Test RESTful Endpoints with Postman',
            url: 'https://codepath.dev/formacao/rest-endpoints-exercise',
            durationMinutes: 45,
          },
          {
            id: 'ch33-e-status-codes',
            type: 'exercise',
            title: 'Handle Errors Gracefully with Proper Status Codes',
            url: 'https://codepath.dev/formacao/status-codes-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-3-4',
        phaseId: 'phase-03',
        order: 16,
        title: 'Relational Databases with PostgreSQL',
        description:
          'Relational model, tables, primary and foreign keys, normalization, and essential SQL queries.',
        longDescription:
          'Most business data lives in relational databases, and PostgreSQL is the gold standard in the open-source world. This chapter introduces the *relational model*: tables with rows and columns, primary keys that uniquely identify records, and foreign keys that enforce relationships between tables.\n\n*Normalization* (1NF, 2NF, 3NF) teaches you how to structure data to minimize redundancy and prevent anomalies during inserts, updates, and deletes. You will design schemas for realistic domains — e-commerce products, user accounts, order histories — and see how a well-normalized schema simplifies queries.\n\nOn the SQL side, you will master `SELECT` (with `WHERE`, `ORDER BY`, `LIMIT`), `INSERT`, `UPDATE`, `DELETE`, and `JOIN` operations (`INNER`, `LEFT`, `RIGHT`). Aggregate functions (`COUNT`, `SUM`, `AVG`, `GROUP BY`, `HAVING`) let you answer business questions directly from the database. By the end, you will be comfortable writing complex queries and designing schemas from scratch.',
        resources: [
          {
            id: 'ch34-r-relational-model',
            type: 'reading',
            title: 'Tables, Keys, Normalization, and Relational Design',
            url: 'https://codepath.dev/formacao/relational-model',
            durationMinutes: 30,
          },
          {
            id: 'ch34-v-sql-essentials',
            type: 'video',
            title: 'SQL Essentials: SELECT, JOIN, and Aggregations',
            url: 'https://codepath.dev/formacao/sql-essentials',
            durationMinutes: 40,
          },
          {
            id: 'ch34-e-schema-design',
            type: 'exercise',
            title: 'Design a Normalized Schema for an E-Commerce Domain',
            url: 'https://codepath.dev/formacao/schema-design-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch34-e-sql-queries',
            type: 'exercise',
            title: 'Write Complex SQL Queries with JOINs and Aggregations',
            url: 'https://codepath.dev/formacao/sql-queries-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-3-5',
        phaseId: 'phase-03',
        order: 17,
        title: 'Backend + Database Integration',
        description:
          'Connecting PostgreSQL to Java (JDBC/JPA/Hibernate) and Node.js (pg/Prisma/TypeORM), ORMs, migrations, seeds, and transactions.',
        longDescription:
          'A REST API is only useful if it persists data. This chapter teaches you to connect your back-end application to PostgreSQL using both Java and Node.js ecosystems. On the Java side you will progress from raw *JDBC* connections to *JPA* with *Hibernate*, learning how Object-Relational Mapping (ORM) translates between classes and tables.\n\nIn Node.js you will use the low-level `pg` driver for direct SQL, then graduate to *Prisma* and *TypeORM* as modern ORM alternatives. You will compare the "repository pattern" in both ecosystems and learn when raw SQL outperforms an ORM.\n\n*Migrations* version your database schema alongside your code so that every environment — development, staging, production — stays in sync. *Seeds* populate initial or test data. *Transactions* ensure that a group of operations either all succeed or all roll back, preventing data corruption. These three practices are non-negotiable in production-grade applications.',
        resources: [
          {
            id: 'ch35-r-orm-basics',
            type: 'reading',
            title: 'ORM Concepts: JDBC, JPA, Prisma, and TypeORM',
            url: 'https://codepath.dev/formacao/orm-basics',
            durationMinutes: 25,
          },
          {
            id: 'ch35-v-db-integration',
            type: 'video',
            title: 'Connecting Spring Boot and Express to PostgreSQL',
            url: 'https://codepath.dev/formacao/db-integration',
            durationMinutes: 40,
          },
          {
            id: 'ch35-e-migrations',
            type: 'exercise',
            title: 'Create Migrations and Seeds for a Todo App',
            url: 'https://codepath.dev/formacao/migrations-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch35-e-transactions',
            type: 'exercise',
            title: 'Implement Transactions for a Money Transfer Feature',
            url: 'https://codepath.dev/formacao/transactions-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-3-6',
        phaseId: 'phase-03',
        order: 18,
        title: 'Authentication, Authorization & Web Security',
        description:
          'Auth vs authz, JWT tokens, sessions, OAuth2, XSS, CSRF, SQL injection, and password hashing.',
        longDescription:
          'Security is not a feature you bolt on at the end — it must be part of every layer of your application. This chapter clearly distinguishes *authentication* (proving who you are) from *authorization* (what you are allowed to do) and presents multiple strategies for each.\n\nYou will implement *JWT* (JSON Web Token) based authentication — issuing tokens on login, validating them on every request, and handling refresh flows. Session-based authentication is compared so you understand the trade-offs. *OAuth2* is introduced for social login scenarios (Google, GitHub) where your app delegates identity verification to a trusted provider.\n\nOn the defensive side, you will learn to prevent the OWASP Top-10 vulnerabilities relevant to APIs: *Cross-Site Scripting (XSS)*, *Cross-Site Request Forgery (CSRF)*, and *SQL Injection*. Password hashing with bcrypt, input validation, and secure HTTP headers round out the chapter, ensuring the APIs you build can withstand real-world attacks.',
        resources: [
          {
            id: 'ch36-r-auth-basics',
            type: 'reading',
            title: 'Authentication vs Authorization: JWT, Sessions, OAuth2',
            url: 'https://codepath.dev/formacao/auth-basics',
            durationMinutes: 25,
          },
          {
            id: 'ch36-v-web-security',
            type: 'video',
            title: 'Web Security: XSS, CSRF, SQL Injection, and Defenses',
            url: 'https://codepath.dev/formacao/web-security',
            durationMinutes: 40,
          },
          {
            id: 'ch36-e-jwt-auth',
            type: 'exercise',
            title: 'Implement JWT Authentication with Refresh Tokens',
            url: 'https://codepath.dev/formacao/jwt-auth-exercise',
            durationMinutes: 60,
          },
          {
            id: 'ch36-e-security-audit',
            type: 'exercise',
            title: 'Audit and Fix Security Vulnerabilities in an API',
            url: 'https://codepath.dev/formacao/security-audit-exercise',
            durationMinutes: 50,
          },
        ],
      },
      {
        id: 'ch-3-7',
        phaseId: 'phase-03',
        order: 19,
        title: 'Building & Documenting APIs',
        description:
          'RESTful naming conventions, OpenAPI/Swagger documentation, API versioning, and managing breaking changes.',
        longDescription:
          'An API is a product, and like any product it needs clear documentation and a plan for evolution. This chapter covers RESTful naming conventions — plural nouns for collections (`/users`), nested resources (`/users/:id/orders`), and consistent use of HTTP methods — so your endpoints are intuitive to consumers.\n\n*OpenAPI* (formerly Swagger) is the industry standard for describing REST APIs in a machine-readable format. You will write an OpenAPI specification, generate interactive documentation with Swagger UI, and produce client SDKs automatically. The spec becomes a contract between front-end and back-end teams, reducing integration friction.\n\nAPI *versioning* strategies (URI path `/v1/`, header-based, query parameter) and techniques for managing *breaking changes* (deprecation notices, sunset headers, migration guides) close out the chapter. These practices ensure that your API can evolve without breaking existing consumers — a critical skill in production environments.',
        resources: [
          {
            id: 'ch37-r-api-design',
            type: 'reading',
            title: 'RESTful Naming, Versioning, and Breaking Changes',
            url: 'https://codepath.dev/formacao/api-design',
            durationMinutes: 20,
          },
          {
            id: 'ch37-v-openapi',
            type: 'video',
            title: 'Documenting APIs with OpenAPI and Swagger UI',
            url: 'https://codepath.dev/formacao/openapi-swagger',
            durationMinutes: 30,
          },
          {
            id: 'ch37-e-swagger-spec',
            type: 'exercise',
            title: 'Write an OpenAPI Spec and Generate Swagger Docs',
            url: 'https://codepath.dev/formacao/swagger-spec-exercise',
            durationMinutes: 45,
          },
          {
            id: 'ch37-e-versioning',
            type: 'exercise',
            title: 'Add API Versioning and Deprecation to Your Server',
            url: 'https://codepath.dev/formacao/versioning-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-3-8',
        phaseId: 'phase-03',
        order: 20,
        title: 'Beginner Backend Project',
        description:
          'Build a complete API (task system, blog, or e-commerce) with auth, PostgreSQL, Swagger docs, and deploy to Railway or Render.',
        longDescription:
          'Theory becomes skill only through practice. This capstone chapter challenges you to build a *complete REST API* from scratch — choosing a domain (task management, blog, or simple e-commerce) and applying everything you have learned in Phase 03.\n\nYour project must include: user registration and login with JWT authentication, CRUD operations persisted in PostgreSQL, input validation and proper error handling, and interactive Swagger documentation generated from an OpenAPI spec. Code should follow the layered architecture (controllers \u2192 services \u2192 repositories) and include meaningful automated tests.\n\nThe final step is *deployment*. You will containerize your application (or use the platform\'s native build packs), push it to *Railway* or *Render*, configure environment variables for production, and verify the live API with Postman or curl. The deployed project, complete with a polished README, becomes the first anchor piece of your professional portfolio.',
        resources: [
          {
            id: 'ch38-r-project-planning',
            type: 'reading',
            title: 'Planning a Full-Stack API Project: Scope and Architecture',
            url: 'https://codepath.dev/formacao/project-planning',
            durationMinutes: 20,
          },
          {
            id: 'ch38-v-project-walkthrough',
            type: 'video',
            title: 'Building and Deploying a Complete REST API',
            url: 'https://codepath.dev/formacao/project-walkthrough',
            durationMinutes: 45,
          },
          {
            id: 'ch38-e-build-api',
            type: 'exercise',
            title: 'Build a Task Manager API with Auth and PostgreSQL',
            url: 'https://codepath.dev/formacao/build-api-exercise',
            durationMinutes: 60,
          },
          {
            id: 'ch38-e-deploy',
            type: 'exercise',
            title: 'Deploy Your API to Railway or Render',
            url: 'https://codepath.dev/formacao/deploy-exercise',
            durationMinutes: 45,
          },
        ],
      },
    ],
  },

  // ─── Phase 04 — Backend Advanced & Software Engineering ───
  {
    id: 'phase-04',
    order: 4,
    title: 'Backend Advanced & Software Engineering',
    description:
      'TDD, Clean Architecture, DDD, caching, Docker, CI/CD, security, system design, and career skills.',
    longDescription:
      'Phase 04 transforms you from a coder who can build features into a software engineer who designs systems. You will deepen your testing discipline with advanced TDD, apply SOLID principles rigorously, and learn architectural patterns — Clean Architecture and Domain-Driven Design — that keep large codebases maintainable over years.\n\nOn the infrastructure side, you will optimize databases with indexes and query plans, implement caching with Redis, containerize applications with Docker, and automate build-test-deploy pipelines with CI/CD. Security and compliance (LGPD/GDPR) ensure your systems are trustworthy.\n\nThe phase closes with *system design* — reasoning about monoliths vs microservices, message queues, and high availability — and professional *career skills* like writing ADRs, presenting post-mortems, and building a portfolio. By the end of Phase 04 you will be prepared to contribute as a mid-level engineer and continue growing toward senior roles.',
    chapters: [
      {
        id: 'ch-4-1',
        phaseId: 'phase-04',
        order: 21,
        title: 'Advanced Testing & TDD',
        description:
          'Unit, integration, contract, e2e, and load tests, TDD with mocks/fakes/stubs, the test pyramid, and useful coverage metrics.',
        longDescription:
          'In Phase 02 you learned the basics of TDD. Now you go deeper. This chapter expands your testing vocabulary to include *contract tests* (verifying API agreements between services), *end-to-end tests* (simulating real user flows), and *load tests* (measuring performance under stress). Each level catches a different class of bug.\n\nYou will master *test doubles* — mocks, fakes, and stubs — understanding when each is appropriate. Mocks verify interactions ("was this method called?"), stubs provide canned answers, and fakes are lightweight implementations of complex dependencies (like an in-memory database). Used correctly, test doubles keep your tests fast and focused.\n\nThe *test pyramid* guides how many tests to write at each level: many unit tests, fewer integration tests, and a handful of e2e tests. You will also learn to interpret *code coverage* critically — 100% coverage does not mean zero bugs, but targeted coverage on complex business logic dramatically reduces regression risk.',
        resources: [
          {
            id: 'ch41-r-advanced-testing',
            type: 'reading',
            title: 'The Test Pyramid, Mocks, Stubs, and Fakes',
            url: 'https://codepath.dev/formacao/advanced-testing',
            durationMinutes: 25,
          },
          {
            id: 'ch41-v-tdd-advanced',
            type: 'video',
            title: 'Advanced TDD: Contract Tests and Load Testing',
            url: 'https://codepath.dev/formacao/tdd-advanced',
            durationMinutes: 40,
          },
          {
            id: 'ch41-e-mocks-stubs',
            type: 'exercise',
            title: 'Refactor Tests to Use Mocks, Stubs, and Fakes',
            url: 'https://codepath.dev/formacao/mocks-stubs-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch41-e-load-test',
            type: 'exercise',
            title: 'Write Load Tests with k6 or Artillery',
            url: 'https://codepath.dev/formacao/load-test-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-4-2',
        phaseId: 'phase-04',
        order: 22,
        title: 'Clean Code & Advanced SOLID',
        description:
          'Deep dive into SOLID principles, DRY/KISS/YAGNI, test-guided refactoring, reducing coupling, and increasing cohesion.',
        longDescription:
          "SOLID is not just an acronym to memorize — it is a set of design principles that, when internalized, fundamentally change how you structure code. This chapter revisits each principle in depth: *Single Responsibility* (one reason to change), *Open/Closed* (open for extension, closed for modification), *Liskov Substitution* (subtypes must be substitutable), *Interface Segregation* (no client should depend on methods it does not use), and *Dependency Inversion* (depend on abstractions, not concretions).\n\nComplementary principles — *DRY* (Don't Repeat Yourself), *KISS* (Keep It Simple, Stupid), and *YAGNI* (You Aren't Gonna Need It) — guard against over-engineering. You will learn to recognize when abstraction helps and when it hurts, using real codebases as case studies.\n\n*Test-guided refactoring* ties everything together: because you wrote tests first, you can confidently restructure code to reduce coupling and increase cohesion. The result is software that is easy to understand, easy to test, and easy to change — the hallmarks of professional engineering.",
        resources: [
          {
            id: 'ch42-r-solid-deep',
            type: 'reading',
            title: 'SOLID Principles in Depth with Real Examples',
            url: 'https://codepath.dev/formacao/solid-deep',
            durationMinutes: 30,
          },
          {
            id: 'ch42-v-refactoring-solid',
            type: 'video',
            title: 'Refactoring Toward SOLID: Before and After',
            url: 'https://codepath.dev/formacao/refactoring-solid',
            durationMinutes: 35,
          },
          {
            id: 'ch42-e-solid-refactor',
            type: 'exercise',
            title: 'Identify and Fix SOLID Violations in a Codebase',
            url: 'https://codepath.dev/formacao/solid-refactor-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch42-e-coupling',
            type: 'exercise',
            title: 'Reduce Coupling and Increase Cohesion with DI',
            url: 'https://codepath.dev/formacao/coupling-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-4-3',
        phaseId: 'phase-04',
        order: 23,
        title: 'Clean Architecture',
        description:
          'Layers (entities, use cases, interfaces), domain/application/infrastructure separation, and implementation in Java and Node.js.',
        longDescription:
          'Clean Architecture, popularized by Robert C. Martin, organizes code into concentric layers where *dependencies always point inward* — from infrastructure toward the domain. The innermost layer contains *entities* (pure business objects), surrounded by *use cases* (application-specific business rules), then *interface adapters* (controllers, gateways), and finally *frameworks and drivers* (Express, Spring, databases).\n\nThis chapter teaches you to separate your project into `domain`, `application`, and `infrastructure` directories. The domain knows nothing about HTTP or databases; use cases orchestrate domain logic; and the infrastructure layer contains framework-specific implementations that can be swapped without touching business rules.\n\nYou will implement Clean Architecture in both Java (Spring Boot) and Node.js (Express, Fastify, or NestJS), learning to define boundaries with interfaces and connect layers through *adapters*. The payoff is enormous: your core logic becomes framework-agnostic, trivially testable, and resilient to technology changes — the architecture that scales from startup to enterprise.',
        resources: [
          {
            id: 'ch43-r-clean-arch',
            type: 'reading',
            title: 'Clean Architecture: Layers, Boundaries, and Adapters',
            url: 'https://codepath.dev/formacao/clean-architecture',
            durationMinutes: 30,
          },
          {
            id: 'ch43-v-clean-arch-impl',
            type: 'video',
            title: 'Implementing Clean Architecture in Java and Node.js',
            url: 'https://codepath.dev/formacao/clean-arch-implementation',
            durationMinutes: 45,
          },
          {
            id: 'ch43-e-layers',
            type: 'exercise',
            title: 'Restructure a Monolithic App into Clean Architecture Layers',
            url: 'https://codepath.dev/formacao/layers-exercise',
            durationMinutes: 60,
          },
          {
            id: 'ch43-e-adapters',
            type: 'exercise',
            title: 'Swap Database and Framework Using Adapters',
            url: 'https://codepath.dev/formacao/adapters-exercise',
            durationMinutes: 50,
          },
        ],
      },
      {
        id: 'ch-4-4',
        phaseId: 'phase-04',
        order: 24,
        title: 'Domain-Driven Design (DDD)',
        description:
          'Ubiquitous language, bounded contexts, entities, value objects, aggregates, repositories, and context mapping.',
        longDescription:
          'Domain-Driven Design is a methodology for tackling complex business domains by placing the *domain model* at the center of your architecture. This chapter introduces the *ubiquitous language* — a shared vocabulary between developers and domain experts that eliminates translation errors and ensures the code accurately reflects business rules.\n\n*Bounded contexts* divide a large system into smaller, cohesive models. Within a context you will work with *entities* (objects with identity), *value objects* (immutable, identity-less), *aggregates* (consistency boundaries), and *repositories* (abstractions over data access). Each concept is illustrated with concrete examples from domains like e-commerce, healthcare, and logistics.\n\n*Context mapping* shows how bounded contexts interact: shared kernel, customer-supplier, anti-corruption layer, and more. You will also see how DDD dovetails with Clean Architecture — DDD provides the *strategic* design (how to model the domain) while Clean Architecture provides the *structural* design (how to organize the code). Together, they produce systems that are both business-aligned and technically sound.',
        resources: [
          {
            id: 'ch44-r-ddd-concepts',
            type: 'reading',
            title: 'DDD Building Blocks: Entities, Value Objects, Aggregates',
            url: 'https://codepath.dev/formacao/ddd-concepts',
            durationMinutes: 30,
          },
          {
            id: 'ch44-v-ddd-practice',
            type: 'video',
            title: 'Domain-Driven Design in Practice with Bounded Contexts',
            url: 'https://codepath.dev/formacao/ddd-practice',
            durationMinutes: 40,
          },
          {
            id: 'ch44-e-domain-model',
            type: 'exercise',
            title: 'Model an E-Commerce Domain with DDD Patterns',
            url: 'https://codepath.dev/formacao/domain-model-exercise',
            durationMinutes: 55,
          },
          {
            id: 'ch44-e-context-map',
            type: 'exercise',
            title: 'Draw a Context Map and Define Bounded Contexts',
            url: 'https://codepath.dev/formacao/context-map-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-4-5',
        phaseId: 'phase-04',
        order: 25,
        title: 'Advanced Database & Performance',
        description:
          'Indexes, execution plans, query optimization, transactions, isolation levels, locking, deadlocks, and intro to NoSQL.',
        longDescription:
          'As your application scales, database performance becomes the bottleneck. This chapter teaches you to analyze *execution plans* (`EXPLAIN ANALYZE` in PostgreSQL) and understand how the query planner decides between sequential scans, index scans, and hash joins. You will create *indexes* strategically — B-tree, GIN, partial — and measure the before-and-after difference.\n\n*Transaction isolation levels* (Read Uncommitted, Read Committed, Repeatable Read, Serializable) control what concurrent transactions can see. You will learn about *locking* (row-level, table-level, advisory) and how to diagnose and prevent *deadlocks*. These concepts are essential for any application with concurrent writes.\n\nThe chapter closes with an introduction to *NoSQL* databases: *MongoDB* for document storage and *Redis* for key-value caching. You will learn when a relational database is the right tool and when a NoSQL solution fits better, giving you the vocabulary to make informed data-layer decisions.',
        resources: [
          {
            id: 'ch45-r-db-performance',
            type: 'reading',
            title: 'Indexes, Query Plans, and PostgreSQL Optimization',
            url: 'https://codepath.dev/formacao/db-performance',
            durationMinutes: 30,
          },
          {
            id: 'ch45-v-transactions',
            type: 'video',
            title: 'Transactions, Isolation Levels, and Deadlock Prevention',
            url: 'https://codepath.dev/formacao/transactions-deep',
            durationMinutes: 40,
          },
          {
            id: 'ch45-e-query-optimize',
            type: 'exercise',
            title: 'Optimize Slow Queries with EXPLAIN ANALYZE and Indexes',
            url: 'https://codepath.dev/formacao/query-optimize-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch45-e-nosql-intro',
            type: 'exercise',
            title: 'Store and Query Data in MongoDB and Redis',
            url: 'https://codepath.dev/formacao/nosql-intro-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-4-6',
        phaseId: 'phase-04',
        order: 26,
        title: 'Caching & Scalability',
        description:
          'Local vs distributed cache, invalidation strategies, Redis/Memcached, rate limiting, horizontal scaling, and load balancers.',
        longDescription:
          'Caching is the most impactful performance optimization in distributed systems. This chapter distinguishes *local caches* (in-process, single-node) from *distributed caches* (shared across nodes, e.g., Redis, Memcached) and explains when each is appropriate.\n\nThe hardest problem in caching is *invalidation* — knowing when to throw away stale data. You will learn strategies like *time-to-live (TTL)*, *write-through* (write to cache and database simultaneously), *write-behind* (write to cache first, database asynchronously), and *cache-aside* (application manages the cache explicitly). Each strategy has trade-offs in consistency, latency, and complexity.\n\nScalability patterns round out the chapter: *rate limiting* protects your API from abuse, *horizontal scaling* adds more server instances instead of bigger hardware, and *load balancers* distribute traffic across those instances. You will configure Nginx as a reverse proxy and see how combining caching with horizontal scaling lets a modest application handle millions of requests.',
        resources: [
          {
            id: 'ch46-r-caching',
            type: 'reading',
            title: 'Caching Strategies: TTL, Write-Through, and Cache-Aside',
            url: 'https://codepath.dev/formacao/caching-strategies',
            durationMinutes: 25,
          },
          {
            id: 'ch46-v-scalability',
            type: 'video',
            title: 'Horizontal Scaling, Load Balancers, and Rate Limiting',
            url: 'https://codepath.dev/formacao/scalability',
            durationMinutes: 35,
          },
          {
            id: 'ch46-e-redis-cache',
            type: 'exercise',
            title: 'Add Redis Caching to an Existing API',
            url: 'https://codepath.dev/formacao/redis-cache-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch46-e-rate-limit',
            type: 'exercise',
            title: 'Implement Rate Limiting and Load Balancing with Nginx',
            url: 'https://codepath.dev/formacao/rate-limit-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-4-7',
        phaseId: 'phase-04',
        order: 27,
        title: 'Docker & Containerization',
        description:
          'Images, containers, Dockerfile, docker-compose, containerizing Java/Node.js with PostgreSQL, and multi-stage builds.',
        longDescription:
          "Containers solve the \"it works on my machine\" problem by packaging an application with everything it needs to run — code, runtime, libraries, and configuration — into a portable, reproducible unit. This chapter teaches Docker from the ground up: images vs containers, the layer-based file system, and the `Dockerfile` instructions (`FROM`, `COPY`, `RUN`, `CMD`, `EXPOSE`).\n\nYou will containerize both a Java Spring Boot application and a Node.js Express application, each connected to a PostgreSQL database, using `docker-compose` to orchestrate multi-container setups. Environment variables, volume mounts for persistent data, and networking between containers are covered in detail.\n\n*Multi-stage builds* dramatically reduce image size by separating the build environment from the runtime environment — your final image contains only the compiled artifact and a minimal base. By the end of this chapter you will be able to `docker-compose up` any project and have a fully running stack in seconds, regardless of the host operating system.",
        resources: [
          {
            id: 'ch47-r-docker-basics',
            type: 'reading',
            title: 'Docker Concepts: Images, Containers, and Layers',
            url: 'https://codepath.dev/formacao/docker-basics',
            durationMinutes: 25,
          },
          {
            id: 'ch47-v-docker-compose',
            type: 'video',
            title: 'Containerizing Apps with Docker and docker-compose',
            url: 'https://codepath.dev/formacao/docker-compose',
            durationMinutes: 40,
          },
          {
            id: 'ch47-e-containerize',
            type: 'exercise',
            title: 'Containerize a Java or Node.js App with PostgreSQL',
            url: 'https://codepath.dev/formacao/containerize-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch47-e-multistage',
            type: 'exercise',
            title: 'Optimize Image Size with Multi-Stage Builds',
            url: 'https://codepath.dev/formacao/multistage-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-4-8',
        phaseId: 'phase-04',
        order: 28,
        title: 'Cloud, CI/CD & Basic DevOps',
        description:
          'Cloud computing (IaaS/PaaS/FaaS), AWS/GCP/Azure overview, CI/CD pipelines, automation, observability, and health checks.',
        longDescription:
          'Modern software is deployed to the cloud, and CI/CD pipelines ensure that every change reaches production safely and quickly. This chapter starts with cloud computing fundamentals: *IaaS* (virtual machines), *PaaS* (managed platforms like Heroku, Railway), and *FaaS* (serverless functions like AWS Lambda). You will understand the trade-offs and know which model fits a given project.\n\nNext you will build a *CI/CD pipeline* using GitHub Actions (or GitLab CI). The pipeline automates: linting and static analysis on every push, running the full test suite, building a Docker image, and deploying to a staging or production environment. You will learn about environment secrets, deployment strategies (rolling, blue-green), and rollback procedures.\n\nThe chapter closes with *observability*: structured logging (JSON logs with correlation IDs), health-check endpoints (`/health`, `/ready`), and an introduction to metrics and alerting. These practices let you *know* your application is healthy rather than *hoping* it is — the dividing line between hobby projects and production-grade systems.',
        resources: [
          {
            id: 'ch48-r-cloud-intro',
            type: 'reading',
            title: 'Cloud Computing: IaaS, PaaS, FaaS Compared',
            url: 'https://codepath.dev/formacao/cloud-intro',
            durationMinutes: 25,
          },
          {
            id: 'ch48-v-cicd',
            type: 'video',
            title: 'Building CI/CD Pipelines with GitHub Actions',
            url: 'https://codepath.dev/formacao/cicd-pipelines',
            durationMinutes: 40,
          },
          {
            id: 'ch48-e-pipeline',
            type: 'exercise',
            title: 'Create a CI/CD Pipeline That Builds, Tests, and Deploys',
            url: 'https://codepath.dev/formacao/pipeline-exercise',
            durationMinutes: 55,
          },
          {
            id: 'ch48-e-observability',
            type: 'exercise',
            title: 'Add Health Checks and Structured Logging to Your API',
            url: 'https://codepath.dev/formacao/observability-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-4-9',
        phaseId: 'phase-04',
        order: 29,
        title: 'Security, Privacy & Compliance',
        description:
          'Secure coding, endpoint security review, data protection (LGPD/GDPR), encryption at rest and in transit, and secret management.',
        longDescription:
          'Building secure software is a responsibility, not an afterthought. This chapter goes beyond the web-vulnerability basics covered in Phase 03 and presents a *holistic security posture*: secure coding guidelines, threat modeling, and systematic endpoint security reviews that catch vulnerabilities before they reach production.\n\n*Data protection* regulations — Brazil\'s LGPD and Europe\'s GDPR — impose legal obligations on how you collect, store, and process personal data. You will learn the key requirements: lawful basis for processing, data minimization, user consent, the right to erasure, and breach notification. These concepts are illustrated with practical checklist items you can apply to any project.\n\n*Encryption at rest* (database-level, disk-level) and *encryption in transit* (TLS everywhere) protect data from unauthorized access. *Secret management* — storing API keys, database credentials, and tokens outside of source code using tools like environment variables, HashiCorp Vault, or cloud-native secret managers — prevents the most common security incident: leaked credentials in a Git repository.',
        resources: [
          {
            id: 'ch49-r-secure-coding',
            type: 'reading',
            title: 'Secure Coding, LGPD/GDPR, and Encryption Practices',
            url: 'https://codepath.dev/formacao/secure-coding',
            durationMinutes: 30,
          },
          {
            id: 'ch49-v-security-review',
            type: 'video',
            title: 'Conducting an Endpoint Security Review',
            url: 'https://codepath.dev/formacao/security-review',
            durationMinutes: 35,
          },
          {
            id: 'ch49-e-threat-model',
            type: 'exercise',
            title: 'Create a Threat Model and Security Checklist',
            url: 'https://codepath.dev/formacao/threat-model-exercise',
            durationMinutes: 50,
          },
          {
            id: 'ch49-e-secret-mgmt',
            type: 'exercise',
            title: 'Implement Secret Management with Environment Variables',
            url: 'https://codepath.dev/formacao/secret-mgmt-exercise',
            durationMinutes: 40,
          },
        ],
      },
      {
        id: 'ch-4-10',
        phaseId: 'phase-04',
        order: 30,
        title: 'System Design & Architecture for Scale',
        description:
          'Monolith vs microservices, queues, messaging, event-driven architecture, high availability, fault tolerance, and C4/UML diagrams.',
        longDescription:
          'System design is the art of making architectural decisions that let a system grow in traffic, data volume, and team size. This chapter starts with the *monolith vs microservices* trade-off: monoliths are simpler to develop and deploy, while microservices offer independent scaling and deployment — but at the cost of distributed-system complexity.\n\n*Message queues* (RabbitMQ, Amazon SQS) and *event-driven architectures* (Kafka, event sourcing) decouple producers from consumers, enabling asynchronous processing and resilience. You will learn patterns like *publish/subscribe*, *dead-letter queues*, and *idempotent consumers* that make event-driven systems reliable.\n\n*High availability* (redundancy, failover, health checks) and *fault tolerance* (circuit breakers, retries with exponential backoff, graceful degradation) ensure your system stays up when things go wrong — and they will. The chapter closes with *architectural diagramming* using C4 and UML, giving you a visual language to communicate system design to both technical and non-technical stakeholders.',
        resources: [
          {
            id: 'ch410-r-system-design',
            type: 'reading',
            title: 'Monoliths, Microservices, Queues, and Event-Driven Design',
            url: 'https://codepath.dev/formacao/system-design',
            durationMinutes: 30,
          },
          {
            id: 'ch410-v-architecture',
            type: 'video',
            title: 'Designing for Scale: High Availability and Fault Tolerance',
            url: 'https://codepath.dev/formacao/architecture-scale',
            durationMinutes: 45,
          },
          {
            id: 'ch410-e-design-exercise',
            type: 'exercise',
            title: 'Design a Scalable URL Shortener System',
            url: 'https://codepath.dev/formacao/design-exercise',
            durationMinutes: 60,
          },
          {
            id: 'ch410-e-c4-diagram',
            type: 'exercise',
            title: 'Draw C4 Diagrams for an Existing Architecture',
            url: 'https://codepath.dev/formacao/c4-diagram-exercise',
            durationMinutes: 45,
          },
        ],
      },
      {
        id: 'ch-4-11',
        phaseId: 'phase-04',
        order: 31,
        title: 'Career Skills & Portfolio',
        description:
          'Project documentation (README/ADRs), professional portfolio, case studies, post-mortems, and soft skills.',
        longDescription:
          "Technical excellence alone does not build a career — you also need to communicate, collaborate, and present your work effectively. This chapter focuses on the *professional artifacts* that set you apart: a polished README that explains what your project does, how to run it, and the architectural decisions behind it. *Architecture Decision Records* (ADRs) capture the *why* behind important choices so future team members understand the reasoning.\n\nYour *portfolio* is your resume in action. You will learn to select projects that demonstrate breadth and depth, write *case studies* that tell the story of a project (problem \u2192 approach \u2192 outcome), and conduct *post-mortems* that honestly analyze failures and extract lessons. These artifacts show employers you can think critically and learn continuously.\n\nFinally, the chapter addresses *soft skills* that multiply your technical impact: clear written and verbal communication, giving and receiving feedback constructively, effective teamwork in cross-functional squads, and time management techniques (Pomodoro, time-boxing) that prevent burnout. A great engineer writes great code *and* lifts the entire team around them.",
        resources: [
          {
            id: 'ch411-r-portfolio',
            type: 'reading',
            title: 'Building a Developer Portfolio: README, ADRs, and Case Studies',
            url: 'https://codepath.dev/formacao/portfolio',
            durationMinutes: 25,
          },
          {
            id: 'ch411-v-career',
            type: 'video',
            title: 'Career Skills: Communication, Feedback, and Teamwork',
            url: 'https://codepath.dev/formacao/career-skills',
            durationMinutes: 30,
          },
          {
            id: 'ch411-e-readme-adr',
            type: 'exercise',
            title: 'Write a Professional README and ADR for Your Project',
            url: 'https://codepath.dev/formacao/readme-adr-exercise',
            durationMinutes: 45,
          },
          {
            id: 'ch411-e-case-study',
            type: 'exercise',
            title: 'Write a Case Study and Post-Mortem for a Past Project',
            url: 'https://codepath.dev/formacao/case-study-exercise',
            durationMinutes: 40,
          },
        ],
      },
    ],
  },
] as const;
