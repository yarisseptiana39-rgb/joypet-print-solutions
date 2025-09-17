import { MessageCircle, X } from "lucide-react";
import { Button } from "./button";
import { useState, useEffect } from "react";

const LiveChatButton = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const messages = [
    "👋 Hi! Need help?",
    "💬 Chat with us now!",
    "📞 We're here for you!",
    "✨ Quick response!"
  ];

  useEffect(() => {
    // Show bubble after 3 seconds
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    // Cycle through messages
    const messageTimer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
        setIsTyping(false);
      }, 1000);
    }, 5000);

    return () => {
      clearTimeout(bubbleTimer);
      clearInterval(messageTimer);
    };
  }, []);

  const handleChatClick = () => {
    // Joypet WhatsApp number
    const phoneNumber = "+254716971622";
    const message = "Hello! I'd like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCloseBubble = () => {
    setShowBubble(false);
  };

  return (
    <>
      <style>{`
        @keyframes pulse-colors {
          0%, 100% { 
            background: linear-gradient(135deg, #10b981, #059669);
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4), 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% { 
            background: linear-gradient(135deg, #059669, #047857);
            box-shadow: 0 15px 35px rgba(5, 150, 105, 0.6), 0 0 0 10px rgba(16, 185, 129, 0);
          }
        }
        
        @keyframes icon-blink {
          0%, 100% { 
            color: #ffffff;
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
            transform: rotate(0deg);
          }
          25% { 
            color: #fef3c7;
            filter: drop-shadow(0 0 12px rgba(254, 243, 199, 0.9));
            transform: rotate(-5deg);
          }
          50% { 
            color: #fbbf24;
            filter: drop-shadow(0 0 15px rgba(251, 191, 36, 1));
            transform: rotate(5deg);
          }
          75% { 
            color: #f59e0b;
            filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.9));
            transform: rotate(-3deg);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes slide-in-bubble {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes typing-dots {
          0%, 20% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .whatsapp-pulse {
          animation: pulse-colors 3s ease-in-out infinite, bounce-gentle 4s ease-in-out infinite;
        }
        
        .whatsapp-pulse:hover {
          animation: none;
          background: linear-gradient(135deg, #059669, #047857) !important;
          transform: scale(1.1);
        }
        
        .icon-blink {
          animation: icon-blink 2.5s ease-in-out infinite;
        }
        
        .icon-blink:hover {
          animation: float 0.6s ease-in-out infinite;
          color: #ffffff !important;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)) !important;
        }

        .chat-bubble {
          animation: slide-in-bubble 0.5s ease-out;
        }

        .typing-indicator span {
          animation: typing-dots 1.4s infinite;
        }

        .typing-indicator span:nth-child(1) { animation-delay: 0s; }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
        {/* Dynamic Chat Bubbles */}
        {showBubble && (
          <div className="chat-bubble bg-white rounded-2xl shadow-2xl px-4 py-3 max-w-xs relative border border-gray-100">
            <button 
              onClick={handleCloseBubble}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>
            
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 font-medium mb-1">JOYPET Printing</div>
                {isTyping ? (
                  <div className="typing-indicator flex items-center space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  </div>
                ) : (
                  <div className="text-sm text-gray-800 font-medium animate-fade-in">
                    {messages[currentMessage]}
                  </div>
                )}
              </div>
            </div>
            
            {/* Chat bubble tail */}
            <div className="absolute bottom-0 right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white transform translate-y-full"></div>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <Button
          onClick={handleChatClick}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full whatsapp-pulse transition-all duration-300 group relative overflow-hidden border-4 border-white/50 shadow-2xl"
          size="icon"
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
          
          {/* WhatsApp Icon */}
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 relative z-10 transition-all duration-300 group-hover:scale-125 icon-blink" />
          
          {/* Notification dot with double ring */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-bounce border-3 border-white">
            <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute inset-1 bg-red-600 rounded-full"></div>
          </div>
          
          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>
        </Button>
      </div>
    </>
  );
};

export default LiveChatButton;