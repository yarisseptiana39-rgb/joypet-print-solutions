import { MessageCircle } from "lucide-react";
import { Button } from "./button";

const LiveChatButton = () => {
  const handleChatClick = () => {
    // Joypet WhatsApp number
    const phoneNumber = "+254716971622";
    const message = "Hello! I'd like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <style>{`
        @keyframes pulse-colors {
          0%, 100% { 
            background-color: #10b981; 
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4);
          }
          50% { 
            background-color: #059669; 
            box-shadow: 0 15px 35px rgba(5, 150, 105, 0.6);
          }
        }
        
        .whatsapp-pulse {
          animation: pulse-colors 2.5s ease-in-out infinite;
        }
        
        .whatsapp-pulse:hover {
          animation: none;
          background-color: #059669 !important;
        }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
        {/* Chat bubble tooltip */}
        <div className="mb-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 animate-fade-in delay-500">
          <span className="text-sm font-medium text-gray-800">💬 Need Help?</span>
        </div>
        
        {/* WhatsApp Button */}
        <Button
          onClick={handleChatClick}
          className="w-20 h-20 rounded-full whatsapp-pulse transition-all duration-300 group relative overflow-hidden border-2 border-white/30"
          size="icon"
        >
          {/* WhatsApp Icon */}
          <MessageCircle className="w-8 h-8 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-bounce border-2 border-white">
            <div className="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
          </div>
        </Button>
      </div>
    </>
  );
};

export default LiveChatButton;