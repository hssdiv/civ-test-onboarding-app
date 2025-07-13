import { View } from 'react-native';
import { useColors, styles } from '../../../../../styles';
import { Text } from '../../../../../components';
import { Transaction } from '../../../../../types';
import { TransactionItem } from './TransactionItem';

export const AccountTransactions = ({
  transactions,
  currency = '',
}: {
  transactions?: Transaction[]
  currency?: string;
}) => {
  const colors = useColors();

  return (
    <View
      style={{
        ...styles.infoArea,
        backgroundColor: colors.backgroundSecondary,
        marginTop: 24
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Recent Transactions</Text>
        <Text>{'>'}</Text>
      </View>

      {transactions?.map((transaction, index) => (
        <TransactionItem
          key={index}
          transaction={transaction}
          currency={currency}
          containerStyle={{
            marginTop: index === 0 ? 24 : 0,
            paddingBottom: 24,
          }}
        />
      ))}
    </View>
  );
};
