import { screen, render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { SignUp } from '../navigation/auth/signUp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

let consoleLogSpy;

beforeEach(() => {
  consoleLogSpy = jest.spyOn(console, 'log');
  AsyncStorage.clear();
});

afterEach(() => {
  consoleLogSpy.mockRestore();
});

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
  }),
}));
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

jest.mock('axios');
jest.mock('axios-retry');

const MockSignUp = () => (<NavigationContainer><SignUp navigation={mockNavigation} /></NavigationContainer>)

describe('SignUp tests', () => {
  test('Name value renders correctly', async () => {
    const { getByTestId } = render(<MockSignUp />);

    const name = getByTestId('SignUpName')

    await act(async () => {
      fireEvent.changeText(name, { target: { value: '123' } })
    });

    const newUsernameValue = await waitFor(() => screen.getByDisplayValue(/123/));
    expect(newUsernameValue).toBeOnTheScreen();
  });

  test('email error shows up', async () => {
    const { getByTestId } = render(<MockSignUp />);

    const button = getByTestId('SignUpButton')

    await act(async () => {
      fireEvent.press(button)
    });

    const error = await waitFor(() => screen.getByText(/E-mail is required/));
    expect(error).toBeOnTheScreen();
  });

  test('no errors show up as form is filled correctly', async () => {
    const { getByTestId } = render(<MockSignUp />);

    const button = getByTestId('SignUpButton')

    const name = getByTestId('SignUpName')
    const email = getByTestId('SignUpEmail')
    const password = getByTestId('SignUpPassword')
    const terms = getByTestId('SignUpTerms')

    await act(async () => {
      fireEvent.changeText(name, { target: { value: '123' } })
      fireEvent.changeText(email, { target: { value: 'asd@asd.com' } })
      fireEvent.changeText(password, { target: { value: '123123' } })
      fireEvent.press(terms)
      fireEvent.press(button)
    });

    expect(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining('signup result: '),
      expect.objectContaining({ message: 'User signup successful!' }))
  });
});

