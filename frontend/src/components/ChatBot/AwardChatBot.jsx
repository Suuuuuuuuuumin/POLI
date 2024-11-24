import React, { useState, useEffect, useRef } from "react";
import { sendMessageToOpenAI } from "../../api/openAI/AwardChatBotApi";
import "../../styles/chatBot.css"; // CSS 파일 임포트

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // 봇이 타이핑 중인지 여부
  const chatBoxRef = useRef(null); // 자동 스크롤을 위한 참조 생성

  const handleSendMessage = async () => {
    if (input.trim() === "") return;
    setInput(""); // 입력 필드 초기화

    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // 사용자 메시지 추가

    setIsTyping(true); // 봇이 응답을 타이핑 중임을 표시

    try {
      const botReply = await sendMessageToOpenAI(input);
      typeBotMessage(botReply); // 봇 메시지를 한 글자씩 타이핑하는 함수 호출
    } catch (error) {
      console.error("Error sending message:", error);
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "An error occurred. Please try again later." },
      ]);
    }
  };

  const typeBotMessage = (text) => {
    let index = 0;
    const botMessage = { role: "assistant", content: "" };

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        botMessage.content += text[index];
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // 마지막 봇 메시지를 덮어쓰기 위해 제거
          botMessage,
        ]);
        index++;
        scrollToBottom(); // 스크롤을 최신 메시지로 이동
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 20); // 글자마다 20ms 지연 (타이핑 속도 조절)

    setMessages((prevMessages) => [...prevMessages, botMessage]); // 빈 봇 메시지를 추가하여 타이핑 시작
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // 스크롤을 맨 위로 이동
  const scrollToTop = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: 0,
        behavior: "instant", // 즉시 이동 (애니메이션 없음)
      });
    }
  };

  // 새로운 메시지가 추가될 때마다 스크롤을 하단으로 이동
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth", // 부드럽게 이동
      });
    }
  };

  // 초기 렌더링 시 스크롤을 맨 위로 설정
  useEffect(() => {
    if (messages.length === 0) {
      scrollToTop();
    }
  }, []); // 컴포넌트 마운트 시 한 번 실행

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom(); // 메시지가 변경될 때마다 스크롤 이동
    }
  }, [messages]);

  return (
    <div className="container">
      <div className="chatBox" ref={chatBoxRef}>
        {messages.length === 0 ? (
          <div className="placeholder">예시 )<br/><br/>
            1. 구글 개발자 챌린지 우승 (2022)<br/>
            - AI 기반 맞춤형 커리어 추천 솔루션 개발<br/><br/>

            2. Kaggle Competition Top 1% (2021)<br/>
            - Image Classification 분야<br/><br/>
            
            3. 소프트웨어마에스트로 우수 개발자상 (2020)
          </div>
        ) : (
          messages
          .filter((msg) => msg.role === "assistant") // 봇 메시지만 필터링
          .map((msg, index) => (
            <div
              key={index}
              className="message"
              style={{
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              {msg.content}
            </div>
          ))
        )}
      </div>
      <div className="inputBox">
        <input
          className="input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress} // 엔터 키 이벤트 추가
          placeholder="Type your message..."
          disabled={isTyping} // 봇이 응답 중일 때 입력 비활성화
        />
        <button
          className="button"
          onClick={handleSendMessage}
          disabled={input.trim() === "" || isTyping}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
