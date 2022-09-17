import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('This field is required')
    .email('You must enter a valid email address'),
  password: Yup.string()
    .required('This field is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  passwordConfirmation: Yup.string()
    .required('This field is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default validationSchema;
