import { Image, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Text } from '../../../../../components';

export const AccountBank = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginTop: 28,
      }}
    >
      <SvgUri
        width={48}
        height={48}
        uri={
          Image.resolveAssetSource(
            require('../../../../../../assets/files/kuda.svg'),
          ).uri
        }
      />
      <Text
        style={{
          paddingTop: 17,
          fontWeight: '600',
        }}>
        Kuda Bank
      </Text>
    </View>
  );
};
