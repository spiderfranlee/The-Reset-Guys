import React from 'react';

interface RoomsSectionProps {
  standalone?: boolean;
}

const RoomsSection: React.FC<RoomsSectionProps> = ({ standalone = false }) => {
  return (
    <div id="the-villa" className={`${standalone ? 'pt-8' : 'mt-24 pt-16 border-t border-white/10'} scroll-mt-24`}>
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
            src="https://media.theresetclann.com/Cape%20Serenity%20Room%201.jpg" 
            alt="Cape Serenity Room 1" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Available
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl font-bold text-white">Cape Serenity Room 1</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Cape%20Serenity%20Room%202.jpg" 
            alt="Cape Serenity Room 2" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
             <div className="bg-red-600/90 text-white font-black text-xl md:text-2xl uppercase tracking-[0.2em] py-2 px-8 transform -rotate-12 border border-white/20 shadow-2xl backdrop-blur-md">
               Reserved
             </div>
          </div>

          <div className="absolute top-4 right-4 bg-red-600/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5 z-20">
            Reserved
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <h4 className="text-xl font-bold text-white/80">Cape Serenity Room 2</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Cape%20Serenity%20Room%203.jpg" 
            alt="Cape Serenity Room 3" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
             <div className="bg-red-600/90 text-white font-black text-xl md:text-2xl uppercase tracking-[0.2em] py-2 px-8 transform -rotate-12 border border-white/20 shadow-2xl backdrop-blur-md">
               Reserved
             </div>
          </div>

          <div className="absolute top-4 right-4 bg-red-600/90 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5 z-20">
            Reserved
          </div>
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <h4 className="text-xl font-bold text-white/80">Cape Serenity Room 3</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Cape%20Serenity%20Room%204.jpg" 
            alt="Cape Serenity Room 4" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Available
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl font-bold text-white">Cape Serenity Room 4</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Cape%20Serenity%20Room%205.jpg" 
            alt="Cape Serenity Room 5" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Available
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl font-bold text-white">Cape Serenity Room 5</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Cape%20Serenity%20Room%206.jpg" 
            alt="Cape Serenity Room 6" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Available
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl font-bold text-white">Cape Serenity Room 6</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Villa%20Premium%20Room%20Pool%20View.jpg" 
            alt="Villa Premium Room with Pool View" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Available
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl font-bold text-white">Villa Premium Room with Pool View</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Villa%20Shared%20Bathroom%20Green%20Room.png" 
            alt="Villa Green Room with Shared bathroom" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Available
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl font-bold text-white">Villa Green Room with Shared bathroom</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Villa%20Shared%20Bathroom.png" 
            alt="The Shared Bathroom for Villa rooms Black and Green" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Available
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl font-bold text-white">Shared Bathroom for Black & Green Rooms</h4>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10">
          <img 
            src="https://media.theresetclann.com/Villa%20Shared%20Bathroom%20Black%20Room.png" 
            alt="The Villa Black Room with Shared bathroom" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            Available
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-xl font-bold text-white">Villa Black Room with Shared bathroom</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsSection;
