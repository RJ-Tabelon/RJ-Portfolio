import React, { useMemo } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProjectType } from '@/data/projects';
import PeachWashi from '@/assets/PeachWashi.png';

interface MiniProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

const MiniProjectCard: React.FC<MiniProjectCardProps> = ({
  project,
  onClick
}) => {
  const randomRotation = useMemo(() => {
    const hash = project.id
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (hash % 20) / 10 - 1;
  }, [project.id]);

  return (
    <button
      onClick={onClick}
      className='group relative w-full text-left paper-card py-6 px-13
                 bg-primary border-1 border-[#ddcdb0]
                 scrap-shadow transition-all duration-300
                 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-[#81353B]/40
                 focus:outline-none focus:ring-2 focus:ring-[#81353B] focus:ring-offset-2'
      style={{ transform: `rotate(${randomRotation}deg)` }}
      aria-label={`View details for ${project.name}`}
    >
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute left-8  top-0 h-full w-[2px] bg-[#d47a7a]/70' />
        <div
          className='absolute inset-0 opacity-[0.95]'
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent 0px, transparent 28px, rgba(129,53,59,0.12) 28px, rgba(129,53,59,0.12) 29px)'
          }}
        />
      </div>
      <img
        src={PeachWashi}
        className='absolute -top-2 -right-7 w-32 h-auto object-contain
             pointer-events-none select-none
             rotate-[25deg]'
        aria-hidden='true'
      />

      {/* Project name */}
      <h3 className='text-lg md:text-xl font-semibold text-primary transition-colors'>
        {project.name}
      </h3>

      {/* Description */}
      <p className='text-xs md:text-sm text-gray-700 mb-2 md:mb-3'>
        {project.description}
      </p>

      {/* Links */}
      <div className='flex gap-4 text-xs md:text-sm font-medium mb-3 md:mb-4'>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            onClick={e => e.stopPropagation()}
            className='inline-flex items-center gap-1.5 text-[#5f81cb] border-b-2 border-transparent hover:border-[#5f81cb]'
          >
            <span>GitHub</span>
            <ExternalLink
              className='w-3.5 h-3.5'
              strokeWidth={2.5}
              aria-hidden='true'
            />
          </a>
        )}

        {project.websiteLink && (
          <a
            href={project.websiteLink}
            target='_blank'
            rel='noopener noreferrer'
            onClick={e => e.stopPropagation()}
            className='inline-flex items-center gap-1 text-[#5f81cb] border-b-2 border-transparent hover:border-[#5f81cb]'
          >
            <span>Live Site</span>
            <ExternalLink
              className='w-3.5 h-3.5'
              strokeWidth={2.5}
              aria-hidden='true'
            />
          </a>
        )}
      </div>

      {/* Tech stack */}
      <div className='flex flex-wrap gap-2 mb-3 md:mb-4'>
        {project.tech.slice(0, 6).map((tech, index) => (
          <span key={index} className='tech-chip'>
            {tech}
          </span>
        ))}
        {project.tech.length > 6 && (
          <span
            className='tech-chip'
            aria-label={`and ${project.tech.length - 6} more`}
          >
            +{project.tech.length - 6} more
          </span>
        )}
      </div>

      {/* View more CTA */}
      <div>
        <div className='text-sm view-more md:border-b-2'>
          <span>View more</span>
          <ArrowUpRight className='h-4 w-4' />
        </div>
      </div>
    </button>
  );
};

export default MiniProjectCard;
