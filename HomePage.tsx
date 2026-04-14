import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Philosophy from './components/Philosophy.tsx';
import Team from './components/Team.tsx';
import Pricing from './components/Pricing.tsx';
import WhatsIncluded from './components/WhatsIncluded.tsx';
import Itinerary from './components/Itinerary.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import Footer from './components/Footer.tsx';
import { Waves, Ship, Utensils, ShoppingBag, Music, Flower2, HeartPulse, Mountain } from 'lucide-react';

const HomePage: React.FC = () => {
  const extras = [
    { 
      icon: <Waves className="text-primary" size={24} />, 
      title: "Sunrise Stand-Up Paddle (SUP)",
      image: "https://media.theresetclann.com/Paddle.png"
    },
    { 
      icon: <Ship className="text-primary" size={24} />, 
      title: "Private Yacht Excursion",
      image: "https://media.theresetclann.com/Yacht%20Trip.jpg"
    },
    { 
      icon: <ShoppingBag className="text-primary" size={24} />, 
      title: "\"Farm-to-Home\" Local Market Visit",
      image: "https://media.theresetclann.com/Market.jpg"
    },
    { 
      icon: <Utensils className="text-primary" size={24} />, 
      title: "Traditional Culture & Halloumi Tasting Tour",
      image: "https://media.theresetclann.com/Hallo.jpg"
    },
    { 
      icon: <Flower2 className="text-primary" size={24} />, 
      title: "Yoga Session",
      image: "https://media.theresetclann.com/Cliffs%202.jpg"
    },
    { 
      icon: <Music className="text-primary" size={24} />, 
      title: "Poolside Sunset Live Music & Open Bar",
      image: "https://media.theresetclann.com/Poolside%20party.jpg"
    },
    { 
      icon: <HeartPulse className="text-primary" size={24} />, 
      title: "Massage or Rehab Treatment", 
      desc: "Includes Sauna, Ice bath & Jacuzzi",
      image: "https://media.theresetclann.com/massage.jpg"
    },
    { 
      icon: <Mountain className="text-primary" size={24} />, 
      title: "Cliff Jumps",
      image: "https://media.theresetclann.com/Cliff%20jumps.jpg"
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
        <Team />
        <WhatsIncluded />

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
                <h3 className="text-3xl font-bold mb-2 text-white italic uppercase">November 9 - 16, 2026</h3>
                <p className="text-gray-400 font-bold uppercase tracking-widest">Ayia Napa, Cyprus</p>
              </div>
            </div>
          </div>
        </section>

        <Itinerary />

        <Pricing />
        
        <Philosophy />
        
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default HomePage;
