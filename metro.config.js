// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config'); // wrapping config for improved reanimated errors

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig(config);
