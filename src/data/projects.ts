import CORECRM_1 from '@/assets/Projects/CoreCRM/dashboard.png';
import CORECRM_2 from '@/assets/Projects/CoreCRM/contacts.png';
import CORECRM_3 from '@/assets/Projects/CoreCRM/deals.png';
import CORECRM_4 from '@/assets/Projects/CoreCRM/tasks.png';
import CORECRM_5 from '@/assets/Projects/CoreCRM/signin.png';

import PICKLEPORTAL_1 from '@/assets/Projects/PicklePortal/HomePage.png';
import PICKLEPORTAL_2 from '@/assets/Projects/PicklePortal/ComputerVision.png';


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
  }
];
