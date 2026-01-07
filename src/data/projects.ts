import CORECRM_1 from '@/assets/Projects/CoreCRM/dashboard.png';
import CORECRM_2 from '@/assets/Projects/CoreCRM/contacts.png';

import PICKLEPORTAL_1 from '@/assets/Projects/PicklePortal/HomePage.png';

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
      'A full-stack CRM platform for managing contacts, deals, and tasks with secure authentication and role-based access.',
    githubLink: 'https://github.com/your-username/corecrm',
    websiteLink: 'https://corecrm.yourdomain.com',
    tech: [
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Docker',
      'Nginx',
      'AWS EC2'
    ],
    images: [CORECRM_1, CORECRM_2],
    bullets: [
      'Designed and built a production-ready CRM with authentication and protected routes',
      'Containerized frontend and backend using Docker and Docker Compose',
      'Deployed on a single AWS EC2 instance behind Nginx as a reverse proxy',
      'Implemented CI workflows for linting, testing, and build verification'
    ]
  },
  {
    id: 'pickleportal',
    name: 'PicklePortal',
    description:
      'An IoT-powered court monitoring system that tracks availability, queues, and live video for pickleball courts.',
    githubLink: 'https://github.com/your-username/pickleportal',
    tech: [
      'ESP32',
      'Firebase',
      'Node.js',
      'React',
      'WebSockets',
      'Computer Vision'
    ],
    images: [PICKLEPORTAL_1],
    bullets: [
      'Built a real-time monitoring system using ESP32 sensors and MJPEG video streaming',
      'Designed a live dashboard to visualize court usage and availability',
      'Implemented real-time updates using WebSockets and Firebase',
      'Integrated hardware, backend, and frontend systems into a cohesive platform'
    ]
  }
];
