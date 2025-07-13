import { TextStyle, View, ViewStyle } from 'react-native';
import { Text } from '../../../../../components';

export const AccountInfoItem = ({
  name,
  value,
  style,
  valueTextStyle,
}: {
  name: string;
  value?: string | number;
  style?: ViewStyle;
  valueTextStyle?: TextStyle;
}) => {

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        style
      ]}
    >
      <Text>{name}</Text>
      <Text style={valueTextStyle}>{value || ''}</Text>
    </View>
  );
};
