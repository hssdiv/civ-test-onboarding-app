import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useTheme } from '../../../../../stores';
import { useColors } from '../../../../../styles';

export const ThemeSwitch = () => {
  const colors = useColors();

  const theme = useTheme((store) => store.theme);
  const toggleThemeChange = useTheme((store) => store.toggleThemeChange);

  return (
    <Pressable
      hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
      onPress={() => toggleThemeChange()}
    >
      <MaterialIcons
        name={theme === 'light' ? 'light-mode' : 'dark-mode'}
        size={24}
        color={colors.text}
      />
    </Pressable>

  );
};
