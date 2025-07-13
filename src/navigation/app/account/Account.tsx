import { Image, ScrollView, View } from 'react-native';
import { Background, ButtonNavigation, ButtonSmall, Header, Layout, Text } from '../../../components';
import { useAuth } from '../../../stores';
import { useEffect, useState } from 'react';
import { getFakeAccountData } from './helper/getFakeAccountData';
import { AccountData } from '../../../types';
import { SvgUri } from 'react-native-svg';
import { AccountInfo, AccountTransactions } from './components';
import { useColors } from '../../../styles';

export const Account = () => {
  const signOut = useAuth(store => store.signOut);

  const colors = useColors();

  const [accountData, setAccountData] = useState<AccountData>()

  useEffect(() => {
    const newAccountData = getFakeAccountData()
    setAccountData(newAccountData);
  }, []);

  return (
    <Background>
      <Header
        title='My Account'
        leftComponent={() =>
          <ButtonNavigation
            onPress={() => signOut()}
          />
        }
      // rightComponent={() =>
      //   <ButtonSmall
      //     text='test'
      //     onPress={() => { }}
      //   />
      // }
      />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 200,
        }}
      >
        <Layout>
          <View style={{ alignItems: 'center' }}>
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
                fontWeight: 'bold',
              }}>
              {accountData?.bank}
            </Text>
          </View>

          <AccountInfo accountData={accountData} />

          <AccountTransactions
            transactions={accountData?.transactions}
          />
        </Layout>
      </ScrollView>
    </Background >
  );
};
