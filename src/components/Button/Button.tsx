import { ActivityIndicator, Platform, Pressable, PressableProps, View, ViewStyle } from 'react-native';
import { Text } from '../Text';
import { useColors } from '../../styles';

export const Button = ({
  text,
  onPress,
  loading,
  containerStyle,
  style,
  ...rest
}: {
  text: string;
  loading?: boolean;
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
          backgroundColor: Platform.OS === 'ios' ? pressed ? colors.buttonPressed : colors.primary : colors.primary,
          paddingVertical: 16,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          ...(typeof style === 'object' ? style : {})
        })}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        {...rest}
      >
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '600',
            color: colors.buttonPrimaryContent,
          }}
        >
          {loading ? null : text}
        </Text>
        {loading ?
          <ActivityIndicator
            animating
            color={colors.buttonPrimaryContent}
          /> : null}
      </Pressable>
    </View>
  );
};
