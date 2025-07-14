import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { useColors } from '../../styles';
import { SvgCss } from 'react-native-svg/css'

export const CheckboxText = ({
  checked,
  onChange,
  text,
  component,
  error,
}: {
  checked: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
  component?: React.ReactElement;
  error?: string;
}) => {

  const colors = useColors();

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          onChange?.(!checked);
        }}
        style={{
          borderRadius: 3,
          borderWidth: error ? 1 : 0,
          borderColor: error ? colors.danger : 'transparent',
        }}
        hitSlop={{ top: 5, left: 10, bottom: 5, right: 10 }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {checked ? (
            <SvgCss
              xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_116_1514)"><rect x="4" y="4" width="16" height="16" rx="4" fill="${colors.buttonPrimary}"/><rect x="4.5" y="4.5" width="15" height="15" rx="3.5" stroke="#2C14DD" stroke-opacity="0.1"/><path d="M15.7647 9.20479C15.9095 9.34141 15.9941 9.52984 15.9997 9.72864C16.0053 9.92744 15.9316 10.1203 15.7947 10.2649L11.5347 14.7654C11.4656 14.8382 11.3826 14.8965 11.2907 14.9368C11.1987 14.9771 11.0995 14.9985 10.9991 14.9999C10.8986 15.0013 10.7989 14.9826 10.7058 14.9449C10.6127 14.9072 10.5282 14.8513 10.4571 14.7804L8.20177 12.5302C8.06898 12.388 7.99668 12.1999 8.00012 12.0056C8.00355 11.8113 8.08245 11.6259 8.22019 11.4884C8.35793 11.351 8.54376 11.2723 8.73852 11.2689C8.93328 11.2654 9.12177 11.3376 9.26429 11.47L10.9733 13.1742L14.7022 9.23479C14.8391 9.09027 15.0279 9.00593 15.2272 9.0003C15.4264 8.99467 15.6198 9.06823 15.7647 9.20479Z" fill="white"/></g><defs><clipPath id="clip0_116_1514"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>`}
              width={24}
              height={24}
            />
          ) : (
            <SvgCss
              xml={`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="4" width="16" height="16" rx="4" fill="white"/><rect x="4.5" y="4.5" width="15" height="15" rx="3.5" stroke="${colors.buttonPrimary}" stroke-opacity="0.1"/></svg>`}
              width={24}
              height={24}
            />
          )}
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              paddingHorizontal: 14,
            }}
          >
            {component || (
              <Text
                style={{
                  color: colors.text,
                  fontWeight: '500',
                }}
              >
                {text}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
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
    </>
  );
};
