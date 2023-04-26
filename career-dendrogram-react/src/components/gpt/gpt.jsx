import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/engines/curie/completions';

async function generateText(prompt) {
  const response = await axios.post(API_ENDPOINT, {
    prompt,
    max_tokens: 20,
    n: 1,
    stop: '\n',
    temperature: 0.6,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer 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 `,
    },
  });

  return response.data.choices[0].text.trim();
}

export default generateText ;