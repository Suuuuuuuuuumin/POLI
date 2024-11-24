import axios from 'axios';

export const sendMessageToOpenAI = async (message, options = {}) => {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const apiUrl = "https://api.openai.com/v1/chat/completions";

  const {
    systemPrompt = `"1. 구글 개발자 챌린지 우승 (2022)(enter)
    - AI 기반 맞춤형 커리어 추천 솔루션 개발(enter)
    2. Kaggle Competition Top 1% (2021)(enter)
    - Image Classification 분야<br/>(enter))
    3. 소프트웨어마에스트로 우수 개발자상 (2020)"(enter)마다 줄 바꿈을 하며 이런식으로 출력해줘`,
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