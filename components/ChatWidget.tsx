import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Email Router Logic
    const email = "theresetguys@gmail.com"; // Replace with your actual email
    const subject = "Retreat Inquiry";
    const body = encodeURIComponent(message);
    
    // Open default mail client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    
    // Optional: Clear message or close chat after sending
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-dark-gray border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-primary p-4 flex justify-between items-center">
            <h3 className="text-white font-bold flex items-center gap-2">
              <MessageSquare size={18} />
              Chat with Us
            </h3>
            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div className="p-4 bg-black">
            <p className="text-gray-300 text-sm mb-4">
              Have questions about the retreat? Send us a message and we'll reply via email shortly.
            </p>
            
            <form onSubmit={handleSend}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi, I'm interested in the upcoming retreat..."
                className="w-full h-32 bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm mb-3"
                autoFocus
              />
              
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-2 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
          <div className="bg-dark-gray p-2 text-center border-t border-white/5">
            <p className="text-xs text-gray-500">Replies will be sent to your email client.</p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`group flex items-center justify-center w-16 h-16 rounded-full shadow-lg shadow-primary/30 transition-all duration-300 transform hover:scale-110 ${isOpen ? 'bg-white text-primary rotate-90' : 'bg-primary text-white'}`}
        aria-label="Chat"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} className="group-hover:animate-pulse" />}
      </button>
    </div>
  );
};

export default ChatWidget;