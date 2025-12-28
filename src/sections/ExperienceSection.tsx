import { useEffect, useMemo, useRef, useState } from 'react';
import { experiences } from '@/data/experience';
import type { ExperienceType } from '@/data/experience';
import MiniExperienceCard from '@/components/MiniExperienceCard';
import LargeExperienceCard from '@/components/LargeExperienceCard';

const monthMap: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11
};

const toValue = (label: string) => {
  if (label === 'Present') return Number.POSITIVE_INFINITY;
  const [month, year] = label.split(' ');
  const m = monthMap[month as keyof typeof monthMap] ?? 0;
  const y = Number(year) || 0;
  return y * 12 + m;
};

const buildCurvePath = (count: number) => {
  // one "curve segment" per experience
  if (count <= 0) return '';

  const startX = 90;
  const leftCtrlX = 25;
  const rightCtrlX = 155;

  const step = 100 / count;

  let d = `M ${startX} 0`;
  for (let i = 0; i < count; i += 1) {
    const y0 = i * step;
    const y1 = (i + 1) * step;
    const ctrlY = (y0 + y1) / 2;

    // alternate which side the "hill" bulges to
    const ctrlX = i % 2 === 0 ? leftCtrlX : rightCtrlX;

    d += ` Q ${ctrlX} ${ctrlY}, ${startX} ${y1}`;
  }
  return d;
};

