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
      title: 'PREMIUM VILLA SUITE',
      subtitle: '🟢 1 ROOM AVAILABLE',
      price: '€3,000',
      originalPrice: '€3,510',
      per: '/ ROOM',
      saveText: 'OR €1,755 / PERSON SHARING',
      deposit: '⚡ Secure your luxury spot! Just a €350 deposit today.',
      features: [
        'XL Luxury Room',
        '1 Double Bed',
        'En-suite Bathroom',
        'Shared 1st Floor Terrace'
      ],
      highlight: true
    },
    {
      title: 'PRIVATE EN-SUITE ROOM',
      subtitle: '🟢 5 ROOMS AVAILABLE',
      price: '€2,200',
      originalPrice: '€2,574',
      per: '/ ROOM',
      saveText: 'OR €1,287 / PERSON SHARING',
      deposit: '⚡ Lock in your fitness getaway! Just a €350 deposit today.',
      features: [
        'Private Room',
        '1 Double Bed',
        'En-suite Bathroom',
        'Patio / Garden Access'
      ],
      highlight: false
    },
    {
      title: 'BUNGALOW (GROUP SHARE)',
      subtitle: '🟢 2 ROOMS AVAILABLE',
      price: '€4,000',
      originalPrice: '€4,680',
      per: '/ ROOM',
      saveText: 'OR €1,170 / PERSON SHARING',
      deposit: '⚡ Bring the crew! Just a €350 deposit per person today.',
      features: [
        '2 Double Beds',
        '4 People Sharing',
        'En-suite Bathroom',
        'Perfect for groups'
      ],
      highlight: false
    },
    {
      title: 'SHARED BATHROOM VILLA',
      subtitle: '🟢 2 ROOMS AVAILABLE',
      price: '€2,200',
      originalPrice: '€2,574',
      per: '/ ROOM',
      saveText: 'OR €1,287 / PERSON SHARING',
      deposit: '⚡ Reserve your space! Just a €350 deposit today.',
      features: [
        '1 Double Bed',
        'Shared Hot Tub Access',
        'Shared 1st Floor Terrace',
        'Shared Bathroom'
      ],
      highlight: false
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
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
                        {option.saveText}
                      </span>
                      {option.deposit && (
                        <span className="text-gray-400 text-xs font-medium mt-2">
                          {option.deposit}
                        </span>
                      )}
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
                     onClick={() => window.open('https://checkout.revolut.com/pay/a65ebcc8-93ae-4e6b-905a-657b2cbcb4c6', '_blank')}
                     className={option.highlight ? 'shadow-lg shadow-primary/20' : ''}
                   >
                     Book Now
                   </Button>
                </div>
             </div>
          ))}
        </div>
        
        {/* Villa Images Section */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-black uppercase text-white mb-4">
              Inside <span className="text-primary">The Rooms</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Take a look at the luxury accommodations waiting for you. Please confirm if you have a room preference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
              <img 
                src="https://github.com/spiderfranlee/images/blob/main/Cape%20Serenity%20Room%201.png?raw=true" 
                alt="Cape Serenity Room 1" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Available
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-bold text-white">Cape Serenity Room 1</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
              <img 
                src="https://github.com/spiderfranlee/images/blob/main/Cape%20Serenity%20Room%202.png?raw=true" 
                alt="Cape Serenity Room 2" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Available
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-bold text-white">Cape Serenity Room 2</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
              <img 
                src="https://github.com/spiderfranlee/images/blob/main/Cape%20Serenity%20Room%203.png?raw=true" 
                alt="Cape Serenity Room 3" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Available
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-bold text-white">Cape Serenity Room 3</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
              <img 
                src="https://github.com/spiderfranlee/images/blob/main/Cape%20Serenity%20Room%204.png?raw=true" 
                alt="Cape Serenity Room 4" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Available
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-bold text-white">Cape Serenity Room 4</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
              <img 
                src="https://github.com/spiderfranlee/images/blob/main/Cape%20Serenity%20Room%205.png?raw=true" 
                alt="Cape Serenity Room 5" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Available
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-bold text-white">Cape Serenity Room 5</h4>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
              <img 
                src="https://github.com/spiderfranlee/images/blob/main/Cape%20Serenity%20Room%206.png?raw=true" 
                alt="Cape Serenity Room 6" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                Available
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="text-xl font-bold text-white">Cape Serenity Room 6</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;