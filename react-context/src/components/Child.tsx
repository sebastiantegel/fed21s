import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const Child = () => {
  let theme = useContext(ThemeContext);

  return (
    <>
      <button
        style={{ color: theme.color, backgroundColor: theme.background }}
        onClick={theme.toggleTheme}
      >
        Ändra tema
      </button>
    </>
  );
};
