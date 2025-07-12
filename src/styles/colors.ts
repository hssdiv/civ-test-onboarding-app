import { Appearance } from 'react-native';
import { palette } from './palette';

const baseColors = {
  danger: palette.red,
};

const colors = {
  light: {
    ...baseColors,
    text: '#131313',
    textSecondary: '#6C727F',
    textTetriary: '#8F94A3',
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
    textSecondary: '#BFB4D5',
    textTetriary: '#ABA2BE',
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
