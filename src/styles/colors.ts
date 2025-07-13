import { palette } from './palette';
import { useTheme } from '../stores/theme/theme.store';

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
    titlePrimary: palette.primaryLight,
    primary: palette.primaryLight,
    buttonSmall: palette.white,
    buttonPressed: palette.blueSecondary,
    background: 'rgba(245, 247, 255, 1)',
    backgroundSecondary: palette.white,
    systemSucceess: 'rgba(0, 146, 24, 1)',
    systemPrimary: palette.primaryLight,
    buttonSecondaryContent: palette.black,
  },
  dark: {
    ...baseColors,
    text: palette.white,
    textSecondary: '#BFB4D5',
    textTetriary: '#ABA2BE',
    textInverted: palette.black,
    titlePrimary: '#F5F7FF',
    primary: 'rgba(229, 180, 255, 1)',
    buttonSmall: 'rgba(80, 63, 116, 1)',
    buttonPressed: 'rgba(229, 180, 235, 1)',
    background: 'rgba(36, 15, 81, 1)',
    backgroundSecondary: 'rgba(58, 39, 98, 1)',
    systemSucceess: 'rgba(96, 199, 113, 1)',
    systemPrimary: palette.white,
    buttonSecondaryContent: palette.white,
  },
};

export const 
useColors = () => {
  // const colorScheme = Appearance.getColorScheme();
  const colorScheme = useTheme((store) => store.theme);
  return colors[colorScheme || 'light'];
};
