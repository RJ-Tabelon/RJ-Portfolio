import { useEffect, useRef, useState, useCallback } from 'react';
import type { ExperienceType } from '@/data/experience';
import { Calendar, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  exp: ExperienceType;
  onClose?: () => void;
};

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(' ');
}

const Section = ({
  title,
  children,
  className
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cx('mt-5', className)}>
      <h4 className='text-xs sm:text-sm font-semibold tracking-wider text-[#81353B]/80 uppercase'>
        {title}
      </h4>
      <div className='mt-2'>{children}</div>
    </section>
  );
};

const TechPills = ({ tech }: { tech: string[] }) => {
  return (
    <div className='flex flex-wrap gap-2'>
      {tech.map(t => (
        <span
          key={t}
          className=' bg-[#F5BFA3]/40 px-3 py-1 text-[10px] sm:text-xs font-semibold text-[#81353B]'
        >
          {t}
        </span>
      ))}
    </div>
  );
};

const BulletList = ({ bullets }: { bullets: string[] }) => {
  return (
    <ul className='space-y-1 sm:space-y-2 text-xs sm:text-sm leading-relaxed text-gray-700'>
      {bullets.map((b, i) => (
        <li key={i} className='flex gap-3'>
          <span className='mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#81353B]' />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
};

const ExperienceContent = ({ exp }: { exp: ExperienceType }) => {
  const images = Array.isArray(exp.images) ? exp.images : [];
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
    <article className='relative'>
      <div className='p-6 sm:p-8'>
        {/* MOBILE VERSION (below sm) */}
        <div className='flex flex-col items-start gap-3 sm:hidden'>
          {/* TOP: LOGO */}
          <div className='w-full h-full flex justify-center border border-color bg-white'>
            <img
              src={exp.logoLong}
              alt={exp.company}
              className='object-contain opacity-90  '
              loading='lazy'
            />
          </div>

          {/* BELOW: TEXT COLUMN */}
          <div className='flex flex-col gap-1   '>
            {/* ROLE */}
            <h3 className='text-md font-bold leading-tight tracking-wide text-[#81353B]'>
              {exp.role}
            </h3>

            {/* COMPANY + TYPE */}
            <p className='text-sm font-semibold text-[#81353B]/80'>
              {exp.company}
              <span className='mx-2 text-[#81353B]/30'>•</span>
              <span className='font-medium'>{exp.type}</span>
            </p>

            {/* DATE + LOCATION */}
            <div className='text-xs flex flex-col gap-1 text-[#81353B]/70'>
              <span className='flex items-center gap-2'>
                <Calendar className='h-3.5 w-3.5' />
                {exp.startDate} – {exp.endDate}
              </span>

              {exp.location && (
                <span className='flex items-center gap-2'>
                  <MapPin className='h-3.5 w-3.5' />
                  {exp.location}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* DESKTOP VERSION (sm and above) */}
        <div className='hidden sm:flex items-center gap-5'>
          {/* LEFT: LOGO */}
          <div className='h-23 shrink-0 border border-color bg-white'>
            <img
              src={exp.logoShort}
              alt={exp.company}
              className='h-full object-contain'
              loading='lazy'
            />
          </div>

          {/* RIGHT: TEXT COLUMN */}
          <div className='flex flex-col gap-1'>
            {/* ROLE */}
            <h3 className='text-lg font-bold leading-tight tracking-wide text-[#81353B]'>
              {exp.role}
            </h3>

            {/* COMPANY + TYPE */}
            <p className='text-md font-semibold text-[#81353B]/80'>
              {exp.company}
              <span className='mx-2 text-[#81353B]/30'>•</span>
              <span className='font-medium'>{exp.type}</span>
            </p>

            {/* DATE + LOCATION */}
            <div className='text-sm flex flex-col gap-1 text-[#81353B]/70'>
              <span className='flex items-center gap-2'>
                <Calendar className='h-3.5 w-3.5' />
                {exp.startDate} – {exp.endDate}
              </span>

              {exp.location && (
                <span className='flex items-center gap-2'>
                  <MapPin className='h-3.5 w-3.5' />
                  {exp.location}
                </span>
              )}
            </div>
          </div>
        </div>

        <Section title='Highlights'>
          <BulletList bullets={exp.bullets} />
        </Section>

        {exp.tech?.length ? (
          <Section title='Technologies Used'>
            <TechPills tech={exp.tech} />
          </Section>
        ) : null}

        {images.length > 0 && (
          <Section title='Images'>
            <div className='relative'>
              <img
                src={images[index]}
                alt={`${exp.company} screenshot ${index + 1}`}
                className='w-full object-contain border border-color'
                loading='lazy'
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
      </div>
    </article>
  );
};

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
      className='fixed inset-0 z-50 bg-black/50 py-[2vh] px-6 sm:py-[5vh]'
      onMouseDown={onClose}
      role='presentation'
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
          aria-label='Close'
          className='absolute right-3.5 top-3.5 sm:right-5 sm:top-5 z-10 text-[#81353B] transition-transform x-button border border-color'
        >
          <X className='h-6 w-6' />
        </button>

        <div className='max-h-[96vh] sm:max-h-[90vh] overflow-y-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

const LargeExperienceCard = ({ exp, onClose }: Props) => {
  const body = (
    <div className='border border-color bg-experiencecard'>
      <ExperienceContent exp={exp} />
    </div>
  );

  if (!onClose) return body;

  return <ModalShell onClose={onClose}>{body}</ModalShell>;
};

export default LargeExperienceCard;
