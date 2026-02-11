import React from 'react';
import { Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black italic uppercase text-white">
              The <span className="text-primary">Reset</span> Guys
            </h3>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              The ultimate circuit breaker for high-performers. We combine elite training with luxury downtime to help you reclaim your edge without giving up the good life.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#highlights" className="hover:text-primary transition-colors">Highlights</a></li>
              <li><a href="#overview" className="hover:text-primary transition-colors">Overview</a></li>
              <li><a href="#whats-included" className="hover:text-primary transition-colors">What's Included</a></li>
              <li><a href="#dates" className="hover:text-primary transition-colors">Dates</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="mailto:theresetguys@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              theresetguys@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Reset Guys. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;