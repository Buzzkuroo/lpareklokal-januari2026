
import React from 'react';

const AppDownloadSection: React.FC = () => {
    return (
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
                        <a href="https://play.google.com/store/apps/details?id=com.telkomsel.telkomselcm&hl=id" className="h-14 sm:h-16 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden bg-black" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-full w-auto object-contain" />
                        </a>
                        <a href="https://apps.apple.com/tn/app/mytelkomsel/id651412430" className="h-14 sm:h-16 transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden bg-black" target="_blank" rel="noopener noreferrer">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-full w-auto object-contain" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownloadSection;
