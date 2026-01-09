
import React from 'react';

const FloatingPromo: React.FC = () => {
  return (
    <div className="relative z-30 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-1 rounded-[2.5rem] shadow-2xl shadow-slate-900/10 dark:shadow-black/40 overflow-hidden border border-white/40 dark:border-slate-700/30">
          <div className="bg-white/70 dark:bg-surface-dark/70 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 hover:bg-white/90 dark:hover:bg-surface-dark/90 transition-all duration-500">

            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-black dark:from-slate-700 dark:to-slate-900 flex items-center justify-center shadow-lg shadow-slate-900/20 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-white text-3xl select-none">campaign</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-sm animate-bounce">
                  <span className="material-symbols-outlined text-white text-[10px] font-bold">notifications</span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary">Stay Tuned</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Official Info</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Tunggu Events dan Giveaway Selanjutnya</h4>
              </div>
            </div>

            <a
              href="https://www.instagram.com/ar3klokal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm tracking-widest uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-slate-900/20"
            >
              Soon
              <span className="material-symbols-outlined text-lg group-hover:rotate-45 transition-transform">arrow_outward</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingPromo;
