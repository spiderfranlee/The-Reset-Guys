import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Menu, X, ArrowRight, Play, ChevronLeft, ChevronRight, 
  Check, Star, Wine, Dumbbell, ShieldCheck, Zap, 
  Instagram, Mail, Send, Loader2, 
  Waves, Ship, Utensils, ShoppingBag, Music, Flower2, HeartPulse, Mountain 
} from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

// Ensure process is treated as a global for TypeScript
declare var process: any;

// --- TYPES ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

// --- COMPONENTS ---

// 1. Button Component
const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-base font-bold uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 hover:shadow-lg hover:shadow-primary/20",
    secondary: "bg-secondary text-white hover:bg-opacity-90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// 2. Navbar Component
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Highlights', href: '#highlights' },
    { name: 'Overview', href: '#overview' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Team', href: '#team' },
    { name: 'Included', href: '#whats-included' },
    { name: 'Extras', href: '#extras' },
    { name: 'Dates', href: '#dates' },
    { name: 'Itinerary', href: '#itinerary' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Villa', href: '#the-villa' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col leading-none group">
              <span className="text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-primary transition-colors duration-300">
                CIRCUIT BREAKER
              </span>
              <span className="text-[0.65rem] font-bold tracking-[0.3em] text-gray-400 uppercase mt-1 ml-0.5 group-hover:text-white transition-colors duration-300">
                by The Reset Clann
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary font-bold uppercase tracking-wide text-xs xl:text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-bold text-white hover:text-primary hover:bg-white/5 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// 3. Hero Component
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
    }, 2000); 
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
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-60"
          src="https://github.com/spiderfranlee/images/blob/244eed999f327cfc95480adc6d9af5587d6bd989/Homepage%20low%20res.mp4?raw=true"
        >
          <div className="w-full h-full bg-dark-gray flex items-center justify-center">
            <p className="text-white">Video Placeholder</p>
          </div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center pt-32 pb-20">
          <div className="w-full max-w-5xl text-center z-10 mb-16"> 
            <div className="pointer-events-auto">
              <h2 className="text-primary font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in-up">
                FITNESS & LUXURY RETREAT
              </h2>
              
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter mb-8 leading-none drop-shadow-2xl">
                THE RESET <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">YOU NEED</span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 font-medium leading-relaxed">
                The ultimate circuit breaker. High-performance training meets high-quality downtime. Break the cycle of stress and hangovers without giving up the good life.
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

          <div className="w-full max-w-6xl z-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div 
               onClick={() => setIsShowreelOpen(true)}
               className="group relative cursor-pointer w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-black/60 hover:border-primary/50 transition-all duration-500 shadow-2xl transform hover:scale-[1.01]"
            >
               <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-8 h-auto md:h-80 lg:h-96">
                  <div className="flex md:flex-col flex-row items-center md:items-start justify-between md:justify-center gap-4 py-2 px-2 md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-white/10 md:pr-6">
                     <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
                       <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full border border-white/30 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300">
                          <Play size={28} className="ml-1" fill="currentColor" />
                       </div>
                       <div>
                         <span className="text-2xl md:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-none block">Play<br/>Showreel</span>
                       </div>
                     </div>
                     <p className="text-gray-400 text-sm xl:text-base mt-0 md:mt-auto group-hover:text-white transition-colors">Watch the experience</p>
                  </div>

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

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden 2xl:block z-30">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>

      {isShowreelOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button 
            onClick={() => setIsShowreelOpen(false)}
            className="absolute top-6 right-6 text-white/50 hover:text-white z-50 p-2 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-[90vw] aspect-video px-4 md:px-0 flex items-center justify-center">
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

// 4. Pricing Component
const Pricing: React.FC = () => {
  const options = [
    {
      title: '4 Person Room Share',
      subtitle: '4 Spots Available',
      price: '€2,199',
      per: '/ person',
      totalValue: 'Total Room Value: €8,796',
      features: [
        'Shared Luxury Suite',
        '4 Single Beds / Bunks',
        'En-suite Bathroom',
        'Garden View'
      ],
      highlight: false
    },
    {
      title: 'Private Room Share',
      subtitle: '4 Spots Available',
      price: '€2,499',
      per: '/ person',
      totalValue: 'Total Room Value: €9,996',
      features: [
        'Private Luxury Room',
        'King Size Bed',
        'Shared Villa Common Areas',
        'Ocean Peek View'
      ],
      highlight: false
    },
    {
      title: 'Ultimate Solo Private',
      subtitle: '4 Spots Available',
      price: '€2,999',
      per: '/ person',
      totalValue: 'Total Room Value: €11,996',
      features: [
        'Entire Private Suite',
        'Private Balcony',
        'Premium Ocean View',
        'Priority Booking'
      ],
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-dark-gray border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
             Secure Your <span className="text-primary">Spot</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Choose the accommodation that fits your style. All packages include the full retreat experience.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {options.map((option, index) => (
             <div 
               key={index} 
               className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 group ${
                 option.highlight 
                   ? 'bg-white/5 border-primary shadow-2xl shadow-primary/10 transform lg:-translate-y-4 z-10' 
                   : 'bg-black border-white/10 hover:border-white/30 hover:bg-white/5'
               }`}
             >
                {option.highlight && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg flex items-center gap-2">
                    <Star size={12} fill="currentColor" /> Premium Choice
                  </div>
                )}
                
                <div className="mb-6">
                   <h3 className="text-xl font-bold text-white uppercase mb-2">{option.title}</h3>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                     <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                     <span className="text-xs font-bold uppercase tracking-wide text-gray-300">{option.subtitle}</span>
                   </div>
                </div>

                <div className="mb-8 pb-8 border-b border-white/10">
                   <div className="flex items-baseline">
                      <span className="text-4xl font-black text-white">{option.price}</span>
                      <span className="text-gray-500 ml-2 text-sm font-medium uppercase">{option.per}</span>
                   </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                   {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                         <div className={`mt-0.5 p-0.5 rounded-full ${option.highlight ? 'bg-primary text-black' : 'bg-white/10 text-primary'}`}>
                            <Check size={12} strokeWidth={3} />
                         </div>
                         {feature}
                      </li>
                   ))}
                </ul>

                <div className="mt-auto">
                   <Button 
                     variant={option.highlight ? 'primary' : 'outline'} 
                     fullWidth 
                     onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                     className={option.highlight ? 'shadow-lg shadow-primary/20' : ''}
                   >
                     Book Now
                   </Button>
                   <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-4 opacity-60 group-hover:opacity-100 transition-opacity">
                      {option.totalValue}
                   </p>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. About Component
const About: React.FC = () => {
  const highlights = [
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%201.png?raw=true",
      text: "Train with ocean views, using sandbags, kettlebells, and bodyweight drills just steps from the sand."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Side%20aerial%203.png?raw=true", 
      text: "Unwind in a luxury beachfront villa, with an infinity pool & private beach access."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%202.png?raw=true",
      text: "Feast on locally-inspired cuisine, with fresh seafood, local flavors, and open-fire cooking served up by your private chef."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%20yoga%202.png?raw=true",
      text: "Head off the beaten path for an epic hike through the jungle to the waterfalls of Montezuma. Think lush rainforest, natural swimming holes, and a chef-prepped picnic lunch by the falls."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%20yoga%203.png?raw=true",
      text: "Enjoy surf lessons at Playa Hermosa – one of Costa Rica’s most iconic beach breaks."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/yacht1.jpeg?raw=true",
      text: "Embark on a private yacht excursion to discover hidden coves and experience the coastline from a new perspective.",
      position: "object-bottom"
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/yacht2.jpeg?raw=true",
      text: "Enjoy ultimate relaxation on the open sea, complete with snorkeling, swimming, and sunset views.",
      position: "object-top"
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Workout%20area.png?raw=true",
      text: "Access our private, fully equipped outdoor training facility designed for functional strength and conditioning."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/IMG_7452.jpeg?raw=true",
      text: "Experience premium living spaces designed for recovery, connection, and deep rest between sessions."
    }
  ];

  return (
    <section id="overview" className="py-24 bg-black relative">
       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-16 text-center md:text-left tracking-tighter">
            The <span className="text-primary">Highlights</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col h-full bg-dark-gray border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-lg">
                <div className="h-64 sm:h-72 xl:h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={item.image} 
                    alt={`Highlight ${index + 1}`}
                    className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${item.position || 'object-center'}`}
                  />
                </div>
                <div className="p-6 flex-1 flex items-start bg-dark-gray relative z-20">
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

// 6. Philosophy Component
const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-dark-gray border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-6 leading-tight">
              Stop The <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Yo-Yo Cycle</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              You’re fit, you’re successful, but you’re stuck. The "work hard, play hard" motto has turned into "work hard, recover harder."
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We know you. You value a great steak and a cold beer. You reject the idea of eating birdseed or going sober for a month just to feel human again. You don't need a detox; you need a <strong>circuit breaker</strong>. We provide the structure to get you back on track without stripping away the joy of living.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                    <Wine size={24} />
                 </div>
                 <div>
                    <h3 className="text-white font-bold uppercase text-lg">Enjoy The Ride</h3>
                    <p className="text-sm text-gray-400">We believe in earning your indulgences. Train hard in the morning so you can enjoy the sunset with a drink in hand, guilt-free.</p>
                 </div>
              </div>
              
              <div className="flex gap-4">
                 <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                    <ShieldCheck size={24} />
                 </div>
                 <div>
                    <h3 className="text-white font-bold uppercase text-lg">No Extremes</h3>
                    <p className="text-sm text-gray-400">Sustainable health isn't about 30-day challenges. It's about building systems that fit your real life.</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
             <div className="relative bg-black border border-white/10 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-black uppercase text-white mb-8 text-center border-b border-white/10 pb-4">
                  The <span className="text-primary">Balanced Hedonist</span>
                </h3>
                <div className="space-y-6">
                   <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                      <Zap className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-300 text-sm"><strong>The Problem:</strong> Frustrated by the cycle of overindulgence, hangovers, and missed workouts.</p>
                   </div>
                   <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                      <Dumbbell className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-300 text-sm"><strong>The Goal:</strong> Wanting to be fit and capable without living like a monk.</p>
                   </div>
                   <div className="flex items-start gap-4 p-4 bg-primary/20 rounded-lg border border-primary/30">
                      <ShieldCheck className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-white text-sm"><strong>The Solution:</strong> A structured environment to break the bad habits and reinstall the good ones. Accountability is the key.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// 7. Team Component
const Team: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="team" className="py-24 bg-black border-t border-white/5 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
              Meet The <span className="text-primary">Guides</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Expert practitioners dedicated to your physical and mental evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
             {/* Guide 1 - Dev */}
             <div className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-8 bg-dark-gray border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                   <img 
                      src="https://github.com/spiderfranlee/images/blob/main/Dev%20Profile%20Reset.png?raw=true"
                      alt="Dev"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white uppercase mb-1">Dev</h3>
                      <p className="text-primary font-bold tracking-wider text-xs uppercase">Strength & Performance</p>
                   </div>
                </div>
                
                <div className="space-y-6">
                   <p className="text-gray-400 leading-relaxed">
                      Specializing in building bodies that can handle real life. His approach bridges the gap between elite performance and longevity. He focuses on bio-mechanics and strength standards that allow you to train hard in the gym so you can play hard on the weekends without breaking down.
                   </p>
                   
                   <div 
                     onClick={() => setActiveVideo("https://github.com/spiderfranlee/images/blob/c08d3c108eb1bc5690a76da61ff6911dcc185f3b/Dev_sBioVid.mp4?raw=true")}
                     className="relative overflow-hidden rounded-lg bg-dark-gray border border-white/10 aspect-video group/video cursor-pointer hover:border-primary/50 transition-colors shadow-lg"
                   >
                      <video 
                        src="https://github.com/spiderfranlee/images/blob/c08d3c108eb1bc5690a76da61ff6911dcc185f3b/Dev_sBioVid.mp4?raw=true"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-90 group-hover/video:opacity-100 transition-opacity"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/10 transition-colors flex items-center justify-center">
                         <div className="w-14 h-14 rounded-full bg-primary/90 text-black flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform">
                            <Play size={24} fill="currentColor" className="ml-1" />
                         </div>
                      </div>

                      <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded text-xs text-white font-bold uppercase tracking-wider border border-white/10">
                        Watch Bio
                      </div>
                   </div>
                </div>
             </div>

             {/* Guide 2 - Fran */}
             <div className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-8 bg-dark-gray border border-white/10 group-hover:border-secondary/50 transition-colors duration-500">
                   <img 
                      src="https://github.com/spiderfranlee/images/blob/main/Fran%20Reset%20Pic.png?raw=true" 
                      alt="Fran"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white uppercase mb-1">Fran</h3>
                      <p className="text-secondary font-bold tracking-wider text-xs uppercase">Recovery & Mindset</p>
                   </div>
                </div>
                
                <div className="space-y-6">
                   <p className="text-gray-400 leading-relaxed">
                      The calm amidst the chaos. He specializes in nervous system regulation and somatic practices, teaching you how to actively down-regulate stress. His methods are the antidote to the "always on" culture, helping you clear the brain fog and enjoy your downtime fully.
                   </p>
                   
                   <div className="relative overflow-hidden rounded-lg bg-dark-gray border border-white/10 p-4 flex items-center gap-4 group/video cursor-not-allowed opacity-50">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                         <Play size={20} fill="currentColor" />
                      </div>
                      <div className="flex-1">
                         <p className="text-white font-bold text-sm uppercase">Watch Bio Video</p>
                         <p className="text-xs text-gray-500">Coming Soon</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {activeVideo && (
         <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <button 
              onClick={() => setActiveVideo(null)} 
              className="absolute top-6 right-6 text-white/50 hover:text-white z-[110] p-2 transition-colors"
            >
               <X size={32} />
            </button>
            
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
               <video 
                  src={activeVideo} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
               />
            </div>
         </div>
       )}
    </section>
  );
};

// 8. ChatWidget Component
const ConciergeIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2.5C9.5 2.5 7.5 4.5 7.5 7C7.5 9.5 9.5 11.5 12 11.5C14.5 11.5 16.5 9.5 16.5 7C16.5 4.5 14.5 2.5 12 2.5Z" />
    <path d="M9.5 13.5L7.5 14.5L9.5 15.5" />
    <path d="M14.5 13.5L16.5 14.5L14.5 15.5" />
    <rect x="9.5" y="13.5" width="5" height="2" rx="0.5" />
    <path d="M5 21V17C5 15.3431 6.34315 14 8 14H16C17.6569 14 19 15.3431 19 17V21" />
    <path d="M9 14L12 18L15 14" />
  </svg>
);

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Welcome to The Reset Clann. I'm your concierge. How can I help you reclaim your edge today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      if (!GoogleGenAI) {
        throw new Error("GoogleGenAI SDK not loaded");
      }

      if (!chatSessionRef.current) {
        const apiKey = typeof process !== 'undefined' ? process.env?.API_KEY : undefined;

        if (!apiKey) {
           console.error("API Key not found in process.env.API_KEY");
           setMessages(prev => [...prev, { role: 'model', text: "I'm currently unable to connect to the server (Configuration Missing). Please email us at theresetclann@gmail.com." }]);
           setIsLoading(false);
           return;
        }
        
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const bookingTool = {
          functionDeclarations: [{
            name: "book_retreat",
            description: "Sends customer booking details (Name, Email, Details) to The Reset Clann admin team.",
            parameters: {
              type: Type.OBJECT,
              properties: {
                customer_name: { type: Type.STRING, description: "The full name of the customer." },
                customer_email: { type: Type.STRING, description: "The customer's email address." },
                details: { type: Type.STRING, description: "Any specific questions, dates, or requests." }
              },
              required: ["customer_name", "customer_email"]
            }
          }]
        };

        chatSessionRef.current = ai.chats.create({
          model: "gemini-3-flash-preview",
          config: {
            systemInstruction: "You are the Concierge AI for 'The Reset Clann', a luxury wellness and adventure retreat. Your tone is exclusive, professional, but friendly (like a high-end hotel concierge). Your goal is to collect the user's Name, Email, and any questions so you can book them using the 'book_retreat' tool. Do not ask for phone numbers. Be concise.",
            tools: [bookingTool]
          }
        });
      }

      const chat = chatSessionRef.current;
      let response = await chat.sendMessage({ message: userMessage });
      
      while (response.functionCalls && response.functionCalls.length > 0) {
         const functionResponseParts = [];
         
         for (const call of response.functionCalls) {
            console.log("Simulating Booking Tool Execution:", call.name, call.args);
            functionResponseParts.push({
               functionResponse: {
                  name: call.name,
                  response: { result: "Booking request received successfully." },
                  id: call.id
               }
            });
         }
         
         response = await chat.sendMessage({ message: functionResponseParts });
      }

      setMessages(prev => [...prev, { role: 'model', text: response.text || "I've noted that down." }]);

    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage = "I'm having a little trouble connecting right now. Please try again or email us at theresetclann@gmail.com.";
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <div className="mb-2 w-96 max-w-[90vw] h-[500px] max-h-[70vh] bg-dark-gray border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 flex flex-col font-sans">
          <div className="bg-primary p-4 flex justify-between items-center shrink-0">
            <h3 className="text-white font-bold flex items-center gap-2">
              <ConciergeIcon size={32} />
              Concierge
            </h3>
            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 p-4 bg-black overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white/10 rounded-lg p-3 rounded-bl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className="text-xs text-gray-400">Thinking...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-dark-gray border-t border-white/10 shrink-0">
            <form onSubmit={handleSend} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about dates, pricing, or book..."
                className="w-full bg-black border border-white/20 rounded-full py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                autoFocus
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={14} className={isLoading ? 'opacity-0' : 'ml-0.5'} />
              </button>
            </form>
            <div className="text-center mt-2">
               <p className="text-[10px] text-gray-600">Powered by Gemini AI</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        {!isOpen && (
          <div className="bg-white text-black px-5 py-3 rounded-l-2xl rounded-tr-2xl shadow-xl animate-in fade-in slide-in-from-right-8 duration-500 relative">
             <span className="font-black uppercase tracking-widest text-sm whitespace-nowrap">At Your Service</span>
             <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-l-[10px] border-l-white border-b-[8px] border-b-transparent"></div>
          </div>
        )}

        <button
          onClick={toggleChat}
          className={`group flex items-center justify-center w-24 h-24 rounded-full shadow-2xl shadow-primary/30 transition-all duration-300 transform hover:scale-105 ${isOpen ? 'bg-white text-primary rotate-90' : 'bg-primary text-white'}`}
          aria-label="Chat"
        >
          {isOpen ? <X size={36} /> : <ConciergeIcon size={52} className="group-hover:animate-pulse" />}
        </button>
      </div>
    </div>
  );
};

