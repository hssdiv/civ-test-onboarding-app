import { ViewStyle } from 'react-native';
import { ErrorToast, SuccessToast } from 'react-native-toast-message';

import { useColors } from '../styles';

const toastStyle: ViewStyle = {
  maxWidth: '90%',
  borderLeftWidth: 1,
  elevation: 4,
  shadowOffset: {
    width: 2,
    height: 5,
  },
  shadowOpacity: 0.3,
};

export const useGetToastConfig = () => {
  const colors = useColors();

  return {
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          color: colors.textInverted,
        }}
        text2Style={{
          color: colors.textInverted,
        }}
        text1NumberOfLines={3}
        text2NumberOfLines={3}
        style={{
          ...toastStyle,
          backgroundColor: colors.danger,
          borderLeftColor: colors.danger,
          shadowColor: 'black',
        }}
      />
    ),
    success: (props) => (
      <SuccessToast
        {...props}
        text1Style={{
          color: colors.textInverted,
        }}
        text2Style={{
          color: colors.textInverted,
        }}
        text1NumberOfLines={3}
        text2NumberOfLines={3}
        style={{
          ...toastStyle,
          backgroundColor: colors.primary,
          borderLeftColor: colors.primary,
          shadowColor: 'black',
        }}
      />
    ),
  };
};
