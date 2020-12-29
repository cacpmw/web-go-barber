interface User {
  name: string;
  email: string;
  id: string;
  avatarUrl: string;
}
interface IAuthenticationData {
  token: string;
  user: User;
}

interface ISignInCredentials {
  email: string;
  password: string;
}
interface IAuthenticationContextData {
  user: User;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
  updateUserData(user: User): void;
}

export type {
  IAuthenticationData,
  ISignInCredentials,
  IAuthenticationContextData,
  User,
};
