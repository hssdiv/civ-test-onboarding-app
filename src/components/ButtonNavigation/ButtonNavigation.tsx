import { Platform, Pressable, PressableProps, View } from 'react-native';
import { useColors } from '../../styles';
import { SvgCss } from 'react-native-svg/css';
import { useNavigation } from '@react-navigation/native';

export const ButtonNavigation = ({
  onPress,
  ...rest
}: PressableProps) => {

  const colors = useColors();

  const navigation = useNavigation();

  return (
    <View
      style={[
        {
          borderRadius: 20,
          overflow: 'hidden'
        },
      ]}
    >
      <Pressable
        onPress={onPress || (() => navigation.goBack() )}
        android_ripple={{
          color: 'rgba(0, 0, 0, 0.4)',
        }}
        style={({ pressed }) => ({
          backgroundColor: Platform.OS === 'ios' ? pressed ? 'lightgrey' : colors.buttonSmall : colors.buttonSmall,
          padding: 8,
          justifyContent: 'center',
          alignItems: 'center',
        })}
        hitSlop={{ top: 20, bottom: 20, right: 20, left: 20 }}
        {...rest}
      >
        <SvgCss
          xml={`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.8453 10L13.3335 15.4882C13.6589 15.8136 13.6589 16.3412 13.3335 16.6667C13.008 16.9921 12.4804 16.9921 12.1549 16.6667L5.48828 10L12.1549 3.33334C12.4804 3.0079 13.008 3.0079 13.3335 3.33334C13.6589 3.65877 13.6589 4.18641 13.3335 4.51185L7.8453 10Z" fill="${colors.buttonSecondaryContent}"/></svg>`}
          width={20}
          height={20}
        />
      </Pressable>
    </View>
  );
};
