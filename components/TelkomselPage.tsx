
import React, { useState, useEffect } from 'react';

const TELKOMSEL_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1556656793-062ff987b50d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070&auto=format&fit=crop"
];

const PRODUCTS = [
  {
    id: 'simpatii',
    title: 'SIMPATI',
    desc: 'Kartu prabayar favorit dengan pilihan kuota melimpah dan jaringan terluas.',
    icon: 'signal_cellular_alt',
    label: 'Prabayar'
  },
  {
    id: 'halo',
    title: 'Telkomsel Halo',
    desc: 'Layanan pascabayar premium dengan prioritas jaringan dan tagihan yang simpel.',
    icon: 'verified_user',
    label: 'Pascabayar'
  },
  {
    id: 'byu',
    title: 'by.U',
    desc: 'Layanan seluler serba digital pertama di Indonesia. Bebas pilih kuota dan nomor sesukamu.',
    icon: 'bolt',
    label: 'Digital'
  },
  {
    id: 'roaming',
    title: 'Roaming & SLI',
    desc: 'Tetap terkoneksi di mancanegara dengan paket roaming internasional terbaik.',
    icon: 'public',
    label: 'International'
  },
  {
    id: 'one',
    title: 'Telkomsel One',
    desc: 'Solusi konvergensi terbaik yang menggabungkan internet rumah dan mobile.',
    icon: 'all_inbox',
    label: 'Convergence'
  },
  {
    id: 'eznet',
    title: 'EZnet',
    desc: 'Internet rumah fiber yang simpel, cepat, dan sangat terjangkau untuk semua.',
    icon: 'wifi',
    label: 'Home Fiber'
  }
];

const TelkomselPage: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const themeRed = "#ED0226";
  const darkBase = "#010a14";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % TELKOMSEL_HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-in fade-in duration-700 bg-slate-950 min-h-screen">
      {/* Hero Section - Updated to match requested style */}
      <section className="relative h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: darkBase }}>
        <div className="absolute inset-0 z-0">
          {TELKOMSEL_HERO_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${idx === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                style={{
                  transform: idx === activeImageIndex ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 8000ms ease-out'
                }}
                alt={`Telkomsel Connectivity ${idx + 1}`}
              />
            </div>
          ))}
          {/* Main gradient overlay from #010a14 100% to 0% */}
          <div
            className="absolute inset-0 z-[15]"
            style={{
              background: `linear-gradient(to right, ${darkBase} 0%, ${darkBase}F2 20%, ${darkBase}99 45%, transparent 100%)`
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-20 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Koneksi Tanpa <br /> Batas <br />
              <span style={{ color: themeRed }}>Kapan Pun, Di Mana Pun.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal max-w-2xl opacity-80">
              Nikmati jaringan 5G terluas di Indonesia untuk produktivitas maksimal dan hiburan tanpa henti di telapak tangan Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="text-white px-10 py-4 rounded-2xl font-bold text-base shadow-2xl transition-all hover:scale-105 active:scale-95 hover:brightness-110"
                style={{ backgroundColor: themeRed }}
              >
                Lihat Pilihan Paket
              </button>
            </div>
          </div>
        </div>

        {/* Slider Dots - Centered at the bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {TELKOMSEL_HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeImageIndex ? 'w-12 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'
                }`}
              style={idx === activeImageIndex ? { backgroundColor: 'white' } : {}}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Visually Distinct Subtle Divider */}
      <div className="w-full flex justify-center py-12">
        <div className="relative w-1/2 h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ED0226]/40 to-transparent"></div>
        </div>
      </div>

      {/* Video Background Section - SIMPATI #TerbaikUntukmu */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-50">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-city-view-at-night-with-many-lights-4428-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${themeRed}33 0%, transparent 50%, #020617 100%)` }}></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm bg-white/5 text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">
            Jaringan Terluas & Tercepat
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-display font-extrabold text-white tracking-tighter drop-shadow-2xl">
            SIMPATI <span style={{ color: themeRed }}>#TerbaikUntukmu</span>
          </h1>
        </div>
      </section>

      <div className="w-full flex justify-center py-12">
        <div className="relative w-1/2 h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ED0226]/40 to-transparent"></div>
        </div>
      </div>

      {/* Product Grid Section */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Pilihan Produk <span style={{ color: themeRed }}>Terbaik</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Temukan solusi konektivitas yang dirancang khusus untuk memenuhi gaya hidup digital Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="p-10 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-6 -top-6 w-32 h-32 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: themeRed }}></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 flex justify-between items-start">
                  <span className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-white/10">
                    {product.label}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform">{product.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-10 flex-grow">{product.desc}</p>
                <button className="flex items-center gap-2 text-white font-bold group/btn text-sm uppercase tracking-widest hover:gap-4 transition-all">
                  Pelajari Lebih Lanjut
                  <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1" style={{ color: themeRed }}>arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-slate-50 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center gap-10">
          <div className="flex-shrink-0 animate-in fade-in zoom-in duration-1000">
            <div className="w-40 h-40 sm:w-52 sm:h-52 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src="/Logo_MyTelkomsel-01.png" alt="MyTelkomsel App" className="w-full h-full object-contain drop-shadow-2xl" />
            </div>
          </div>
          <div className="w-full text-center max-w-4xl">
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-display font-bold text-[#001A41] mb-12 leading-[1.1] tracking-tight">Lakukan lebih di MyTelkomsel</h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="h-14 sm:h-16 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden bg-black" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-full w-auto object-contain" />
              </a>
              <a href="#" className="h-14 sm:h-16 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden bg-black" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-full w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.9; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TelkomselPage;
