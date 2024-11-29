import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { FloatingNav } from './FloatingNav';
import { Footer } from './Footer';
import { Background } from './Background';
import { LoadingScreen } from '../common/LoadingScreen';

export function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loading screen on route change
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingNav(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {isLoading && <LoadingScreen />}
      <Background />
      <Header />
      {showFloatingNav && <FloatingNav />}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}