// 9. Footer Component
const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-black italic uppercase text-white">
              The <span className="text-primary">Reset</span> Clann
            </h3>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The ultimate circuit breaker for high-performers. We combine elite training with luxury downtime to help you reclaim your edge without giving up the good life.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#highlights" className="hover:text-primary transition-colors">Highlights</a></li>
              <li><a href="#overview" className="hover:text-primary transition-colors">Overview</a></li>
              <li><a href="#whats-included" className="hover:text-primary transition-colors">What's Included</a></li>
              <li><a href="#dates" className="hover:text-primary transition-colors">Dates</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="mailto:theresetclann@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              theresetclann@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Reset Clann. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 10. Main App Component
const App: React.FC = () => {
  const extras = [
    { 
      icon: <Waves className="text-primary" size={24} />, 
      title: "Sunrise Stand-Up Paddle (SUP)",
      image: "https://github.com/spiderfranlee/images/blob/main/Paddle.png?raw=true"
    },
    { 
      icon: <Ship className="text-primary" size={24} />, 
      title: "Private Yacht Excursion",
      image: "https://github.com/spiderfranlee/images/blob/main/Cliff%20jumping.png?raw=true"
    },
    { 
      icon: <ShoppingBag className="text-primary" size={24} />, 
      title: "\"Farm-to-Home\" Local Market Visit",
      image: "https://github.com/spiderfranlee/images/blob/main/Market.png?raw=true"
    },
    { 
      icon: <Utensils className="text-primary" size={24} />, 
      title: "Traditional Culture & Halloumi Tasting Tour",
      image: "https://github.com/spiderfranlee/images/blob/main/Hallo.png?raw=true"
    },
    { 
      icon: <Flower2 className="text-primary" size={24} />, 
      title: "Yoga Session",
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%202.png?raw=true"
    },
    { 
      icon: <Music className="text-primary" size={24} />, 
      title: "Poolside Sunset Live Music & Open Bar",
      image: "https://github.com/spiderfranlee/images/blob/main/Poolside%20bar.png?raw=true"
    },
    { 
      icon: <HeartPulse className="text-primary" size={24} />, 
      title: "Massage or Rehab Treatment", 
      desc: "Includes Sauna, Ice bath & Jacuzzi",
      image: "https://github.com/spiderfranlee/images/blob/main/massage.jpeg?raw=true"
    },
    { 
      icon: <Mountain className="text-primary" size={24} />, 
      title: "Cliff Jumps",
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%20jumps.png?raw=true"
    },
  ];

  const featuredExtras = extras.filter(e => e.image);
  const standardExtras = extras.filter(e => !e.image);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Team />
        
        <section id="whats-included" className="py-24 bg-dark-gray border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-12 text-center">
              What's <span className="text-primary">Included</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {['Luxury Accommodation', 'Epic Feasts & Nutrition', 'Expert Coaching', 'Daily Recovery', 'Airport Transfers', 'Welcome Gear'].map((item) => (
                <div key={item} className="p-6 bg-white/5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                   <h3 className="font-bold text-lg text-gray-200">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="extras" className="py-24 bg-black border-t border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-12 text-center">
                Extra <span className="text-primary">Activities</span>
              </h2>

              {/* Featured Activities with Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                 {featuredExtras.map((extra, index) => (
                     <div key={index} className="group relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-dark-gray">
                         {/* Image */}
                         <img src={extra.image} alt={extra.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
                         
                         {/* Content */}
                         <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/90 p-3 text-black backdrop-blur-md shadow-lg shadow-primary/20">
                                {extra.icon}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2 tracking-tight">{extra.title}</h3>
                            {extra.desc && <p className="text-gray-300 font-medium">{extra.desc}</p>}
                         </div>
                     </div>
                 ))}
              </div>

              {/* Standard List of Activities */}
              {standardExtras.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                   {standardExtras.map((extra, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-dark-gray border border-white/10 hover:border-primary/40 transition-colors group">
                         <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-white/5">
                            {extra.icon}
                         </div>
                         <div>
                            <h3 className="font-bold text-white text-sm md:text-base">{extra.title}</h3>
                            {extra.desc && <p className="text-xs text-gray-500 mt-1">{extra.desc}</p>}
                         </div>
                      </div>
                   ))}
                </div>
              )}
           </div>
        </section>

        <section id="dates" className="py-24 bg-dark-gray border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8">
              Upcoming <span className="text-primary">Dates</span>
            </h2>
            <div className="p-12 border border-white/10 rounded-xl bg-black/50 inline-block max-w-2xl w-full">
              <div className="mb-8">
                <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase mb-2">Next Retreat</span>
                <h3 className="text-3xl font-bold mb-2 text-white italic uppercase">November 9 - 16, 2025</h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest">Bali, Indonesia</p>
              </div>
              <div className="border-t border-white/10 pt-6 mb-8">
                <p className="text-gray-300 italic mb-4">"The reset you need."</p>
                <p className="text-sm text-primary font-bold uppercase tracking-widest animate-pulse">Only 4 spots remaining</p>
              </div>
            </div>
          </div>
        </section>

        <section id="itinerary" className="py-24 bg-black border-t border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-12 text-center">
                Sample <span className="text-primary">Itinerary</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-0 relative border-l border-white/10 ml-4 md:ml-auto md:mr-auto">
                 {[
                   { 
                     day: 'Day 1', 
                     title: 'Arrival & Unwind', 
                     desc: 'Settle into the luxury villa (fresh sheets and towels service ready). Cliff walk to the beach and introduction.' 
                   },
                   { 
                     day: 'Day 2', 
                     title: 'Fitness & Fresh Food', 
                     desc: 'Morning training in the villa\'s private workout space. Afternoon "Farm-to-Home" Local Market Visit to source fresh ingredients.' 
                   },
                   { 
                     day: 'Day 3', 
                     title: 'Water & Adrenaline', 
                     desc: 'Sunrise Stand-Up Paddle (SUP) on the water. Afternoon Cliff Jumps.' 
                   },
                   { 
                     day: 'Day 4', 
                     title: 'Culture & Recovery', 
                     desc: 'Traditional Culture & Halloumi Tasting Tour. Afternoon Massage or Rehabilitation Treatment.' 
                   },
                   { 
                     day: 'Day 5', 
                     title: 'The VIP Experience', 
                     desc: 'Private Yacht Excursion.' 
                   },
                   { 
                     day: 'Day 6', 
                     title: 'Sweat & Celebrate', 
                     desc: 'Final training session in the villa workout space. Poolside sunset and night live music.' 
                   },
                   { 
                     day: 'Day 7', 
                     title: 'Farewell', 
                     desc: 'Morning Yoga Session to close the retreat. Check out and departure.' 
                   }
                 ].map((slot, index) => (
                   <div key={index} className="mb-10 ml-8 relative group">
                     <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary border-4 border-black group-hover:scale-110 transition-transform duration-300"></div>
                     <span className="font-bold text-primary text-sm uppercase tracking-wide block mb-1">{slot.day}</span>
                     <h3 className="text-xl font-bold text-white mb-2">{slot.title}</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">{slot.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
        
        <Pricing />
        
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

// --- ENTRY POINT ---
const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Critical Error: Failed to find the root element.");
}