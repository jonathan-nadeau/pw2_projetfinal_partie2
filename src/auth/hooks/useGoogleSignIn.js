import AuthService from '../service/AuthService';

const authService = new AuthService();

export const useGoogleSignIn = () => {
  return authService.signInWithGoogle.bind(authService);
};
