import { Platform, Pressable, PressableProps, View, ViewStyle } from 'react-native';
import { Text } from '../Text';
import { useColors } from '../../styles';

export const ButtonSmall = ({
  text,
  onPress,
  containerStyle,
  style,
  ...rest
}: {
  text: string;
  containerStyle?: ViewStyle;
} & PressableProps) => {

  const colors = useColors();

  return (
    <View
      style={[
        {
          overflow: 'hidden',
          borderRadius: 30,
        },
        containerStyle,
      ]}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: 'rgba(0, 0, 0, 0.4)',
        }}
        style={({ pressed }) => ({
          backgroundColor: Platform.OS === 'ios' ? pressed ? 'lightgrey' : colors.buttonSmall : colors.buttonSmall,
          paddingVertical: 8,
          paddingHorizontal: 16,
          justifyContent: 'center',
          alignItems: 'center',
          ...(typeof style === 'object' ? style : {})
        })}
        hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
        {...rest}
      >
        <Text
          style={{
            color: colors.text,
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};
