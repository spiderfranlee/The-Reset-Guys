import React from 'react';

const TelegramWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-4">
      <a
        href="https://t.me/TheResetClann_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-16 h-16 rounded-full bg-[#229ED9] text-white shadow-2xl shadow-[#229ED9]/30 transition-all duration-300 transform hover:scale-105"
        aria-label="Chat on Telegram"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 group-hover:animate-pulse"
        >
          <path
            d="M21.1402 2.95991C21.1402 2.95991 22.6602 2.35991 22.5602 3.85991C22.5002 4.65991 21.8002 9.05991 21.3002 13.5599C20.6002 19.8599 20.6002 19.8599 20.6002 19.8599C20.6002 19.8599 20.4002 21.1599 19.3002 21.3599C18.2002 21.5599 16.4002 20.3599 16.1002 20.1599C15.8002 19.9599 10.7002 16.6599 8.90016 15.0599C8.40016 14.6599 7.80016 13.8599 8.90016 12.8599C11.3002 10.6599 14.1002 7.95991 15.4002 6.65991C16.0002 6.05991 16.6002 4.45991 13.7002 6.45991C9.60016 9.25991 5.40016 12.0599 5.40016 12.0599C5.40016 12.0599 4.30016 12.7599 2.30016 12.1599C0.300156 11.5599 0.300156 11.5599 0.300156 11.5599C0.300156 11.5599 -1.09984 10.6599 2.10016 9.45991C9.40016 6.55991 15.7002 4.05991 21.1402 2.95991Z"
            fill="currentColor"
          />
        </svg>
      </a>
      
      {/* Side Text Label */}
      <div className="bg-white text-black px-4 py-2 rounded-r-xl rounded-tl-xl shadow-xl animate-in fade-in slide-in-from-left-8 duration-500 relative">
        <span className="font-bold uppercase tracking-wider text-xs whitespace-nowrap">Chat on Telegram</span>
        {/* Triangle Pointer */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-white border-b-[6px] border-b-transparent"></div>
      </div>
    </div>
  );
};

export default TelegramWidget;
