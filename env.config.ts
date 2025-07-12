const baseEnv = {
  API_URL: 'https://artjoms-spole.fly.dev',
};

export const env = __DEV__ ? {
  ...baseEnv,
} : {
  ...baseEnv,
}