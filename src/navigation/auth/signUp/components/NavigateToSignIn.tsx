import { View } from 'react-native';
import { Text } from '../../../../components';
import { useColors } from '../../../../styles';
import { useNavigation } from '@react-navigation/native';
import { RootScreensNavigation } from '../../../root.stack';

export const NavigateToSignIn = () => {
  const colors = useColors();

  const navigation = useNavigation<RootScreensNavigation>();

  return (
      <Text
        style={{
          textAlign: 'center',
        }}
      >
        Already have an account?{' '}
        <Text
          style={{ color: colors.primary }}
          onPress={() => {
            navigation.navigate('App', { screen: 'Account' })
          }}
        >
          Sign in
        </Text>
      </Text>
  );
};
