// frontend/api/chat.ts
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const userMessage = req.body.message;
  const apiKey = process.env.OPENAI_API_KEY;

  console.log("API Key present?", !!apiKey);
  console.log("User message:", userMessage);

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
  } catch (error) {
    console.error("OpenAI API error:", error.response?.data || error.message);
    res.status(500).json({ error: `Failed to fetch response from OpenAI API. Error Message: ${error}` });
  }
}
