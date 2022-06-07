import { useState } from "react";
import "./App.css";
import { Child } from "./components/Child";
import { ThemeContext, themes } from "./contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  theme.toggleTheme = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
