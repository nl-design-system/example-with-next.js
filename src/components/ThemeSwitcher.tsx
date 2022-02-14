// const stylesheetExists = (href) =>
//   Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some((link) => link.href === href);

import { ChangeEvent } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { FormField } from "./utrecht";

export const ThemeSwitcher = () => {
  const { theme, setTheme, builtInThemes } = useThemeContext();

  const selectTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTheme = builtInThemes.find(({ href }) => e.target.value === href) || builtInThemes[0];
    setTheme(newTheme);
  };

  return (
    <div>
      <FormField>
        <label htmlFor="theme-switcher">Pick theme</label>
        <select id="theme-switcher" value={theme?.href} onChange={selectTheme}>
          {builtInThemes.map(({ title, className, href }) => (
            <option key={className} value={href}>
              {title}
            </option>
          ))}
        </select>
      </FormField>
    </div>
  );
};
