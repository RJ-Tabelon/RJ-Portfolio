import AKIOAI_LONG from '@/assets/Experience/AkioAI/akioai_long.png';
import AKIOAI_SHORT from '@/assets/Experience/AkioAI/akioai_short.png';
import AKIOAI_1 from '@/assets/Experience/AkioAI/akioai_1.png';
import AKIOAI_2 from '@/assets/Experience/AkioAI/akioai_2.png';
import AKIOAI_3 from '@/assets/Experience/AkioAI/akioai_3.png';
import AKIOAI_4 from '@/assets/Experience/AkioAI/akioai_4.png';

import EDUAFRICA_LONG from '@/assets/Experience/EDUAfrica/eduafrica_long.png';
import EDUAFRICA_SHORT from '@/assets/Experience/EDUAfrica/eduafrica_short.png';
import EDUAFRICA_1 from '@/assets/Experience/EDUAfrica/eduafrica_1.png';
import EDUAFRICA_2 from '@/assets/Experience/EDUAfrica/eduafrica_2.png';
import EDUAFRICA_3 from '@/assets/Experience/EDUAfrica/eduafrica_3.png';
import EDUAFRICA_4 from '@/assets/Experience/EDUAfrica/eduafrica_4.png';
import EDUAFRICA_5 from '@/assets/Experience/EDUAfrica/eduafrica_5.png';
import EDUAFRICA_6 from '@/assets/Experience/EDUAfrica/eduafrica_6.png';

import SWT_LONG from '@/assets/Experience/SWT/swt_long.png';
import SWT_SHORT from '@/assets/Experience/SWT/swt_short.png';
import SWT_1 from '@/assets/Experience/SWT/swt_1.png';

import DSSD_LONG from '@/assets/Experience/DSSD/dssd_long.png';
import DSSD_SHORT from '@/assets/Experience/DSSD/dssd_short.png';
import DSSD_1 from '@/assets/Experience/DSSD/dssd_1.png';
import DSSD_2 from '@/assets/Experience/DSSD/dssd_2.png';
import DSSD_3 from '@/assets/Experience/DSSD/dssd_3.png';

export type ExperienceType = {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  type: 'Internship' | 'Leadership & Involvement';
  logoLong: string;
  logoShort: string;
  tech: string[];
  bullets: string[];
  images?: string[];
};