const SideImage = ({
  exp,
  side
}: {
  exp: ExperienceType;
  side: 'left' | 'right';
}) => {
  const pushTowardLine = side === 'left' ? '-translate-x-20' : 'translate-x-20';
  const pad = side === 'left' ? 'pr-1 justify-end' : 'pl-1 justify-start';

  return (
    <div className={`w-full max-w-[360px] ${pad} relative flex items-center`}>
      <div
        className={`${pushTowardLine} relative inline-flex items-center justify-center border border-color bg-white z-10 opacity-85`}
      >
        <img
          src={exp.image}
          alt={exp.company}
          loading='lazy'
          className='max-h-16 w-auto  object-cover'
        />
        <div className='pointer-events-none absolute inset-0 mix-blend-overlay' />
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceType | null>(null);
  const [selectedType, setSelectedType] = useState<
    ExperienceType['type'] | 'All'
  >('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement | null>(null);

  const typeOptions = useMemo(
    () => ['All', ...Array.from(new Set(experiences.map(exp => exp.type)))],
    []
  );

  const sortedExperiences = useMemo(
    () =>
      [...experiences].sort((a, b) => {
        const startDiff = toValue(b.startDate) - toValue(a.startDate);
        if (startDiff !== 0) return startDiff;
        return toValue(b.endDate) - toValue(a.endDate);
      }),
    []
  );

  const filteredExperiences = useMemo(
    () =>
      sortedExperiences.filter(exp =>
        selectedType === 'All' ? true : exp.type === selectedType
      ),
    [selectedType, sortedExperiences]
  );

  const curvePath = useMemo(
    () => buildCurvePath(filteredExperiences.length),
    [filteredExperiences.length]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFilterOpen(false);
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelectType = (value: ExperienceType['type'] | 'All') => {
    setSelectedType(value);
    setIsFilterOpen(false);
  };

  return (
    <section className='w-full bg-lightpeach px-6 py-16'>
      <div className='mx-auto max-w-[1200px]'>
        {/* header */}
        <div className='mx-auto max-w-[980px]'>
          <div className='flex flex-col items-center gap-4 text-center'>
            <h2 className='text-3xl font-extrabold tracking-wide text-[#81353B] sm:text-4xl'>
              My Experience
            </h2>

            <div ref={filterRef} className='relative w-full max-w-md'>
              <button
                type='button'
                aria-haspopup='listbox'
                aria-expanded={isFilterOpen}
                onClick={() => setIsFilterOpen(prev => !prev)}
                className='flex w-full items-center justify-between  border-2 border-color bg-primary px-6 py-3 text-sm font-semibold text-[#81353B] transition hover:border-[#81353B] focus:outline-none'
              >
                <div className='flex items-center gap-3'>
                  <span className='text-[#81353B]/70'>Filter:</span>
                  <span className=' bg-[#F5BFA3]/40 px-3 py-1 text-[#81353B]'>
                    {selectedType}
                  </span>
                </div>
                <svg
                  aria-hidden='true'
                  viewBox='0 0 24 24'
                  className={`h-5 w-5 text-[#81353B] transition-transform duration-200 ${
                    isFilterOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    fill='currentColor'
                    d='M6.3 8.3a1 1 0 0 1 1.4 0L12 12.6l4.3-4.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 0-1.4Z'
                  />
                </svg>
              </button>

              {isFilterOpen && (
                <div
                  role='listbox'
                  aria-label='Filter experiences by type'
                  className='absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden border-2 border-color bg-[#FBF7F0]'
                >
                  {typeOptions.map(option => {
                    const active = option === selectedType;
                    return (
                      <button
                        key={option}
                        role='option'
                        aria-selected={active}
                        onClick={() =>
                          handleSelectType(
                            option as ExperienceType['type'] | 'All'
                          )
                        }
                        className={`flex w-full items-center justify-between border-b border-[#e7dccd]/50 px-6 py-3 text-left text-sm font-semibold transition last:border-b-0 hover:bg-[#F5BFA3]/30 ${
                          active
                            ? 'bg-[#F5BFA3]/40 text-[#6b2b31]'
                            : 'text-[#81353B]'
                        }`}
                      >
                        <span>{option}</span>
                        {active && (
                          <svg
                            aria-hidden='true'
                            viewBox='0 0 24 24'
                            className='h-5 w-5 text-[#81353B]'
                          >
                            <path
                              fill='currentColor'
                              d='M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'
                            />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* timeline */}
          <div className='relative mt-12'>
            {/* CENTER CURVED LINE (one curve per experience) */}
            <svg
              className='pointer-events-none absolute left-1/2 top-0 hidden h-full w-[180px] -translate-x-1/2 md:block'
              preserveAspectRatio='none'
              viewBox='0 0 180 100'
            >
              {!!curvePath && (
                <path
                  d={curvePath}
                  stroke='#81353B'
                  strokeWidth='4'
                  fill='none'
                  vectorEffect='non-scaling-stroke'
                  strokeLinecap='round'
                  opacity='0.7'
                />
              )}
            </svg>

            {/* MOBILE (stacked) */}
            <div className='space-y-14 md:hidden'>
              {filteredExperiences.map((exp: ExperienceType, idx: number) => (
                <div key={exp.id} className='relative'>
                  <MiniExperienceCard
                    exp={exp}
                    onClick={() => setSelectedExp(exp)}
                    index={idx}
                  />
                </div>
              ))}
            </div>

            {/* DESKTOP (place cards on INNER side of each curve, not the "hill" side) */}
            <div className='hidden md:block'>
              <div className='space-y-20'>
                {filteredExperiences.map((exp: ExperienceType, idx: number) => {
                  // Our curve alternates "hill" left (idx even) then "hill" right (idx odd).
                  // Inner side is the opposite of the hill side:
                  // - hill left  => inner right
                  // - hill right => inner left
                  const hillLeft = idx % 2 === 0;
                  const placeLeft = !hillLeft;

                  return (
                    <div
                      key={exp.id}
                      className='grid items-center'
                      style={{ gridTemplateColumns: '1fr 180px 1fr' }}
                    >
                      {/* LEFT COLUMN */}
                      <div className='flex justify-end'>
                        {placeLeft ? (
                          <div className='w-full max-w-[420px] pr-1 relative flex items-center'>
                            {/* pull toward line (into inner side) */}
                            <div className='translate-x-6 flex-1 relative z-10'>
                              <MiniExperienceCard
                                exp={exp}
                                onClick={() => setSelectedExp(exp)}
                                index={idx}
                              />
                            </div>
                            {/* Horizontal connector line */}
                            <div
                              className='absolute right-0 top-1/2 h-0.5 w-[290px] bg-[#81353B]/50'
                              style={{
                                transform: 'translateY(-50%) translateX(264px)'
                              }}
                            />
                          </div>
                        ) : (
                          <SideImage exp={exp} side='left' />
                        )}
                      </div>

                      {/* CENTER COLUMN (spacing only; line is absolutely positioned) */}
                      <div className='relative h-full' />

                      {/* RIGHT COLUMN */}
                      <div className='flex justify-start'>
                        {!placeLeft ? (
                          <div className='w-full max-w-[420px] pl-1 relative flex items-center'>
                            {/* Horizontal connector line */}
                            <div
                              className='absolute left-0 top-1/2 h-0.5 w-[290px] bg-[#81353B]/50'
                              style={{
                                transform: 'translateY(-50%) translateX(-264px)'
                              }}
                            />
                            {/* pull toward line (into inner side) */}
                            <div className='-translate-x-6 flex-1 relative z-10'>
                              <MiniExperienceCard
                                exp={exp}
                                onClick={() => setSelectedExp(exp)}
                                index={idx}
                              />
                            </div>
                          </div>
                        ) : (
                          <SideImage exp={exp} side='right' />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedExp && (
        <LargeExperienceCard
          exp={selectedExp}
          onClose={() => setSelectedExp(null)}
        />
      )}
    </section>
  );
};

export default ExperienceSection;
