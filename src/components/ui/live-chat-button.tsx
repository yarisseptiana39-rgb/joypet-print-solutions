import { MessageCircle } from "lucide-react";
import { Button } from "./button";

const LiveChatButton = () => {
  const handleChatClick = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "+254712345678"; // Update with your actual WhatsApp number
    const message = "Hello! I'd like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleChatClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default LiveChatButton;