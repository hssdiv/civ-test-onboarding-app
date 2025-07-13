import {
  Text as ReactNativeText,
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native';
import { useColors } from '../../styles';

interface TextProperties {
  text?: string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  rest?: TextProps;
}

export const Text = ({
  text,
  style,
  children,
  ...rest
}: TextProperties & TextProps) => {
  let content = text || children;

  const colors = useColors();

  return (
    <ReactNativeText
      style={[
        { color: colors.text },
        ...(Array.isArray(style) ? style : [style]),
      ]}
      {...rest}
    >
      {content}
    </ReactNativeText>
  );
};
