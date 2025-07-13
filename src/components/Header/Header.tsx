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
        paddingHorizontal: 16,
      }}
    >

      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
        }}
      >
        {leftComponent?.()}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text
          style={{ fontSize: 16 }}
        >
          {title}
        </Text>
      </View>


      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {rightComponent?.()}
      </View>

    </View>
  );
};
