
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingPromo from './components/FloatingPromo';
import ConnectionPlans from './components/ConnectionPlans';
import Events from './components/Events';
import Partners from './components/Partners';
import WhatsAppButton from './components/WhatsAppButton';
import TelkomselPage from './components/TelkomselPage';
import IndiHomePage from './components/IndiHomePage';
import AppDownloadSection from './components/AppDownloadSection';

type View = 'home' | 'telkomsel' | 'indihome';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderContent = () => {
    switch (currentView) {
      case 'telkomsel':
        return <TelkomselPage />;
      case 'indihome':
        return <IndiHomePage />;
      default:
        return (
          <>
            <Hero />
            <div className="bg-slate-100/80 dark:bg-slate-900/40 py-16 lg:py-24 transition-colors duration-500">
              <FloatingPromo />
            </div>
            <ConnectionPlans />
            <Events />
            <AppDownloadSection />
            <Partners />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark overflow-x-hidden transition-colors duration-500">
      <Navbar
        onToggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
        onNavigate={setCurrentView}
        currentView={currentView}
      />

      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="py-8 px-4 sm:px-8 lg:px-12 bg-black border-t border-slate-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-lg font-bold tracking-tight text-white cursor-pointer" onClick={() => setCurrentView('home')}>
            Arek <span className="text-primary">Lokal</span>
          </div>

          <div className="text-[10px] sm:text-xs text-slate-500 tracking-widest uppercase font-medium">
            © 2026 Arek Lokal by Telkomsel Digital Jawa Bali
          </div>

          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;
