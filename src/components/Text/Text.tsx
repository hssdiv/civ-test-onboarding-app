import {
  Text as ReactNativeText,
  StyleProp,
  TextProps,
  TextStyle,
} from 'react-native';

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

  return (
    <ReactNativeText
      style={[
        ...(Array.isArray(style) ? style : [style]),
      ]}
      {...rest}
    >
      {content}
    </ReactNativeText>
  );
};
