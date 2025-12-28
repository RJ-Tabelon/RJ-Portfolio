import { ExperienceType, experiences } from '@/data/experience';

const ExperienceSection = () => {
  return (
    <section className='w-full bg-primary px-6 py-16'>
      <div className='mx-auto max-w-[1200px]'>
        <div className='relative mx-auto max-w-[980px]'>
          {/* PAPER */}
          <div className='relative overflow-hidden rounded-2xl border border-[#d7cfbf] bg-[#FBF7F0]'>
            {/* SPIRAL / BINDER AREA */}
            <div className='relative border-b border-[#e3dacb] bg-[#F5BFA3]/35'>
              <div className='h-14' />

              {/* binder holes */}
              <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                <div className='flex gap-6'>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span
                      key={i}
                      className='h-4 w-4 rounded-full border border-[#b7b0a6]/70 bg-[#FBF7F0]'
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* left red margin + ruled lines */}
            <div className='pointer-events-none absolute inset-0'>
              <div className='absolute left-10 top-0 h-full w-[2px] bg-[#d47a7a]/70' />
              <div
                className='absolute inset-0 opacity-[0.55]'
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to bottom, transparent 0px, transparent 28px, rgba(129,53,59,0.12) 28px, rgba(129,53,59,0.12) 29px)',
                }}
              />
            </div>

            {/* CONTENT */}
            <div className='relative px-6 py-10 sm:px-10'>
              <h2 className='text-center text-3xl font-bold tracking-wide text-[#81353B]'>
                My Experience
              </h2>
              <p className='mt-2 text-center text-sm text-[#81353B]/70'>
                Notes from the field — roles, impact, and tools I used.
              </p>

              <div className='mt-10 space-y-8'>
                {experiences.map((exp: ExperienceType) => (
                  <div
                    key={exp.id}
                    className='relative rounded-xl border border-[#e3dacb] bg-white/45 px-5 py-6'
                  >
                    {/* paperclip (outline only) */}
                    <div className='absolute -right-2 -top-3 rotate-[18deg]'>
                      <div className='h-8 w-6 rounded-[12px] border-2 border-[#b7b0a6]' />
                      <div className='absolute left-1 top-2 h-6 w-4 rounded-[10px] border-2 border-[#b7b0a6]' />
                    </div>

                    <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-xl border border-[#e3dacb] bg-white px-3 py-3'>
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className='h-12 w-12 object-contain'
                          />
                        </div>

                        <div className='sm:hidden'>
                          <h3 className='text-lg font-semibold text-[#81353B]'>
                            {exp.role}
                          </h3>
                          <p className='text-sm text-[#81353B]/70'>
                            {exp.company} • {exp.startDate} – {exp.endDate}
                          </p>
                          {exp.location && (
                            <p className='text-sm text-[#81353B]/60'>
                              {exp.location}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className='flex-1'>
                        <div className='hidden sm:block'>
                          <h3 className='text-xl font-semibold text-[#81353B]'>
                            {exp.role}
                          </h3>
                          <p className='mt-1 text-sm text-[#81353B]/70'>
                            {exp.company} • {exp.startDate} – {exp.endDate}
                          </p>
                          {exp.location && (
                            <p className='mt-1 text-sm text-[#81353B]/60'>
                              {exp.location}
                            </p>
                          )}
                        </div>

                        <div className='mt-4 space-y-2 text-[15px] leading-relaxed text-[#2b2b2b]/80'>
                          {exp.bullets.map((bullet: string, i: number) => (
                            <div key={i} className='flex gap-3'>
                              <span className='mt-[8px] h-[6px] w-[6px] rounded-full bg-[#81353B]/70' />
                              <p>{bullet}</p>
                            </div>
                          ))}
                        </div>

                        <div className='mt-5 flex flex-wrap gap-2'>
                          {exp.tech.map((tech: string, i: number) => (
                            <span
                              key={i}
                              className='rounded-full border border-[#e3dacb] bg-[#F5BFA3]/35 px-3 py-1 text-xs font-medium tracking-wide text-[#81353B]'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* torn edge (no shadow) */}
                    <div className='pointer-events-none absolute inset-x-0 bottom-0 h-3 opacity-60'>
                      <div
                        className='h-full w-full'
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(90deg, rgba(227,218,203,0.0) 0px, rgba(227,218,203,0.0) 10px, rgba(227,218,203,0.55) 10px, rgba(227,218,203,0.55) 12px)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-10 flex items-center justify-center gap-2 text-xs text-[#81353B]/60'>
                <span className='h-[1px] w-16 bg-[#81353B]/20' />
                <span>End of page</span>
                <span className='h-[1px] w-16 bg-[#81353B]/20' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
