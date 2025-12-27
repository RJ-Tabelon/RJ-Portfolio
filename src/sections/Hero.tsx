import Headshot from '../assets/Hero/Headshot.jpeg';
import Washi from '../assets/Washi.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='w-full bg-lightpeach'>
      {/* =========================
          MOBILE ( < sm )
          ========================= */}
      <div className='sm:hidden'>
        <div className='mx-auto max-w-[1500px] px-6 py-8'>
          <div className='relative grid gap-10'>
            {/* POLAROID */}
            <div className='relative z-30 mx-auto -mb-25'>
              <img
                src={Washi}
                alt='Washi tape'
                className='h-16 w-auto pointer-events-none absolute -right-10 z-20 rotate-[50deg] select-none'
              />

              <div className='bg-[#FBF7F0] p-2 pb-4 rotate-[6deg]'>
                <img
                  src={Headshot}
                  alt='RJ Tabelon Headshot'
                  className='h-38 w-auto object-cover'
                />
              </div>
            </div>

            {/* LEFT */}
            <div className='relative z-10'>
              <div className='relative bg-darkpeach pb-6 pt-20 px-5'>
                <div className='space-y-4 text-xs leading-tight'>
                  <p>
                    Hey there! I&apos;m RJ, a Computer Science major and
                    Electrical Engineering minor at the University of Florida
                    with a strong interest in full-stack development and cloud
                    computing.
                  </p>

                  <p>
                    I love developing programs that make people&apos;s lives
                    easier, and making them look good with creative,
                    user-centered design.
                  </p>

                  <p>
                    I&apos;m always looking to learn something new, grow as a
                    developer, and work on projects that make a difference.
                  </p>

                  <p>
                    Feel free to reach out if you want to connect, collaborate,
                    or just chat about tech!
                  </p>
                </div>

                <div className='mt-5 flex items-center justify-center gap-5'>
                  <a
                    href='https://github.com'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='GitHub'
                    className='text-[#81353B] transition hover:opacity-85'
                  >
                    <FaGithub className='h-7 w-7' />
                  </a>

                  <a
                    href='https://www.linkedin.com'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='LinkedIn'
                    className='text-[#81353B] transition hover:opacity-85'
                  >
                    <FaLinkedin className='h-7 w-7' />
                  </a>

                  <a
                    href='mailto:rjtabelon@gmail.com'
                    aria-label='Email'
                    className='text-[#81353B] transition hover:opacity-85'
                  >
                    <FaEnvelope className='h-7 w-7' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          DESKTOP ( >= sm )
          ========================= */}
      <div className='hidden sm:block'>
        <div className='mx-auto max-w-[1500px] px-12 py-14 md:py-18 md:px-16'>
          <div className='relative grid items-start gap-14'>
            {/* LEFT */}
            <div className='relative z-10 mr-50'>
              <h1 className='text-center font-bold text-xl md:text-2xl lg:text-3xl tracking-wide'>
                Rainier Joshua (RJ) Tabelon
              </h1>

              <div className='relative mt-2 bg-darkpeach py-6 pl-8 pr-24'>
                <div className='max-w-[58rem] space-y-5 text-xs md:text-sm lg:text-md leading-tight'>
                  <p>
                    Hey there! I&apos;m RJ, a Computer Science major and
                    Electrical Engineering minor at the University of Florida
                    with a strong interest in full-stack development and cloud
                    computing.
                  </p>

                  <p>
                    I love developing programs that make people&apos;s lives
                    easier, and making them look good with creative,
                    user-centered design.
                  </p>

                  <p>
                    I&apos;m always looking to learn something new, grow as a
                    developer, and work on projects that make a difference.
                  </p>

                  <p>
                    Feel free to reach out if you want to connect, collaborate,
                    or just chat about tech!
                  </p>
                </div>

                <div className='mt-6 flex items-center gap-6'>
                  <a
                    href='https://github.com/RJ-Tabelon'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='GitHub'
                    className='place-items-center rounded-lg text-primary transition hover:opacity-85'
                  >
                    <FaGithub className='w-8 h-8 lg:h-9 lg:w-9' />
                  </a>

                  <a
                    href='https://www.linkedin.com/in/rj-tabelon/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='LinkedIn'
                    className='place-items-center rounded-lg text-primary transition hover:opacity-85'
                  >
                    <FaLinkedin className='w-8 h-8 lg:h-9 lg:w-9' />
                  </a>

                  <a
                    href='mailto:rj.lim.tabelon@gmail.com'
                    aria-label='Email'
                    className='place-items-center rounded-lg text-primary transition hover:opacity-85'
                  >
                    <FaEnvelope className='w-8 h-8 lg:h-9 lg:w-9' />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className='absolute -right-28 z-20 -translate-x-33'>
              <div>
                <img
                  src={Washi}
                  alt='Washi tape'
                  className='h-28 w-auto pointer-events-none absolute -right-17 z-20 w-[280px] rotate-[50deg] select-none'
                />
                <div className='bg-[#FBF7F0] p-3 pb-6 rotate-[10deg]'>
                  <img
                    src={Headshot}
                    alt='RJ Tabelon Headshot'
                    className='h-65 lg:h-70 w-auto object-cover '
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
