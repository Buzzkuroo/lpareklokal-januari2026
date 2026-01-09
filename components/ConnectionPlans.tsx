
import React from 'react';

const ConnectionPlans: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-12 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">Nyari Internet Rumah / Mobile?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto lg:mx-0">Pilih Sesuai Kebutuhanmu dan Nikmati Berbagai Benefit yang Kami Sediakan Untukmu</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mobile Plan - Telkomsel Card */}
          <div id="telkomsel" className="group relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] cursor-pointer border border-slate-100 dark:border-slate-800">
            <img
              alt="Woman using mobile"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="/Promo_Telkomsel_50Mbps.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl">
              <span className="material-symbols-outlined text-primary text-xl">smartphone</span>
              <span className="text-xs font-bold tracking-wider uppercase text-slate-900">Pilih Benefit Sesukamu</span>
            </div>
            <div className="absolute bottom-8 left-8 right-8 glass-overlay p-10 rounded-[2.5rem] transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-white mb-3">Paket Internet Telkomsel</h3>
              <p className="text-slate-200 mb-8 leading-relaxed font-light">Nikmati layanan internet mobile yang lancar dan terjangkau untuk semua kebutuhanmu. Banyak pilihan paket sesuai kebutuhanmu dan pilih hiburan sesukamu.</p>
              <a
                href="https://www.telkomsel.com/SIMPATI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 group/btn shadow-xl shadow-primary/20"
              >
                Pelajari Lebih Lanjut
                <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-2 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          <div id="indihome" className="group relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] cursor-pointer border border-slate-100 dark:border-slate-800">
            <img
              alt="Modern living room"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="/Promo_IndiHome_50Mbps.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl">
              <span className="material-symbols-outlined text-primary text-xl">router</span>
              <span className="text-xs font-bold tracking-wider uppercase text-slate-900">Promo IndiHome Terbaru</span>
            </div>
            <div className="absolute bottom-8 left-8 right-8 glass-overlay p-10 rounded-[2.5rem] transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="text-3xl font-bold text-white mb-3">IndiHome </h3>
              <p className="text-slate-200 mb-8 leading-relaxed font-light">Nikmati internet rumah dengan kecepatan Upto 150Mbps dengan harga mulai 200ribuan dengan beragam hiburan yang bisa kamu nikmati</p>
              <a
                href="https://www.telkomsel.com/indihome/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-slate-50 text-primary font-bold py-4.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 group/btn shadow-xl"
              >
                Dapatkan Promonya Sekarang
                <span className="material-symbols-outlined text-primary text-xl">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionPlans;
