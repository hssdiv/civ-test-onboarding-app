import { AccountData, CreateAccountForm, SignInForm, SignUpResult } from "../../types";
import { api } from "../api";

export const AuthApi = {
  signUp: async ({ name, email, password }: CreateAccountForm): Promise<SignUpResult> => {
    const url = '/signup'
    const result = await api.post(url, { name, email, password });
    return result.data;
  },
  getAccount: async ({ username, password }: SignInForm): Promise<AccountData> => {
    const url = '/account'
    const result = await api.get(url, {
      auth:
      {
        username,
        password
      }
    });
    return result.data;
  },
}