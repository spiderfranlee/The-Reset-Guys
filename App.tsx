import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Philosophy from './components/Philosophy.tsx';
import Team from './components/Team.tsx';
import Pricing from './components/Pricing.tsx';
import ChatWidget from './components/ChatWidget.tsx';
import Footer from './components/Footer.tsx';
import { Waves, Ship, Utensils, ShoppingBag, Music, Flower2, HeartPulse, Mountain } from 'lucide-react';

// Main Application Container
const App: React.FC = () => {
  // Configuration for extra activities
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
        
        <section id="whats-included" className="py-24 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-black mb-12 text-center">
              What's <span className="text-primary">Included</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {['Luxury Accommodation', 'Epic Feasts & Nutrition', 'Expert Coaching', 'Daily Recovery', 'Airport Transfers', 'Welcome Gear'].map((item) => (
                <div key={item} className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors group shadow-sm hover:shadow-md">
                   <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">{item}</h3>
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
                <p className="text-gray-400 font-bold uppercase tracking-widest">Ayia Napa, Cyprus</p>
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

export default App;