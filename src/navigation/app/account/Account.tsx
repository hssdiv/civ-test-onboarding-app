import { ScrollView } from 'react-native';
import { Background, ButtonNavigation, Header, Layout } from '../../../components';
import { useAuth } from '../../../stores';
import { AccountBank, AccountInfo, AccountSignIn, AccountTransactions, ShimmerAccountLoader, ThemeSwitch } from './components';
import { useNavigation } from '@react-navigation/native';
import { RootScreensNavigation } from '../../root.stack';

export const Account = () => {
  const signOut = useAuth(store => store.signOut);

  const loading = useAuth(store => store.loading)
  const accountData = useAuth(store => store.account)

  const navigation = useNavigation<RootScreensNavigation>();

  return (
    <Background>
      <Header
        title='My Account'
        leftComponent={() =>
          <ButtonNavigation
            onPress={() => {
              signOut({
                withConfirmation: Boolean(accountData),
                onSignOutCallback: () => {
                  navigation.reset({
                    index: 1,
                    routes: [
                      { name: 'Auth', params: { screen: 'SignUp' } },
                    ],
                  });
                }
              })

            }}
          />
        }
        rightComponent={() =>
          <ThemeSwitch />
        }
      />
     {loading ? (
        <ShimmerAccountLoader />
      ) : accountData ? (
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 200,
          }}
        >
          <Layout>
            <AccountBank />

            <AccountInfo accountData={accountData} />

            <AccountTransactions
              transactions={accountData?.transactions}
              currency={accountData?.currency}
            />
          </Layout>
        </ScrollView>
      ) : (
        <AccountSignIn />
      )}
    </Background >
  );
};
