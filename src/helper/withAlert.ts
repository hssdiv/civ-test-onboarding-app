import { Alert } from 'react-native';

export const withAlert = ({
  title,
  message,
  yesText,
  noText,
  callback,
}: {
  title?: string;
  message?: string;
  yesText?: string;
  noText?: string;
  callback: () => any;
}) =>
  new Promise((resolve, reject) => {
    const titleOverride = title || 'Are you sure?';
    const yesOverride = yesText || 'Yes';
    const noOverride = noText || 'No';

    Alert.alert(
      titleOverride,
      message,
      [
        {
          text: noOverride,
          style: 'cancel',
        },
        {
          text: yesOverride,
          onPress: async () => {
            try {
              const result = await callback();
              resolve(result || { success: true });
            } catch (error) {
              reject(error);
            }
          },
        },
      ],
      { cancelable: true },
    );
  });
