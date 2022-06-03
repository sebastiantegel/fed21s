import { useState } from "react";
import "./App.css";
import { Child } from "./components/Child";
import { ThemeContext, themes } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState(themes[0]);

  theme.toggleTheme = (nextTheme: string) => {
    for (let i = 0; i < themes.length; i++) {
      if (themes[i].name === nextTheme) {
        setTheme(themes[i]);
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
