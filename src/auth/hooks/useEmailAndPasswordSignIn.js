import AuthService from '../service/AuthService';

const authService = new AuthService();

export const useEmailAndPasswordSignIn = () => {
  return authService.signInWithEmailAndPassword.bind(authService);
};