export const experiences: ExperienceType[] = [
  {
    id: 'akioai',
    company: 'AKIO AI',
    role: 'Software Engineering Intern',
    location: 'Gainesville, FL',
    startDate: 'Oct 2025',
    endDate: 'Present',
    type: 'Internship',
    logoLong: AKIOAI_LONG,
    logoShort: AKIOAI_SHORT,
    tech: [
      'JavaScript',
      'React',
      'React Router',
      'Tailwind CSS',
      'Recharts',
      'Figma',
      'Git',
      'GitHub'
    ],
    bullets: [
      'Architected and shipped a production React dashboard using modular, composable components, supporting live therapy sessions and enabling regular feature releases without introducing critical UI regressions.',
      'Translated Figma workflows into reusable, parameterized React + Tailwind components, reducing UI duplication and accelerating feature development.',
      'Built a speech-therapy analytics dashboard with Recharts, using client-side aggregation and memoization to efficiently visualize speech events generated during gameplay.',
      'Engineered a real-time therapy note-taking system that records live session conversations and converts them into structured notes, supporting in-session documentation and minimizing post-session overhead.',
      'Redesigned dashboard navigation and data hierarchy using task-based grouping and progressive disclosure, lowering cognitive load and speeding access to clinically relevant session data.',
      'Validated edge cases and failure scenarios through live-session testing with clinicians and product stakeholders, identifying and resolving issues before they impacted production usage.'
    ],

    images: [AKIOAI_1, AKIOAI_2, AKIOAI_3, AKIOAI_4]
  },
  {
    id: 'dssd',
    company: 'Data Science for Sustainable Development (DSSD)',
    role: 'Lead Frontend Engineer',
    location: 'Gainesville, FL',
    startDate: 'Aug 2024',
    endDate: 'Jul 2025',
    type: 'Leadership & Involvement',
    logoLong: DSSD_LONG,
    logoShort: DSSD_SHORT,
    tech: [
      'JavaScript',
      'React',
      'Leaflet',
      'Tailwind CSS',
      'Recharts',
      'REST API',
      'Figma',
      'Git',
      'GitHub'
    ],
    bullets: [
      'Led an 11-member frontend team to build an interactive geospatial dashboard visualizing environmental hazard sites, enabling spatial analysis via map-based exploration and dynamic overlays.',
      'Architected a React + Leaflet mapping pipeline that computes demographic and environmental metrics within user-defined buffer ranges around input locations.',
      'Designed client-side data flows to fetch, aggregate, and visualize multi-source environmental and census data on demand, supporting comparative analysis across varying buffer sizes without full page reloads.',
      'Built interactive charting and reporting workflows that convert map-based analysis results into downloadable PDF summaries for use in academic research and policy analysis.',
      'Enforced frontend engineering standards through code reviews, testing requirements, and documentation, improving long-term maintainability and reducing regression risk as the dataset and feature surface expanded.',
      'Collaborated directly with a university geography research lead to translate research requirements into technical constraints, balancing accuracy, performance, and usability for both educational and research users.'
    ],
    images: [DSSD_1, DSSD_2, DSSD_3]
  },
  {
    id: 'edu-africa',
    company: 'EDU Africa',
    role: 'Software Engineering Intern',
    location: 'Cape Town, South Africa',
    startDate: 'May 2025',
    endDate: 'Jun 2025',
    type: 'Internship',
    logoLong: EDUAFRICA_LONG,
    logoShort: EDUAFRICA_SHORT,
    tech: [
      'JavaScript',
      'MongoDB',
      'Express.js',
      'Node.js',
      'React',
      'Tailwind CSS',
      'REST API',
      'Figma',
      'Jira',
      'Git',
      'GitHub'
    ],
    bullets: [
      'Developed a role-based web platform to digitize public-sector housing audits, replacing paper workflows with authenticated CRUD pipelines and audit-trail logging across 30 municipalities.',
      'Implemented server-side pagination and filtered query paths to operate over a 600K+ record dataset, keeping per-session data loads to hundreds of records.',
      'Architected paginated REST APIs and lazy-loaded React views, enabling fast browse and filter workflows without full dataset fetches.',
      'Built client-side aggregation pipelines and interactive visualizations to summarize demographic, regional, and wait-time data, enabling stakeholders to identify allocation bottlenecks within a single consolidated dashboard.',
      'Designed the complete website in Figma, defining end-to-end user flows and interaction patterns across all core pages.',
      'Implemented modular React + Tailwind components, reducing UI duplication and lowering regression risk during feature expansion.',
      'Optimized frontend performance through responsive layout constraints, asset minimization, and deferred loading to preserve usability on low-end devices and unstable network connections.',
      'Owned end-to-end project execution by defining technical scope, decomposing features into Jira-tracked tasks, and enforcing sprint-level delivery milestones to ship a production-ready system.',
      'Ran iterative usability testing with 22 stakeholders and translated qualitative feedback into navigation and data-flow refactors across 5 sprint cycles, reducing friction across core audit workflows.'
    ],

    images: [
      EDUAFRICA_1,
      EDUAFRICA_2,
      EDUAFRICA_3,
      EDUAFRICA_4,
      EDUAFRICA_5,
      EDUAFRICA_6
    ]
  },
  {
    id: 'swt',
    company: 'Society of Asian Scientists and Engineers (SASE)',
    role: 'Lead Backend Engineer',
    location: 'Gainesville, FL',
    startDate: 'Sep 2025',
    endDate: 'Present',
    type: 'Leadership & Involvement',
    logoLong: SWT_LONG,
    logoShort: SWT_SHORT,
    tech: [
      'TypeScript',
      'Vinxi',
      'Hono',
      'Bun',
      'SQLite',
      'Turso',
      'Drizzle',
      'Vercel',
      'REST API',
      'Docker',
      'Git',
      'GitHub'
    ],
    bullets: [
      'Led a 9-engineer backend Scrum team for the maintenance of the UF SASE website, defining sprint scope and enforcing clear service ownership.',
      'Ran weekly sprint planning and reviews, decomposing features into executable tasks to support reliable delivery on a consistent 2-week release cadence.',
      'Reviewed pull requests to enforce code quality, correctness, and consistency before production releases.',
      'Designed and implemented an admin-gated data refresh pipeline that ingests LinkedIn profiles via a persistent MCP client and atomically upserts normalized alumni records, enabling one-click synchronization across all users without per-request reconnections.',
      'Built a resilient profile-parsing layer that normalizes inconsistent third-party data (current role, past companies) using defensive type guards, fallbacks, and deduplication logic to maintain data integrity under partial or malformed inputs.',
      'Implemented idempotent, conflict-safe database writes using primary-key upserts and field-level merge logic, ensuring refreshes are repeatable and do not overwrite higher-quality existing data during batch updates.',
      'Engineered end-to-end refresh observability by tracking per-user update, skip, and error states and surfacing structured failure reports in the admin UI, enabling rapid debugging of third-party ingestion failures at scale.',
      'Reduced ingestion latency and connection overhead by reusing a single MCP session with bounded retries and exponential backoff, preventing cascading failures from transient LinkedIn timeouts.',
      'Integrated a strongly-typed API boundary with schema validation on both client and server, preventing invalid refresh responses from reaching the UI and eliminating an entire class of runtime data errors.'
    ],
    images: [SWT_1]
  }
];
