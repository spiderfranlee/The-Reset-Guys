import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const Team: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="team" className="py-24 bg-black border-t border-white/5 relative">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
              Meet The <span className="text-primary">Guides</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Expert practitioners dedicated to your physical and mental evolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
             {/* Guide 1 - Paul */}
             <div className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-8 bg-dark-gray border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
                   <img 
                      src="https://github.com/spiderfranlee/images/blob/main/Dev%20Profile%20Reset.png?raw=true"
                      alt="Paul"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white uppercase mb-1">Paul</h3>
                   </div>
                </div>
                
                <div className="space-y-6">
                   <p className="text-gray-400 leading-relaxed">
                      Paul has always looked for ways to balance a hectic Madrid social life with intense exercise and careful dieting. Lord knows it ain’t easy for a man who likes his food and a few pints or cañas with friends. Since moving to Cyprus, every day he gets a little better at aligning health with knocking the best laugh out of life. This passion for replacing friction with flow is what he brings to the table.
                   </p>
                   
                   {/* Video Trigger - Now containing the Autoplay Video */}
                   <div 
                     onClick={() => setActiveVideo("https://github.com/spiderfranlee/images/blob/5fb203a0cd9432e29c939729118f6828438dfbc2/Dev_s%20Bio%20Vid.mp4?raw=true")}
                     className="relative overflow-hidden rounded-lg bg-dark-gray border border-white/10 aspect-video group/video cursor-pointer hover:border-primary/50 transition-colors shadow-lg"
                   >
                      <video 
                        src="https://github.com/spiderfranlee/images/blob/5fb203a0cd9432e29c939729118f6828438dfbc2/Dev_s%20Bio%20Vid.mp4?raw=true"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-90 group-hover/video:opacity-100 transition-opacity"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover/video:bg-black/10 transition-colors flex items-center justify-center">
                         <div className="w-14 h-14 rounded-full bg-primary/90 text-black flex items-center justify-center shadow-lg transform group-hover/video:scale-110 transition-transform">
                            <Play size={24} fill="currentColor" className="ml-1" />
                         </div>
                      </div>

                      <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded text-xs text-white font-bold uppercase tracking-wider border border-white/10">
                        Watch Bio
                      </div>
                   </div>
                </div>
             </div>

             {/* Guide 2 - Fran */}
             <div className="group">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-8 bg-dark-gray border border-white/10 group-hover:border-secondary/50 transition-colors duration-500">
                   <img 
                      src="https://github.com/spiderfranlee/images/blob/main/Fran%20Reset%20Pic.png?raw=true" 
                      alt="Fran"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white uppercase mb-1">Fran</h3>
                   </div>
                </div>
                
                <div className="space-y-6">
                   <p className="text-gray-400 leading-relaxed">
                      The calm amidst the chaos. He specializes in nervous system regulation and somatic practices, teaching you how to actively down-regulate stress. His methods are the antidote to the "always on" culture, helping you clear the brain fog and enjoy your downtime fully.
                   </p>
                   
                   {/* Video Placeholder (No video provided yet) */}
                   <div className="relative overflow-hidden rounded-lg bg-dark-gray border border-white/10 p-4 flex items-center gap-4 group/video cursor-not-allowed opacity-50">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                         <Play size={20} fill="currentColor" />
                      </div>
                      <div className="flex-1">
                         <p className="text-white font-bold text-sm uppercase">Watch Bio Video</p>
                         <p className="text-xs text-gray-500">Coming Soon</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Video Modal */}
       {activeVideo && (
         <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <button 
              onClick={() => setActiveVideo(null)} 
              className="absolute top-6 right-6 text-white/50 hover:text-white z-[110] p-2 transition-colors"
            >
               <X size={32} />
            </button>
            
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
               <video 
                  src={activeVideo} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
               />
            </div>
         </div>
       )}
    </section>
  );
};

export default Team;