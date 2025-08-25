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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      <div className="mb-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        <span className="text-base font-medium text-gray-800">Live Chat</span>
      </div>
      <Button
        onClick={handleChatClick}
        className="h-20 w-20 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        size="icon"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default LiveChatButton;