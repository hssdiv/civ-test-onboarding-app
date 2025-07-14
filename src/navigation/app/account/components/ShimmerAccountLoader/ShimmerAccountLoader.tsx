import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { AccountBank } from '../AccountBank';
import { Layout } from '../../../../../components';
import { Dimensions, PixelRatio } from 'react-native';

export const ShimmerAccountLoader = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

  return (
    <Layout>
      <AccountBank />
      <ShimmerPlaceholder
        width={Dimensions.get('screen').width * 0.9}
        height={48 + PixelRatio.getFontScale() * 14 * 1.2 * 4 + 48}
        style={{
          marginTop: 40,
          borderRadius: 16,
        }}
      />
      <ShimmerPlaceholder
        width={Dimensions.get('screen').width * 0.9}
        style={{
          marginTop: 24,
          borderRadius: 16,
        }}
        height={24 + 24 + 20 + 24 * 5 + 36 * PixelRatio.getFontScale() * 4}
      />
    </Layout>
  );
};
