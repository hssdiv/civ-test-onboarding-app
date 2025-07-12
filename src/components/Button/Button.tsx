import { Platform, Pressable, PressableProps, View, ViewStyle } from 'react-native';
import { Text } from '../Text';
import { useColors } from '../../styles';
import { useState } from 'react';

export const Button = ({
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

  const [minHeight] = useState(56)

  return (
    <View
      style={[
        {
          overflow: 'hidden',
          borderRadius: 30,
          minHeight,
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
          backgroundColor: Platform.OS === 'ios' ? pressed ? colors.buttonPressed : colors.primary : colors.primary,
          paddingVertical: 16,
          justifyContent: 'center',
          alignItems: 'center',
          ...(typeof style === 'object' ? style : {})
        })}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        {...rest}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: colors.textInverted,
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};
