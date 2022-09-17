import { useEmailAndPasswordSignUp } from '../../hooks/index';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { TextField, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { EMAIL_ALREADY_IN_USE_ON_SIGNUP } from '../../../constants';
import { Link } from 'react-router-dom';
import SigninWithGoogleButton from '../SigninWithGoogleButton/SigninWithGoogleButton';

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

const SignupForm = () => {
  const [emailIsAlreadyInUse, setEmailIsAlreadyInUse] = useState(false);
  const emailAndPasswordSignUp = useEmailAndPasswordSignUp();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const response = await emailAndPasswordSignUp(
        values.email,
        values.password
      );
      if (response === EMAIL_ALREADY_IN_USE_ON_SIGNUP) {
        setEmailIsAlreadyInUse(true);
      }
    },
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
        <TextField
          fullWidth
          margin='normal'
          id='passwordConfirmation'
          name='passwordConfirmation'
          label='Confirm your password'
          type='password'
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordConfirmation &&
            Boolean(formik.errors.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
        />
        <Button
          variant='contained'
          fullWidth
          type='submit'
          sx={{ marginBottom: '1rem' }}
        >
          Sign Up
        </Button>
      </form>
      <SigninWithGoogleButton />
      {emailIsAlreadyInUse ? (
        <Alert severity='warning' sx={{ marginTop: '1rem' }}>
          This email is already being used. Please try again with another email
          or <Link to='/signin'>Sign In</Link> to your account.
        </Alert>
      ) : null}
    </>
  );
};

export default SignupForm;
