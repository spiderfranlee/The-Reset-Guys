import React from 'react';
import { Wine, Dumbbell, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-dark-gray border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Yo-Yo Cycle */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-8 leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">YO-YO CYCLE</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="font-medium text-white text-xl">
                You’re reasonably fit, you’re reasonably successful, you’re reasonably healthy. <span className="text-primary">So why do you feel stuck in a loop?</span>
              </p>
              
              <div className="pl-6 border-l-2 border-primary/50 space-y-4 py-2 my-8">
                <p className="text-gray-400 italic">"Why do you too rarely have as much to show for all the gym sessions and nutrition efforts as you feel you should?"</p>
                <p className="text-gray-400 italic">"Why does 'work-life balance' too often feel like burning the candle at both ends?"</p>
                <p className="text-gray-400 italic">"Why do you feel like you’re running just to keep up?"</p>
              </div>
              
              <p>
                You’re disciplined but you rightfully reject the idea of eating birdseed or doing an endless sequence of diets, dry Jans and detoxes just to feel human.
              </p>
              
              <p className="font-bold text-white text-xl">
                You don't need another “health kick”; you need a circuit breaker.
              </p>
              
              <p>
                Pivoting on our deep reset week in paradise as your turning point, we then provide the longer-term structure and support to get you aligned and focused without constantly hitting pause on the joy of living.
              </p>
            </div>
            
            {/* Onboarding Card */}
            <div className="mt-12 bg-black/40 border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-colors shadow-lg">
               <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
               <h3 className="text-xl font-bold text-white uppercase mb-3 flex items-center gap-2">
                 <ShieldCheck className="text-primary" size={20} />
                 Onboarding and follow-up
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed">
                 We’re so convinced of the above that we’ll start working with you a month before you jet off and transition into follow up support after you leave the island behind. Because you know by now that health isn't about 7 day detoxes or even 30-day challenges; It's about building systems that finally make aligning health and happiness feel like flow, not friction.
               </p>
            </div>
          </div>

          {/* Right Column: The Balanced Hedonist */}
          <div className="relative lg:ml-8 mt-8 lg:mt-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 transition-transform duration-500 hover:rotate-6"></div>
             <div className="relative bg-black border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-8 text-center border-b border-white/10 pb-6">
                  The <span className="text-primary">Balanced Hedonist</span>
                </h3>
                <div className="space-y-6">
                   <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="bg-black/50 p-2 rounded-lg border border-white/10 mt-0.5">
                        <Zap className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">The Problem</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Frustrated by the cycle of overindulgence, detoxes, and workouts motivated by “sweating it out” or “getting back on track”.</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="bg-black/50 p-2 rounded-lg border border-white/10 mt-0.5">
                        <Dumbbell className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">The Goal</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Wanting to be fit and in the shape we want without living like a hermit.</p>
                      </div>
                   </div>
                   
                   <div className="flex items-start gap-4 p-5 bg-primary/10 rounded-xl border border-primary/30 relative overflow-hidden">
                      <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                      <div className="bg-primary/20 p-2 rounded-lg border border-primary/30 mt-0.5 relative z-10">
                        <ShieldCheck className="text-primary" size={20} />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-wider">The Solution</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">A life-changing few days by the sea to break the bad cycles and a longer-term support system to properly install the good ones. Accountability is the key.</p>
                      </div>
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