import { View } from 'react-native';
import { Transaction } from '../../../../../types';
import { Text } from '../../../../../components';
import { formatPrice } from '../../helper/formatPrice';

export const TransactionItem = ({
  transaction
}: {
  transaction: Transaction
}) => {

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View>
          <Text>{transaction?.from?.substring(0, 1)}</Text>
        </View>

        <View>
          <Text>{transaction?.from}</Text>
          <Text>{transaction?.bank + ' ' + transaction?.date}</Text>
        </View>
      </View>

      <Text>{transaction.currency + formatPrice(transaction.balance)}</Text>
    </View>
  );
};
