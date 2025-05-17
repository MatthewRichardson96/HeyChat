import { useState } from "react";

export const ChatInput = () => {
	const [message, setMessage] = useState();
	return (
		<>
			<div className="flex items-center gap-2">
				<input
					type="text"
					placeholder="Message"
					className="w-full p-2 rounded-md border border-gray-300"
					value={message || ""}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
					Send
				</button>
			</div>
			<div>
                {message}
            </div>
		</>
	);
};
