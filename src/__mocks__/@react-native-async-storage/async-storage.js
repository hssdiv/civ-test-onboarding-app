// __mocks__/@react-native-async-storage/async-storage.js
const mockAsyncStorage = {};

export default {
  setItem: jest.fn((key, value) => {
    return new Promise((resolve) => {
      mockAsyncStorage[key] = value;
      resolve(null);
    });
  }),
  getItem: jest.fn((key) => {
    return new Promise((resolve) => {
      resolve(mockAsyncStorage[key] || null);
    });
  }),
  removeItem: jest.fn((key) => {
    return new Promise((resolve) => {
      delete mockAsyncStorage[key];
      resolve(null);
    });
  }),
  clear: jest.fn(() => {
    return new Promise((resolve) => {
      for (const key in mockAsyncStorage) {
        delete mockAsyncStorage[key];
      }
      resolve(null);
    });
  }),
};