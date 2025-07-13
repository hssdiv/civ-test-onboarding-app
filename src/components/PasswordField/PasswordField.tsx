import {
  TextInput,
  View,
  TouchableOpacity,
  ViewStyle,
  TextInputProps,
  StyleProp,
  Image,
} from 'react-native';

import { Text } from '../Text';
import { useColors } from '../../styles';
import { SvgUri } from 'react-native-svg';

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
  ...rest
}: PasswordFieldProps & TextInputProps) => {
  const colors = useColors();

  return (
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
      <View
        style={{
          justifyContent: 'center',
        }}
      >
        <TextInput
          ref={innerRef}
          testID="password"
          style={[
            {
              paddingEnd: 30,
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
        <TouchableOpacity
          onPress={() => {
            setSecure((prev) => !prev);
          }}
          hitSlop={{ top: 15, bottom: 15, right: 15 }}
          style={{
            position: 'absolute',
            right: 5,
          }}
        >
          <SvgUri
            width={24}
            height={24}
            // secure
            uri={
              Image.resolveAssetSource(
                require('../../../assets/files/Show.svg'),
              ).uri
            }
          />
        </TouchableOpacity>
      </View>
      {error ? (
        <Text style={{ color: colors.danger }}>{error}</Text>
      ) : null}
    </View>
  );
};
