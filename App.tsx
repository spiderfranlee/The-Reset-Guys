import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Team from './components/Team';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import { Waves, Ship, Utensils, ShoppingBag, Music, Flower2, HeartPulse, Sparkles, Mountain } from 'lucide-react';

function App() {
  const extras = [
    { icon: <Waves className="text-primary" size={24} />, title: "Sunrise Stand-Up Paddle (SUP)" },
    { icon: <Ship className="text-primary" size={24} />, title: "Private Yacht Excursion" },
    { icon: <Utensils className="text-primary" size={24} />, title: "Traditional Culture & Halloumi Tasting Tour" },
    { icon: <ShoppingBag className="text-primary" size={24} />, title: "\"Farm-to-Home\" Local Market Visit" },
    { icon: <Music className="text-primary" size={24} />, title: "Poolside Sunset Live Music & Open Bar" },
    { icon: <Flower2 className="text-primary" size={24} />, title: "Yoga Session" },
    { icon: <HeartPulse className="text-primary" size={24} />, title: "Massage or Rehab Treatment", desc: "Includes Sauna, Ice bath & Jacuzzi" },
    { icon: <Sparkles className="text-primary" size={24} />, title: "Fresh Sheets & Towels Service" },
    { icon: <Mountain className="text-primary" size={24} />, title: "Cliff Jumps" },
  ];

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Team />
        
        {/* What's Included Section - Changed to bg-dark-gray to alternate from Team (black) */}
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

        {/* Extra Activities Section - New Section (bg-black) */}
        <section id="extras" className="py-24 bg-black border-t border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6 text-center">
                Extra <span className="text-primary">Activities</span>
              </h2>
              <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                 Curate your perfect escape with these premium add-ons and local experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                 {extras.map((extra, index) => (
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
           </div>
        </section>

        {/* Dates Section - bg-dark-gray */}
        <section id="dates" className="py-24 bg-dark-gray border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-8">
              Upcoming <span className="text-primary">Dates</span>
            </h2>
            <div className="p-12 border border-white/10 rounded-xl bg-black/50 inline-block max-w-2xl w-full">
              <div className="mb-8">
                <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase mb-2">Next Retreat</span>
                <h3 className="text-3xl font-bold mb-2 text-white">October 15 - 22, 2024</h3>
                <p className="text-gray-400">Bali, Indonesia</p>
              </div>
              
              <div className="border-t border-white/10 pt-6 mb-8">
                <p className="text-gray-300 italic mb-4">
                  "The only way to find yourself is to lose yourself in the service of others."
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Only 4 spots remaining</p>
              </div>

              <button 
                onClick={() => document.querySelector('button[aria-label="Chat"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))}
                className="bg-white text-black font-bold py-3 px-8 rounded hover:bg-gray-200 transition-colors uppercase tracking-wider"
              >
                Inquire for Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Itinerary Section - bg-black */}
        <section id="itinerary" className="py-24 bg-black border-t border-white/5">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-12 text-center">
                Sample <span className="text-secondary">Itinerary</span>
              </h2>
              <div className="max-w-3xl mx-auto space-y-0 relative border-l border-white/10 ml-4 md:ml-auto md:mr-auto">
                 {[
                   { time: '07:00 AM', title: 'Morning Mobility & Breathwork', desc: 'Wake up the body and mind with guided protocols.' },
                   { time: '08:30 AM', title: 'Nutrient-Dense Breakfast', desc: 'Organic, locally sourced fuel for the day ahead.' },
                   { time: '10:00 AM', title: 'Strength & Conditioning', desc: 'Kettlebell mastery and functional movement patterns.' },
                   { time: '01:00 PM', title: 'Recovery Lunch & Leisure', desc: 'Time to disconnect, read, or explore the grounds.' },
                   { time: '04:00 PM', title: 'Deep Flow / Ice Bath', desc: 'Contrast therapy and guided decompression sessions.' },
                   { time: '07:00 PM', title: 'Communal Dinner', desc: 'Connecting with the tribe over exceptional food.' }
                 ].map((slot, index) => (
                   <div key={index} className="mb-10 ml-8 relative">
                     <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary border-4 border-black"></div>
                     <span className="font-bold text-primary text-sm uppercase tracking-wide block mb-1">{slot.time}</span>
                     <h3 className="text-xl font-bold text-white mb-1">{slot.title}</h3>
                     <p className="text-gray-400 text-sm">{slot.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* The Villa Section - bg-dark-gray */}
        <section id="the-villa" className="py-24 bg-dark-gray border-t border-white/5 relative">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
                    The <span className="text-primary">Villa</span>
                  </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                     Nestled in nature, our private sanctuary provides the perfect environment for focus and restoration. Complete with private training grounds, cold plunge pools, and luxury suites.
                  </p>
                  <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="text-white border-b border-primary pb-1 hover:text-primary transition-colors font-bold uppercase text-sm tracking-widest">
                    Get Directions
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Image 1 */}
                  <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                    <div className="aspect-[4/3] overflow-hidden">
                        <img 
                            src="https://github.com/spiderfranlee/images/blob/main/Aerial%20Shot.png?raw=true" 
                            alt="The Villa Aerial View" 
                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6">
                        <span className="text-white font-bold text-lg uppercase tracking-wide">Aerial View</span>
                    </div>
                  </div>

                  {/* Image 2 */}
                  <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                     <div className="aspect-[4/3] overflow-hidden">
                        <img 
                            src="https://github.com/spiderfranlee/images/blob/main/Side%20aerial%203.png?raw=true" 
                            alt="The Villa Side View" 
                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                     <div className="absolute bottom-6 left-6">
                        <span className="text-white font-bold text-lg uppercase tracking-wide">Surrounding Nature</span>
                    </div>
                  </div>

                  {/* Image 3 (New) */}
                  <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                     <div className="aspect-[4/3] overflow-hidden">
                        <img 
                            src="https://github.com/spiderfranlee/images/blob/main/Workout%20area.png?raw=true" 
                            alt="Workout Area" 
                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                     <div className="absolute bottom-6 left-6">
                        <span className="text-white font-bold text-lg uppercase tracking-wide">Private Gym</span>
                    </div>
                  </div>

                  {/* Image 4 (New) */}
                  <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                     <div className="aspect-[4/3] overflow-hidden">
                        <img 
                            src="https://github.com/spiderfranlee/images/blob/main/IMG_7452.jpeg?raw=true" 
                            alt="Villa Details" 
                            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                        />
                     </div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                     <div className="absolute bottom-6 left-6">
                        <span className="text-white font-bold text-lg uppercase tracking-wide">Relaxation Zones</span>
                    </div>
                  </div>
              </div>

           </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;