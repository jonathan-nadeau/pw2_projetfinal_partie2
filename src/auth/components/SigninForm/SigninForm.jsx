import { useEmailAndPasswordSignIn } from '../../hooks/index';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import {
  INVALID_EMAIL_ON_SIGNIN,
  WRONG_PASSWORD_ON_SIGNIN,
} from '../../../constants';
import { Link } from 'react-router-dom';
import SigninWithGoogleButton from '../SigninWithGoogleButton/SigninWithGoogleButton';

const initialValues = {
  email: '',
  password: '',
};

const SignupForm = () => {
  const [isEmailOrPasswordInvalid, setIsEmailOrPasswordInvalid] =
    useState(false);
  const emailAndPasswordSignIn = useEmailAndPasswordSignIn();

  const handleSubmit = async (values) => {
    const response = await emailAndPasswordSignIn(
      values.email,
      values.password
    );
    if (
      response === INVALID_EMAIL_ON_SIGNIN ||
      response === WRONG_PASSWORD_ON_SIGNIN
    ) {
      setIsEmailOrPasswordInvalid(true);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    validateOnChange: true,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          margin='dense'
          id='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          margin='normal'
          id='password'
          name='password'
          label='Password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          variant='contained'
          fullWidth
          type='submit'
          sx={{ marginBottom: '1rem' }}
        >
          Sign In
        </Button>
      </form>
      <SigninWithGoogleButton />
      {isEmailOrPasswordInvalid ? (
        <Alert severity='error' sx={{ marginTop: '1rem' }}>
          You entered a wrong email or password. If you don't have an account,
          please <Link to='/signup'>create your profile</Link> or try again.
        </Alert>
      ) : null}
    </>
  );
};

export default SignupForm;
