import { useState } from "react";

export const Input = ({handleSendMessage}: {handleSendMessage: (message: string) => void}) => {
  const [message, setMessage] = useState<string>("");
  return (
    <>
      <div className="flex items-center gap-2">
        <input
          role="textbox"
          type="text"
          placeholder="Enter your Message"
          className="w-full p-2 rounded-md border border-gray-300"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={() => handleSendMessage(message)}
        >
          Send
        </button>
      </div>
    </>
  );
};
