import axios from 'axios';

export const sendMessageToOpenAI = async (message, options = {}) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const {
    systemPrompt = ``,
    temperature = 0.0,
    maxTokens = 300,
  } = options;

  try {
    const response = await axios.post(
      apiUrl,
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        temperature: temperature,
        max_tokens: maxTokens,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    return response.data.choices[0].message.content; // OpenAI의 응답 내용
  } catch (error) {
    console.error("Error sending message:", error);
    return "Error: Unable to fetch response from OpenAI.";
  }
};