import { createContext } from "react";

interface ITheme {
  name: string;
  color: string;
  background: string;
  toggleTheme(nextTheme: string): void;
}

interface IThemes {
  light: ITheme;
  dark: ITheme;
  party: ITheme;
}

export const themes: ITheme[] = [
  {
    name: "Light",
    color: "black",
    background: "#12bc5f",
    toggleTheme: (nextTheme: string) => {},
  },
  {
    name: "Dark",
    color: "white",
    background: "black",
    toggleTheme: (nextTheme: string) => {},
  },
  {
    color: "pink",
    background: "turquoise",
    name: "Party",
    toggleTheme: (nextTheme: string) => {},
  },
];

export const ThemeContext = createContext(themes[0]);
