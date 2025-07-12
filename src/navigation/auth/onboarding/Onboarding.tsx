import { View } from 'react-native';
import { Background, Button, Layout, Text } from '../../../components';

export const Onboarding = () => {

  return (
    <Background>
      <Layout>
        <Text>You ought to know where your money goes</Text>
        <Text>Get an overview of how you are performing and motivate yourself to achieve even more.</Text>
        <Button text="Next" />
      </Layout>
    </Background>
  );
};
