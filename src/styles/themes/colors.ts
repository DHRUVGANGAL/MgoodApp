import { Colors } from '../../config/constants/Colors';

export const lightColors = {
  primary: Colors.light.primary,
  secondary: Colors.light.secondary,
  background: Colors.light.background,
  text: Colors.light.text,
  border: Colors.light.border,
  tint: Colors.light.tint,
  tabIconDefault: Colors.light.tabIconDefault,
  tabIconSelected: Colors.light.tabIconSelected,
};

export const darkColors = {
  primary: Colors.dark.primary,
  secondary: Colors.dark.secondary,
  background: Colors.dark.background,
  text: Colors.dark.text,
  border: Colors.dark.border,
  tint: Colors.dark.tint,
  tabIconDefault: Colors.dark.tabIconDefault,
  tabIconSelected: Colors.dark.tabIconSelected,
};

export type ColorScheme = typeof lightColors;
