import React, { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import "../styles/headerOfApp.css";

const HeaderOfApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1); // 헤더 투명도 상태

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = 0; // 이전 스크롤 위치 저장

    const handleScroll = () => {
      const currentScrollY = window.scrollY; // 현재 스크롤 위치
      const scrollHeight = document.documentElement.scrollHeight; // 전체 문서 높이
      const clientHeight = window.innerHeight; // 현재 뷰포트 높이

      if (currentScrollY === 0) {
        // 스크롤이 최상단에 있을 때
        setHeaderOpacity(1);
      } else if (currentScrollY + clientHeight >= scrollHeight) {
        // 스크롤이 최하단에 있을 때
        setHeaderOpacity(0.5);
      } else if (currentScrollY > lastScrollY) {
        // 아래로 스크롤 시
        setHeaderOpacity(0.5);
      } else {
        // 위로 스크롤 시
        setHeaderOpacity(1);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // 이벤트 정리
    };
  }, []);

  return (
    <header
      className="headerOfApp"
      style={{ opacity: headerOpacity, transition: "opacity 0.3s ease" }}
    >
      <div className="headerOfApp__container">
        <div className="headerOfApp__logo">POLI</div>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default HeaderOfApp;
