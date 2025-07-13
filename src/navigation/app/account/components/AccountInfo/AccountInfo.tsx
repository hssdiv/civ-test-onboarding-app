import { View } from 'react-native';
import { AccountInfoItem } from './AccountInfoItem';
import { useColors, styles } from '../../../../../styles';
import { AccountData } from '../../../../../types';
import { formatPrice } from '../../helper/formatPrice';

export const AccountInfo = ({
  accountData
}: {
  accountData?: AccountData
}) => {

  const colors = useColors();

  return (
    <View
      style={{
        ...styles.infoArea,
        backgroundColor: colors.backgroundSecondary,
        marginTop: 40,
      }}
    >
      <AccountInfoItem
        name="Type of account"
        value={accountData?.type}
      />
      <AccountInfoItem
        name="Account No"
        value={accountData?.id}
        style={{
          paddingTop: 16,
        }}
      />

      <AccountInfoItem
        name="Avaliable Balance"
        value={(accountData?.currency || '') + formatPrice(accountData?.balance)}
        style={{
          paddingTop: 16,
        }}
      />

      <AccountInfoItem
        name="Date added"
        value={accountData?.created_at}
        style={{
          paddingTop: 16,
        }}
      />
    </View>
  );
};
