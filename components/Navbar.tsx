
import React from 'react';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onNavigate: (view: 'home' | 'telkomsel' | 'indihome') => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleDarkMode, isDarkMode, onNavigate, currentView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close menu when navigating
  const handleMobileNavigate = (view: 'home' | 'telkomsel' | 'indihome') => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className="sticky top-0 w-full py-4 px-6 sm:px-12 flex justify-between items-center z-[60] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Arek <span className="text-primary">Lokal</span>
        </button>
      </div>

      {/* Desktop Menu */}
      {/* <div className="hidden md:flex gap-8 items-center text-sm font-semibold text-slate-600 dark:text-slate-300">
        <button
          onClick={() => onNavigate('home')}
          className={`transition-colors relative group ${currentView === 'home' ? 'text-primary' : 'hover:text-primary'}`}
        >
          Home
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${currentView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </button> */}
      {/* <button
          onClick={() => onNavigate('telkomsel')}
          className={`transition-colors relative group ${currentView === 'telkomsel' ? 'text-primary' : 'hover:text-primary'}`}
        >
          Telkomsel
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${currentView === 'telkomsel' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </button>
        <button
          onClick={() => onNavigate('indihome')}
          className={`transition-colors relative group ${currentView === 'indihome' ? 'text-primary' : 'hover:text-primary'}`}
        >
          IndiHome
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${currentView === 'indihome' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </button> */}
      {/* </div> */}

      <div className="flex items-center gap-4">
        <button
          onClick={onToggleDarkMode}
          className="hidden sm:block p-2.5 rounded-xl bg-slate-100 dark:bg-surface-dark hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Toggle dark mode"
        >
          <span className="material-symbols-outlined text-xl block">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        {/* Mobile Menu Button - Only show when menu is closed */}
        {/* {!isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-2xl text-slate-900 dark:text-white">
              menu
            </span>
          </button>
        )} */}

        <div className="h-7 hidden sm:flex items-center">
          <img
            alt="Telkomsel Logo"
            className="h-full w-auto object-contain hover:scale-105 transition-all duration-500"
            src="/telkomsel red.png"
          />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        style={{ backgroundColor: isDarkMode ? 'rgba(30, 41, 59, 0.95)' : 'rgba(255, 255, 255, 0.95)' }}
        className={`fixed inset-0 z-[70] backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
      >
        <div className="p-6 flex justify-between items-center border-b backdrop-blur-sm"
          style={{
            borderColor: isDarkMode ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.2)',
            background: isDarkMode ? 'rgba(30, 41, 59, 0.3)' : 'rgba(255, 255, 255, 0.3)'
          }}
        >
          <span className="text-xl font-bold text-slate-900 dark:text-white">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full transition-all duration-200"
            style={{
              background: isDarkMode ? 'rgba(51, 65, 85, 0.5)' : 'rgba(241, 245, 249, 0.5)'
            }}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined text-2xl text-slate-900 dark:text-white">
              close
            </span>
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-8">
          <button
            onClick={() => handleMobileNavigate('home')}
            className={`text-2xl font-bold transition-colors ${currentView === 'home' ? 'text-primary' : 'text-slate-900 dark:text-white hover:text-primary'}`}
          >
            Home
          </button>
          {/* <button
            onClick={() => handleMobileNavigate('telkomsel')}
            className={`text-2xl font-bold transition-colors ${currentView === 'telkomsel' ? 'text-primary' : 'text-slate-900 dark:text-white hover:text-primary'}`}
          >
            Telkomsel
          </button>
          <button
            onClick={() => handleMobileNavigate('indihome')}
            className={`text-2xl font-bold transition-colors ${currentView === 'indihome' ? 'text-primary' : 'text-slate-900 dark:text-white hover:text-primary'}`}
          >
            IndiHome
          </button> */}

          <div className="w-16 h-1 rounded-full my-4"
            style={{
              background: isDarkMode
                ? 'linear-gradient(90deg, rgba(148, 163, 184, 0.3) 0%, rgba(148, 163, 184, 0.1) 100%)'
                : 'linear-gradient(90deg, rgba(148, 163, 184, 0.4) 0%, rgba(148, 163, 184, 0.2) 100%)'
            }}
          ></div>

          <button
            onClick={onToggleDarkMode}
            className="flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: isDarkMode
                ? 'linear-gradient(135deg, rgba(51, 65, 85, 0.6) 0%, rgba(30, 41, 59, 0.6) 100%)'
                : 'linear-gradient(135deg, rgba(241, 245, 249, 0.8) 0%, rgba(226, 232, 240, 0.8) 100%)',
              boxShadow: isDarkMode
                ? '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                : '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
              color: isDarkMode ? 'white' : '#0f172a'
            }}
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
