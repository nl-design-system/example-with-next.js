import * as components from '../components';
import { useThemeContext } from '../context/ThemeContext';

export const useThemeComponents = () => {
  const { theme } = useThemeContext();
  const themedComponents = theme?.components || {};

  return { ...components, ...themedComponents };
};
