import { api } from "../api";

export const AuthApi = {
  signUp: async ({ name, email, password }: { name: string; email: string; password: string }) => {
    const url = `/signup`
    const result = await api.post(url, { name, email, password });
    return result.data;
  },
}