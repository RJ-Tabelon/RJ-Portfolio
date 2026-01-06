import type { ExperienceType } from '@/data/experience';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';

type Props = {
  exp: ExperienceType;
  onClick?: () => void;
  index?: number;
};

const MiniExperienceCard = ({ exp, onClick, index = 0 }: Props) => {
  const clickable = Boolean(onClick);
  const bgColor = index % 2 === 0 ? 'bg-washi' : 'bg-darkpeachwashi';

  return (
    <div className='relative'>
      {/* PIN ICON */}
      {/* <img
        src={new URL('@/assets/Pin.png', import.meta.url).href}
        alt='pin'
        className='absolute -right-2 -top-2 z-10 h-5 w-5 sm:h-11 sm:w-11'
      /> */}

      <article
        onClick={onClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={e => {
          if (!clickable) return;
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
          }
        }}
        className={[
          `group border-2 border-color ${bgColor}`,
          'transition duration-200',
          clickable
            ? 'cursor-pointer hover:-translate-y-[3px] hover:shadow-lg hover:shadow-[#81353B]/40'
            : ''
        ].join(' ')}
      >
        {/* CONTENT */}
        <div className='relative px-4 py-4 sm:px-5 sm:py-5'>
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.15]'
            style={{
              backgroundImage:
                'radial-gradient(rgba(129,53,59,0.10) 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />

          

          {/* MOBILE VERSION (below md) */}
          <div className='relative flex md:hidden'>
            <div className='flex items-stretch gap-4'>
              {/* LEFT COLUMN: Logo */}
              

              {/* RIGHT COLUMN: Everything else */}
              <div className='flex flex-col gap-1'>
                {/* ROLE */}
                <h3 className='text-sm sm:text-md font-extrabold leading-tight tracking-wide text-[#81353B]'>
                  {exp.role}
                </h3>

                {/* COMPANY + TYPE */}
                <p className='text-xs sm:text-sm font-semibold text-[#81353B]/80'>
                  {exp.company}
                  <span className='mx-2 text-[#81353B]/30'>•</span>
                  <span className='font-medium'>{exp.type}</span>
                </p>

                {/* DATE */}
                <div className='text-[10px] sm:text-xs flex items-center gap-2 text-xs text-[#81353B]/70'>
                  <Calendar className='h-3.5 w-3.5' />
                  <span>
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>

                {/* LOCATION */}
                {exp.location && (
                  <div className='text-[10px] sm:text-xs flex items-center gap-2 text-xs text-[#81353B]/65'>
                    <MapPin className='h-3.5 w-3.5' />
                    <span>{exp.location}</span>
                  </div>
                )}

                {/* CTA */}
                {clickable && (
                  <div className='text-[10px] sm:text-xs inline-flex items-center gap-1 pt-0 font-semibold text-[#81353B]'>
                    <span>View more</span>
                    <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]' />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* DESKTOP VERSION (md and above) */}
          <div className='relative hidden flex-col gap-2 md:flex'>
            {/* ROLE */}
            <h3 className='text-lg font-extrabold leading-tight tracking-wide text-[#81353B]'>
              {exp.role}
            </h3>

            {/* COMPANY + TYPE */}
            <p className='text-md font-semibold text-[#81353B]/80 '>
              {exp.company}
              <span className='mx-2 text-[#81353B]/30'>•</span>
              <span className='font-medium'>{exp.type}</span>
            </p>

            {/* DATE */}
            <div className='flex items-center gap-2 text-sm text-[#81353B]/70'>
              <Calendar className='h-3.5 w-3.5' />
              <span>
                {exp.startDate} – {exp.endDate}
              </span>
            </div>

            {/* LOCATION */}
            {exp.location && (
              <div className='flex items-center gap-2 text-sm text-[#81353B]/65'>
                <MapPin className='h-3.5 w-3.5' />
                <span>{exp.location}</span>
              </div>
            )}

            {/* CTA */}
            {clickable && (
              <div className='mt-1 inline-flex items-center gap-1 font-semibold text-[#81353B] text-sm'>
                <span>View more</span>
                <ArrowUpRight className='h-4 w-4 transition-transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px]' />
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default MiniExperienceCard;
