import {
  Text,
  TextInput as RNTextInput,
  View,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { useColors } from '../../styles';

interface TextInputProperties {
  innerRef?: any;
  label?: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  error?: string;
  rest?: TextInputProps;
  containerStyle?: ViewStyle;
}

export const TextInput = ({
  innerRef,
  label,
  value,
  onChangeText,
  placeholder,
  error,
  containerStyle,
  ...rest
}: TextInputProperties & TextInputProps) => {
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
        {label ? (
          <Text
            style={{
              fontSize: 10,
              color: colors.textTetriary,
              marginBottom: 8,
            }}
          >
            {label}
          </Text>
        ) : null}
        <RNTextInput
          ref={innerRef}
          placeholder={placeholder}
          value={value}
          style={{
            paddingRight: 10,
          }}
          onChangeText={onChangeText}
          numberOfLines={1}
          {...rest}
        />
      </View>
      {error ? (
        <Text
          style={{
            paddingTop: 4,
            color: colors.danger
          }}
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
};
