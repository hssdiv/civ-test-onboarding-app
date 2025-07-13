import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { showToast, withAlert } from '../../helper';
import { AuthApi } from '../../services';
import { AccountData, CreateAccountForm } from '../../types';
import { AxiosError } from 'axios';

interface AuthStore {
  loading: boolean;
  onboardingFinished: boolean;
  onFinishedOnboarding: () => void;
  account: AccountData | null;
  setAccount: (newAccount: AccountData) => void;
  signUp: (data: CreateAccountForm) => Promise<AccountData | void>;
  signOut: () => void;
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

          const signUpRequestResult = await AuthApi.signUp(data);
          console.log('signup result: ', signUpRequestResult)

          if (signUpRequestResult?.message === 'User signup successful!') {
            showToast({ description: 'Account successfully created' });

            const accountRequestResult = await AuthApi.getAccount(signUpRequestResult.basicAuthCredentials)
            console.log(`accountRequestResult is: ${JSON.stringify(accountRequestResult)}`);

            if (accountRequestResult) {
              // hotfix, while API doesn't return data correctly
              const accountFixed = {
                ...accountRequestResult,
                id:  Number(accountRequestResult.accountType),
                bank: 'Kuda Bank',
                accountRequestResult: 'Savings'
              }

              set({ account: accountFixed });
              return accountFixed;
            } else {
              showToast({ error: new AxiosError("Couldn't load account data") });
            }
          } else {
            showToast({ description: signUpRequestResult?.message });
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
      signOut: () => {
        withAlert({
          title: 'Logout?',
          callback: async () => {
            set({ account: null });
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
