import axios from "axios";
import axiosRetry from 'axios-retry';

import { env } from "../../env.config";

export const api = axios.create({
  baseURL: `${env.API_URL}`,
});

axiosRetry(api, {
  retries: 3,
  retryDelay: retryCount => retryCount * 1000,
  shouldResetTimeout: true,
  retryCondition: (error) => {
    return axiosRetry.isNetworkError(error) || error.code === 'ECONNABORTED';
  },
  onRetry: (retryCount, error, requestConfig) => {
    console.log(`Retry attempt #${retryCount} for ${requestConfig.url}`);
  },
});
api.defaults.timeout = 5000;