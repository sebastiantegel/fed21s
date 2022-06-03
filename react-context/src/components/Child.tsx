import { ChangeEvent, useContext } from "react";
import { ThemeContext, themes } from "../contexts/ThemeContext";

export const Child = () => {
  let theme = useContext(ThemeContext);

  return (
    <>
      <button
        style={{ color: theme.color, backgroundColor: theme.background }}
        onClick={() => {
          theme.toggleTheme("Party");
        }}
      >
        Ändra tema
      </button>

      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          theme.toggleTheme(e.target.value);
        }}
      >
        {themes.map((theme) => {
          return (
            <option key={theme.name} value={theme.name}>
              {theme.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
