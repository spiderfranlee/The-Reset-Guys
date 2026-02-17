import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI, Type } from "@google/genai";

// Ensure process is treated as a global for TypeScript
declare var process: any;

// Custom Butler/Concierge Icon Component
const ConciergeIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Head */}
    <path d="M12 2.5C9.5 2.5 7.5 4.5 7.5 7C7.5 9.5 9.5 11.5 12 11.5C14.5 11.5 16.5 9.5 16.5 7C16.5 4.5 14.5 2.5 12 2.5Z" />
    {/* Bow Tie */}
    <path d="M9.5 13.5L7.5 14.5L9.5 15.5" />
    <path d="M14.5 13.5L16.5 14.5L14.5 15.5" />
    <rect x="9.5" y="13.5" width="5" height="2" rx="0.5" />
    {/* Tuxedo Jacket / Collar */}
    <path d="M5 21V17C5 15.3431 6.34315 14 8 14H16C17.6569 14 19 15.3431 19 17V21" />
    <path d="M9 14L12 18L15 14" />
  </svg>
);

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Welcome to The Reset Clann. I'm your concierge. How can I help you reclaim your edge today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Check if GoogleGenAI is loaded
      if (!GoogleGenAI) {
        throw new Error("GoogleGenAI SDK not loaded");
      }

      // Initialize chat session if it doesn't exist
      if (!chatSessionRef.current) {
        // Safe access to process.env.API_KEY
        const apiKey = typeof process !== 'undefined' ? process.env?.API_KEY : undefined;

        if (!apiKey) {
           console.error("API Key not found in process.env.API_KEY");
           setMessages(prev => [...prev, { role: 'model', text: "I'm currently unable to connect to the server (Configuration Missing). Please email us at theresetclann@gmail.com." }]);
           setIsLoading(false);
           return;
        }
        
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const bookingTool = {
          functionDeclarations: [{
            name: "book_retreat",
            description: "Sends customer booking details (Name, Email, Details) to The Reset Clann admin team.",
            parameters: {
              type: Type.OBJECT,
              properties: {
                customer_name: { type: Type.STRING, description: "The full name of the customer." },
                customer_email: { type: Type.STRING, description: "The customer's email address." },
                details: { type: Type.STRING, description: "Any specific questions, dates, or requests." }
              },
              required: ["customer_name", "customer_email"]
            }
          }]
        };

        chatSessionRef.current = ai.chats.create({
          model: "gemini-3-flash-preview",
          config: {
            systemInstruction: "You are the Concierge AI for 'The Reset Clann', a luxury wellness and adventure retreat. Your tone is exclusive, professional, but friendly (like a high-end hotel concierge). Your goal is to collect the user's Name, Email, and any questions so you can book them using the 'book_retreat' tool. Do not ask for phone numbers. Be concise.",
            tools: [bookingTool]
          }
        });
      }

      const chat = chatSessionRef.current;
      let response = await chat.sendMessage({ message: userMessage });
      
      // Handle Function Calls
      while (response.functionCalls && response.functionCalls.length > 0) {
         const functionResponseParts = [];
         
         for (const call of response.functionCalls) {
            console.log("Simulating Booking Tool Execution:", call.name, call.args);
            // In a real application, you would send this data to your backend here.
            
            functionResponseParts.push({
               functionResponse: {
                  name: call.name,
                  response: { result: "Booking request received successfully." },
                  id: call.id
               }
            });
         }
         
         // Send the tool execution result back to the model to get the final text response
         response = await chat.sendMessage({ message: functionResponseParts });
      }

      setMessages(prev => [...prev, { role: 'model', text: response.text || "I've noted that down." }]);

    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage = "I'm having a little trouble connecting right now. Please try again or email us at theresetclann@gmail.com.";
      setMessages(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-2 w-96 max-w-[90vw] h-[500px] max-h-[70vh] bg-dark-gray border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 flex flex-col font-sans">
          
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center shrink-0">
            <h3 className="text-white font-bold flex items-center gap-2">
              <ConciergeIcon size={32} />
              Concierge
            </h3>
            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 p-4 bg-black overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white/10 rounded-lg p-3 rounded-bl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className="text-xs text-gray-400">Thinking...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          <div className="p-3 bg-dark-gray border-t border-white/10 shrink-0">
            <form onSubmit={handleSend} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about dates, pricing, or book..."
                className="w-full bg-black border border-white/20 rounded-full py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                autoFocus
              />
              
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={14} className={isLoading ? 'opacity-0' : 'ml-0.5'} />
              </button>
            </form>
            <div className="text-center mt-2">
               <p className="text-[10px] text-gray-600">Powered by Gemini AI</p>
            </div>
          </div>
        </div>
      )}

      {/* Button and Side Label Wrapper */}
      <div className="flex items-center gap-4">
        {/* Side Text Label (Speech Bubble) */}
        {!isOpen && (
          <div className="bg-white text-black px-5 py-3 rounded-l-2xl rounded-tr-2xl shadow-xl animate-in fade-in slide-in-from-right-8 duration-500 relative">
             <span className="font-black uppercase tracking-widest text-sm whitespace-nowrap">At Your Service</span>
             {/* Triangle Pointer */}
             <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-l-[10px] border-l-white border-b-[8px] border-b-transparent"></div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggleChat}
          className={`group flex items-center justify-center w-24 h-24 rounded-full shadow-2xl shadow-primary/30 transition-all duration-300 transform hover:scale-105 ${isOpen ? 'bg-white text-primary rotate-90' : 'bg-primary text-white'}`}
          aria-label="Chat"
        >
          {isOpen ? (
            <X size={36} />
          ) : (
            <ConciergeIcon size={52} className="group-hover:animate-pulse" />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;