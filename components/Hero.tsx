import React, { useState, useEffect } from 'react';
import Button from './Button.tsx';
import { ArrowRight, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);

  const scrollToAbout = () => {
    const element = document.getElementById('overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlightImages = [
    "https://github.com/spiderfranlee/images/blob/main/Cliffs%201.png?raw=true",
    "https://github.com/spiderfranlee/images/blob/main/Cliffs%202.png?raw=true",
    "https://github.com/spiderfranlee/images/blob/main/Cliffs%20yoga%202.png?raw=true",
    "https://github.com/spiderfranlee/images/blob/main/Cliffs%20yoga%203.png?raw=true",
    "https://github.com/spiderfranlee/images/blob/main/yacht1.jpeg?raw=true",
    "https://github.com/spiderfranlee/images/blob/main/yacht2.jpeg?raw=true"
  ];

  // Autoplay for the small preview card
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviewIndex((prev) => (prev + 1) % highlightImages.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, [highlightImages.length]);

  // Autoplay for the full-screen modal
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isShowreelOpen) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % highlightImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isShowreelOpen, highlightImages.length]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isShowreelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isShowreelOpen]);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % highlightImages.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentSlide((prev) => (prev === 0 ? highlightImages.length - 1 : prev - 1));
  };

  return (
    <div id="highlights" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* 
        ================================================================
        VIDEO BACKGROUND
        ================================================================
      */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
          src="https://github.com/spiderfranlee/images/blob/244eed999f327cfc95480adc6d9af5587d6bd989/Homepage%20low%20res.mp4?raw=true"
        >
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-dark-gray flex items-center justify-center">
            <p className="text-white">Video Placeholder</p>
          </div>
        </video>
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center pt-32 pb-20">
        
          {/* Text Content - Centered */}
          <div className="w-full max-w-5xl text-center z-10 mb-16"> 
            <div className="pointer-events-auto">
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                FITNESS & LUXURY RETREAT
              </h2>
              
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-8 leading-none drop-shadow-2xl">
                THE RESET <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">YOU NEED</span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 font-medium leading-relaxed">
                Simply put, this is the gift you’ve been wanting to give yourself. A life-changing week to finally let you realign your priorities
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToAbout} className="group">
                  Book Your Retreat
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" onClick={() => document.getElementById('dates')?.scrollIntoView({behavior: 'smooth'})}>
                  View Dates
                </Button>
              </div>
            </div>
          </div>

          {/* Showreel Card - Centered Beneath Text */}
          <div className="w-full max-w-6xl z-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div 
               onClick={() => setIsShowreelOpen(true)}
               className="group relative cursor-pointer w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-black/60 hover:border-primary/50 transition-all duration-500 shadow-2xl transform hover:scale-[1.01]"
            >
               <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-8 h-auto md:h-80 lg:h-96">
                  {/* Left Side: Play Button & Title */}
                  <div className="flex md:flex-col flex-row items-center md:items-start justify-between md:justify-center gap-4 py-2 px-2 md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-white/10 md:pr-6">
                     <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                       <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300">
                          <Play size={28} className="ml-1" fill="currentColor" />
                       </div>
                       <div>
                         <span className="text-2xl md:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-none block">Play<br/>Showreel</span>
                       </div>
                     </div>
                     <p className="text-gray-400 text-sm xl:text-base mt-0 md:mt-auto group-hover:text-white transition-colors">See what’s in store</p>
                  </div>

                  {/* Right Side: Autoplaying Preview */}
                  <div className="relative flex-1 h-64 md:h-auto rounded-xl overflow-hidden bg-black border border-white/10 group-hover:border-white/30 transition-colors">
                     {highlightImages.map((img, idx) => (
                        <img 
                           key={idx}
                           src={img} 
                           alt="Preview" 
                           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${idx === previewIndex ? 'opacity-80 group-hover:opacity-100' : 'opacity-0'}`}
                        />
                     ))}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                     <div className="absolute bottom-4 left-0 right-0 text-center">
                        <span className="text-white font-bold text-xs xl:text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                           Your Potential
                           <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
          
      </div>

      {/* Scroll indicator - Only visible on very large screens */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden 2xl:block z-30">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>

      {/* Full Screen Showreel Modal */}
      {isShowreelOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center animate-in fade-in duration-300">
          
          {/* Close Button */}
          <button 
            onClick={() => setIsShowreelOpen(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white z-50 p-2 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Main Carousel Area */}
          <div className="relative w-full max-w-[90vw] aspect-video px-4 md:px-0 flex items-center justify-center">
            
            {/* Image */}
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border border-white/10">
               <img 
                 src={highlightImages[currentSlide]} 
                 alt={`Showreel Slide ${currentSlide + 1}`}
                 className="w-full h-full object-cover animate-in fade-in duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
               <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-black uppercase mb-2">Experience The Elements</h3>
                  <p className="text-sm font-medium text-gray-300">Highlight {currentSlide + 1} of {highlightImages.length}</p>
               </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all backdrop-blur-sm"
            >
              <ChevronRight size={28} />
            </button>

          </div>

          {/* Thumbnails / Indicators */}
          <div className="mt-8 flex gap-3 overflow-x-auto max-w-full px-4 py-2">
            {highlightImages.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`relative w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-300 ${idx === currentSlide ? 'border-primary scale-110 shadow-lg shadow-primary/20' : 'border-transparent opacity-40 hover:opacity-100'}`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default Hero;