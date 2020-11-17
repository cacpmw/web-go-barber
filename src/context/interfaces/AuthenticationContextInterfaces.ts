interface IAuthenticationData {
  token: string;
  user: object;
}

interface ISignInCredentials {
  email: string;
  password: string;
}
interface IAuthenticationContextData {
  user: object;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

export type {
  IAuthenticationData,
  ISignInCredentials,
  IAuthenticationContextData,
};
