import { createContext, type ReactNode } from 'react';
import { colors, type Colors } from './colors';
import { typography, fontFamily, type Typography, type FontFamily } from './typography';
import { spacing, type Spacing } from './spacing';
import { radii, type Radii } from './radii';
import { shadows, type Shadows } from './shadows';

export type Theme = {
  colors: Colors;
  typography: Typography;
  fontFamily: FontFamily;
  spacing: Spacing;
  radii: Radii;
  shadows: Shadows;
};

export const defaultTheme: Theme = {
  colors,
  typography,
  fontFamily,
  spacing,
  radii,
  shadows,
};

export const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
}
