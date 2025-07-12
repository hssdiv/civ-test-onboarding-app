import { View } from 'react-native';
import { useColors } from '../../styles';
import { Text } from '../Text';

export const Header = ({
  title,
  leftComponent,
  rightComponent,
}: {
  title?: string;
  leftComponent?: () => React.ReactElement;
  rightComponent?: () => React.ReactElement;
}) => {

  const colors = useColors();

  return (

    <View
      style={{
        backgroundColor: colors.background,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
      }}
    >
      {leftComponent ? (
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          {leftComponent()}
        </View>
      ) : null}

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <Text>{title}</Text>
      </View>

      {rightComponent ? (
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          {rightComponent()}
        </View>
      ) : null}
    </View>
  );
};
