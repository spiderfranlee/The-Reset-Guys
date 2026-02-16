import React from 'react';
import Button from './Button';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const options = [
    {
      title: 'Buddy Suite Share',
      subtitle: '4 Spots Available',
      price: '€2,199',
      per: '/ person',
      totalValue: 'Total Room Value: €8,796',
      features: [
        'Shared Luxury Suite',
        '2 Queen Beds',
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
      {/* Background decorations */}
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
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
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

export default Pricing;