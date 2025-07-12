import {
  Text,
  TextInput as RNTextInput,
  View,
  TextInputProps,
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
}

export const TextInput = ({
  innerRef,
  label,
  value,
  onChangeText,
  placeholder,
  error,
  ...rest
}: TextInputProperties & TextInputProps) => {
  const colors = useColors();

  return (
    <>
      {label ? (
        <Text style={{}}>
          {label}
        </Text>
      ) : null}
      <View
        style={{
          marginBottom: 6,
        }}
      >
        <RNTextInput
          ref={innerRef}
          placeholder={placeholder}
          value={value}
          style={[
            {
              width: '100%',
              minHeight: 40,
              paddingLeft: 10,
              paddingRight: 10,
            },
            {
              borderColor: error ? colors.danger : colors.primary,
            },
          ]}
          onChangeText={onChangeText}
          numberOfLines={1}
          {...rest}
        />
        {error ? (
          <Text style={{ color: colors.danger }}>{error}</Text>
        ) : null}
      </View>
    </>
  );
};
