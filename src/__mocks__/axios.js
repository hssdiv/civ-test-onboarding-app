// __mocks__/axios.js
export default {
  get: jest.fn(() => Promise.resolve({ data: { } })),
  post: jest.fn(() => Promise.resolve({ data: { message: 'User signup successful!' } })),
  create: () => ({
    get: jest.fn(() => Promise.resolve({ data: { } })),
    post: jest.fn(() => Promise.resolve({ data: { message: 'User signup successful!' } })),
    defaults: {
      timeout: 5000,
    },
  }),
  defaults: {
    timeout: 5000,
  },
};