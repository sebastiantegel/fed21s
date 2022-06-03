import { createContext } from "react";

interface ITheme {
  name: string;
  color: string;
  background: string;
  toggleTheme(): void;
}

interface IThemes {
  light: ITheme;
  dark: ITheme;
}

export const themes: IThemes = {
  light: {
    name: "Light",
    color: "black",
    background: "#12bc5f",
    toggleTheme: () => {},
  },
  dark: {
    name: "Dark",
    color: "white",
    background: "black",
    toggleTheme: () => {},
  },
};

export const ThemeContext = createContext(themes.light);
