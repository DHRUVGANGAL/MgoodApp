/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#3b82f6';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#1f2937',
    secondaryText: '#4b5563',
    background: '#ffffff',
    backgroundOffset: '#f9fafb',
    backgroundOffset2: '#f1f5f9',
    tint: tintColorLight,
    icon: '#68798b',
    tabIconDefault: '#6b7280',
    tabIconSelected: tintColorLight,
    border: '#e5e7eb',
    card: '#ffffff',
  },
  dark: {
    text: '#ECEDEE',
    secondaryText: '#9BA1A6',
    background: '#151718',
    backgroundOffset: '#1E2021',
    backgroundOffset2: '#232526',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    border: '#353636',
    card: '#1E2021',
  },
};
