import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass: NavLinkProps['className'] = ({ isActive }) =>
    [
      'transition-colors',
      'text-sm',
      'lg:text-base',
      isActive ? 'font-semibold' : 'text-hover'
    ].join(' ');

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className='relative flex items-center justify-between px-6 py-4 border-b border-color bg-lightpeach'>
      <h1 className='lg:text-lg font-bold'>Rainier Joshua (RJ) Tabelon</h1>

      {/* Desktop Navigation */}
      <div className='hidden sm:flex gap-6'>
        <NavLink to='/' className={linkClass}>
          Home
        </NavLink>
        <NavLink to='/projects' className={linkClass}>
          Projects
        </NavLink>
        <NavLink to='/resume' className={linkClass}>
          Resume
        </NavLink>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className='sm:hidden cursor-pointer'
        onClick={() => setIsMenuOpen(true)}
        aria-label='Open navigation menu'
      >
        <Menu size={24} />
      </button>

      {/* Mobile Drawer */}
      <div
        className={`sm:hidden fixed inset-0 z-50 ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[35vw] bg-primary border-l shadow-lg
          transition-transform duration-200 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex items-center justify-end p-4 lg:p-4.5 border-b'>
            <button
              className='cursor-pointer'
              onClick={() => setIsMenuOpen(false)}
              aria-label='Close navigation menu'
            >
              <X size={24} />
            </button>
          </div>

          <div className='flex flex-col gap-4 p-6'>
            <NavLink
              to='/'
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to='/projects'
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to='/resume'
              className={linkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
