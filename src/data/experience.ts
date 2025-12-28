import AKIOAI1 from '@/assets/Experience/akioai1.png';
import EDUAFRICA from '@/assets/Experience/eduafrica.png';

export type ExperienceType = {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  type: 'Internship' | 'Full-time' | 'Contract' | 'Research';
  image: string;
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
    image: AKIOAI1,
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
    image: EDUAFRICA,
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
    image: AKIOAI1,
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
    image: AKIOAI1,
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
    image: AKIOAI1,
    tech: ['Python', 'Machine Learning', 'Data Visualization', 'GIS'],
    bullets: [
      'Developed a wildfire risk analysis platform using real-world environmental data',
      'Applied machine learning techniques to identify high-risk fire zones',
      'Visualized geospatial data to improve interpretability for non-technical users',
      'Focused on translating complex data into actionable insights for public safety'
    ]
  }
];
