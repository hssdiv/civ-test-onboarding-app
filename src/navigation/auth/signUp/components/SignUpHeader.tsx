import { View } from 'react-native';
import { Text } from '../../../../components';
import { useColors } from '../../../../styles';

export const SignUpHeader = () => {
  const colors = useColors();

  return (
    <View>
      <Text
        style={{
          marginTop: 36,
          fontSize: 32,
          color: colors.titlePrimary,
        }}
      >
        Create account
      </Text>
      <Text
        style={{
          color: colors.textSecondary,
          fontSize: 16,
          marginTop: 8,
          marginBottom: 32,
        }}
      >
        Complete the sign up to get started
      </Text>
    </View>
  );
};
