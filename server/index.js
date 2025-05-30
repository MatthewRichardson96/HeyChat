import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello, OpenAI!");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.post("/ask", async (req, res) => {
	const { prompt } = req.body;

	if (!prompt) {
		return res.status(400).json({ error: "Prompt is required" });
	}

	try {
		const response = await axios.post(
			"https://api.openai.com/v1/completions",
			{
				model: "text-davinci-003", // You can use other models like 'gpt-3.5-turbo'
				prompt: prompt,
				max_tokens: 150,
				temperature: 0.7,
			},
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
				},
			}
		);

		res.json({ response: response.data.choices[0].text.trim() });
	} catch (error) {
		console.error("Error calling OpenAI API:", error);
		res
			.status(500)
			.json({ error: "An error occurred while processing your request" });
	}
});
