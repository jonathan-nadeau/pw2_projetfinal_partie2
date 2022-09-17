import GoogleIcon from '@mui/icons-material/Google';
import { Button, Alert } from '@mui/material';
import {
  POPUP_BLOCKED_ON_SIGNINWITHPOPUP,
  POPUP_CLOSED_BY_USER_ON_SIGNINWITHPOPUP,
} from '../../../constants';
import { useGoogleSignIn } from '../../hooks';
import { useState } from 'react';

const SigninWithGoogleButton = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const googleSignin = useGoogleSignIn();

  const handleClick = async () => {
    const response = await googleSignin();
    switch (response) {
      case POPUP_BLOCKED_ON_SIGNINWITHPOPUP:
        setErrorMessage(
          'Please enable popups in your browser to sign in with Google'
        );
        break;
      case POPUP_CLOSED_BY_USER_ON_SIGNINWITHPOPUP:
        setErrorMessage("Don't close popup to sign in with Google");
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Button
        variant='contained'
        startIcon={<GoogleIcon />}
        fullWidth
        onClick={handleClick}
        sx={{ marginBottom: '1rem' }}
      >
        Sign In with Google
      </Button>
      {errorMessage ? <Alert severity='warning'>{errorMessage}</Alert> : null}
    </>
  );
};

export default SigninWithGoogleButton;
