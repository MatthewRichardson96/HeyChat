import 'dotenv/config';
import fetch from 'node-fetch';

async function testOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('No API key found!');
    return;
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello, who are you?' }]
    })
  });

  const data = await response.json();
}

testOpenAI();
