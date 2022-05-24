import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import builtInThemes from "../themes";

type ComponentDeclaration = { [key: string]: ReactNode };
interface Theme {
  id: string;
  className: string;
  title: string;
  components?: ComponentDeclaration;
}

interface ThemeContextState {
  theme?: Theme;
  builtInThemes: Theme[];
  setTheme: Dispatch<SetStateAction<Theme>>;
  loading?: boolean;
}

const SELECTED_THEME = "selected-theme";

const ThemeContext = createContext<ThemeContextState>({ builtInThemes, setTheme: () => {} });

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState(builtInThemes[0]);

  let sharedState: ThemeContextState = {
    theme,
    setTheme,
    builtInThemes,
  };

  // Run once after the browser rendering has started
  useEffect(() => {
    const savedTheme = builtInThemes.find((theme) => theme.className === sessionStorage.getItem(SELECTED_THEME));

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Run every time a new theme is selected
  useEffect(() => {
    sessionStorage.setItem(SELECTED_THEME, theme.className);
  }, [theme]);

  return (
    <ThemeContext.Provider value={sharedState}>
      <div className={theme.className}>{children}</div>
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  return useContext(ThemeContext);
}
