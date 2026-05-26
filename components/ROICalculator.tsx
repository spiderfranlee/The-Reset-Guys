import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';

const formatCurrency = (n: number) => {
  if (n >= 1000) return '€' + Math.round(n / 1000) + 'k';
  return '€' + Math.round(n);
};

const ROICalculator: React.FC = () => {
  const [salary, setSalary] = useState(75000);
  const [hours, setHours] = useState(55);
  const [weeks, setWeeks] = useState(40);
  const [sessions, setSessions] = useState(4);
  const [stress, setStress] = useState(250);
  const [burnout, setBurnout] = useState(7);

  const stats = useMemo(() => {
    const hourlyRate = salary / 52 / 40;
    const overtimeHrs = Math.max(0, hours - 40) * 52;
    const overtimeCost = overtimeHrs * hourlyRate;

    const productivityLoss = (burnout / 10) * 0.18; // up to 18% productivity loss
    const burnoutCostCalc = salary * productivityLoss + stress * 12;

    const trainingCostCalc = sessions * 15 * 12;
    const totalCost = burnoutCostCalc + trainingCostCalc;
    const retreatCost = 1170;
    const ratio = (totalCost / retreatCost).toFixed(1);

    let verdictText, verdictSub;
    if (burnout <= 3) {
      verdictText = '"You\'re in good shape — but even the best athletes need a proper deload."';
      verdictSub = 'The retreat isn\'t a rescue plan. It\'s a performance upgrade. Book it before you actually need it.';
    } else if (burnout <= 6) {
      verdictText = `"The signs are there. Your annual burnout cost alone is ${formatCurrency(Math.round(burnoutCostCalc))}."`;
      verdictSub = `That's ${ratio}× the price of 7 nights in Cyprus. The retreat isn't an indulgence — it's an investment with a measurable return.`;
    } else {
      verdictText = `"You already know. Your body has been telling you for months."`;
      verdictSub = `Your burnout is costing you an estimated ${formatCurrency(Math.round(totalCost))} a year. A week in Cyprus costs €1,170. The maths aren't even close.`;
    }

    return {
      burnoutCost: Math.round(burnoutCostCalc),
      trainingCost: Math.round(trainingCostCalc),
      overtimeCost: Math.round(overtimeCost),
      pct: burnout * 10,
      verdictText,
      verdictSub
    };
  }, [salary, hours, weeks, sessions, stress, burnout]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[6px] uppercase text-primary mb-4 font-bold">Reset Clann</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 text-white text-balance">
              The Real Cost of <span className="text-primary block mt-2">Not Resetting</span>
            </h1>
            <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed font-medium">
              You work hard. You invest in your career, your home, your family. But what's the cost of running on empty? This calculator gives you an honest answer.
            </p>
          </div>

          {/* SECTION 1: Work */}
          <div className="bg-dark-gray border border-white/10 p-6 md:p-8 mb-6 relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-primary/80"></div>
            <p className="text-xs tracking-[4px] uppercase text-primary mb-8 font-bold">Your Work Life</p>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="block text-xs md:text-sm tracking-wider uppercase text-gray-400 font-bold">Annual salary / income</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="30000" max="200000" step="5000" 
                    value={salary} 
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" 
                  />
                  <span className="font-black text-2xl md:text-3xl text-white min-w-[80px] text-right">
                    {formatCurrency(salary)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs md:text-sm tracking-wider uppercase text-gray-400 font-bold">Hours worked per week (honestly)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="40" max="80" step="1" 
                    value={hours} 
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" 
                  />
                  <span className="font-black text-2xl md:text-3xl text-white min-w-[80px] text-right">
                    {hours}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs md:text-sm tracking-wider uppercase text-gray-400 font-bold">Weeks since your last holiday</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="4" max="104" step="4" 
                    value={weeks} 
                    onChange={(e) => setWeeks(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" 
                  />
                  <span className="font-black text-2xl md:text-3xl text-white min-w-[80px] text-right">
                    {weeks} <span className="text-base text-gray-400 font-bold uppercase ml-1">WKS</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: Lifestyle */}
          <div className="bg-dark-gray border border-white/10 p-6 md:p-8 mb-8 relative rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-[4px] h-full bg-primary/80"></div>
            <p className="text-xs tracking-[4px] uppercase text-primary mb-8 font-bold">Your Wellbeing</p>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <label className="block text-xs md:text-sm tracking-wider uppercase text-gray-400 font-bold">Training sessions missed per month <span className="block sm:inline sm:ml-1 text-gray-500 font-medium">(from stress/fatigue)</span></label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="0" max="12" step="1" 
                    value={sessions} 
                    onChange={(e) => setSessions(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" 
                  />
                  <span className="font-black text-2xl md:text-3xl text-white min-w-[80px] text-right">
                    {sessions}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs md:text-sm tracking-wider uppercase text-gray-400 font-bold">Monthly spend on "stress relief" <span className="block sm:inline sm:ml-1 text-gray-500 font-medium">(takeaways, wine, impulse buys)</span></label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="50" max="800" step="25" 
                    value={stress} 
                    onChange={(e) => setStress(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" 
                  />
                  <span className="font-black text-2xl md:text-3xl text-white min-w-[80px] text-right">
                    €{stress}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs md:text-sm tracking-wider uppercase text-gray-400 font-bold">How burned out do you feel right now? (1–10)</label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" max="10" step="1" 
                    value={burnout} 
                    onChange={(e) => setBurnout(Number(e.target.value))}
                    className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-primary" 
                  />
                  <span className="font-black text-2xl md:text-3xl text-white min-w-[80px] text-right">
                    {burnout}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RESULTS */}
          <div className="bg-white/5 border border-primary/30 p-8 md:p-10 mb-8 rounded-2xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500"></div>

            <div className="relative z-10">
              <p className="text-xs tracking-[4px] uppercase text-primary mb-8 font-bold">Your Reset Audit</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-xs tracking-[2px] uppercase text-gray-400 mb-2 font-bold">Cost of burnout / year</p>
                  <p className="text-4xl md:text-5xl font-black text-red-400 mb-2">{formatCurrency(stats.burnoutCost)}</p>
                  <p className="text-sm text-gray-400 font-medium">Lost productivity + stress spending</p>
                </div>
                <div>
                  <p className="text-xs tracking-[2px] uppercase text-gray-400 mb-2 font-bold">Missed training value</p>
                  <p className="text-4xl md:text-5xl font-black text-red-400 mb-2">{formatCurrency(stats.trainingCost)}</p>
                  <p className="text-sm text-gray-400 font-medium">Based on avg €15/session</p>
                </div>
                <div>
                  <p className="text-xs tracking-[2px] uppercase text-gray-400 mb-2 font-bold">Unpaid "overtime"</p>
                  <p className="text-4xl md:text-5xl font-black text-red-400 mb-2">{formatCurrency(stats.overtimeCost)}</p>
                  <p className="text-sm text-gray-400 font-medium">Extra hours above 40/week</p>
                </div>
                <div>
                  <p className="text-xs tracking-[2px] uppercase text-gray-400 mb-2 font-bold">The Reset Retreat Cost</p>
                  <p className="text-4xl md:text-5xl font-black text-primary mb-2">€1,299</p>
                  <p className="text-sm text-gray-400 font-medium">From €1,299 pp · 7 nights Cyprus</p>
                </div>
              </div>

              <div className="mb-10 bg-black/40 p-5 rounded-xl border border-white/5">
                <div className="flex justify-between text-xs tracking-[2px] uppercase text-gray-400 mb-3 font-bold">
                  <span>Burnout Level</span>
                  <span className="text-white">{stats.pct}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${stats.pct}%`, background: 'linear-gradient(90deg, #4ecdc4, #f87171)' }}
                  ></div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-2">
                <p className="text-2xl md:text-3xl font-black uppercase tracking-wide text-white leading-tight mb-4">
                  {stats.verdictText}
                </p>
                <p className="text-base text-gray-400 leading-relaxed font-medium">
                  {stats.verdictSub}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-dark-gray border border-white/10 text-center p-10 md:p-12 rounded-2xl shadow-xl flex flex-col items-center">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg mx-auto font-medium">
              7 nights in Ayia Napa. Coaching, training, sunshine, and evenings worth remembering. This is what investing in yourself actually looks like.
            </p>
            <a
               href="https://checkout.revolut.com/pay/a65ebcc8-93ae-4e6b-905a-657b2cbcb4c6"
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center justify-center font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-md transition-all duration-300 border-2 border-primary text-black bg-primary hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(64,224,208,0.4)]"
            >
              Book Your Spot
            </a>
            <p className="mt-6 text-xs tracking-widest uppercase text-gray-500 font-bold">
              9–16 November 2026 · Ayia Napa, Cyprus · From €1,299
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ROICalculator;
