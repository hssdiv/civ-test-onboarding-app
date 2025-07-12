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
}: {
  checked: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
  component?: React.ReactElement;
}) => {

  const colors = useColors();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onChange?.(!checked);
      }}
      style={[
        {
          borderRadius: 3,
        },
      ]}
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
              }}
            >
              {text}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
