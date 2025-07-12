import { Image, Platform, Pressable, PressableProps, View } from 'react-native';
import { useColors } from '../../styles';
import { useState } from 'react';
import { SvgUri } from 'react-native-svg';

export const ButtonNavigation = ({
  onPress,
  ...rest
}: PressableProps) => {

  const colors = useColors();
  const [minHeight] = useState(32)

  return (
    <View
      style={[
        {
          borderRadius: 16,
          minHeight,
          overflow: 'hidden'
        },
      ]}
    >
      <Pressable
        onPress={onPress}
        android_ripple={{
          color: 'rgba(0, 0, 0, 0.4)',
        }}
        style={({ pressed }) => ({
          backgroundColor: Platform.OS === 'ios' ? pressed ? 'lightgrey' : colors.buttonSmall : colors.buttonSmall,
          padding: (minHeight - 20) / 2,
          justifyContent: 'center',
          alignItems: 'center',
        })}
        hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
        {...rest}
      >
        <SvgUri
          width={20}
          height={20}
          color={colors.text}
          uri={
            Image.resolveAssetSource(
              require('../../../assets/files/chevron-left.svg'),
            ).uri
          }
        />
      </Pressable>
    </View>
  );
};
