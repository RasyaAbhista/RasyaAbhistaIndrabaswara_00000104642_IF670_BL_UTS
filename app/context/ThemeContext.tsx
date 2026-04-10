import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

export const lightColors = {
  background: "#F5F5F5",
  surface: "#FFFFFF",
  surfaceAlt: "#F0F0F0",
  card: "#FFFFFF",
  cardAlt: "#FAFAFA",
  input: "#FAFAFA",
  border: "#E8E8E8",
  borderLight: "#F0F0F0",
  text: "#111111",
  textSecondary: "#777777",
  textMuted: "#AAAAAA",
  textPlaceholder: "#CCCCCC",
  accent: "#E8622A",
  accentSoft: "rgba(232, 98, 42, 0.1)",
  statusBar: "dark-content" as "dark-content" | "light-content",
  navBar: "#FFFFFF",
  modalOverlay: "rgba(0,0,0,0.6)",
  shadow: "#000000",
};

export const darkColors = {
  background: "#0F0F0F",
  surface: "#1A1A1A",
  surfaceAlt: "#242424",
  card: "#1E1E1E",
  cardAlt: "#222222",
  input: "#242424",
  border: "#2E2E2E",
  borderLight: "#222222",
  text: "#F0F0F0",
  textSecondary: "#AAAAAA",
  textMuted: "#666666",
  textPlaceholder: "#555555",
  accent: "#E8622A",
  accentSoft: "rgba(232, 98, 42, 0.15)",
  statusBar: "light-content" as "dark-content" | "light-content",
  navBar: "#1A1A1A",
  modalOverlay: "rgba(0,0,0,0.8)",
  shadow: "#000000",
};

export type Colors = typeof lightColors;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  colors: Colors;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  isDark: false,
  colors: lightColors,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const isDark = theme === "dark";
  const colors = isDark ? darkColors : lightColors;
  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
