import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <div className='min-h-screen bg-primary text-primary'>
      <Navbar />
      <main className='max-w-6xl mx-auto px-6'>
        <Outlet />
      </main>
    </div>
  );
}
