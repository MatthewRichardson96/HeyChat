interface Message { 
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatMessage = ({messages}: {messages: Message[]}) => {
  return <div>ChatMessage {messages.map((message) => (
    <div key={message.id}>
      <p>{message.text}</p>
    </div>
  ))}</div>;
};