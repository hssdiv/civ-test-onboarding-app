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
        value={accountData?.accountType}
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
        value={(accountData?.currency || '') + formatPrice(accountData?.availableBalance)}
        style={{
          paddingTop: 16,
        }}
        valueTextStyle={Number.isInteger(accountData?.availableBalance) &&
          Number(accountData?.availableBalance) > 0 ?
          {
            color: colors.systemSucceess,
          }
          :
          undefined}
      />

      <AccountInfoItem
        name="Date added"
        value={accountData?.dateAdded}
        style={{
          paddingTop: 16,
        }}
      />
    </View>
  );
};
