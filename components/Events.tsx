
import React from 'react';

interface DigitalService {
  title: string;
  description: string;
  image: string;
  link: string;
  ctaText: string;
}

const DIGITAL_SERVICES: DigitalService[] = [
  {
    title: 'Telkomsel Video',
    description: 'Akses ribuan film blockbuster, serial original, dan tayangan olahraga terbaik dalam satu aplikasi.',
    image: '/telkomsel-video--NIKI-SEP24-LANDING.png',
    link: 'https://www.telkomsel.com/video',
    ctaText: 'Mulai Nonton'
  },
  {
    title: 'Dunia Games',
    description: 'Top up voucher game favoritmu dengan mudah dan ikuti turnamen esports bergengsi setiap bulannya.',
    image: 'telkomsel-games--DG-landing.png',
    link: 'https://www.telkomsel.com/games',
    ctaText: 'Main Sekarang'
  },
  {
    title: 'Telkomsel Poin',
    description: 'Tukarkan poin Anda dengan beragam penawaran eksklusif, diskon merchant, hingga paket data gratis.',
    image: 'telkomsel-poin-KV-2024--JAN24.png',
    link: 'https://www.telkomsel.com/poin',
    ctaText: 'Tukar Poin'
  }
];

const Events: React.FC = () => {
  return (
    <section id="layanan-digital" className="py-20 px-6 sm:px-12 overflow-hidden bg-[#f8fafc] dark:bg-slate-900/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section - Matches Image Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-[#ED0226] rounded-full"></span>
              <span className="text-[#ED0226] font-bold tracking-[0.1em] uppercase text-[11px]">Digital Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-slate-900 dark:text-white mb-6">
              Layanan <span className="text-[#ED0226]">Digital</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed">
              Nikmati berbagai pilihan hiburan berkualitas dan keuntungan eksklusif yang dirancang khusus untuk melengkapi gaya hidup digital Anda.
            </p>
          </div>
          <a className="hidden md:flex items-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-bold text-sm shadow-sm hover:shadow-md transition-all group" href="https://www.telkomsel.com/">
            Lihat Semua Layanan
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {DIGITAL_SERVICES.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col bg-white dark:bg-surface-dark rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card Header (Image Area with Icon) */}
              <div className="h-64 relative p-8 overflow-hidden">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient for readability */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>






              </div>

              {/* Card Content Area (White Background) */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-[#ED0226] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px] font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* Subtle Separator */}
                  <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 mb-8"></div>

                  {/* Action Footer */}
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ED0226] font-extrabold text-sm flex items-center gap-2 group/btn tracking-wide transition-all hover:gap-3"
                    >
                      {service.ctaText}
                      <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1">
                        chevron_right
                      </span>
                    </a>

                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-sm">
                          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View Button */}
        <div className="mt-12 flex md:hidden justify-center">
          <a className="w-full text-center px-8 py-5 rounded-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold transition-all shadow-sm" href="#">
            Lihat Semua Layanan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
