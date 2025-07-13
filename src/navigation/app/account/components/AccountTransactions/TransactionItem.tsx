import { PixelRatio, View, ViewStyle } from 'react-native';
import { Transaction } from '../../../../../types';
import { Text } from '../../../../../components';
import { formatPrice } from '../../helper/formatPrice';
import { useColors } from '../../../../../styles';

export const TransactionItem = ({
  transaction,
  containerStyle,
}: {
  transaction: Transaction
  containerStyle?: ViewStyle;
}) => {

  const colors = useColors();

  return (
    <View
      style={[
        {
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        containerStyle,
      ]}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            width: 36 * PixelRatio.getFontScale(),
            height: 36 * PixelRatio.getFontScale(),
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 18 * PixelRatio.getFontScale(),
            marginEnd: 12
          }}
        >
          <Text
            style={{
              color: colors.systemPrimary,
            }}
          >
            {transaction?.from?.substring(0, 1)}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <Text
              style={{
                fontWeight: '600',
              }}
            >
              {transaction?.from}
            </Text>
            <Text
              style={{
                fontSize: 12,
                opacity: 0.5,
              }}
            >
              {transaction?.bank + ' ' + transaction?.date}
            </Text>
          </View>

          <Text
            style={{
              fontWeight: 500,
              color: transaction.balance > 0 ? colors.systemSucceess : colors.text
            }}
          >
            {transaction.currency + formatPrice(transaction.balance)}
          </Text>
        </View>
      </View>
    </View>
  );
};
