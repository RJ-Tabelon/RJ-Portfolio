import CORECRM_1 from '@/assets/Projects/CoreCRM/dashboard.png';
import CORECRM_2 from '@/assets/Projects/CoreCRM/contacts.png';
import CORECRM_3 from '@/assets/Projects/CoreCRM/deals.png';
import CORECRM_4 from '@/assets/Projects/CoreCRM/tasks.png';
import CORECRM_5 from '@/assets/Projects/CoreCRM/signin.png';

import PICKLEPORTAL_1 from '@/assets/Projects/PicklePortal/homepage.png';
import PICKLEPORTAL_2 from '@/assets/Projects/PicklePortal/computervision.png';

import TETRIS_1 from '@/assets/Projects/Tetris/PlayingGame.png';
import TETRIS_2 from '@/assets/Projects/Tetris/GameOver.png';

import CHIMCHAT_1 from '@/assets/Projects/ChimChat/ui-ux.png';

import NOTEPANDA_1 from '@/assets/Projects/NotePanda/Home.png';

export type ProjectType = {
  id: string;
  name: string;
  description: string;
  githubLink?: string;
  websiteLink?: string;
  tech: string[];
  images: string[];
  bullets: string[];
};

export const projects: ProjectType[] = [
  {
    id: 'corecrm',
    name: 'CoreCRM',
    description:
      'A full-stack Customer Relationship Management (CRM) platform for managing contacts, deals, and tasks.',
    githubLink: 'https://github.com/RJ-Tabelon/CoreCRM',
    websiteLink: 'http://54.152.33.219',
    tech: [
      'AWS EC2',
      'Nginx',
      'PostgreSQL',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'JWT',
      'Axios',
      'Node.js',
      'Express.js',
      'Zod',
      'Jest',
      'Supertest',
      'Winston',
      'Morgan',
      'Helmet',
      'Arcjet',
      'TypeScript',
      'React',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Neon',
      'Drizzle ORM',
      'Docker Hub',
      'Git',
      'GitHub'
    ],
    images: [CORECRM_1, CORECRM_2, CORECRM_3, CORECRM_4, CORECRM_5],
    bullets: [
      'Architected and deployed a full-stack CRM with a single-origin production architecture, serving a React SPA through Nginx and reverse-proxying /api traffic to a Node/Express backend to eliminate CORS complexity and harden cookie-based authentication.',
      'Containerized the entire stack with multi-stage Docker builds and Compose-based dev/prod parity, enabling local Neon-backed development and cost-efficient single-instance AWS EC2 deployment.',
      'Implemented secure cookie-based authentication using HTTP-only JWTs with strict SameSite enforcement, Helmet security headers, role-aware authorization gates, and server-side ownership checks to prevent cross-user data access.',
      'Hardened public APIs against abuse using Arcjet, applying bot detection and sliding-window rate-limit policies to enforce request caps and block automated traffic.',
      'Designed a modular backend architecture (config, controllers, middleware, models, routes, services, utils, validations) with Zod-validated API boundaries and Drizzle-managed PostgreSQL schemas, supporting schema changes through versioned migrations.',
      'Built CRM primitives (contacts, deals, tasks) with relational integrity guarantees, including enforced task-to-entity linkage and server-side validation to prevent orphaned or inconsistent records.',
      'Implemented a kanban-style deals pipeline with drag-and-drop state transitions backed by validated API updates, ensuring UI actions map to consistent server-side state changes.',
      'Established production-grade observability on a single-host deployment using structured application logs (Winston), HTTP request logging (Morgan), and health endpoints to support request-level debugging without managed telemetry.',
      'Automated CI/CD pipelines with GitHub Actions to enforce backend linting, run integration tests, and publish Docker images, enabling repeatable image-based deployments.',
      'Built Jest + Supertest integration tests covering authentication and core CRUD workflows, publishing coverage artifacts for visibility into test completeness.'
    ]
  },
  {
    id: 'pickleportal',
    name: 'PicklePortal',
    description:
      'An IoT-powered court monitoring system that uses computer vision and sensors to track availability, queues, and live video for pickleball courts.',
    githubLink: 'https://github.com/RJ-Tabelon/PicklePortal',
    tech: [
      'ESP32',
      'Arduino',
      'C++',
      'Firebase RTDB',
      'Python',
      'Ultralytics YOLOv8',
      'LED',
      'LCD',
      'LDR',
      'Node.js',
      'Express.js',
      'TypeScript',
      'OpenCV',
      'NumPy',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Git',
      'GitHub'
    ],
    images: [PICKLEPORTAL_1, PICKLEPORTAL_2],
    bullets: [
      'Designed and built an end-to-end IoT pipeline connecting ESP32 camera nodes, a Node.js backend, a long-lived Python YOLOv8 worker, and Firebase RTDB to track pickleball court occupancy and queues in real time.',
      'Implemented a zero-copy image ingestion path by streaming JPEG frames from ESP32 devices into a persistent Python worker via stdin/stdout, avoiding per-request process startup and reducing detection latency under continuous load.',
      'Architected Firebase Realtime Database as the system’s shared state layer, enabling eventual-consistent synchronization across embedded devices, backend inference, and a React dashboard without direct coupling.',
      'Built backend preview and caching mechanisms that store the latest annotated frame in memory and expose low-latency inspection endpoints for debugging vision output in production-like scenarios.',
      'Developed a React + TypeScript dashboard that subscribes to real-time database updates and derives court status states (available / occupied / queued), ensuring UI state remains consistent with hardware-reported signals.',
      'Engineered ESP32 camera firmware with two operating modes: periodic JPEG uploads for ML inference and an MJPEG live stream for real-time viewing, switching modes to manage bandwidth and ESP32 resource limits while improving debugging visibility.',
      'Integrated physical queue sensors (photoresistors) with cloud state updates, translating noisy analog readings into stable queue counts and driving LEDs/LCDs from the same authoritative data source as the web UI.'
    ]
  },
  {
    id: 'tetris',
    name: 'Tetris Game Engine',
    description:
      'A C++ desktop Tetris game featuring a deterministic game loop, collision-safe gameplay logic, and a clean modular engine design.',
    githubLink: 'https://github.com/RJ-Tabelon/Tetris',
    tech: ['C++', 'raylib', 'GNU Make'],
    images: [TETRIS_1, TETRIS_2],
    bullets: [
      'Implemented a real-time Tetris game engine in C++, designing a fixed-step game loop with frame-rate–independent gravity, deterministic input handling, and centralized state management running at 60 FPS.',
      'Built collision-safe tetromino movement and rotation using a 20×10 integer grid, enforcing constant-time boundary checks, lock conditions, and row-clear compaction to guarantee correctness across all piece orientations.',
      'Designed modular engine components (Game, Grid, Block) with clear ownership boundaries, enabling isolated reasoning about rendering, gameplay rules, and data flow while supporting audio playback and next-piece previews without frame drops.'
    ]
  },
  {
    id: 'chimchat',
    name: 'ChimChat',
    description:
      'A real-time group chat application with persistent messaging and server-orchestrated AI commands for summarization and contextual Q&A.',
    githubLink: 'https://github.com/RJ-Tabelon/ChimChat',
    tech: [
      'Socket.IO',
      'Firebase Firestore',
      'Ollama',
      'TensorFlow.js',
      'Node.js',
      'Express.js',
      'JavaScript',
      'HTML',
      'CSS',
      'dotenv',
      'CORS',
      'Git',
      'GitHub'
    ],
    images: [CHIMCHAT_1],
    bullets: [
      'Designed and built a real-time group chat system using Socket.IO and Node.js, broadcasting messages to all connected clients while persisting chat history in Firebase Firestore to support reconnects and late joiners.',
      'Implemented server-side message replay by loading and emitting the last 10 persisted messages on client connect, maintaining consistent chat state without scanning unbounded history.',
      'Integrated command-driven AI workflows (`/summarize`, `/question`, `/environment`) by assembling Firestore context and optional sensor JSON, invoking a local Ollama LLM, and broadcasting responses back into the chat stream.',
      'Enforced client-side content safety by applying TensorFlow.js toxicity filtering before message emission, preventing harmful text from entering the real-time pipeline while preserving low-latency messaging.'
    ]
  },
  {
    id: 'notepanda',
    name: 'NotePanda',
    description:
      'A full-stack note-taking application with CRUD workflows, distributed rate limiting, and a responsive, production-ready UI.',
    githubLink: 'https://github.com/RJ-Tabelon/NotePanda',
    tech: [
      'Upstash Redis',
      'MongoDB',
      'Mongoose',
      'React',
      'React Router',
      'Vite',
      'Tailwind CSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'Axios',
      'JavaScript',
      'REST APIs',
      'Git',
      'GitHub'
    ],
    images: [NOTEPANDA_1],
    bullets: [
      'Designed and shipped a full-stack CRUD notes platform using React and Express with RESTful APIs and MongoDB persistence, enabling low-latency create/read/update/delete workflows across desktop and mobile breakpoints.',
      'Implemented distributed IP-based rate limiting with Upstash Redis (100 requests/minute), preventing API abuse while preserving stateless backend scaling characteristics.',
      'Architected a modular backend with controller–middleware separation, schema validation, and centralized error handling to improve reliability and reduce regression risk during feature iteration.',
      'Built a responsive, production-ready frontend with client-side routing, optimistic UI updates, and real-time toast feedback, improving perceived performance and user interaction clarity.'
    ]
  }
];
