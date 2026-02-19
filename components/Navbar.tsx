import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Highlights', href: '#highlights' },
    { name: 'Overview', href: '#overview' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Team', href: '#team' },
    { name: 'Included', href: '#whats-included' },
    { name: 'Extras', href: '#extras' },
    { name: 'Dates', href: '#dates' },
    { name: 'Itinerary', href: '#itinerary' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Villa', href: '#the-villa' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* 
              REPLACE WITH YOUR LOGO IMAGE 
              <img src="/path/to/logo.png" alt="CIRCUIT BREAKER by The Reset Clann" className="h-12" />
            */}
            <a href="#" className="flex flex-col items-start group">
              <span className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none">
                CIRCUIT <span className="text-primary">BREAKER</span>
              </span>
              <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gray-400 uppercase group-hover:text-white transition-colors ml-0.5">
                by The Reset Clann
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Changed to lg:flex to accommodate more items */}
          <div className="hidden lg:flex space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary font-bold uppercase tracking-wide text-xs xl:text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Visible below lg breakpoint */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-bold text-white hover:text-primary hover:bg-white/5 uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;