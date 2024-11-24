import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드 상태를 로컬 스토리지에서 불러오기
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  // 다크모드 상태 토글
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  return (
    <button
      className={`toggle-button ${isDarkMode ? "dark" : "light"}`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? "☾" : "☀"}
    </button>
  );
};

export default DarkModeToggle;
