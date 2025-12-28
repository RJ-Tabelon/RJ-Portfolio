import AKIOAI1 from '@/assets/Experience/akioai1.png';

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
  }
];
