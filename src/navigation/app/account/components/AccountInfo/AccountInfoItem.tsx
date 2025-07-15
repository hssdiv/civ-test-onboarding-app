import { TextStyle, View, ViewStyle } from 'react-native';
import { Text } from '../../../../../components';
import { useColors } from '../../../../../styles';

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

  const colors = useColors();
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
      <Text
        style={{
          maxWidth: '50%',
          color: colors.textSecondary,
        }}
      >
        {name}
      </Text>
      <Text
        style={[
          {
            maxWidth: '50%',
          },
          valueTextStyle
        ]}
      >
        {value || ''}
      </Text>
    </View>
  );
};
