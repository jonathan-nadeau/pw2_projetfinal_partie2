import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().required('This field is required'),
  password: Yup.string().required('This field is required'),
});

export default validationSchema;
