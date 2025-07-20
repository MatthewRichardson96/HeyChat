import React, { useState } from "react";
import axios from "axios";
import { Input } from "../atoms/Input";
import { ChatMessage } from "../molecules/ChatMessage";
interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}
export const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleSendMessage = async (messageText: string) => {
        if (!messageText.trim()) return;

        // Add user message 
        const newMessage: Message = {
            id: Date.now().toString(),
            text: messageText,
            isUser: true,
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, newMessage]);

        try { 
          const response = await axios.post('/api/chat', {message: messageText});
          // const response = await axios.post('http://localhost:3000/api/chat', {
          //   message: messageText,
          // });
          console.log("Response from AI:", response.data);

          const aiMessage: Message = { 
            id: Date.now().toString(),
            text: response.data.reply,
            isUser: false,
            timestamp: new Date(),
          };
          console.log("AI Message:", aiMessage);
          setMessages(prev => [...prev, aiMessage]);
        }
        catch (error) {
          const errorMessage: Message = {
            id: Date.now().toString(),
            text: `Error: Unable to fetch response from AI - ${error}`,
            isUser: false,
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, errorMessage]);
    }
  }

  return (
    <>
    <div className="chat-container">
      <Input handleSendMessage={handleSendMessage} />
      <ChatMessage messages={messages} />
    </div>
    </>
  );
};
