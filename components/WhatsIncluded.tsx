import React from 'react';
import { Check, X } from 'lucide-react';

const WhatsIncluded: React.FC = () => {
  const included = [
    "7 nights luxury accommodation",
    "2 workouts a day",
    "Yoga (including sunset yoga and sunrise SUP yoga)",
    "Access to private bespoke training facility attached to villa",
    "3 coaches",
    "Extra large private pool",
    "Workshops and group discussions on health",
    "Visit to local market",
    "Cliff jumping and sea caves excursion",
    "Halloumi tasting with local artisans",
    "Sunrise stand up paddle board yoga",
    "Access to private sauna and ice bath",
    "In-house chef (all villa meals included)",
    "1 sports massage session per person",
    "Airport transfers",
    "Transport to all scheduled excursions",
    "Onboarding with calls and goal-setting from one month before",
    "3 months post-retreat follow-up support",
    "Access to private community chat"
  ];

  const notIncluded = [
    { title: "Flights", desc: "We recommend Skyscanner. You'll want to fly into Larnaca." },
    { title: "Alcohol", desc: "No ban, but this isn't a boozy holiday. Local wine in beautiful settings will be available, but drinks are separate." },
    { title: "Additional sports massage sessions", desc: "One included per person. Extra sessions available at an additional fee." },
    { title: "Meals outside the villa", desc: "Off-villa dining (like beach lunches) is separate. Groups who prefer all meals at the villa are fully covered." },
    { title: "Evening transport into Ayia Napa", desc: "We'll help coordinate group transport in and cabs back, but this is at your own cost. Covered in onboarding." }
  ];

  return (
    <section id="whats-included" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6">
            What's <span className="text-primary">Included</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here's exactly what's covered — no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Included Card */}
          <div className="bg-dark-gray border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="text-primary" size={28} strokeWidth={3} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">Included</h3>
            </div>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <Check className="text-primary" size={20} strokeWidth={3} />
                  </div>
                  <span className="text-gray-300 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Included Card */}
          <div className="bg-dark-gray border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="text-red-500" size={28} strokeWidth={3} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">Not Included</h3>
            </div>
            <ul className="space-y-6">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <X className="text-red-500" size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-white font-bold block mb-1">{item.title}</span>
                    <span className="text-gray-400 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
