import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const KEEP_ALIVE_PATHS = new Set(['/', '/projects', '/resume']);

export default function RootLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const pathname = location.pathname;

  const [outletCache, setOutletCache] = useState<Record<string, ReactNode>>(
    () => (KEEP_ALIVE_PATHS.has(pathname) ? { [pathname]: outlet } : {})
  );

  useEffect(() => {
    if (!KEEP_ALIVE_PATHS.has(pathname)) return;
    setOutletCache(prev => {
      if (prev[pathname]) return prev;
      return { ...prev, [pathname]: outlet };
    });
  }, [outlet, pathname]);

  const keepAliveContent = useMemo(() => {
    const shouldKeepAlive = KEEP_ALIVE_PATHS.has(pathname);
    if (!shouldKeepAlive) return outlet;

    const renderCache = outletCache[pathname]
      ? outletCache
      : { ...outletCache, [pathname]: outlet };

    return Object.entries(renderCache).map(([cachedPath, element]) => {
      const isActive = cachedPath === pathname;
      return (
        <section key={cachedPath} hidden={!isActive} aria-hidden={!isActive}>
          {element}
        </section>
      );
    });
  }, [outlet, outletCache, pathname]);

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
      <main className='max-w-5xl mx-auto'>{keepAliveContent as ReactNode}</main>
    </div>
  );
}
