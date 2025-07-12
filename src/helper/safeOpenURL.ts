import * as Clipboard from 'expo-clipboard';
import { Alert, Linking } from 'react-native';;

export const safeOpenURL = async (url: string) => {
  const canOpen = await Linking.canOpenURL(url);
  if (canOpen) {
    Linking.openURL(url);
  } else {
    const title = 'Error opening URL';
    const buttonText = 'Copy URL';
    const cancel = 'Cancel';
    Alert.alert(title, url, [
      {
        text: cancel,
        style: 'destructive',
      },
      {
        text: buttonText,
        onPress: async () => {
          Clipboard.setStringAsync(url);
        },
      },
    ]);
  }
};
