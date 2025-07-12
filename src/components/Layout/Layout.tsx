import { ReactNode } from 'react';

import { View, ViewStyle } from 'react-native';

export const Layout = ({
  style,
  children,
}: {
  style?: ViewStyle;
  children?: ReactNode | ReactNode[];
}) => {
  return <View style={[{ flex: 1, marginHorizontal: 20 }, style]}>{children}</View>;
};
