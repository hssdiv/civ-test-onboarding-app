import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { showToast } from '../../helper';
import { AuthApi } from '../../services';
import { CreateAccountForm } from '../../types';

interface AuthStore {
  loading: boolean;
  onboardingFinished: boolean;
  onFinishedOnboarding: () => void;
  token: string;
  signUp: (data: CreateAccountForm) => Promise<string>;
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
      token: '',
      signUp: async (data: CreateAccountForm) => {
        try {
          set({ loading: true });

          const result = await AuthApi.signUp(data);
          console.log('signup result: ', result)
          // const token = result?.token || '';
          const fakeToken = Math.random().toString()

          set({ token: fakeToken });

          return fakeToken;
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
        return ''
      },
      signOut: () => {
        set({ token: '' });
      },
    })),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        token: state.token,
        onboardingFinished: state.onboardingFinished,
      }),
    },
  ),
);
