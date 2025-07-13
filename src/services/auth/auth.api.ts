import { CreateAccountForm } from "../../types";
import { api } from "../api";

export const AuthApi = {
  signUp: async ({ name, email, password }: CreateAccountForm) => {
    const url = '/signup'
    const result = await api.post(url, { name, email, password });
    return result.data;
  },
}