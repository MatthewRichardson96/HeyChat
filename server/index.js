import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
	origin: 'http://localhost:5173',
  }));
  app.use(express.json());


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
	res.send("hello worlddd");
});

app.post("/api/chat", async (req, res) => {
	const userMessage = req.body.message;
	const apiKey = process.env.OPENAI_API_KEY;
	if (!apiKey) {
		return res.status(500).json({ error: "API key is not set." });
	}
	try {
		const response = await axios.post(
			"https://api.openai.com/v1/chat/completions",
			{
				model: "gpt-3.5-turbo",
				messages: [{ role: "user", content: userMessage }],
			},
			{
				headers: {
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json",
				},
			}
		);
		res.json({ reply: response.data.choices[0].message.content });
		console.log("Response from OpenAI API:", response.data.choices[0].message.content);

	} catch (error) {
		console.error("Error calling OpenAI API:", error);
		res
			.status(500)
			.json({ error: "Failed to fetch response from OpenAI API." });
	}
});
