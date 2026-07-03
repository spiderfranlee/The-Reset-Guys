import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.tsx';
import { Check, Star } from 'lucide-react';

import RoomsSection from './RoomsSection.tsx';

const Pricing: React.FC = () => {
  const options = [
    {
      title: 'VILLA ROOM (Shared Bathroom)',
      subtitle: '🟢 2 ROOMS AVAILABLE',
      pricingMode: 'split',
      soloPrice: '€2,569',
      sharedPrice: '€3,314',
      sharedPerPerson: '€1,657',
      deposit: '⚡ Reserve your space! Just a €350 deposit today.',
      features: [
        '1 Double Bed',
        'Shared Hot Tub Access',
        'Shared 1st Floor Terrace',
        'Shared Bathroom'
      ],
      highlight: false
    },
    {
      title: 'BUNGALOW VILLA',
      subtitle: '🟢 4 ROOMS AVAILABLE',
      pricingMode: 'split',
      soloPrice: '€2,569',
      sharedPrice: '€3,314',
      sharedPerPerson: '€1,657',
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
      title: 'Bungalow Villa (Up to 4 People)',
      subtitle: '🟢 2 ROOMS AVAILABLE',
      pricingMode: 'multi-split',
      tiers: [
        { label: 'Solo', price: '€4,679' },
        { label: 'Shared (2)', price: '€5,129', perPerson: '€2,564.50' },
        { label: 'Shared (3)', price: '€5,629', perPerson: '€1,876.33' },
        { label: 'Shared (4)', price: '€6,169', perPerson: '€1,542.25' }
      ],
      deposit: '⚡ Bring the crew! Just a €350 deposit per person today.',
      features: [
        '2 Double Beds',
        'Up to 4 People Sharing',
        'En-suite Bathroom',
        'Perfect for groups'
      ],
      highlight: false
    },
    {
      title: 'Premium Villa Suite (1-2 People, XL with Terrace, Sea View)',
      subtitle: '🟢 1 ROOM AVAILABLE',
      pricingMode: 'split',
      soloPrice: '€3,499',
      sharedPrice: '€4,514',
      sharedPerPerson: '€2,257',
      deposit: '⚡ Secure your luxury spot! Just a €350 deposit today.',
      features: [
        'XL Luxury Room',
        '1 Double Bed',
        'En-suite Bathroom',
        'Shared 1st Floor Terrace'
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
           
           {/* ROI Calculator Link */}
           <div className="max-w-3xl mx-auto mb-12 bg-white/5 border border-primary/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex flex-col items-center">
                  <p className="text-gray-300 text-sm mb-4">Wondering if it's worth it?</p>
                  <Link to="/roi" className="inline-flex items-center gap-2 bg-transparent border border-primary text-primary px-6 py-2.5 rounded hover:bg-primary/10 transition-colors uppercase tracking-[2px] font-medium text-xs lg:text-sm">
                    Calculate Your ROI
                  </Link>
                </div>
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
                   <div className="flex flex-col items-start w-full">
                      {(option as any).pricingMode === 'multi-split' ? (
                         <div className="w-full space-y-2.5">
                            {((option as any).tiers || []).map((tier: any, idx: number) => (
                               <React.Fragment key={idx}>
                                 <div className="flex flex-col">
                                    <span className="text-primary font-bold uppercase tracking-wider text-sm mb-0.5">{tier.label}</span>
                                    <div className="flex items-baseline gap-2">
                                       <span className="text-2xl font-black text-white">{tier.price}</span>
                                       {tier.perPerson && <span className="text-[10px] text-primary uppercase font-bold">Total</span>}
                                    </div>
                                    {tier.perPerson && (
                                      <span className="text-gray-300 text-xs font-medium my-0.5">({tier.perPerson} per person)</span>
                                    )}
                                 </div>
                                 {idx < ((option as any).tiers.length - 1) && (
                                   <div className="w-full h-px bg-white/10 my-1.5"></div>
                                 )}
                               </React.Fragment>
                            ))}
                         </div>
                      ) : (option as any).pricingMode === 'split' ? (
                         <div className="w-full space-y-3">
                            <div className="flex flex-col">
                               <span className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Solo</span>
                               <div className="flex items-baseline gap-2">
                                  <span className="text-3xl font-black text-white">{(option as any).soloPrice}</span>
                               </div>
                            </div>
                            <div className="w-full h-px bg-white/10 my-2"></div>
                            <div className="flex flex-col">
                               <span className="text-primary font-bold uppercase tracking-wider text-sm mb-1">Shared (2)</span>
                               <div className="flex items-baseline gap-2">
                                  <span className="text-3xl font-black text-white">{(option as any).sharedPrice}</span>
                                  <span className="text-xs text-primary uppercase font-bold">Total</span>
                                </div>
                               <span className="text-gray-300 text-sm font-medium my-0.5">({(option as any).sharedPerPerson} per person)</span>
                            </div>
                         </div>
                      ) : (
                         <>
                            <span className="text-gray-500 text-lg line-through font-medium mb-1">{(option as any).originalPrice}</span>
                            <div className="flex items-baseline mb-1">
                              <span className="text-4xl font-black text-white">{(option as any).price}</span>
                              <span className="text-gray-500 ml-2 text-sm font-medium uppercase">{(option as any).per}</span>
                            </div>
                            <div className="mt-4 w-full bg-primary/20 border-2 border-primary rounded-xl p-5 text-center shadow-[0_0_20px_rgba(204,255,0,0.3)] transform transition-all hover:scale-[1.05] hover:bg-primary/30">
                              <span className="text-primary text-2xl md:text-3xl font-black uppercase tracking-wider block leading-tight drop-shadow-md">
                                {(option as any).saveText}
                              </span>
                            </div>
                         </>
                      )}
                      {option.deposit && (
                        <span className="text-gray-400 text-sm font-medium mt-4 text-center w-full block">
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
                     onClick={() => {
                       const element = document.getElementById('waitlist');
                       if (element) {
                         element.scrollIntoView({ behavior: 'smooth' });
                         setTimeout(() => {
                           const nameInput = document.querySelector('input[placeholder="John Doe"]') as HTMLInputElement;
                           if (nameInput) nameInput.focus();
                         }, 850);
                       }
                     }}
                     className={option.highlight ? 'shadow-lg shadow-primary/20' : ''}
                   >
                     Join 2027 Waitlist
                   </Button>
                </div>
             </div>
          ))}
        </div>
        
        {/* Villa Images Section */}
        <RoomsSection />
      </div>
    </section>
  );
};

export default Pricing;
