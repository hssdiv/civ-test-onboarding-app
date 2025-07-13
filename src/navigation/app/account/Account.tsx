import { View } from 'react-native';
import { Background, ButtonNavigation, Header, Layout, Text } from '../../../components';
import { useAuth } from '../../../stores';

export const Account = () => {
  const signOut = useAuth(store => store.signOut);

  return (
    <Background>
      <Layout>
        <Header
          title='My Account'
          leftComponent={() =>
            <ButtonNavigation
              onPress={() => signOut()}
            />
          }
        />
      </Layout>
    </Background>
  );
};
