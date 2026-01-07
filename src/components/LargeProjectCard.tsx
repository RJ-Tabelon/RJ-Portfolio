import { useEffect, useRef, useState, useCallback } from 'react';
import type { ProjectType } from '@/data/projects';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  project: ProjectType;
  onClose?: () => void;
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}

/* ---------- Shared UI primitives (mirrors Experience) ---------- */

const Section = ({
  title,
  children,
  className
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={cx('mt-5', className)}>
    <h4 className='text-xs sm:text-sm font-semibold tracking-wider text-[#81353B]/80 uppercase'>
      {title}
    </h4>
    <div className='mt-2'>{children}</div>
  </section>
);

const TechPills = ({ tech }: { tech: string[] }) => (
  <div className='flex flex-wrap gap-2'>
    {tech.map(t => (
      <span
        key={t}
        className='border border-color bg-[#F5BFA3]/40 px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#81353B]'
      >
        {t}
      </span>
    ))}
  </div>
);

const BulletList = ({ bullets }: { bullets: string[] }) => (
  <ul className='space-y-1 sm:space-y-2 text-xs sm:text-sm leading-relaxed text-gray-700'>
    {bullets.map((b, i) => (
      <li key={i} className='flex gap-3'>
        <span className='mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#81353B]' />
        <span>{b}</span>
      </li>
    ))}
  </ul>
);

/* ---------- Modal shell (identical to Experience) ---------- */

const ModalShell = ({
  onClose,
  children
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    requestAnimationFrame(() => dialogRef.current?.focus());
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className='fixed inset-0 z-50 bg-black/50 p-[2vh] sm:py-[10vh] sm:px-6'
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        role='dialog'
        aria-modal='true'
        tabIndex={-1}
        onMouseDown={e => e.stopPropagation()}
        className='relative mx-auto w-full max-w-3xl overflow-hidden bg-[#FBF7F0] outline-none'
      >
        <button
          onClick={onClose}
          className='absolute right-3.5 top-3.5 sm:right-5 sm:top-5 z-10 border border-color text-[#81353B] x-button'
        >
          <X className='h-6 w-6' />
        </button>

        <div className='max-h-[96vh] sm:max-h-[80vh] overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

/* ---------- Project content ---------- */

const ProjectContent = ({ project }: { project: ProjectType }) => {
  const images = Array.isArray(project.images) ? project.images : [];
  const tech = Array.isArray(project.tech) ? project.tech : [];
  const bullets = Array.isArray(project.bullets) ? project.bullets : [];

  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex(i => (i + 1) % images.length),
    [images.length]
  );
  const prev = useCallback(
    () => setIndex(i => (i - 1 + images.length) % images.length),
    [images.length]
  );

  return (
    <article className='relative p-6 sm:p-8'>
      <h3 className='text-lg sm:text-xl font-bold tracking-wide text-[#81353B]'>
        {project.name}
      </h3>

      <p className='mt-1 text-sm sm:text-base text-[#81353B]/80'>
        {project.description}
      </p>

      {bullets.length > 0 && (
        <Section title='Highlights'>
          <BulletList bullets={bullets} />
        </Section>
      )}

      {tech.length > 0 && (
        <Section title='Technologies Used'>
          <TechPills tech={tech} />
        </Section>
      )}

      {(project.githubLink || project.websiteLink) && (
        <Section title='Links'>
          <div className='flex flex-wrap gap-3'>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-[#5f81cb] border-b-2 border-transparent hover:border-[#5f81cb] text-sm md:text-base font-medium'
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
                className='inline-flex items-center gap-1 text-[#5f81cb] border-b-2 border-transparent hover:border-[#5f81cb] text-sm md:text-base font-medium'
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
        </Section>
      )}

      {images.length > 0 && (
        <Section title='Screenshots'>
          <div className='relative'>
            <img
              src={images[index]}
              className='w-full object-contain border border-color'
            />

            {images.length > 1 && (
              <div className='mt-3 flex items-center justify-center gap-3'>
                <button
                  onClick={prev}
                  className='carousel-button inline-flex items-center justify-center border border-color bg-white/80 px-2 py-1 text-[#81353B] hover:bg-[#fcefe7]'
                  aria-label='Previous screenshot'
                >
                  <ChevronLeft className='h-5 w-5' aria-hidden='true' />
                </button>
                <button
                  onClick={next}
                  className='carousel-button inline-flex items-center justify-center border border-color bg-white/80 px-2 py-1 text-[#81353B] hover:bg-[#fcefe7]'
                  aria-label='Next screenshot'
                >
                  <ChevronRight className='h-5 w-5' aria-hidden='true' />
                </button>
              </div>
            )}
          </div>
        </Section>
      )}
    </article>
  );
};

/* ---------- Export ---------- */

const LargeProjectCard = ({ project, onClose }: Props) => {
  const body = (
    <div className='border border-color bg-experiencecard'>
      <ProjectContent project={project} />
    </div>
  );

  if (!onClose) return body;
  return <ModalShell onClose={onClose}>{body}</ModalShell>;
};

export default LargeProjectCard;
