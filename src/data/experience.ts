import AKIOAI_LONG from '@/assets/Experience/AkioAI/akioai_long.png';
import AKIOAI_SHORT from '@/assets/Experience/AkioAI/akioai_short.png';
import EDUAFRICA_LONG from '@/assets/Experience/EDUAfrica/eduafrica_long.png';
import EDUAFRICA_SHORT from '@/assets/Experience/EDUAfrica/eduafrica_short.png';

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
};

export const experiences: ExperienceType[] = [
  {
    id: 'akioai',
    company: 'AKIO AI',
    role: 'Software Engineering Intern',
    location: 'Remote',
    startDate: 'Oct 2025',
    endDate: 'Present',
    type: 'Internship',
    logoLong: AKIOAI_LONG,
    logoShort: AKIOAI_SHORT,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Node.js'],
    bullets: [
      'Designed and built therapist and parent dashboards used in live therapy sessions',
      'Translated Figma prototypes into reusable React components with Tailwind CSS',
      'Implemented interactive charts, conversation transcripts, and real-time note-taking tools',
      'Collaborated cross-functionally to improve usability and therapist workflows'
    ]
  },
  {
    id: 'edu-africa',
    company: 'EDU Africa',
    role: 'Software Engineering Intern',
    location: 'Cape Town, South Africa',
    startDate: 'May 2024',
    endDate: 'Jul 2024',
    type: 'Internship',
    logoLong: EDUAFRICA_LONG,
    logoShort: EDUAFRICA_SHORT,
    tech: ['Python', 'Data Analysis', 'Geospatial Data', 'Research'],
    bullets: [
      'Developed data-driven tools to analyze environmental and community impact datasets',
      'Worked with geospatial and real-world data to support sustainability research initiatives',
      'Collaborated with international teams to translate technical findings into actionable insights',
      'Presented results to stakeholders, emphasizing clarity and real-world impact'
    ]
  },
  {
    id: 'pickleportal',
    company: 'PicklePortal',
    role: 'Full-Stack & IoT Developer',
    location: 'Gainesville, FL',
    startDate: 'Jan 2025',
    endDate: 'Present',
    type: 'Research',
    logoShort: AKIOAI_SHORT,
    logoLong: AKIOAI_LONG,
    tech: [
      'ESP32',
      'Firebase',
      'Node.js',
      'React',
      'WebSockets',
      'Computer Vision'
    ],
    bullets: [
      'Built a real-time court monitoring system using ESP32 sensors and live MJPEG video streaming',
      'Designed a full-stack dashboard to visualize court usage, queues, and availability',
      'Implemented real-time updates using WebSockets and Firebase',
      'Integrated hardware, backend, and frontend systems into a cohesive production-ready platform'
    ]
  },
  {
    id: 'sase',
    company: 'UF SASE',
    role: 'Director of Technology',
    location: 'University of Florida',
    startDate: 'Aug 2024',
    endDate: 'Present',
    type: 'Contract',
    logoShort: AKIOAI_SHORT,
    logoLong: AKIOAI_LONG,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'CI/CD'],
    bullets: [
      'Led development of internal tools and public-facing websites for student and alumni engagement',
      'Built scalable dashboards to support hackathon and organization operations',
      'Collaborated with cross-functional leadership to align technical solutions with organizational goals',
      'Mentored developers and enforced clean, maintainable frontend architecture'
    ]
  },
  {
    id: 'firefinder',
    company: 'FireFinder',
    role: 'Software Engineer',
    location: 'Remote',
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    type: 'Research',
    logoShort: AKIOAI_SHORT,
    logoLong: AKIOAI_LONG,
    tech: ['Python', 'Machine Learning', 'Data Visualization', 'GIS'],
    bullets: [
      'Developed a wildfire risk analysis platform using real-world environmental data',
      'Applied machine learning techniques to identify high-risk fire zones',
      'Visualized geospatial data to improve interpretability for non-technical users',
      'Focused on translating complex data into actionable insights for public safety'
    ]
  }
];
