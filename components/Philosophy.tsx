import React from 'react';
import { Wine, Dumbbell, ShieldCheck, Zap } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-dark-gray border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white mb-6 leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">YO-YO CYCLE</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                You’re reasonably fit, you’re reasonably successful, you’re reasonably healthy.
              </p>
              <p>
                So why do you feel stuck in a loop?
              </p>
              <p>
                Why do you too rarely have as much to show for all the gym sessions and nutrition efforts as you feel you should?
              </p>
              <p>
                Why does “work-life balance” too often feel like burning the candle at both ends.
              </p>
              <p>
                Why do you feel like you’re running just to keep up? You’re disciplined but you rightfully reject the idea of eating birdseed or doing an endless sequence of diets, dry Jans and detoxes just to feel human.
              </p>
              <p>
                You don't need another “health kick”; you need a circuit breaker. With our deep reset week in paradise as the paradigm-shifting turning point, we then provide the longer-term structure and support to get you aligned and focused without constantly hitting pause on the joy of living.
              </p>
              
              <h3 className="text-xl font-bold text-white uppercase mt-8 mb-2">Onboarding and follow-up</h3>
              <p>
                We’re so convinced of the above that we’ll start working with you a month before you jet off and transition into follow up support after you leave the island behind. Sustainable health isn't about 7 day detoxes or even 30-day challenges. It's about building systems that finally transform aligning health and happiness into flow, not friction.
              </p>
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
                      <p className="text-gray-300 text-sm"><strong>The Problem:</strong> Frustrated by the cycle of overindulgence, detoxes, and workouts motivated by “sweating it out” or “getting back on track”.</p>
                   </div>
                   <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/5">
                      <Dumbbell className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-300 text-sm"><strong>The Goal:</strong> Wanting to be fit and in the shape we want without living like a hermit.</p>
                   </div>
                   <div className="flex items-start gap-4 p-4 bg-primary/20 rounded-lg border border-primary/30">
                      <ShieldCheck className="text-primary flex-shrink-0 mt-1" size={20} />
                      <p className="text-white text-sm"><strong>The Solution:</strong> A life-changing few days by the sea to break the bad cycles and a longer-term support system to properly install the good ones. Accountability is the key.</p>
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