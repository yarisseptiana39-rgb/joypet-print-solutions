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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center animate-fade-in">
      {/* Chat bubble tooltip */}
      <div className="mb-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg animate-pulse opacity-90 backdrop-blur-sm">
        <span className="text-sm font-medium">💬 Chat with us!</span>
      </div>
      
      {/* WhatsApp Button */}
      <Button
        onClick={handleChatClick}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 border-4 border-white/20 backdrop-blur-sm group relative overflow-hidden"
        size="icon"
      >
        {/* Ripple effect background */}
        <div className="absolute inset-0 bg-white/10 rounded-full animate-ping group-hover:animate-none"></div>
        
        {/* WhatsApp Icon */}
        <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-8 h-8 text-white drop-shadow-sm" />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-green-400/50 blur-md group-hover:blur-lg transition-all duration-300 opacity-60"></div>
      </Button>
      
      {/* Floating notification dot */}
      <div className="absolute -top-2 -right-1 w-3 h-3 bg-red-500 rounded-full animate-bounce">
        <div className="absolute inset-0 bg-red-400 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default LiveChatButton;