import React, { useState, useEffect } from 'react';
import Button from './Button.tsx';
import { Check, Star, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the date we're counting down to (March 31st, 2026 23:59:59)
    const countDownDate = new Date("Mar 31, 2026 23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = [
    {
      title: '4 Person Room Share',
      subtitle: '4 Spots Available',
      price: '€2,199',
      originalPrice: '€2,599',
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
      originalPrice: '€2,899',
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
      originalPrice: '€3,399',
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
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
             Secure Your <span className="text-primary">Spot</span>
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
             Choose the accommodation that fits your style. All packages include the full retreat experience.
           </p>
           
           {/* Countdown Timer */}
           <div className="max-w-3xl mx-auto mb-12 bg-white/5 border border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="text-primary animate-pulse" size={24} />
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
                    Early Bird Offer Ends In
                  </h3>
                </div>
                
                <div className="grid grid-cols-4 gap-4 md:gap-8 w-full max-w-2xl">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-full aspect-square bg-black/50 border border-white/10 rounded-xl flex items-center justify-center mb-2 shadow-lg relative overflow-hidden">
                        <div className="absolute inset-x-0 top-1/2 h-px bg-white/10"></div>
                        <span className="text-3xl md:text-5xl font-black text-primary font-mono relative z-10">
                          {item.value.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 text-primary font-bold uppercase tracking-wider text-sm md:text-base animate-pulse">
                  ⚡ Save €400 until March 31st
                </p>
              </div>
           </div>
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
                   <div className="flex flex-col items-start">
                      <span className="text-gray-500 text-lg line-through font-medium mb-1">{option.originalPrice}</span>
                      <div className="flex items-baseline">
                        <span className="text-4xl font-black text-white">{option.price}</span>
                        <span className="text-gray-500 ml-2 text-sm font-medium uppercase">{option.per}</span>
                      </div>
                      <span className="text-primary text-xs font-bold uppercase tracking-wider mt-2 bg-primary/10 px-2 py-1 rounded">
                        Save €400
                      </span>
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
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;