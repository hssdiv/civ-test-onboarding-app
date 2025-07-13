import {
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';
import { useColors } from '../../styles';
import { SvgUri } from 'react-native-svg';

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
            <SvgUri
              width={24}
              height={24}
              uri={
                Image.resolveAssetSource(
                  require('../../../assets/files/checkbox-checked.svg'),
                ).uri
              }
            />

          ) : (
            <SvgUri
              width={24}
              height={24}
              style={{

              }}
              uri={
                Image.resolveAssetSource(
                  require('../../../assets/files/checkbox-default.svg'),
                ).uri
              }
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
