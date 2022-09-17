import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  EMAIL_ALREADY_IN_USE_ON_SIGNUP,
  INVALID_EMAIL_ON_SIGNIN,
  WRONG_PASSWORD_ON_SIGNIN,
  POPUP_BLOCKED_ON_SIGNINWITHPOPUP,
  POPUP_CLOSED_BY_USER_ON_SIGNINWITHPOPUP,
} from '../../constants/';

class AuthService {
  // Firebase configs
  firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(this.app);

  // Get the user connected
  onAuthChanged(callback) {
    onAuthStateChanged(this.auth, callback);
  }

  // Create user with email and password
  async signUpWithEmailAndPassword(email, password) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
    } catch ({ code }) {
      if (code === EMAIL_ALREADY_IN_USE_ON_SIGNUP) {
        return EMAIL_ALREADY_IN_USE_ON_SIGNUP;
      }
    }
  }

  // Sign in with email and password
  async signInWithEmailAndPassword(email, password) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      switch (error.code) {
        case INVALID_EMAIL_ON_SIGNIN:
          return INVALID_EMAIL_ON_SIGNIN;
        case WRONG_PASSWORD_ON_SIGNIN:
          return WRONG_PASSWORD_ON_SIGNIN;

        default:
          break;
      }
    }
  }

  // Sign in with Google
  async signInWithGoogle() {
    try {
      await signInWithPopup(this.auth, new GoogleAuthProvider());
    } catch (error) {
      switch (error.code) {
        case POPUP_BLOCKED_ON_SIGNINWITHPOPUP:
          return POPUP_BLOCKED_ON_SIGNINWITHPOPUP;
        case POPUP_CLOSED_BY_USER_ON_SIGNINWITHPOPUP:
          return POPUP_CLOSED_BY_USER_ON_SIGNINWITHPOPUP;
        default:
          break;
      }
    }
  }

  // Logout
  async logout() {
    await signOut(this.auth);
  }
}

export default AuthService;
