
import React, { useState, useEffect } from 'react';

const INDIHOME_HERO_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585250001047-9755f84d3106?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=2070&auto=format&fit=crop"
];

const IndiHomePage: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Palette updated for IndiHome
  const navy = "#001A41";
  const softRed = "#D81E31";
  const gold = "#D6A628";
  const darkBase = "#010a14";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % INDIHOME_HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const WhiteDivider = () => (
    <div className="w-full flex justify-center py-20">
      <div className="relative w-2/3 h-[1px]">
        {/* Main subtle line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        {/* Subtle center glow point */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-[2px] bg-white/20 blur-[1px] rounded-full"></div>
      </div>
    </div>
  );

  return (
    <div className="animate-in fade-in duration-700 bg-[#001A41] min-h-screen">

      {/* 1. Hero Section - Updated to match requested style */}
      <section className="relative h-[85vh] flex items-center overflow-hidden" style={{ backgroundColor: darkBase }}>
        <div className="absolute inset-0 z-0">
          {INDIHOME_HERO_IMAGES.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${idx === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              style={{
                transform: idx === activeImageIndex ? 'scale(1.05)' : 'scale(1)',
                transition: idx === activeImageIndex
                  ? 'opacity 1500ms ease-in-out, transform 8000ms ease-out'
                  : 'opacity 1500ms ease-in-out'
              }}
              alt={`IndiHome Fiber ${idx + 1}`}
            />
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
              <span style={{ color: softRed }}>Kapan Pun, Di Mana Pun.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal max-w-2xl opacity-80">
              Nikmati kebebasan berinternet dengan koneksi fiber optik yang stabil untuk kerja dari rumah, belajar online, dan hiburan keluarga berkualitas.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="text-white px-10 py-4 rounded-2xl font-bold text-base shadow-2xl transition-all hover:scale-105 active:scale-95 hover:brightness-110"
                style={{ backgroundColor: softRed }}
              >
                Lihat Pilihan Paket
              </button>
            </div>
          </div>
        </div>

        {/* Slider Dots - Centered at the bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {INDIHOME_HERO_IMAGES.map((_, idx) => (
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

      <WhiteDivider />

      {/* 2. Video Background Section */}
      <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.4]">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-a-family-watching-tv-and-smiling-41153-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/80"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Dekatkan Pengalaman <br /> <span style={{ color: softRed }}>Bersama IndiHome</span>
          </h1>
          <div className="mt-8 w-24 h-1.5 bg-white mx-auto rounded-full" style={{ backgroundColor: softRed }}></div>
        </div>
      </section>

      <WhiteDivider />

      {/* 3. Package Grid Section */}
      <section className="py-24 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Temukan Paket IndiHome <br /> <span style={{ color: softRed }}>Sesuai Kebutuhanmu</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Card 1: 50Mbps */}
          <div className="group relative rounded-[3.5rem] overflow-hidden shadow-2xl h-[650px] cursor-pointer border border-white/10">
            <img
              alt="Person using internet"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl">
              <span className="material-symbols-outlined text-[#ED0226] text-xl font-bold">router</span>
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-900">STARTING AT Rp 275rb/MO</span>
            </div>
            <div className="absolute bottom-10 left-10 right-10 backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-[2.5rem] transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-4xl font-bold text-white mb-4">IndiHome 50Mbps</h3>
              <p className="text-slate-200 mb-10 text-lg leading-relaxed font-light">Pilihan tepat untuk produktivitas ringan dan hiburan keluarga standar tanpa hambatan.</p>
              <button className="w-full bg-white hover:bg-slate-100 text-[#ED0226] font-extrabold py-5 px-8 rounded-2xl transition-all flex items-center justify-center gap-3 group/btn shadow-xl">
                Dapatkan Promonya
                <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">check_circle</span>
              </button>
            </div>
          </div>

          {/* Card 2: 100Mbps */}
          <div className="group relative rounded-[3.5rem] overflow-hidden shadow-2xl h-[650px] cursor-pointer border border-white/10">
            <img
              alt="Family watching TV"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://images.unsplash.com/photo-1593339657370-2665add38930?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute top-10 left-10 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl">
              <span className="material-symbols-outlined text-[#ED0226] text-xl font-bold">bolt</span>
              <span className="text-[11px] font-extrabold tracking-widest uppercase text-slate-900">STARTING AT Rp 375rb/MO</span>
            </div>
            <div className="absolute bottom-10 left-10 right-10 backdrop-blur-xl bg-white/10 border border-white/20 p-10 rounded-[2.5rem] transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-4xl font-bold text-white mb-4">IndiHome 100Mbps</h3>
              <p className="text-slate-200 mb-10 text-lg leading-relaxed font-light">Kecepatan maksimal untuk streaming 4K, gaming, and banyak perangkat sekaligus di seluruh rumah.</p>
              <button className="w-full bg-[#ED0226] hover:brightness-110 text-white font-extrabold py-5 px-8 rounded-2xl transition-all flex items-center justify-center gap-3 group/btn shadow-xl shadow-[#ED0226]/20">
                Dapatkan Promonya
                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <WhiteDivider />

      {/* 4. Why Choose IndiHome Section - Cards with Background Images */}
      <section className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Kenapa Pilih IndiHome</h2>
            <div className="h-1 w-20 mx-auto rounded-full" style={{ backgroundColor: gold }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Internet Cepat */}
            <div className="relative p-10 sm:p-12 rounded-[3.5rem] border border-white/10 overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[500px]">
              {/* Background Image & Overlay */}
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Fast Internet"
              />
              <div className="absolute inset-0 bg-[#131B2E]/80 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-[#131B2E]/70"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10">
                  <span className="px-5 py-2 border border-white/20 bg-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-slate-200 backdrop-blur-md">
                    Internet Cepat
                  </span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Internet Cepat hingga 100Mbps
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed mb-12 flex-grow">
                  IndiHome menyediakan various pilihan kecepatan internet, mulai dari 30 Mbps hingga 100 Mbps.
                </p>

                <button className="flex items-center gap-3 text-white font-bold text-sm tracking-[0.1em] uppercase group/link">
                  Pelajari Lebih Lanjut
                  <span className="material-symbols-outlined text-2xl text-[#ED0226] group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 2: Layanan TV */}
            <div className="relative p-10 sm:p-12 rounded-[3.5rem] border border-white/10 overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[500px]">
              {/* Background Image & Overlay */}
              <img
                src="https://images.unsplash.com/photo-1593784991095-a205039470b6?q=80&w=2070&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="TV Entertainment"
              />
              <div className="absolute inset-0 bg-[#131B2E]/80 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-[#131B2E]/70"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10">
                  <span className="px-5 py-2 border border-white/20 bg-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-slate-200 backdrop-blur-md">
                    Layanan TV
                  </span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Layanan TV dengan Ratusan Channel
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed mb-12 flex-grow">
                  Semakin seru dengan layanan Internet + TV IndiHome untuk menonton ratusan saluran TV lokal dan internasional.
                </p>

                <button className="flex items-center gap-3 text-white font-bold text-sm tracking-[0.1em] uppercase group/link">
                  Pelajari Lebih Lanjut
                  <span className="material-symbols-outlined text-2xl text-[#ED0226] group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 3: Paket Bundling */}
            <div className="relative p-10 sm:p-12 rounded-[3.5rem] border border-white/10 overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 min-h-[500px]">
              {/* Background Image & Overlay */}
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Bundling Packages"
              />
              <div className="absolute inset-0 bg-[#131B2E]/80 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-[#131B2E]/70"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-10">
                  <span className="px-5 py-2 border border-white/20 bg-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-slate-200 backdrop-blur-md">
                    Paket Bundling
                  </span>
                </div>

                <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                  Paket Bundling Paling Hemat
                </h3>

                <p className="text-slate-300 text-lg leading-relaxed mb-12 flex-grow">
                  Kamu bisa memilih satu paket yang menggabungkan internet, telepon, hingga TV dalam satu tagihan praktis.
                </p>

                <button className="flex items-center gap-3 text-white font-bold text-sm tracking-[0.1em] uppercase group/link">
                  Pelajari Lebih Lanjut
                  <span className="material-symbols-outlined text-2xl text-[#ED0226] group-hover/link:translate-x-2 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhiteDivider />

      {/* 5. CTA Section - App Download (Telkomsel Style) */}
      <section className="py-24 bg-white dark:bg-slate-50 transition-colors duration-500 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col items-center gap-10">
          <div className="flex-shrink-0 animate-in fade-in zoom-in duration-1000">
            <div className="w-40 h-40 sm:w-52 sm:h-52 flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img
                src="/Logo_MyTelkomsel-01.png"
                alt="MyTelkomsel App"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full text-center max-w-4xl">
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-display font-bold text-[#001A41] mb-12 leading-[1.1] tracking-tight">
              Lakukan lebih di MyTelkomsel
            </h2>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="h-14 sm:h-16 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden bg-black">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-full w-auto object-contain" />
              </a>
              <a href="#" className="h-14 sm:h-16 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden bg-black">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-full w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndiHomePage;
