"use client";

import { useTheme } from "./context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-700 text-white rounded"
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}


