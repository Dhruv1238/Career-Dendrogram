import axios from 'axios';

async function generateText(prompt) {
    const API_ENDPOINT = 'https://api.openai.com/v1/engine/<engine-id>/completions';
    const response = await axios.post(API_ENDPOINT, {
      prompt,
      max_tokens: 100,
      n: 1,
      stop: '\n',
      temperature: 0.7,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_GPT3_API_KEY}`,
      },
    });
  
    return response.data.choices[0].text.trim();
  }
  