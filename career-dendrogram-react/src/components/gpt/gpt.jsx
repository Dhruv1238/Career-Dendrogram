import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/engines/curie/completions';

async function generateText(prompt) {
  try {
    const response = await axios.post(API_ENDPOINT, {
      prompt,
      max_tokens: 35,
      n: 1,
      stop: '.\n',
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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 `,
      },
    });
    console.log(response);
      return response.data.choices[0].text.trim();

  } catch (error) {
    console.error(error);
    return "Something went wrong. Please try again later.";
  }
}

export default generateText ;