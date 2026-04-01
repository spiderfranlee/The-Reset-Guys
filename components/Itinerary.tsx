import React from 'react';
import { ChefHat } from 'lucide-react';

const itineraryData = [
  {
    dayName: 'MON 9th',
    dayNumber: 'Day 1',
    headerColor: 'bg-[#389189]',
    textColor: 'text-[#389189]',
    events: [
      { time: 'Transfers &\nArrivals', title: 'Transfers from airport (subject to suitable arrival day and time)' },
      { time: 'Evening', title: 'Welcome, get settled in. Rest up for what\'s in store.' }
    ]
  },
  {
    dayName: 'TUE 10th',
    dayNumber: 'Day 2',
    headerColor: 'bg-[#d66144]',
    textColor: 'text-[#d66144]',
    events: [
      { time: '07:30-09:00', title: 'Training' },
      { time: '09:30-12:45', title: 'Breakfast ✦\ndowntime' },
      { time: '13:00-14:00', title: 'Run and Cliff jump.\nLunch at the beach' },
      { time: '17:00-19:00', title: 'Training' },
      { time: '20:00-21:00', title: 'Dinner ✦' }
    ]
  },
  {
    dayName: 'WED 11th',
    dayNumber: 'Day 3',
    headerColor: 'bg-[#389189]',
    textColor: 'text-[#389189]',
    events: [
      { time: '07:30-09:00', title: 'Training' },
      { time: '09:30-12:45', title: 'Breakfast ✦\ndowntime' },
      { time: '13:00-16:00', title: 'Fig Tree Bay\nLunch at the beach' },
      { time: '17:00-19:00', title: 'Training' },
      { time: '20:00-21:00', title: 'Dinner ✦' }
    ]
  },
  {
    dayName: 'THU 12th',
    dayNumber: 'Day 4',
    headerColor: 'bg-[#c59a45]',
    textColor: 'text-[#c59a45]',
    events: [
      { time: '06:00', title: 'Sunrise SUP' },
      { time: '09:00 - 12:45', title: 'Breakfast ✦\ndowntime' },
      { time: '10:00-13:00', title: 'Rehab Session' },
      { time: '15:00-16:00', title: 'Lunch' },
      { time: '16:30-18:00', title: 'Halloumi tasting visit' },
      { time: '18:30-19:30', title: 'Sunset Yoga' },
      { time: '20:00', title: 'BBQ Dinner ✦' }
    ]
  },
  {
    dayName: 'FRI 13th',
    dayNumber: 'Day 5',
    headerColor: 'bg-[#d66144]',
    textColor: 'text-[#d66144]',
    events: [
      { time: '07:30-09:00', title: 'Training' },
      { time: '09:30-12:45', title: 'Breakfast ✦\ndowntime' },
      { time: '11:30-15:30', title: 'Nissi Beach\nLunch at the Beach' },
      { time: '17:00-19:00', title: 'Training' },
      { time: 'Evening', title: 'Dinner ✦ + Poolside DJ set' }
    ]
  },
  {
    dayName: 'SAT 14th',
    dayNumber: 'Day 6',
    headerColor: 'bg-[#389189]',
    textColor: 'text-[#389189]',
    events: [
      { time: '08:00-09:00', title: 'Training' },
      { time: '09:30-12:45', title: 'Breakfast ✦\ndowntime' },
      { time: '11:00-14:30', title: 'Landa Beach\nLunch at the Beach' },
      { time: '17:00-19:00', title: 'Training' },
      { time: '20:00', title: 'Dinner ✦' }
    ]
  },
  {
    dayName: 'SUN 15th',
    dayNumber: 'Day 7',
    headerColor: 'bg-[#b83b32]',
    textColor: 'text-[#b83b32]',
    events: [
      { time: '07:30', title: 'Trail Run + Swim' },
      { time: '09:00', title: 'Downtime' },
      { time: '09:30-10:30', title: 'Breakfast ✦' },
      { time: '15:00', title: 'Lunch' },
      { time: '16:00-18:30', title: 'Boat Trip' },
      { time: '20:00', title: 'Dinner ✦' }
    ]
  }
];

const Itinerary: React.FC = () => {
  return (
    <section id="itinerary" className="py-24 bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Weekly <span className="text-primary">Itinerary</span>
          </h2>
          <div className="flex items-center gap-2 mt-4 md:mt-0 text-[#389189] font-medium italic">
            <span className="text-xl">✦</span> = In-house chef
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {itineraryData.map((day, dayIndex) => (
            <div key={dayIndex} className="flex flex-col bg-[#222222] rounded-lg overflow-hidden border border-white/5">
              {/* Header */}
              <div className={`${day.headerColor} p-4 text-center`}>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none mb-1">
                  {day.dayName}
                </h3>
                <p className="text-white/90 font-medium text-sm uppercase tracking-widest">
                  {day.dayNumber}
                </p>
              </div>

              {/* Events */}
              <div className="flex flex-col p-4 gap-6">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex flex-col">
                    <span className={`${day.textColor} font-bold text-sm md:text-base whitespace-pre-line mb-1`}>
                      {event.time}
                    </span>
                    <span className="text-white text-sm md:text-base whitespace-pre-line font-medium leading-snug">
                      {event.title.split('✦').map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && <span className="text-[#389189] text-lg">✦</span>}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
