import React from 'react';
import { Wine, Dumbbell, ShieldCheck, Zap } from 'lucide-react';

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

export default Philosophy;