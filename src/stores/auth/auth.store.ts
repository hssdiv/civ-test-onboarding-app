import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { showToast, withAlert } from '../../helper';
import { AuthApi } from '../../services';
import { AccountData, CreateAccountForm, SignInForm, SignUpResult } from '../../types';
import { AxiosError } from 'axios';

interface AuthStore {
  loading: boolean;
  onboardingFinished: boolean;
  onFinishedOnboarding: () => void;
  account: AccountData | null;
  setAccount: (newAccount: AccountData) => void;
  signUp: (data: CreateAccountForm) => Promise<SignUpResult | void>;
  getAccount: ({ username, password }: SignInForm) => Promise<AccountData | void>;
  signOut: ({ onSignOutCallback }: { onSignOutCallback?: () => void }) => void;
}

export const useAuth = create<AuthStore>()(
  persist(
    immer((set) => ({
      loading: false,
      onboardingFinished: false,
      onFinishedOnboarding: () => {
        set({ onboardingFinished: true })
      },
      account: null,
      setAccount: (newAccount) => set({ account: newAccount }),
      signUp: async (data: CreateAccountForm) => {
        try {
          set({ loading: true });

          const result = await AuthApi.signUp(data);
          console.log('signup result: ', result)

          if (result?.message === 'User signup successful!') {
            // showToast({ description: 'Account successfully created' });
            return result;
          } else {
            showToast({ error: new AxiosError(result?.message || '') });
          }
        } catch (error: any) {
          console.log('signup error:');
          console.log(error?.message);
          showToast({
            title: 'Error',
            error,
          });
        } finally {
          set({ loading: false });
        }
      },
      getAccount: async ({ username, password }) => {
        try {
          set({ loading: true });
          const result = await AuthApi.getAccount({ username, password })
          console.log(`result is: ${JSON.stringify(result)}`);

          if (result) {
            // hotfix, while API doesn't return data correctly
            const accountFixed: AccountData = {
              ...result,
              id: Number(result.accountType),
              accountType: 'Savings'
            }

            set({ account: accountFixed });
            return accountFixed;
          } else {
            showToast({ error: new AxiosError("Couldn't load account data") });
          }
        } catch (error: any) {
          console.log('getaccount error:');
          console.log(error?.message);
          showToast({
            title: 'Error',
            error,
          });
        } finally {
          set({ loading: false });
        }
      },
      signOut: ({ onSignOutCallback }) => {
        withAlert({
          title: 'Logout?',
          callback: async () => {
            set({ account: null });
            onSignOutCallback?.();
          },
        });
      },
    })),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        account: state.account,
        onboardingFinished: state.onboardingFinished,
      }),
    },
  ),
);
