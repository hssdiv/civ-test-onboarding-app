import { Appearance } from 'react-native';
import { palette } from './palette';

const baseColors = {
  danger: palette.red,
};

const colors = {
  light: {
    ...baseColors,
    text: palette.black,
    textInverted: palette.white,
    primary: palette.blueMain, 
    buttonPressed: palette.blueSecondary,
    background: palette.backgroundPrimary,
  },
  dark: {
    ...baseColors,
    text: palette.white,
    textInverted: palette.black,
    primary: palette.pink,
    buttonPressed: palette.pinkSecondary,
    background: palette.backgroundDark,
  },
};

export const useColors = () => {
  const colorScheme = Appearance.getColorScheme();
  return colors[colorScheme || 'light'];
};
