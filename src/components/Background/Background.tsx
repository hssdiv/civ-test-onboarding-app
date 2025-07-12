import { ReactNode } from 'react';

import { ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColors } from '../../styles';

export const Background = ({
  children,
  style,
}: {
  children?: ReactNode | ReactNode[];
  style?: ViewStyle;
}) => {
  const colors = useColors()

  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: colors.background }, style]}
    >
      {children}
    </SafeAreaView>
  );
};
