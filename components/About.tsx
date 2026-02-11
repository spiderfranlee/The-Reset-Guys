import React from 'react';

const About: React.FC = () => {
  const highlights = [
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%201.png?raw=true",
      text: "Train with ocean views, using sandbags, kettlebells, and bodyweight drills just steps from the sand."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Side%20aerial%203.png?raw=true", 
      text: "Unwind in a luxury beachfront villa, with an infinity pool & private beach access."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%202.png?raw=true",
      text: "Feast on locally-inspired cuisine, with fresh seafood, local flavors, and open-fire cooking served up by your private chef."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%20yoga%202.png?raw=true",
      text: "Head off the beaten path for an epic hike through the jungle to the waterfalls of Montezuma. Think lush rainforest, natural swimming holes, and a chef-prepped picnic lunch by the falls."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Cliffs%20yoga%203.png?raw=true",
      text: "Enjoy surf lessons at Playa Hermosa – one of Costa Rica’s most iconic beach breaks."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/yacht1.jpeg?raw=true",
      text: "Embark on a private yacht excursion to discover hidden coves and experience the coastline from a new perspective.",
      position: "object-bottom"
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/yacht2.jpeg?raw=true",
      text: "Enjoy ultimate relaxation on the open sea, complete with snorkeling, swimming, and sunset views.",
      position: "object-top"
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/Workout%20area.png?raw=true",
      text: "Access our private, fully equipped outdoor training facility designed for functional strength and conditioning."
    },
    {
      image: "https://github.com/spiderfranlee/images/blob/main/IMG_7452.jpeg?raw=true",
      text: "Experience premium living spaces designed for recovery, connection, and deep rest between sessions."
    }
  ];

  return (
    <section id="overview" className="py-24 bg-black relative">
       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-16 text-center md:text-left tracking-tighter">
            The <span className="text-primary">Highlights</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col h-full bg-dark-gray border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-lg">
                <div className="h-64 sm:h-72 xl:h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={item.image} 
                    alt={`Highlight ${index + 1}`}
                    className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${item.position || 'object-center'}`}
                  />
                </div>
                <div className="p-6 flex-1 flex items-start bg-dark-gray relative z-20">
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default About;