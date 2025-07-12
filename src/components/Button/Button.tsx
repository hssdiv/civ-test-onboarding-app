import { PixelRatio, Platform, Pressable, PressableProps, View } from 'react-native';
import { Text } from '../Text';
import { useColors } from '../../styles';
import { useState } from 'react';

export const Button = ({
  text,
  onPress,
  style,
  ...rest
}: {
  text: string;
} & PressableProps) => {

  const colors = useColors();

  const [minHeight] = useState(56)

  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 30,
        minHeight,
      }}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: 'rgba(0, 0, 0, 0.4)',
        }}
        style={({ pressed }) => ({
          backgroundColor: Platform.OS === 'ios' ? pressed ? colors.buttonPressed : colors.primary : colors.primary,
          paddingVertical: (minHeight - PixelRatio.getFontScale() * 16) / 2,
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
            color: colors.textInverted,
          }}
        >
          {text}
        </Text>
      </Pressable>
    </View>
  );
};
