import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  useEffect(() => {
    const navbar = document.getElementById('site-navbar');
    if (!navbar) return;

    const updateNavbarHeightVar = () => {
      const height = navbar.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${height}px`
      );
    };

    updateNavbarHeightVar();

    let resizeObserver: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(() => updateNavbarHeightVar());
      resizeObserver.observe(navbar);
    }

    window.addEventListener('resize', updateNavbarHeightVar);
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateNavbarHeightVar);
    };
  }, []);

  return (
    <div className='min-h-screen bg-secondary text-primary'>
      <Navbar />
      <main className='max-w-5xl mx-auto'>
        <Outlet />
      </main>
    </div>
  );
}
