import {
  TextInput,
  View,
  TouchableOpacity,
  ViewStyle,
  TextInputProps,
  StyleProp,
} from 'react-native';

import { Text } from '../Text';
import { useColors } from '../../styles';
import { SvgCss } from 'react-native-svg/css';

interface PasswordFieldProps {
  innerRef?: React.RefObject<TextInput>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  labelText?: string;
  secure: boolean;
  setSecure: React.Dispatch<React.SetStateAction<boolean>>;
  onBlur?: () => void;
  style?: StyleProp<ViewStyle>;
  error?: string;
  errorTx?: string;
  containerStyle?: ViewStyle;
}

export const PasswordField = ({
  innerRef,
  value,
  setValue,
  labelText,
  secure,
  setSecure,
  onBlur,
  style,
  error,
  containerStyle,
  ...rest
}: PasswordFieldProps & TextInputProps) => {
  const colors = useColors();

  return (
    <View
      style={containerStyle}
    >
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 20,
          backgroundColor: colors.backgroundSecondary,
          borderRadius: 10,
          borderWidth: error ? 1 : 0,
          borderColor: error ? colors.danger : colors.primary,
        }}
      >
        <View
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <View
            style={{ flex: 1 }}
          >
            {labelText ? (
              <Text
                style={{
                  fontSize: 10,
                  color: colors.textTetriary,
                  marginBottom: 8,
                }}
                text={labelText}
              />
            ) : null}
            <TextInput
              hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }}
              ref={innerRef}
              testID="password"
              style={[
                {
                  flex: 1,
                  padding: 0,
                  paddingEnd: 30,
                  color: colors.text,
                },
                style,
              ]}
              placeholder={'Enter Password'}
              placeholderTextColor={colors.textTetriary}
              value={value}
              onChangeText={setValue}
              secureTextEntry={secure}
              autoCapitalize="none"
              {...rest}
            />

          </View>
          <TouchableOpacity
            onPress={() => {
              setSecure((prev) => !prev);
            }}
            hitSlop={{ top: 15, bottom: 15, right: 15 }}
          >
            <SvgCss
              xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0012 14.4124C13.3378 14.4124 14.4304 13.3264 14.4304 11.9979C14.4304 10.6597 13.3378 9.57362 12.0012 9.57362C11.8841 9.57362 11.767 9.58332 11.6597 9.60272C11.6207 10.6694 10.7426 11.5227 9.65971 11.5227H9.61093C9.58166 11.6779 9.56215 11.833 9.56215 11.9979C9.56215 13.3264 10.6548 14.4124 12.0012 14.4124Z" fill="${colors.buttonPrimary}"/></svg>`}
              width={24}
              height={24}
            />
          </TouchableOpacity>
        </View>
      </View>
      {
        error ? (
          <Text style={{ color: colors.danger }}>{error}</Text>
        ) : null
      }
    </View >
  );
};
