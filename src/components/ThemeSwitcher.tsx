// const stylesheetExists = (href) =>
//   Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some((link) => link.href === href);

import { useTranslation } from "next-i18next";
import { ChangeEvent } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { FormField, FormLabel } from "./index";

export const ThemeSwitcher = () => {
  const { theme, setTheme, builtInThemes } = useThemeContext();
  const { t } = useTranslation("theme-switcher");

  const selectTheme = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTheme = builtInThemes.find(({ className }) => e.target.value === className) || builtInThemes[0];
    setTheme(newTheme);
  };

  return (
    <FormField>
      <FormLabel htmlFor="theme-switcher">{t("pick-theme")}</FormLabel>
      <select id="theme-switcher" value={theme?.className} onChange={selectTheme}>
        {builtInThemes.map(({ title, className }) => (
          <option key={className} value={className}>
            {title}
          </option>
        ))}
      </select>
    </FormField>
  );
};
