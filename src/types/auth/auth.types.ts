export interface CreateAccountForm {
  name: string;
  email: string;
  password: string;
  terms: boolean;
}

export interface SignUpResult {
  message: "User signup successful!",
  nextStep: "Get account details from /account endpoint. Use Basic Auth for this request",
  basicAuthCredentials: {
    username: string;
    password: string;
  }
}
