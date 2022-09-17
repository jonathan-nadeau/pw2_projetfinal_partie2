import { Container, Typography, Box } from '@mui/material';
import SignupForm from '../../auth/components/SignupForm/SignupForm';

const Signup = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component='div' sx={{ width: '50%' }}>
        <Typography component='h1' variant='h4' gutterBottom>
          Sign Up
        </Typography>
        <SignupForm />
      </Box>
    </Container>
  );
};

export default Signup;
