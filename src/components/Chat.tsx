import { useState } from "react";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}
export const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = (messageText: string) => {
        if (!messageText.trim()) return;

        // Add user message 
        const newMessage: Message = {
            id: Date.now().toString(),
            text: messageText,
            isUser: true,
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, newMessage]);
    }
  return (
    <>
    <div className="chat-container">
        
    </div>
      <ChatInput />
      <ChatMessage />
    </>
  );
};
