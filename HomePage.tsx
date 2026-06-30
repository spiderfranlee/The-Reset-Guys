import React, { useState } from 'react';
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
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistInsta, setWaitlistInsta] = useState('');
  const [waitlistTime, setWaitlistTime] = useState('Either');
  const [waitlistMsg, setWaitlistMsg] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistName.trim() || !waitlistEmail.trim() || waitlistStatus === 'submitting') return;

    setWaitlistStatus('submitting');
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1843b010-86ee-42ff-a5e2-f33a5bd4ebaf",
          subject: `2027 Waitlist Registration: ${waitlistName}`,
          name: waitlistName,
          email: waitlistEmail,
          instagram: waitlistInsta || 'Not provided',
          preferred_timeframe: waitlistTime,
          message: waitlistMsg || 'No message provided',
          from_name: "The Reset Clann Waitlist"
        }),
      });

      if (response.ok) {
        setWaitlistStatus('success');
        setWaitlistName('');
        setWaitlistEmail('');
        setWaitlistInsta('');
        setWaitlistMsg('');
      } else {
        setWaitlistStatus('error');
      }
    } catch (err) {
      console.error(err);
      setWaitlistStatus('error');
    }
  };

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

        <section id="waitlist" className="py-24 bg-dark-gray border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 tracking-widest">Waitlist Open</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-4">
                JOIN THE WAITLIST FOR <span className="text-primary">2027</span>
              </h2>
              <p className="text-gray-300 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Register your interest below to join the exclusive waitlist for our 2027 editions in Cyprus. Members on the waitlist receive 48-hour priority booking access, exclusive early-bird rates, and private invitations before public releases.
              </p>
            </div>

            <div className="p-8 md:p-10 border border-white/10 rounded-2xl bg-black/60 backdrop-blur-sm max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-primary"></div>
              
              {waitlistStatus === 'success' ? (
                <div className="text-center py-12 animate-fade-in">
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase mb-2">You are on the list!</h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed mb-6">
                    Thank you for registering. We have received your details and will send your 2027 priority access invitation directly to your inbox when bookings open.
                  </p>
                  <button 
                    onClick={() => setWaitlistStatus('idle')}
                    className="text-primary hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    Register another person
                  </button>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={waitlistName}
                        onChange={(e) => setWaitlistName(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 focus:border-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="john@example.com"
                        value={waitlistEmail}
                        onChange={(e) => setWaitlistEmail(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 focus:border-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold">Instagram Handle</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-bold">@</span>
                        <input 
                          type="text" 
                          placeholder="username"
                          value={waitlistInsta}
                          onChange={(e) => setWaitlistInsta(e.target.value)}
                          className="w-full bg-black/50 border border-white/10 focus:border-primary/50 rounded-lg pl-8 pr-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold">Preferred Timeframe</label>
                      <select 
                        value={waitlistTime}
                        onChange={(e) => setWaitlistTime(e.target.value)}
                        className="w-full bg-black/50 border border-white/10 focus:border-primary/50 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2340E0D0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                      >
                        <option value="Spring 2027">Spring 2027</option>
                        <option value="Autumn 2027">Autumn 2027</option>
                        <option value="Either">Either timeframe works</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-widest text-gray-400 font-bold">What are you hoping to achieve? (Fitness / Stress / Reconnect)</label>
                    <textarea 
                      rows={3}
                      placeholder="Tell us a bit about your fitness goals or what you're looking to reset..."
                      value={waitlistMsg}
                      onChange={(e) => setWaitlistMsg(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 focus:border-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                    ></textarea>
                  </div>

                  {waitlistStatus === 'error' && (
                    <p className="text-red-400 text-xs font-bold uppercase tracking-wide">
                      Oops! Something went wrong. Please check your network connection or try again.
                    </p>
                  )}

                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={waitlistStatus === 'submitting'}
                      className="w-full bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-widest text-sm py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_25px_rgba(64,224,208,0.3)] flex items-center justify-center gap-2"
                    >
                      {waitlistStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Securing Spot...
                        </>
                      ) : (
                        'Register Your Interest'
                      )}
                    </button>
                  </div>
                </form>
              )}
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
