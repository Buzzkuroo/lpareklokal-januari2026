
import React, { useState, useEffect } from 'react';



interface Stat {
  label: string;
  value: string;
}

interface HeroSlide {
  id: string;
  badge: string;
  title: string[];
  description: string;
  cta: string;
  link: string;
  stats: Stat[];
  themeColor: string;
  btnColor: string;
  shadowColor: string;
  bgColor: string;
  images: {
    main: string;
    secondary: string;
    icon: string;
  };
  accentContent: {
    badge: string;
    title: React.ReactNode;
    icon: string;
  };
}

const HERO_DATA: HeroSlide[] = [
  {
    id: 'mobile',
    badge: 'Internet Mobile',
    title: ['Pilih Sesuai Lifestylemu', '#TerbaikUntukmu'],
    description: 'Nikmati internet mobile yang lancar dan terjangkau untuk semua kebutuhanmu.',
    cta: 'Pelajari Lebih Lanjut',
    link: 'https://www.telkomsel.com/SIMPATI',
    stats: [
      { label: 'Mulai Dari', value: 'Rp 30Ribu' },
      { label: 'Benefit Sesukamu', value: '6 Jenis' },
      { label: 'Masa Aktif', value: '30 Hari' }
    ],
    themeColor: 'from-[#001A41] to-[#0C3168]',
    btnColor: 'bg-[#001A41]',
    shadowColor: 'shadow-[#001A41]/30',
    bgColor: 'from-[#001A41]/10 to-[#0C3168]/10',
    images: {
      main: '/promotelkomselsimpati2026.jpg',
      secondary: '/promotelkomselsimpati2026-1.jpg',
      icon: 'smartphone'
    },
    accentContent: {
      badge: 'Banyak Benefitnya',
      title: <>Pilih <br /> Sesukamu</>,
      icon: 'signal_cellular_alt'
    }
  },
  {
    id: 'household',
    badge: 'Internet Rumah',
    title: ['Dapatkan Promo IndiHome Terbaru', 'Januari 2026'],
    description: '#DekatkanPengalaman dengan promo IndiHome Terbaru Januari 2026 di wilayah Jateng, Yogyakarta, Jatim, Bali dan Nusa Tenggara.',
    cta: 'Dapatkan Promonya',
    link: 'https://www.telkomsel.com/indihome/',
    stats: [
      { label: 'Kecepatan Up To', value: '150Mbps' },
      { label: 'Harga Mulai', value: '200Ribuan' },
      { label: 'Channel Hiburan', value: '140+' }
    ],
    themeColor: 'from-[#B90024] to-[#FD195E]',
    btnColor: 'bg-[#B90024]',
    shadowColor: 'shadow-[#B90024]/20',
    bgColor: 'from-[#B90024]/10 to-[#FD195E]/10',
    images: {
      main: '/Promo_IndiHome_50Mbps.jpg',
      secondary: '/promoindihome2026-landscape.jpg',
      icon: 'home'
    },
    accentContent: {
      badge: 'Promo Januari',
      title: <>IndiHome<br /> Jantastic </>,
      icon: 'router'
    }
  }
];

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % HERO_DATA.length);
        setIsTransitioning(false);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = HERO_DATA[activeIndex];

  return (
    <section className="relative px-6 sm:px-12 pt-8 pb-40 lg:pb-64 overflow-hidden min-h-[90vh] flex items-center bg-white dark:bg-background-dark transition-colors duration-1000">
      {/* Background Decor Gradients */}
      <div className={`absolute top-0 right-0 w-[80vw] h-[80vw] bg-gradient-to-br ${current.bgColor} rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 -z-10 transition-all duration-1000 opacity-60`}></div>
      <div className={`absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-tr ${current.bgColor} rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 -z-10 transition-all duration-1000 opacity-60`}></div>

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center mb-16 lg:mb-24">

          {/* Left Content Side */}
          <div className={`lg:col-span-6 flex flex-col gap-6 lg:gap-8 z-10 transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

            {/* Badge Label */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md rounded-full w-fit shadow-sm border border-slate-100 dark:border-slate-800">
              <span className="flex h-2.5 w-2.5 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.btnColor}`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${current.btnColor}`}></span>
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                {current.badge}
              </span>
            </div>

            {/* Dynamic Headline */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white">
                {current.title[0]} <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${current.themeColor}`}>
                  {current.title[1]}
                </span>
              </h1>
            </div>

            {/* Support Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-light">
              {current.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${current.btnColor} text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all ${current.shadowColor} shadow-2xl hover:brightness-125 active:scale-95 flex items-center gap-3 group`}
              >
                {current.cta}
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>

            </div>

            {/* Horizontal Stats Divider */}
            <div className="grid grid-cols-3 gap-8 mt-4 pt-10 border-t border-slate-200 dark:border-slate-800">
              {current.stats.map((stat, i) => (
                <div key={`${current.id}-stat-${i}`}>
                  <h4 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Side */}
          <div className={`lg:col-span-6 relative w-full h-[500px] lg:h-[650px] flex items-center justify-center lg:justify-end transition-all duration-1000 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid grid-cols-12 gap-4 items-center relative z-10 w-full max-w-[600px]">

              {/* Primary Image Column */}
              <div className="col-span-7 flex flex-col gap-4">
                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-surface-dark group">
                  <img
                    alt="Feature Focus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={current.images.main}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-surface-dark group">
                  <img
                    alt="Feature Context"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={current.images.secondary}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md p-3 rounded-2xl shadow-xl z-20">
                    <span className={`material-symbols-outlined text-2xl block ${current.btnColor.replace('bg-', 'text-')}`}>
                      {current.images.icon}
                    </span>
                  </div>
                </div>
              </div>

              {/* Accent Shape Column */}
              <div className="col-span-5 pt-12">
                <div className={`relative w-full aspect-[1/2] rounded-[3rem] bg-gradient-to-br ${current.themeColor} overflow-hidden shadow-2xl flex items-center justify-center`}>
                  {/* Decorative Pulse Circles */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="w-64 h-64 border border-white/20 rounded-full animate-pulse"></div>
                    <div className="absolute w-48 h-48 border border-white/10 rounded-full animate-ping"></div>
                  </div>

                  <div className="z-10 text-center px-6">
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest mb-4 mx-auto w-fit">
                      {current.accentContent.badge}
                    </div>
                    <h3 className="text-white text-2xl sm:text-3xl font-display font-extrabold leading-tight">
                      {current.accentContent.title}
                    </h3>
                    <div className="mt-6 flex justify-center">
                      <span className="material-symbols-outlined text-white text-5xl animate-bounce">
                        {current.accentContent.icon}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Polished Navigation Dots - CENTERED AT BOTTOM OF HERO */}
        <div className="absolute -bottom-4 lg:-bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-8 py-5 rounded-full border border-slate-100 dark:border-slate-800 z-[45] shadow-2xl shadow-slate-200/50 dark:shadow-black/50">
          {HERO_DATA.map((slide, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => {
                if (i !== activeIndex) {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setActiveIndex(i);
                    setIsTransitioning(false);
                  }, 400);
                }
              }}
              className={`group relative flex flex-col items-center justify-center min-w-[48px]`}
            >
              <span className={`h-2.5 rounded-full transition-all duration-500 ease-out mb-1 ${activeIndex === i ? `w-16 ${HERO_DATA[i].btnColor}` : 'w-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300'}`}></span>
              <span className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeIndex === i ? `${HERO_DATA[i].btnColor.replace('bg-', 'text-')} opacity-100 translate-y-0` : 'text-slate-400 opacity-0 translate-y-1 group-hover:opacity-60'}`}>
                {HERO_DATA[i].id}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
