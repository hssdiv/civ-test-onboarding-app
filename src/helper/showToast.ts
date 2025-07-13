import { AxiosError } from 'axios';

import Toast from 'react-native-toast-message';
import { getErrorMessage } from './getErrorMessage';

export const showToast = ({
  type,
  title,
  description,
  fallback,
  error,
}: {
  type?: 'info' | 'error' | 'success';
  title?: string;
  titleTx?: string;
  description?: string;
  descriptionTx?: string;
  fallback?: string;
  fallbackTx?: string;
  error?: AxiosError;
}) => {
  const descriptionOverride = error
    ? getErrorMessage(error)
    : description;

  Toast.show({
    type: error ? 'error' : type || 'success',
    text1: title,
    text2: descriptionOverride || fallback || '',
  });
};
