import { Image, ScrollView, View } from 'react-native';
import { Background, ButtonNavigation, ButtonSmall, Header, Layout, Text } from '../../../components';
import { useAuth } from '../../../stores';
import { SvgUri } from 'react-native-svg';
import { AccountInfo, AccountTransactions, ThemeSwitch } from './components';

export const Account = () => {
  const signOut = useAuth(store => store.signOut);

  const accountData = useAuth(store => store.account)

  return (
    <Background>
      <Header
        title='My Account'
        leftComponent={() =>
          <ButtonNavigation
            onPress={() => signOut()}
          />
        }
        rightComponent={() =>
          <ThemeSwitch />
        }
      />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 200,
        }}
      >
        <Layout>
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
                  require('../../../../assets/files/kuda.svg'),
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

          <AccountInfo accountData={accountData} />

          <AccountTransactions
            transactions={accountData?.transactions}
            currency={accountData?.currency}
          />
        </Layout>
      </ScrollView>
    </Background >
  );
};
