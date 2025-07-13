import { AxiosError } from 'axios';

export const getErrorMessage = (error: AxiosError) => {
  if (!error) return '';
  if (!error.message && typeof error === 'string') return error;
  return error.message;
};
