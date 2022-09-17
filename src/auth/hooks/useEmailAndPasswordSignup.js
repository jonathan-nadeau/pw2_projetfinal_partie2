import AuthService from '../service/AuthService';

const authService = new AuthService();

export const useEmailAndPasswordSignUp = () => {
  return authService.signUpWithEmailAndPassword.bind(authService);
};
