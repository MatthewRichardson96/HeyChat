import { useState, useEffect } from "react";
import { animate } from "animejs";

export const ChatInput = () => {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    animate("span", {
      // Property keyframes
      y: [
        { to: "-2.75rem", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      // Property specific parameters
      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: (_, i) => i * 50, // Function based value
      ease: "inOutCirc",
      loopDelay: 1000,
      loop: true,
    });
  }, [loading]);

  return (
    <>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Message"
          className="w-full p-2 rounded-md border border-gray-300"
          value={message || ""}
          onChange={(e) => {
            setMessage(e.target.value);
            setLoading(false);
          }}
        />
        <button
          onClick={() => setLoading(true)}
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Send
        </button>
      </div>
      <div>
        {loading ? (
          <div>{message}</div>
        ) : (
          <div>
            <h2 className="large grid centered square-grid text-xl">
              <span>L</span>
              <span>O</span>
              <span>A</span>
              <span>D</span>
              <span>I</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </h2>
          </div>
        )}
      </div>
    </>
  );
};
