import { useEffect } from 'react';
import type { ExperienceType } from '@/data/experience';

type Props = {
  exp: ExperienceType;
  onClose?: () => void;
};

const LargeExperienceCard = ({ exp, onClose }: Props) => {
  useEffect(() => {
    if (!onClose) return undefined;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const cardContent = (
    <article className='group relative overflow-hidden rounded-2xl border border-[#e7dccd] bg-[#FBF7F0]'>
      <div className='h-2 w-full bg-[#F5BFA3]' />

      <div className='relative p-6 sm:p-7'>
        <div className='pointer-events-none absolute -right-10 top-6 h-28 w-28 rotate-[12deg] rounded-2xl border border-[#81353B]/15 bg-white/30' />
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.35]'
          style={{
            backgroundImage:
              'radial-gradient(rgba(129,53,59,0.10) 1px, transparent 1px)',
            backgroundSize: '14px 14px'
          }}
        />

        <div className='relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
          <div className='flex items-start gap-4'>
            <div className='relative'>
              <div className='rotate-[-2deg] rounded-xl border border-[#e7dccd] bg-white p-3'>
                <img
                  src={exp.image}
                  alt={exp.company}
                  className='h-12 w-12 object-contain'
                />
              </div>

              <div className='pointer-events-none absolute -left-2 -top-2 h-5 w-10 rotate-[-18deg] rounded-md border border-[#d8cbbb] bg-white/50' />
            </div>

            <div>
              <h3 className='text-lg font-bold tracking-wide text-[#81353B] sm:text-xl'>
                {exp.role}
              </h3>
              <p className='mt-1 text-sm text-[#81353B]/70'>
                <span className='font-medium text-[#81353B]'>
                  {exp.company}
                </span>
                <span className='mx-2 text-[#81353B]/35'>•</span>
                <span>
                  {exp.startDate} – {exp.endDate}
                </span>
              </p>

              {exp.location && (
                <p className='mt-1 text-sm text-[#81353B]/60'>{exp.location}</p>
              )}
            </div>
          </div>

          <div className='sm:text-right'>
            <div className='inline-flex items-center gap-2 rounded-full border border-[#e7dccd] bg-white/60 px-4 py-2 text-xs font-semibold tracking-wide text-[#81353B]'>
              <span className='h-2 w-2 rounded-full bg-[#81353B]/55' />
              Experience
            </div>
          </div>
        </div>

        <div className='relative mt-6 space-y-3 text-[15px] leading-relaxed text-[#2b2b2b]/80'>
          {exp.bullets.map((bullet: string, i: number) => (
            <div key={i} className='flex gap-3'>
              <span className='mt-[8px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#81353B]/65' />
              <p>{bullet}</p>
            </div>
          ))}
        </div>

        <div className='relative mt-6 flex flex-wrap gap-2'>
          {exp.tech.map((tech: string, i: number) => (
            <span
              key={i}
              className='rounded-full border border-[#e7dccd] bg-[#F5BFA3]/35 px-3 py-1 text-xs font-semibold tracking-wide text-[#81353B]'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='pointer-events-none relative mt-7 h-3 opacity-70'>
          <div
            className='h-full w-full'
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(227,218,203,0.0) 0px, rgba(227,218,203,0.0) 11px, rgba(227,218,203,0.8) 11px, rgba(227,218,203,0.8) 13px)'
            }}
          />
        </div>
      </div>
    </article>
  );

  if (!onClose) return cardContent;

  return (
    <div
      className='fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/45 p-4 sm:p-6'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
    >
      <div
        className='relative mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#e7dccd] bg-[#FBF7F0] shadow-2xl shadow-[#81353B]/20'
        onClick={e => e.stopPropagation()}
      >
        <div className='flex items-center justify-end bg-white/70 px-4 py-3 backdrop-blur-sm'>
          <button
            type='button'
            aria-label='Close experience details'
            onClick={onClose}
            className='flex items-center gap-2 rounded-full bg-[#81353B] px-3 py-1 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6b2b31] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#81353B] focus:ring-offset-white'
          >
            <span className='text-base leading-none' aria-hidden='true'>
              ×
            </span>
            Close
          </button>
        </div>

        {cardContent}
      </div>
    </div>
  );
};

export default LargeExperienceCard;
