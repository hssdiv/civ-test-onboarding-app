import { Platform, Pressable, PressableProps, View } from 'react-native';
import { Text } from '../Text';
import { useColors } from '../../styles';

export const Button = ({
  text,
  onPress,
  ...rest
}: {
  text: string;
} & PressableProps) => {

  const colors = useColors();

  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 30,
        flex: 1,
        minHeight: 56,
      }}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: 'rgba(0, 0, 0, 0.2)',
        }}
        style={({ pressed }) => ({
          backgroundColor: Platform.OS === 'ios' ? pressed ? colors.buttonPressed : colors.button : colors.button,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        })}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        {...rest}
      >
        <Text
          style={{
            fontSize: 16,
            color: colors.textInverted,
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};
