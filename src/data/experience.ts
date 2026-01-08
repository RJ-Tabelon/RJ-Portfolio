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

export type ExperienceType = {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  type: 'Internship' | 'Full-time' | 'Contract' | 'Research';
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
      'Implemented real-time therapy note-taking interfaces using controlled inputs and debounced state updates, enabling in-session documentation and reducing post-session administrative overhead for clinicians.',
      'Redesigned dashboard navigation and data hierarchy using task-based grouping and progressive disclosure, lowering cognitive load and speeding access to clinically relevant session data.',
      'Validated edge cases and failure scenarios through live-session testing with clinicians and product stakeholders, identifying and resolving issues before they impacted production usage.'
    ],

    images: [AKIOAI_1, AKIOAI_2, AKIOAI_3, AKIOAI_4]
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
  }
];
