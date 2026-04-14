import React from 'react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import RoomsSection from './RoomsSection.tsx';

const RoomsPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main className="pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoomsSection standalone={true} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoomsPage;
