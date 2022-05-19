import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react';

export type ApplicationThemeProps = {
  children: ReactNode;
};

export type Theme = 'light' | 'dark';

export type ThemeContextType = {
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

function ApplicationContext({ children }: ApplicationThemeProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const providerValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
}

export default ApplicationContext;
