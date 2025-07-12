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
    buttonSmall: palette.white,
    buttonPressed: palette.blueSecondary,
    background: palette.backgroundPrimary,
    backgroundSecondary: palette.white,
  },
  dark: {
    ...baseColors,
    text: palette.white,
    textInverted: palette.black,
    primary: palette.pink,
    buttonSmall: palette.buttonSmallDark,
    buttonPressed: palette.pinkSecondary,
    background: palette.backgroundDark,
    backgroundSecondary: palette.backgroundSecondaryDark,
  },
};

export const useColors = () => {
  const colorScheme = Appearance.getColorScheme();
  return colors[colorScheme || 'light'];
};
