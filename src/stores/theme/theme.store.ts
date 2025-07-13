import { create } from 'zustand';

type Theme = 'light' | 'dark';

interface ThemeStore {
  theme: Theme;
  toggleThemeChange: () => void;
}

export const useTheme = create<ThemeStore>()((set, get) => ({
  theme: 'light',
  toggleThemeChange: () =>
    set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
}));
